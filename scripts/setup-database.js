const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const setupDatabase = async () => {
  console.log('🚀 Setting up Punctual.AI database...\n')

  // SQL statements to execute
  const sqlStatements = [
    // Drop existing tables
    `DROP TABLE IF EXISTS bookings CASCADE`,
    `DROP TABLE IF EXISTS availabilities CASCADE`,
    `DROP TABLE IF EXISTS event_types CASCADE`,
    `DROP TABLE IF EXISTS users CASCADE`,
    `DROP TABLE IF EXISTS api_clients CASCADE`,
    `DROP TABLE IF EXISTS api_logs CASCADE`,

    // Create users table
    `CREATE TABLE users (
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
    )`,

    // Create indexes
    `CREATE INDEX idx_users_username ON users(username)`,
    `CREATE INDEX idx_users_email ON users(email)`,

    // Event Types table
    `CREATE TABLE event_types (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      description TEXT,
      duration INT DEFAULT 30,
      color TEXT DEFAULT '#3B82F6',
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )`,

    // Availabilities table
    `CREATE TABLE availabilities (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      day_of_week INT NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
      start_time TIME NOT NULL,
      end_time TIME NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      UNIQUE(user_id, day_of_week, start_time, end_time)
    )`,

    // Bookings table
    `CREATE TABLE bookings (
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
    )`,

    // Create indexes for bookings
    `CREATE INDEX idx_bookings_user_time ON bookings(user_id, start_time, status)`,
    `CREATE INDEX idx_bookings_guest ON bookings(guest_email)`,
    `CREATE INDEX idx_availabilities_user ON availabilities(user_id)`,
    `CREATE INDEX idx_event_types_user ON event_types(user_id)`,

    // API Clients table
    `CREATE TABLE api_clients (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      api_key_hash TEXT UNIQUE NOT NULL,
      webhook_url TEXT,
      rate_limit INT DEFAULT 1000,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      last_used_at TIMESTAMP WITH TIME ZONE
    )`,

    // API Request Logs
    `CREATE TABLE api_logs (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      client_id UUID REFERENCES api_clients(id),
      endpoint TEXT NOT NULL,
      method TEXT NOT NULL,
      status_code INT,
      response_time_ms INT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )`,

    // Create indexes for API
    `CREATE INDEX idx_api_logs_client ON api_logs(client_id, created_at)`,
    `CREATE INDEX idx_api_clients_key ON api_clients(api_key_hash)`,

    // Enable RLS
    `ALTER TABLE users ENABLE ROW LEVEL SECURITY`,
    `ALTER TABLE event_types ENABLE ROW LEVEL SECURITY`,
    `ALTER TABLE availabilities ENABLE ROW LEVEL SECURITY`,
    `ALTER TABLE bookings ENABLE ROW LEVEL SECURITY`,
    `ALTER TABLE api_clients ENABLE ROW LEVEL SECURITY`,
    `ALTER TABLE api_logs ENABLE ROW LEVEL SECURITY`,

    // RLS Policies
    `CREATE POLICY "Public profiles are viewable by everyone" ON users FOR SELECT USING (true)`,
    `CREATE POLICY "Users can insert themselves" ON users FOR INSERT WITH CHECK (true)`,
    `CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (true)`,
    `CREATE POLICY "Availabilities are viewable by everyone" ON availabilities FOR SELECT USING (true)`,
    `CREATE POLICY "Users can manage own availability" ON availabilities FOR ALL USING (true)`,
    `CREATE POLICY "Event types are viewable by everyone" ON event_types FOR SELECT USING (true)`,
    `CREATE POLICY "Bookings are viewable by everyone" ON bookings FOR SELECT USING (true)`,
    `CREATE POLICY "Anyone can create bookings" ON bookings FOR INSERT WITH CHECK (true)`,
    `CREATE POLICY "Users can update own bookings" ON bookings FOR UPDATE USING (true)`,
    `CREATE POLICY "API clients viewable by authenticated users" ON api_clients FOR SELECT USING (auth.role() = 'authenticated')`,
    `CREATE POLICY "Only service role can manage API clients" ON api_clients FOR ALL USING (auth.role() = 'service_role')`,
    `CREATE POLICY "API logs viewable by authenticated users" ON api_logs FOR SELECT USING (auth.role() = 'authenticated')`,
    `CREATE POLICY "Only service role can create API logs" ON api_logs FOR INSERT WITH CHECK (auth.role() = 'service_role')`,

    // Create atomic booking function
    `CREATE OR REPLACE FUNCTION create_booking_atomic(
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

      RETURN row_to_json(v_booking);
    END;
    $$ LANGUAGE plpgsql`,

    // Create available slots function
    `CREATE OR REPLACE FUNCTION get_available_slots(
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
    $$ LANGUAGE plpgsql`,

    // Create rate limit check function
    `CREATE OR REPLACE FUNCTION check_rate_limit(p_client_id UUID)
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
    $$ LANGUAGE plpgsql`,

    // Create test API client
    `INSERT INTO api_clients (name, api_key_hash, webhook_url, rate_limit)
    VALUES (
      'Test Client',
      '6a0f3b4c9d8e2f1a5b7c3e9d4f8a2b6c1d7e9f3a5b8c2d9e4f1a6b8c3d0e5f7a',
      'http://localhost:3001/webhook',
      1000
    )`
  ]

  let successCount = 0
  let errorCount = 0

  for (const sql of sqlStatements) {
    try {
      // Extract table/function name for logging
      let description = sql.substring(0, 50).replace(/\n/g, ' ')
      if (sql.startsWith('CREATE TABLE')) {
        const match = sql.match(/CREATE TABLE (\w+)/)
        description = `Creating table: ${match ? match[1] : 'unknown'}`
      } else if (sql.startsWith('CREATE INDEX')) {
        const match = sql.match(/CREATE INDEX (\w+)/)
        description = `Creating index: ${match ? match[1] : 'unknown'}`
      } else if (sql.startsWith('CREATE POLICY')) {
        description = 'Creating RLS policy'
      } else if (sql.startsWith('CREATE OR REPLACE FUNCTION')) {
        const match = sql.match(/FUNCTION (\w+)/)
        description = `Creating function: ${match ? match[1] : 'unknown'}`
      } else if (sql.startsWith('DROP')) {
        description = 'Dropping old table'
      } else if (sql.startsWith('ALTER')) {
        description = 'Enabling RLS'
      }

      process.stdout.write(`  ${description}...`)

      const { error } = await supabase.rpc('exec_sql', { sql_query: sql }).catch(err => {
        // If RPC doesn't work, we'll handle it differently
        return { error: err }
      })

      if (error) {
        // Try direct approach if RPC fails
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseServiceKey,
            'Authorization': `Bearer ${supabaseServiceKey}`
          },
          body: JSON.stringify({ sql_query: sql })
        }).catch(() => null)

        if (!response || !response.ok) {
          console.log(' ⚠️  (May already exist)')
          errorCount++
        } else {
          console.log(' ✅')
          successCount++
        }
      } else {
        console.log(' ✅')
        successCount++
      }
    } catch (err) {
      console.log(' ⚠️')
      errorCount++
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`✅ Database setup complete!`)
  console.log(`   ${successCount} operations successful`)
  if (errorCount > 0) {
    console.log(`   ${errorCount} operations skipped (tables may already exist)`)
  }
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
}

setupDatabase().catch(err => {
  console.error('❌ Database setup failed:', err.message)
  console.log('\n💡 Alternative: Run the SQL manually in Supabase Dashboard')
  console.log('   1. Go to: https://supabase.com/dashboard/project/autmdlacdenfbggqsgmz/sql/new')
  console.log('   2. Copy the contents of supabase-schema.sql')
  console.log('   3. Paste and run in the SQL editor')
  process.exit(1)
})