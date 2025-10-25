import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
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

    // Create auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    // Create username from email
    const username = email
      .split('@')[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')

    // Add timestamp to ensure uniqueness
    const uniqueUsername = `${username}${Date.now().toString().slice(-4)}`

    // Create user profile
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        name,
        username: uniqueUsername,
        booking_duration: 30,
        buffer_time: 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
      .select()
      .single()

    if (profileError) {
      // Clean up auth user if profile creation fails
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      return NextResponse.json({ error: profileError.message }, { status: 400 })
    }

    // Send welcome email (implement with Resend later)
    // await sendWelcomeEmail(email, name)

    return NextResponse.json({
      user: profile,
      message: 'Registration successful! Please check your email to confirm your account.',
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}