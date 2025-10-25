'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, User, Search, X } from 'lucide-react'
import { format, parseISO, isPast, isFuture } from 'date-fns'
import toast from 'react-hot-toast'
import { Booking } from '@/lib/types'

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all')

  useEffect(() => {
    fetchBookings()
  }, [])

  useEffect(() => {
    filterBookings()
  }, [bookings, filter, searchTerm])

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings')
      const data = await response.json()
      setBookings(data.bookings || [])
    } catch (error) {
      toast.error('Failed to load bookings')
    } finally {
      setLoading(false)
    }
  }

  const filterBookings = () => {
    let filtered = [...bookings]

    // Filter by status
    if (filter === 'upcoming') {
      filtered = filtered.filter(b => isFuture(parseISO(b.start_time)) && b.status === 'confirmed')
    } else if (filter === 'past') {
      filtered = filtered.filter(b => isPast(parseISO(b.start_time)))
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(b =>
        b.guest_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.guest_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.notes?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredBookings(filtered)
  }

  const cancelBooking = async (bookingId: string) => {
    if (!confirm('Are you sure you want to cancel this booking?')) return

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to cancel booking')
      }

      toast.success('Booking cancelled successfully')
      fetchBookings()
    } catch (error) {
      toast.error('Failed to cancel booking')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold text-gray-950">Projects</h1>
            <span className="text-sm px-3 py-1 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-medium">
              AI Powered
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            All your print projects with AI optimization, instant quotes, and real-time tracking
          </p>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({bookings.length})
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'upcoming'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Upcoming ({bookings.filter(b => isFuture(parseISO(b.start_time)) && b.status === 'confirmed').length})
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'past'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Past ({bookings.filter(b => isPast(parseISO(b.start_time))).length})
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="input pl-10 w-full md:w-64"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="card">
          <div className="divide-y">
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => {
                const isPastBooking = isPast(parseISO(booking.start_time))
                const isCancelled = booking.status === 'cancelled'

                return (
                  <div
                    key={booking.id}
                    className={`p-6 ${isPastBooking || isCancelled ? 'opacity-60' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-950">
                              {booking.guest_name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">
                            {booking.guest_email}
                          </span>
                          {isCancelled && (
                            <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded">
                              Cancelled
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {format(parseISO(booking.start_time), 'EEE, MMM d, yyyy')}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>
                              {format(parseISO(booking.start_time), 'h:mm a')} -{' '}
                              {format(parseISO(booking.end_time), 'h:mm a')}
                            </span>
                          </div>
                        </div>

                        {booking.notes && (
                          <p className="mt-2 text-sm text-gray-500">
                            Job specs: {booking.notes}
                          </p>
                        )}
                      </div>

                      {!isPastBooking && booking.status === 'confirmed' && (
                        <button
                          onClick={() => cancelBooking(booking.id)}
                          className="btn-outline text-red-600 border-red-200 hover:bg-red-50"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="p-12 text-center">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  {searchTerm
                    ? 'No projects found matching your search'
                    : filter === 'upcoming'
                    ? 'No upcoming projects'
                    : filter === 'past'
                    ? 'No completed projects'
                    : 'No projects yet. Upload your first design to get started with AI-powered printing.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}