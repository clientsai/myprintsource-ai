import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { cookies } from 'next/headers'
import { z } from 'zod'

const createBookingSchema = z.object({
  user_id: z.string().uuid(),
  guest_name: z.string().min(1),
  guest_email: z.string().email(),
  start_time: z.string(),
  end_time: z.string(),
  notes: z.string().optional(),
})

// GET /api/bookings - Get user's bookings
export async function GET(req: NextRequest) {
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

    // Get bookings
    const { data: bookings, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('user_id', user.id)
      .order('start_time', { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ bookings: bookings || [] })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

// POST /api/bookings - Create a booking (public endpoint for guests)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { user_id, start_time, end_time, guest_name, guest_email, notes } = createBookingSchema.parse(body)

    // Use atomic booking function to prevent double-booking
    const { data, error } = await supabaseAdmin.rpc('create_booking_atomic', {
      p_user_id: user_id,
      p_start_time: start_time,
      p_end_time: end_time,
      p_guest_name: guest_name,
      p_guest_email: guest_email,
      p_notes: notes || null,
    })

    if (error) {
      if (error.message.includes('Slot unavailable')) {
        return NextResponse.json({ error: 'This time slot is no longer available' }, { status: 409 })
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Send confirmation emails (implement with Resend later)
    // await sendBookingConfirmationEmail(guest_email, data)
    // await sendHostNotificationEmail(user_id, data)

    return NextResponse.json({ booking: data })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}