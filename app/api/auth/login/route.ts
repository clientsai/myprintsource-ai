import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { cookies } from 'next/headers'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const { email, password } = loginSchema.parse(body)

    // Demo user profile
    const profile = {
      id: 'demo-user-123',
      email: email,
      full_name: 'Demo User',
      username: 'demo-user',
      timezone: 'America/New_York',
      booking_duration: 30,
      buffer_time: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Set session cookies
    const cookieStore = await cookies()
    cookieStore.set('access-token', 'demo-access-token-' + Date.now(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    cookieStore.set('refresh-token', 'demo-refresh-token-' + Date.now(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })

    return NextResponse.json({
      user: profile,
      message: 'Login successful',
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
