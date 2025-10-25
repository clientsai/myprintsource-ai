import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { parseISO, format, addMinutes, getDay, startOfDay, endOfDay } from 'date-fns'

// GET /api/users/[username]/slots - Get available time slots for a date (public)
export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const searchParams = req.nextUrl.searchParams
    const dateStr = searchParams.get('date')

    if (!dateStr) {
      return NextResponse.json({ error: 'Date parameter required' }, { status: 400 })
    }

    const username = params.username.toLowerCase()
    const date = parseISO(dateStr)
    const dayOfWeek = getDay(date)

    // Get user
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('username', username)
      .single()

    if (userError || !user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get user's availability for this day of week
    const { data: availabilities, error: availError } = await supabaseAdmin
      .from('availabilities')
      .select('*')
      .eq('user_id', user.id)
      .eq('day_of_week', dayOfWeek)
      .eq('is_active', true)

    if (availError) {
      return NextResponse.json({ error: availError.message }, { status: 400 })
    }

    if (!availabilities || availabilities.length === 0) {
      return NextResponse.json({ slots: [] })
    }

    // Get existing bookings for this date
    const startOfDayStr = startOfDay(date).toISOString()
    const endOfDayStr = endOfDay(date).toISOString()

    const { data: bookings, error: bookingsError } = await supabaseAdmin
      .from('bookings')
      .select('start_time, end_time')
      .eq('user_id', user.id)
      .eq('status', 'confirmed')
      .gte('start_time', startOfDayStr)
      .lte('start_time', endOfDayStr)

    if (bookingsError) {
      return NextResponse.json({ error: bookingsError.message }, { status: 400 })
    }

    // Generate time slots
    const slots: { time: string; available: boolean }[] = []
    const slotDuration = user.booking_duration || 30
    const bufferTime = user.buffer_time || 0

    for (const availability of availabilities) {
      const [startHour, startMin] = availability.start_time.split(':').map(Number)
      const [endHour, endMin] = availability.end_time.split(':').map(Number)

      let currentTime = new Date(date)
      currentTime.setHours(startHour, startMin, 0, 0)

      const endTime = new Date(date)
      endTime.setHours(endHour, endMin, 0, 0)

      while (currentTime < endTime) {
        const slotStart = new Date(currentTime)
        const slotEnd = addMinutes(slotStart, slotDuration)

        // Check if slot is in the past
        const now = new Date()
        const isPast = slotStart < now

        // Check if slot conflicts with existing bookings
        const hasConflict = bookings?.some(booking => {
          const bookingStart = parseISO(booking.start_time)
          const bookingEnd = parseISO(booking.end_time)

          // Add buffer time to booking end
          const bufferedEnd = addMinutes(bookingEnd, bufferTime)

          return (
            (slotStart >= bookingStart && slotStart < bufferedEnd) ||
            (slotEnd > bookingStart && slotEnd <= bufferedEnd) ||
            (slotStart <= bookingStart && slotEnd >= bufferedEnd)
          )
        })

        // Only add slots that are within availability window
        if (slotEnd <= endTime) {
          slots.push({
            time: format(slotStart, 'HH:mm'),
            available: !isPast && !hasConflict,
          })
        }

        currentTime = addMinutes(currentTime, slotDuration)
      }
    }

    return NextResponse.json({ slots })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}