import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// GET /api/users/[username] - Get user by username (public)
export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username.toLowerCase()

    // Get user profile
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, name, username, avatar_url, booking_duration, buffer_time, timezone')
      .eq('username', username)
      .single()

    if (error || !user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ user })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}