import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  // Clear session cookies
  const cookieStore = await cookies()
  cookieStore.delete('access-token')
  cookieStore.delete('refresh-token')

  return NextResponse.json({ message: 'Logout successful' })
}