import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { z } from 'zod'

const createBookingSchema = z.object({
  user_id: z.string(),
  guest_name: z.string().min(1),
  guest_email: z.string().email(),
  start_time: z.string(),
  end_time: z.string(),
  notes: z.string().optional(),
})

// Demo bookings data
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
  {
    id: 'booking-3',
    user_id: 'demo-user-123',
    guest_name: 'Emma Wilson',
    guest_email: 'emma@startup.io',
    title: 'Poster Design & Print',
    status: 'confirmed',
    start_time: new Date(Date.now() + 259200000).toISOString(),
    end_time: new Date(Date.now() + 262800000).toISOString(),
    notes: '10 large format posters - 24x36',
    created_at: new Date(Date.now() - 43200000).toISOString(),
  },
]

// GET /api/bookings - Get user's bookings
export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access-token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json({ bookings: demoBookings })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

// POST /api/bookings - Create a booking (public endpoint for guests)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { user_id, start_time, end_time, guest_name, guest_email, notes } = createBookingSchema.parse(body)

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

    return NextResponse.json({ booking: newBooking })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
