import { NextRequest, NextResponse } from 'next/server'
import { validateAPIKey, sendWebhook } from '@/lib/api-auth'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { z } from 'zod'

const createBookingSchema = z.object({
  user_id: z.string().uuid(),
  guest_name: z.string().min(1),
  guest_email: z.string().email(),
  start_time: z.string(),
  end_time: z.string(),
  notes: z.string().optional(),
})

// GET /api/v1/bookings - List bookings with filters
export async function GET(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const status = searchParams.get('status') || 'confirmed'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = (page - 1) * limit

    // Build query
    let query = supabaseAdmin
      .from('bookings')
      .select('*', { count: 'exact' })
      .eq('status', status)

    if (userId) query = query.eq('user_id', userId)
    if (startDate) query = query.gte('start_time', startDate)
    if (endDate) query = query.lte('end_time', endDate)

    query = query
      .range(offset, offset + limit - 1)
      .order('start_time', { ascending: true })

    const { data, error, count } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      data,
      meta: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil((count || 0) / limit),
        filters: { userId, startDate, endDate, status },
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST /api/v1/bookings - Create a booking via API
export async function POST(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const body = await request.json()

    // Validate required fields
    const { user_id, guest_name, guest_email, start_time, end_time, notes } =
      createBookingSchema.parse(body)

    // Use atomic booking function
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
        return NextResponse.json({
          error: 'This time slot is already booked',
        }, { status: 409 })
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Send webhook if configured
    if (auth.client.webhook_url) {
      await sendWebhook(auth.client.webhook_url, {
        event: 'booking.created',
        data: data,
      })
    }

    return NextResponse.json({
      success: true,
      data,
      message: 'Booking created successfully',
    }, { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: `Validation error: ${error.errors[0].message}`,
      }, { status: 400 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}