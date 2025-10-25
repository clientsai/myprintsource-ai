import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access-token')
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') ||
                      request.nextUrl.pathname.startsWith('/register')
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard') ||
                      request.nextUrl.pathname.startsWith('/availability') ||
                      request.nextUrl.pathname.startsWith('/bookings') ||
                      request.nextUrl.pathname.startsWith('/settings')

  // Redirect to login if trying to access dashboard without token
  if (isDashboard && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to dashboard if already logged in and trying to access auth pages
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/availability/:path*',
    '/bookings/:path*',
    '/settings/:path*',
    '/login',
    '/register',
  ],
}