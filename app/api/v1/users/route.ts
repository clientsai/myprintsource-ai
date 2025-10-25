import { NextRequest, NextResponse } from 'next/server'
import { validateAPIKey } from '@/lib/api-auth'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { z } from 'zod'

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  username: z.string().min(3).optional(),
  timezone: z.string().optional(),
  booking_duration: z.number().min(15).max(180).optional(),
})

// GET /api/v1/users - List all users
export async function GET(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = (page - 1) * limit

    const { data: users, error, count } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      data: users,
      meta: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST /api/v1/users - Create a new user
export async function POST(request: NextRequest) {
  const auth = await validateAPIKey(request)
  if (!auth.valid) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { email, name, username, timezone, booking_duration } = createUserSchema.parse(body)

    // Generate a random password for API-created users
    const password = Math.random().toString(36).slice(-12) + 'Aa1!'

    // Create auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    // Generate username if not provided
    const finalUsername = username || email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '') + Date.now().toString().slice(-4)

    // Create user profile
    const { data: user, error: profileError } = await supabaseAdmin
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        name,
        username: finalUsername,
        timezone: timezone || 'America/New_York',
        booking_duration: booking_duration || 30,
      })
      .select()
      .single()

    if (profileError) {
      // Clean up auth user if profile creation fails
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      return NextResponse.json({ error: profileError.message }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      data: user,
      credentials: {
        email,
        password,
        booking_url: `${process.env.NEXT_PUBLIC_APP_URL}/${finalUsername}`,
      },
    }, { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}