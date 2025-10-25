import { NextRequest, NextResponse } from 'next/server'

// Demo booking data
const demoBooking = {
  id: 'booking-1',
  user_id: 'demo-user-123',
  guest_name: 'Sarah Johnson',
  guest_email: 'sarah@example.com',
  title: 'Business Card AI Optimization',
  status: 'confirmed',
  start_time: new Date(Date.now() + 86400000).toISOString(),
  end_time: new Date(Date.now() + 90000000).toISOString(),
  notes: '500 business cards, full color both sides',
  created_at: new Date().toISOString(),
}

// GET /api/bookings/[id] - Get a specific booking (public for confirmation page)
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Return demo booking with the requested ID
    return NextResponse.json({
      booking: {
        ...demoBooking,
        id: params.id,
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/bookings/[id] - Cancel a booking
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const cancelledBooking = {
      ...demoBooking,
      id: params.id,
      status: 'cancelled',
    }

    return NextResponse.json({
      booking: cancelledBooking,
      message: 'Booking cancelled successfully',
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
