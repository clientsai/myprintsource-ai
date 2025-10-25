import { NextRequest, NextResponse } from 'next/server'
import { parseISO, format, addMinutes, getDay, startOfDay, endOfDay } from 'date-fns'

// Demo data
const demoUser = {
  id: 'demo-user-123',
  username: 'demo-user',
  booking_duration: 30,
  buffer_time: 0,
  timezone: 'America/New_York',
}

const demoAvailabilities = [
  { user_id: 'demo-user-123', day_of_week: 1, start_time: '09:00', end_time: '17:00', is_active: true },
  { user_id: 'demo-user-123', day_of_week: 2, start_time: '09:00', end_time: '17:00', is_active: true },
  { user_id: 'demo-user-123', day_of_week: 3, start_time: '09:00', end_time: '17:00', is_active: true },
  { user_id: 'demo-user-123', day_of_week: 4, start_time: '09:00', end_time: '17:00', is_active: true },
  { user_id: 'demo-user-123', day_of_week: 5, start_time: '09:00', end_time: '17:00', is_active: true },
]

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

    // Get user's availability for this day of week
    const availabilities = demoAvailabilities.filter(
      (a) => a.day_of_week === dayOfWeek && a.is_active
    )

    if (availabilities.length === 0) {
      return NextResponse.json({ slots: [] })
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
    const slots: { time: string; available: boolean }[] = []
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
