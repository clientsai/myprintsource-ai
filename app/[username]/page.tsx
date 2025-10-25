'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, User, Mail, FileText } from 'lucide-react'
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isBefore, startOfDay, parseISO } from 'date-fns'
import toast from 'react-hot-toast'
import { User as UserType, Availability, Booking } from '@/lib/types'

interface TimeSlot {
  time: string
  available: boolean
}

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const username = params.username as string

  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    notes: '',
  })

  useEffect(() => {
    fetchUserData()
  }, [username])

  useEffect(() => {
    if (selectedDate && user) {
      fetchAvailableSlots()
    }
  }, [selectedDate, user])

  const fetchUserData = async () => {
    try {
      const response = await fetch(`/api/users/${username}`)
      if (!response.ok) {
        throw new Error('User not found')
      }
      const data = await response.json()
      setUser(data.user)
    } catch (error) {
      toast.error('This booking page doesn\'t exist')
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const fetchAvailableSlots = async () => {
    if (!selectedDate || !user) return

    try {
      const dateStr = format(selectedDate, 'yyyy-MM-dd')
      const response = await fetch(`/api/users/${username}/slots?date=${dateStr}`)
      const data = await response.json()

      if (data.slots) {
        setAvailableSlots(data.slots)
      }
    } catch (error) {
      console.error('Failed to fetch slots:', error)
      setAvailableSlots([])
    }
  }

  const handleDateSelect = (date: Date) => {
    if (isBefore(date, startOfDay(new Date()))) {
      return // Can't select past dates
    }
    setSelectedDate(date)
    setSelectedTime(null)
    setShowBookingForm(false)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setShowBookingForm(true)
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !user) return

    setSubmitting(true)
    try {
      const startDateTime = new Date(selectedDate)
      const [hours, minutes] = selectedTime.split(':')
      startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0)

      const endDateTime = new Date(startDateTime)
      endDateTime.setMinutes(endDateTime.getMinutes() + (user.booking_duration || 30))

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          guest_name: bookingData.name,
          guest_email: bookingData.email,
          start_time: startDateTime.toISOString(),
          end_time: endDateTime.toISOString(),
          notes: bookingData.notes,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Booking failed')
      }

      const { booking } = await response.json()

      // Redirect to confirmation page
      router.push(`/${username}/book/confirmed?id=${booking.id}`)
    } catch (error: any) {
      toast.error(error.message || 'Failed to create booking')
    } finally {
      setSubmitting(false)
    }
  }

  const getDaysInMonth = () => {
    const start = startOfMonth(currentMonth)
    const end = endOfMonth(currentMonth)
    return eachDayOfInterval({ start, end })
  }

  const isPastDate = (date: Date) => isBefore(date, startOfDay(new Date()))

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          {user.avatar_url && (
            <Image
              src={user.avatar_url}
              alt={user.name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 border-2 border-white shadow-lg"
            />
          )}
          <h1 className="text-3xl font-bold text-gray-950">{user.name}</h1>
          <p className="text-gray-600 mt-2">Book a {user.booking_duration || 30}-minute meeting</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Select a Date</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium w-32 text-center">
                  {format(currentMonth, 'MMMM yyyy')}
                </span>
                <button
                  onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-xs font-medium text-gray-500 text-center py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth().map(day => {
                const isSelected = selectedDate && isSameDay(day, selectedDate)
                const isPast = isPastDate(day)
                const isCurrentDay = isToday(day)

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => handleDateSelect(day)}
                    disabled={isPast}
                    className={`
                      p-3 text-sm rounded-lg transition-all
                      ${isSelected ? 'bg-primary text-white' : ''}
                      ${isCurrentDay && !isSelected ? 'bg-blue-50 text-primary' : ''}
                      ${!isSelected && !isCurrentDay && !isPast ? 'hover:bg-gray-100' : ''}
                      ${isPast ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {format(day, 'd')}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time Slots & Booking Form */}
          <div>
            {selectedDate && !showBookingForm && (
              <div className="card p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Available times for {format(selectedDate, 'MMMM d, yyyy')}
                </h2>
                <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={`
                          py-2 px-3 rounded-lg text-sm font-medium transition-all
                          ${slot.available
                            ? 'bg-white border hover:border-primary hover:bg-blue-50'
                            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                          }
                        `}
                      >
                        {(() => {
                          const [h, m] = slot.time.split(':')
                          const hour = parseInt(h)
                          const ampm = hour >= 12 ? 'PM' : 'AM'
                          const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
                          return `${displayHour}:${m} ${ampm}`
                        })()}
                      </button>
                    ))
                  ) : (
                    <div className="col-span-3 text-center text-gray-500 py-8">
                      No available times for this date
                    </div>
                  )}
                </div>
              </div>
            )}

            {showBookingForm && selectedDate && selectedTime && (
              <div className="card p-6">
                <div className="mb-6">
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="text-sm text-gray-600 hover:text-gray-950 transition-colors"
                  >
                    ← Back to times
                  </button>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Booking details</p>
                  <p className="font-medium">
                    {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                  </p>
                  <p className="font-medium">
                    {(() => {
                      const [h, m] = selectedTime.split(':')
                      const hour = parseInt(h)
                      const ampm = hour >= 12 ? 'PM' : 'AM'
                      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
                      return `${displayHour}:${m} ${ampm}`
                    })()}{' '}
                    ({user.booking_duration || 30} minutes)
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="label">Your Name</label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        className="input pl-10"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Email Address</label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="input pl-10"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Additional Notes (Optional)</label>
                    <div className="relative mt-1">
                      <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                        <FileText className="h-4 w-4 text-gray-400" />
                      </div>
                      <textarea
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                        className="input pl-10 min-h-[80px]"
                        placeholder="Let me know what you'd like to discuss"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary"
                  >
                    {submitting ? 'Booking...' : 'Confirm Booking'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}