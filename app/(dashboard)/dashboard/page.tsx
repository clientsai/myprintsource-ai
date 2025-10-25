'use client'

import { useEffect, useState } from 'react'
import { FileText, Clock, Package, TrendingUp, Copy, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { User, Booking } from '@/lib/types'
import { format, startOfWeek, endOfWeek, isToday, parseISO } from 'date-fns'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [stats, setStats] = useState({
    todayBookings: 0,
    weekBookings: 0,
    totalBookings: 0,
  })
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch user
      const userRes = await fetch('/api/auth/me')
      const userData = await userRes.json()
      setUser(userData.user)

      // Fetch bookings
      const bookingsRes = await fetch('/api/bookings')
      const bookingsData = await bookingsRes.json()
      setBookings(bookingsData.bookings || [])

      // Calculate stats
      const now = new Date()
      const weekStart = startOfWeek(now)
      const weekEnd = endOfWeek(now)

      const todayBookings = bookingsData.bookings?.filter((b: Booking) =>
        isToday(parseISO(b.start_time))
      ).length || 0

      const weekBookings = bookingsData.bookings?.filter((b: Booking) => {
        const date = parseISO(b.start_time)
        return date >= weekStart && date <= weekEnd
      }).length || 0

      setStats({
        todayBookings,
        weekBookings,
        totalBookings: bookingsData.bookings?.length || 0,
      })
    } catch (error) {
      console.error('Failed to fetch data:', error)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const copyBookingLink = () => {
    if (user) {
      const link = `${window.location.origin}/${user.username}`
      navigator.clipboard.writeText(link)
      setCopied(true)
      toast.success('AI printing link copied!')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const upcomingBookings = bookings
    .filter((b) => new Date(b.start_time) > new Date() && b.status === 'confirmed')
    .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
    .slice(0, 5)

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-950">
            Welcome back, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Your AI-powered printing dashboard—instant quotes, smart optimization, and automated tracking.
          </p>
        </div>

        {/* AI Portal Link Card */}
        <div className="card p-6 mb-8 bg-gradient-to-r from-brand-light via-purple-50 to-cyan-50 border-brand-primary/20">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg font-semibold text-gray-950">
                  Your AI Printing Portal
                </h2>
                <span className="text-xs px-2 py-0.5 bg-brand-accent/10 text-brand-accent rounded-full font-medium">
                  POWERED BY AI
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Share this link to let anyone upload designs and get instant AI-optimized quotes
              </p>
              <div className="flex items-center space-x-2">
                <code className="bg-white px-3 py-1.5 rounded-md text-sm border border-brand-primary/20">
                  {user && `${window.location.origin}/${user.username}`}
                </code>
                <button
                  onClick={copyBookingLink}
                  className="btn-secondary h-8 px-3"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <FileText className="w-8 h-8 text-brand-primary opacity-50" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-accent" />
              </div>
              <span className="text-3xl font-bold text-gray-950">
                {stats.todayBookings}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">Active Projects Today</p>
            <p className="text-xs text-gray-500 mt-1">AI-optimized and ready</p>
          </div>

          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
              </div>
              <span className="text-3xl font-bold text-gray-950">
                {stats.weekBookings}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">This Week</p>
            <p className="text-xs text-gray-500 mt-1">Processed by AI</p>
          </div>

          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-brand-secondary" />
              </div>
              <span className="text-3xl font-bold text-gray-950">
                {stats.totalBookings}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">Total Projects</p>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </div>
        </div>

        {/* Active Projects */}
        <div className="card">
          <div className="p-6 border-b bg-gradient-to-r from-white to-brand-light/30">
            <h2 className="text-lg font-semibold text-gray-950 flex items-center">
              Active Projects
              <span className="ml-2 text-xs px-2 py-0.5 bg-brand-primary/10 text-brand-primary rounded-full">
                AI Tracked
              </span>
            </h2>
          </div>
          <div className="divide-y">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking) => (
                <div key={booking.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-950">{booking.guest_name}</p>
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                        AI Optimized
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Delivery: {format(parseISO(booking.start_time), 'MMM d, yyyy')} at{' '}
                      {format(parseISO(booking.start_time), 'h:mm a')}
                    </p>
                    {booking.notes && (
                      <p className="text-sm text-gray-500 mt-1">Specs: {booking.notes}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Production Window</p>
                    <p className="text-sm font-medium text-gray-600">
                      {format(parseISO(booking.start_time), 'h:mm a')} -{' '}
                      {format(parseISO(booking.end_time), 'h:mm a')}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-brand-primary" />
                </div>
                <p className="text-gray-600 font-medium mb-2">No active projects yet</p>
                <p className="text-sm text-gray-500">Upload your first design to get started with AI-powered printing</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}