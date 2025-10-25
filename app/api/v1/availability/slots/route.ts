import { NextRequest, NextResponse } from 'next/server'
import { validateAPIKey } from '@/lib/api-auth'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { parseISO, format, addMinutes, getDay, startOfDay, endOfDay } from 'date-fns'
import { z } from 'zod'

const slotsSchema = z.object({
  user_id: z.string().uuid(),
  date: z.string(),
})

// POST /api/v1/availability/slots - Get available slots for a user on a date
export async function POST(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { user_id, date: dateStr } = slotsSchema.parse(body)

    const date = parseISO(dateStr)
    const dayOfWeek = getDay(date)

    // Get user
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', user_id)
      .single()

    if (userError || !user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get user's availability for this day of week
    const { data: availabilities, error: availError } = await supabaseAdmin
      .from('availabilities')
      .select('*')
      .eq('user_id', user_id)
      .eq('day_of_week', dayOfWeek)
      .eq('is_active', true)

    if (availError) {
      return NextResponse.json({ error: availError.message }, { status: 400 })
    }

    if (!availabilities || availabilities.length === 0) {
      return NextResponse.json({
        success: true,
        data: [],
        meta: {
          date: dateStr,
          user_id,
          day_of_week: dayOfWeek,
        },
      })
    }

    // Get existing bookings for this date
    const startOfDayStr = startOfDay(date).toISOString()
    const endOfDayStr = endOfDay(date).toISOString()

    const { data: bookings, error: bookingsError } = await supabaseAdmin
      .from('bookings')
      .select('start_time, end_time')
      .eq('user_id', user_id)
      .eq('status', 'confirmed')
      .gte('start_time', startOfDayStr)
      .lte('start_time', endOfDayStr)

    if (bookingsError) {
      return NextResponse.json({ error: bookingsError.message }, { status: 400 })
    }

    // Generate time slots
    const slots: any[] = []
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
            start_time: slotStart.toISOString(),
            end_time: slotEnd.toISOString(),
            time: format(slotStart, 'HH:mm'),
            display_time: format(slotStart, 'h:mm a'),
            available: !isPast && !hasConflict,
            duration_minutes: slotDuration,
          })
        }

        currentTime = addMinutes(currentTime, slotDuration)
      }
    }

    return NextResponse.json({
      success: true,
      data: slots,
      meta: {
        date: dateStr,
        user_id,
        total_slots: slots.length,
        available_slots: slots.filter(s => s.available).length,
      },
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: `Validation error: ${error.errors[0].message}`,
      }, { status: 400 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}