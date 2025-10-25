export interface User {
  id: string
  email: string
  name: string
  username: string
  avatar_url?: string
  timezone?: string
  google_calendar_id?: string
  google_refresh_token?: string
  booking_duration?: number
  buffer_time?: number
  created_at?: string
  updated_at?: string
}

export interface EventType {
  id: string
  user_id: string
  title: string
  description?: string
  duration: number
  color?: string
  is_active: boolean
  created_at?: string
}

export interface Availability {
  id: string
  user_id: string
  day_of_week: number // 0 = Sunday, 6 = Saturday
  start_time: string // HH:mm format
  end_time: string // HH:mm format
  is_active: boolean
  created_at?: string
}

export interface Booking {
  id: string
  user_id: string
  event_type_id?: string
  guest_email: string
  guest_name: string
  start_time: string // ISO 8601
  end_time: string // ISO 8601
  google_event_id?: string
  status: 'confirmed' | 'cancelled' | 'pending'
  notes?: string
  meeting_link?: string
  created_at?: string
}

export interface ApiClient {
  id: string
  name: string
  api_key_hash: string
  webhook_url?: string
  rate_limit: number
  is_active: boolean
  created_at?: string
  last_used_at?: string
}