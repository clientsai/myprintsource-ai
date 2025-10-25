import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const { name, email, password } = registerSchema.parse(body)

    // Create username from email
    const username = email
      .split('@')[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')

    // Add timestamp to ensure uniqueness
    const uniqueUsername = `${username}${Date.now().toString().slice(-4)}`

    // Return demo user profile
    const profile = {
      id: 'demo-user-' + Date.now(),
      email,
      name,
      username: uniqueUsername,
      booking_duration: 30,
      buffer_time: 0,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json({
      user: profile,
      message: 'Registration successful! Welcome to MyPrintSource AI.',
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
