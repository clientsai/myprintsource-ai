import { NextRequest, NextResponse } from 'next/server'
import { validateAPIKey } from '@/lib/api-auth'
import { parseISO, format, addMinutes, getDay } from 'date-fns'
import { z } from 'zod'

const slotsSchema = z.object({
  user_id: z.string(),
  date: z.string(),
})

// Demo data
const demoUser = {
  id: 'demo-user-123',
  booking_duration: 30,
  buffer_time: 0,
  timezone: 'America/New_York',
}

const demoAvailabilities = [
  { day_of_week: 1, start_time: '09:00', end_time: '17:00', is_active: true },
  { day_of_week: 2, start_time: '09:00', end_time: '17:00', is_active: true },
  { day_of_week: 3, start_time: '09:00', end_time: '17:00', is_active: true },
  { day_of_week: 4, start_time: '09:00', end_time: '17:00', is_active: true },
  { day_of_week: 5, start_time: '09:00', end_time: '17:00', is_active: true },
]

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

    // Get user's availability for this day of week
    const availabilities = demoAvailabilities.filter(
      (a) => a.day_of_week === dayOfWeek && a.is_active
    )

    if (availabilities.length === 0) {
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

    // Demo bookings (some times already booked)
    const bookings = [
      {
        start_time: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 0).toISOString(),
        end_time: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 30).toISOString(),
      },
      {
        start_time: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 0).toISOString(),
        end_time: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 30).toISOString(),
      },
    ]

    // Generate time slots
    const slots: any[] = []
    const slotDuration = demoUser.booking_duration || 30
    const bufferTime = demoUser.buffer_time || 0

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
