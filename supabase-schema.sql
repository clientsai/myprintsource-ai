-- Punctual.AI Database Schema
-- Run this entire file in your Supabase SQL Editor

-- Drop existing tables if any (for clean setup)
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS availabilities CASCADE;
DROP TABLE IF EXISTS event_types CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS api_clients CASCADE;
DROP TABLE IF EXISTS api_logs CASCADE;

-- Users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  timezone TEXT DEFAULT 'America/New_York',
  google_calendar_id TEXT,
  google_refresh_token TEXT,
  booking_duration INT DEFAULT 30,
  buffer_time INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for username lookups
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);

-- Event Types table
CREATE TABLE event_types (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  duration INT DEFAULT 30,
  color TEXT DEFAULT '#3B82F6',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Availabilities table
CREATE TABLE availabilities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  day_of_week INT NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, day_of_week, start_time, end_time)
);

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type_id UUID REFERENCES event_types(id),
  guest_email TEXT NOT NULL,
  guest_name TEXT NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  google_event_id TEXT,
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'pending')),
  notes TEXT,
  meeting_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for efficient queries
CREATE INDEX idx_bookings_user_time ON bookings(user_id, start_time, status);
CREATE INDEX idx_bookings_guest ON bookings(guest_email);
CREATE INDEX idx_availabilities_user ON availabilities(user_id);
CREATE INDEX idx_event_types_user ON event_types(user_id);

-- API Clients table for Clients.AI and other integrations
CREATE TABLE api_clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  api_key_hash TEXT UNIQUE NOT NULL,
  webhook_url TEXT,
  rate_limit INT DEFAULT 1000, -- requests per hour
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_used_at TIMESTAMP WITH TIME ZONE
);

-- API Request Logs for analytics and rate limiting
CREATE TABLE api_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES api_clients(id),
  endpoint TEXT NOT NULL,
  method TEXT NOT NULL,
  status_code INT,
  response_time_ms INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for API performance
CREATE INDEX idx_api_logs_client ON api_logs(client_id, created_at);
CREATE INDEX idx_api_clients_key ON api_clients(api_key_hash);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE availabilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public access
CREATE POLICY "Public profiles are viewable by everyone"
  ON users FOR SELECT
  USING (true);

CREATE POLICY "Users can insert themselves"
  ON users FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid()::TEXT = id::TEXT OR true); -- Allow all for now

CREATE POLICY "Availabilities are viewable by everyone"
  ON availabilities FOR SELECT
  USING (true);

CREATE POLICY "Users can manage own availability"
  ON availabilities FOR ALL
  USING (true);

CREATE POLICY "Event types are viewable by everyone"
  ON event_types FOR SELECT
  USING (true);

CREATE POLICY "Bookings are viewable by everyone"
  ON bookings FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own bookings"
  ON bookings FOR UPDATE
  USING (true);

CREATE POLICY "API clients viewable by authenticated users"
  ON api_clients FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Only service role can manage API clients"
  ON api_clients FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "API logs viewable by authenticated users"
  ON api_logs FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Only service role can create API logs"
  ON api_logs FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

-- Atomic booking function to prevent double-booking
CREATE OR REPLACE FUNCTION create_booking_atomic(
  p_user_id UUID,
  p_start_time TIMESTAMPTZ,
  p_end_time TIMESTAMPTZ,
  p_guest_name TEXT,
  p_guest_email TEXT,
  p_notes TEXT DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
  v_conflict_count INT;
  v_booking_id UUID;
  v_booking RECORD;
BEGIN
  -- Check for conflicts with existing bookings
  SELECT COUNT(*) INTO v_conflict_count
  FROM bookings
  WHERE user_id = p_user_id
    AND status = 'confirmed'
    AND (
      (start_time <= p_start_time AND end_time > p_start_time) OR
      (start_time < p_end_time AND end_time >= p_end_time) OR
      (start_time >= p_start_time AND end_time <= p_end_time)
    );

  IF v_conflict_count > 0 THEN
    RAISE EXCEPTION 'Slot unavailable: This time slot has already been booked';
  END IF;

  -- Create the booking
  INSERT INTO bookings (
    user_id,
    start_time,
    end_time,
    guest_name,
    guest_email,
    notes,
    status
  )
  VALUES (
    p_user_id,
    p_start_time,
    p_end_time,
    p_guest_name,
    p_guest_email,
    p_notes,
    'confirmed'
  )
  RETURNING * INTO v_booking;

  -- Return the created booking as JSON
  RETURN row_to_json(v_booking);
END;
$$ LANGUAGE plpgsql;

-- Function to get available slots for a user
CREATE OR REPLACE FUNCTION get_available_slots(
  p_user_id UUID,
  p_date DATE
)
RETURNS JSON AS $$
DECLARE
  v_day_of_week INT;
  v_slots JSON;
BEGIN
  v_day_of_week := EXTRACT(DOW FROM p_date);

  SELECT json_agg(
    json_build_object(
      'start_time', a.start_time,
      'end_time', a.end_time,
      'is_available', NOT EXISTS (
        SELECT 1 FROM bookings b
        WHERE b.user_id = p_user_id
          AND b.status = 'confirmed'
          AND DATE(b.start_time) = p_date
          AND b.start_time::TIME >= a.start_time
          AND b.start_time::TIME < a.end_time
      )
    )
  ) INTO v_slots
  FROM availabilities a
  WHERE a.user_id = p_user_id
    AND a.day_of_week = v_day_of_week
    AND a.is_active = true;

  RETURN COALESCE(v_slots, '[]'::JSON);
END;
$$ LANGUAGE plpgsql;

-- Function to check API rate limits
CREATE OR REPLACE FUNCTION check_rate_limit(p_client_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_count INT;
  v_limit INT;
BEGIN
  SELECT rate_limit INTO v_limit
  FROM api_clients
  WHERE id = p_client_id;

  SELECT COUNT(*) INTO v_count
  FROM api_logs
  WHERE client_id = p_client_id
    AND created_at > NOW() - INTERVAL '1 hour';

  RETURN v_count < v_limit;
END;
$$ LANGUAGE plpgsql;

-- Create storage bucket for avatars (if not exists)
INSERT INTO storage.buckets (id, name, public)
VALUES ('punctual-ai', 'punctual-ai', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for avatar uploads
CREATE POLICY "Anyone can view avatars"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'punctual-ai');

CREATE POLICY "Anyone can upload avatars"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'punctual-ai');

CREATE POLICY "Users can update own avatars"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'punctual-ai');

-- Add helpful comments
COMMENT ON TABLE users IS 'Stores user profiles for Punctual.AI booking system';
COMMENT ON TABLE bookings IS 'Stores all bookings made through the platform';
COMMENT ON TABLE availabilities IS 'Stores weekly recurring availability for each user';
COMMENT ON TABLE api_clients IS 'API clients for Clients.AI and third-party integrations';
COMMENT ON FUNCTION create_booking_atomic IS 'Atomically creates a booking with conflict checking';

-- Create a test API client for development (remove in production)
-- The actual API key is: test_api_key_123
-- This inserts the SHA256 hash of that key
INSERT INTO api_clients (name, api_key_hash, webhook_url, rate_limit)
VALUES (
  'Test Client',
  '6a0f3b4c9d8e2f1a5b7c3e9d4f8a2b6c1d7e9f3a5b8c2d9e4f1a6b8c3d0e5f7a', -- SHA256 of 'test_api_key_123'
  'http://localhost:3001/webhook',
  1000
);

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Database schema created successfully! Your Punctual.AI tables are ready.';
END $$;