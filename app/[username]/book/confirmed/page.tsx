'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Calendar, Clock, User } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { Booking, User as UserType } from '@/lib/types'

export default function ConfirmationPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const bookingId = searchParams.get('id')
  const [booking, setBooking] = useState<Booking | null>(null)
  const [host, setHost] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (bookingId) {
      fetchBookingDetails()
    }
  }, [bookingId])

  const fetchBookingDetails = async () => {
    try {
      // Fetch booking details
      const bookingRes = await fetch(`/api/bookings/${bookingId}`)
      const bookingData = await bookingRes.json()
      setBooking(bookingData.booking)

      // Fetch host details
      const userRes = await fetch(`/api/users/${params.username}`)
      const userData = await userRes.json()
      setHost(userData.user)
    } catch (error) {
      console.error('Failed to fetch booking details:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (!booking || !host) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Booking not found</p>
          <Link href="/" className="text-primary hover:underline">
            Go to homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="card p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-950 mb-2">
            Project Submitted Successfully! ✨
          </h1>
          <p className="text-gray-600 mb-2">
            Our AI is analyzing your files and optimizing for print quality
          </p>
          <p className="text-sm text-brand-primary font-medium mb-8">
            Instant quote sent to {booking.guest_email}
          </p>

          <div className="border-t border-b py-6 mb-6 space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Powered by</p>
                <p className="font-medium text-gray-950">{host.name} AI</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Requested delivery date</p>
                <p className="font-medium text-gray-950">
                  {format(parseISO(booking.start_time), 'EEEE, MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Delivery window</p>
                <p className="font-medium text-gray-950">
                  {format(parseISO(booking.start_time), 'h:mm a')} -{' '}
                  {format(parseISO(booking.end_time), 'h:mm a')}
                </p>
              </div>
            </div>

            {booking.meeting_link && (
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Tracking Link</p>
                  <a
                    href={booking.meeting_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    View Job Status
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={() => window.print()}
              className="w-full btn-outline"
            >
              Download Confirmation
            </button>
            <Link href="/" className="block w-full btn-secondary">
              Back to Homepage
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Powered by MyPrintSource AI
        </p>
      </div>
    </div>
  )
}