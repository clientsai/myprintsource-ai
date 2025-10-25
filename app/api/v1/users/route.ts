import { NextRequest, NextResponse } from 'next/server'
import { validateAPIKey } from '@/lib/api-auth'
import { z } from 'zod'

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  username: z.string().min(3).optional(),
  timezone: z.string().optional(),
  booking_duration: z.number().min(15).max(180).optional(),
})

// Demo users data
const demoUsers = [
  {
    id: 'demo-user-123',
    email: 'demo@myprintsource.com',
    name: 'Demo User',
    username: 'demo-user',
    timezone: 'America/New_York',
    booking_duration: 30,
    buffer_time: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

// GET /api/v1/users - List all users
export async function GET(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    return NextResponse.json({
      success: true,
      data: demoUsers,
      meta: {
        page,
        limit,
        total: demoUsers.length,
        totalPages: 1,
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST /api/v1/users - Create a new user
export async function POST(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { email, name, username, timezone, booking_duration } = createUserSchema.parse(body)

    // Generate username if not provided
    const finalUsername = username || email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '') + Date.now().toString().slice(-4)

    // Generate a random password for demo
    const password = Math.random().toString(36).slice(-12) + 'Aa1!'

    const newUser = {
      id: 'user-' + Date.now(),
      email,
      name,
      username: finalUsername,
      timezone: timezone || 'America/New_York',
      booking_duration: booking_duration || 30,
      buffer_time: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: newUser,
      credentials: {
        email,
        password,
        booking_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://myprintsource.com'}/${finalUsername}`,
      },
    }, { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
