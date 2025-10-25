import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access-token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Return demo user profile
    const profile = {
      id: 'demo-user-123',
      email: 'demo@myprintsource.com',
      full_name: 'Demo User',
      username: 'demo-user',
      timezone: 'America/New_York',
      booking_duration: 30,
      buffer_time: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json({ user: profile })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
