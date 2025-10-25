import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// GET /api/bookings/[id] - Get a specific booking (public for confirmation page)
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data: booking, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    }

    return NextResponse.json({ booking })
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
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('id', params.id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ booking: data, message: 'Booking cancelled successfully' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}