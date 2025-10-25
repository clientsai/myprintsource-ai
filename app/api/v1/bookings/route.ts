import { NextRequest, NextResponse } from 'next/server'
import { validateAPIKey, sendWebhook } from '@/lib/api-auth'
import { z } from 'zod'

const createBookingSchema = z.object({
  user_id: z.string(),
  guest_name: z.string().min(1),
  guest_email: z.string().email(),
  start_time: z.string(),
  end_time: z.string(),
  notes: z.string().optional(),
})

// Demo bookings
const demoBookings = [
  {
    id: 'booking-1',
    user_id: 'demo-user-123',
    guest_name: 'Sarah Johnson',
    guest_email: 'sarah@example.com',
    title: 'Business Card AI Optimization',
    status: 'confirmed',
    start_time: new Date(Date.now() + 86400000).toISOString(),
    end_time: new Date(Date.now() + 90000000).toISOString(),
    notes: '500 business cards, full color both sides',
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'booking-2',
    user_id: 'demo-user-123',
    guest_name: 'Mike Chen',
    guest_email: 'mike@company.com',
    title: 'Brochure Print Project',
    status: 'pending',
    start_time: new Date(Date.now() + 172800000).toISOString(),
    end_time: new Date(Date.now() + 176400000).toISOString(),
    notes: '1000 tri-fold brochures',
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
]

// GET /api/v1/bookings - List bookings with filters
export async function GET(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status') || 'confirmed'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    // Filter demo bookings
    let filteredBookings = demoBookings
    if (userId) {
      filteredBookings = filteredBookings.filter(b => b.user_id === userId)
    }
    filteredBookings = filteredBookings.filter(b => b.status === status)

    return NextResponse.json({
      success: true,
      data: filteredBookings,
      meta: {
        page,
        limit,
        total: filteredBookings.length,
        totalPages: 1,
        filters: { userId, status },
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
    const { user_id, guest_name, guest_email, start_time, end_time, notes } = createBookingSchema.parse(body)

    const newBooking = {
      id: 'booking-' + Date.now(),
      user_id,
      guest_name,
      guest_email,
      title: 'New Print Project',
      status: 'pending',
      start_time,
      end_time,
      notes: notes || '',
      created_at: new Date().toISOString(),
    }

    // Send webhook if configured
    if (auth.client.webhook_url) {
      await sendWebhook(auth.client.webhook_url, {
        event: 'booking.created',
        data: newBooking,
      })
    }

    return NextResponse.json({
      success: true,
      data: newBooking,
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
