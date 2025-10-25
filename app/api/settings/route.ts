import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { cookies } from 'next/headers'
import { z } from 'zod'

const settingsSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  username: z.string().min(3),
  timezone: z.string(),
  booking_duration: z.number().min(15).max(180),
  buffer_time: z.number().min(0).max(60),
})

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access-token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token.value)
    if (userError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const body = await req.json()
    const { name, username, timezone, booking_duration, buffer_time } = settingsSchema.parse(body)

    // Update user profile
    const { data: updatedUser, error: updateError } = await supabaseAdmin
      .from('users')
      .update({
        name,
        username,
        timezone,
        booking_duration,
        buffer_time,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)
      .select()
      .single()

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 400 })
    }

    return NextResponse.json({ user: updatedUser })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}