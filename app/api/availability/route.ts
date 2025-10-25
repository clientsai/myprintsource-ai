import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { z } from 'zod'

const availabilitySchema = z.object({
  availability: z.array(
    z.object({
      day_of_week: z.number().min(0).max(6),
      start_time: z.string().regex(/^\d{2}:\d{2}$/),
      end_time: z.string().regex(/^\d{2}:\d{2}$/),
      is_active: z.boolean(),
    })
  ),
})

// Demo availability data
const demoAvailability = [
  { id: '1', user_id: 'demo-user-123', day_of_week: 1, start_time: '09:00', end_time: '17:00', is_active: true },
  { id: '2', user_id: 'demo-user-123', day_of_week: 2, start_time: '09:00', end_time: '17:00', is_active: true },
  { id: '3', user_id: 'demo-user-123', day_of_week: 3, start_time: '09:00', end_time: '17:00', is_active: true },
  { id: '4', user_id: 'demo-user-123', day_of_week: 4, start_time: '09:00', end_time: '17:00', is_active: true },
  { id: '5', user_id: 'demo-user-123', day_of_week: 5, start_time: '09:00', end_time: '17:00', is_active: true },
]

// GET /api/availability - Get user's availability
export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access-token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json({ availability: demoAvailability })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

// POST /api/availability - Update user's availability
export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access-token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { availability } = availabilitySchema.parse(body)

    // Return the submitted availability with IDs
    const availabilityWithIds = availability.map((slot, index) => ({
      ...slot,
      id: 'avail-' + (index + 1),
      user_id: 'demo-user-123',
    }))

    return NextResponse.json({ availability: availabilityWithIds })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
