import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
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

// GET /api/availability - Get user's availability
export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('access-token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token.value)
    if (userError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    // Get availability
    const { data: availability, error } = await supabaseAdmin
      .from('availabilities')
      .select('*')
      .eq('user_id', user.id)
      .order('day_of_week')
      .order('start_time')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ availability: availability || [] })
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

    // Get user
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token.value)
    if (userError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const body = await req.json()
    const { availability } = availabilitySchema.parse(body)

    // Delete existing availability
    const { error: deleteError } = await supabaseAdmin
      .from('availabilities')
      .delete()
      .eq('user_id', user.id)

    if (deleteError) {
      return NextResponse.json({ error: deleteError.message }, { status: 400 })
    }

    // Insert new availability
    if (availability.length > 0) {
      const availabilityWithUser = availability.map(slot => ({
        ...slot,
        user_id: user.id,
      }))

      const { data, error: insertError } = await supabaseAdmin
        .from('availabilities')
        .insert(availabilityWithUser)
        .select()

      if (insertError) {
        return NextResponse.json({ error: insertError.message }, { status: 400 })
      }

      return NextResponse.json({ availability: data })
    }

    return NextResponse.json({ availability: [] })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}