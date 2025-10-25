import { NextRequest, NextResponse } from 'next/server'

// Demo user data
const demoUser = {
  id: 'demo-user-123',
  name: 'Demo User',
  username: 'demo-user',
  avatar_url: null,
  booking_duration: 30,
  buffer_time: 0,
  timezone: 'America/New_York',
}

// GET /api/users/[username] - Get user by username (public)
export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username.toLowerCase()

    // Return demo user for any username
    return NextResponse.json({
      user: {
        ...demoUser,
        username,
        name: 'MyPrintSource Demo',
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
