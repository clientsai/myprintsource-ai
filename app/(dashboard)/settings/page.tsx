'use client'

import { useEffect, useState } from 'react'
import { Save, User, Clock, Globe, Copy, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { User as UserType } from '@/lib/types'

const settingsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  timezone: z.string(),
  booking_duration: z.number().min(15).max(180),
  buffer_time: z.number().min(0).max(60),
})

type SettingsForm = z.infer<typeof settingsSchema>

const TIMEZONES = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Toronto',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Dubai',
  'Australia/Sydney',
  'Pacific/Auckland',
]

export default function SettingsPage() {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [copied, setCopied] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SettingsForm>({
    resolver: zodResolver(settingsSchema),
  })

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me')
      const data = await response.json()
      setUser(data.user)
      reset({
        name: data.user.name,
        email: data.user.email,
        username: data.user.username,
        timezone: data.user.timezone || 'America/New_York',
        booking_duration: data.user.booking_duration || 30,
        buffer_time: data.user.buffer_time || 0,
      })
    } catch (error) {
      toast.error('Failed to load user data')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: SettingsForm) => {
    setSaving(true)
    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to save settings')
      }

      const result = await response.json()
      setUser(result.user)
      toast.success('Settings saved successfully!')
    } catch (error) {
      toast.error('Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const copyBookingLink = () => {
    if (user) {
      const link = `${window.location.origin}/${user.username}`
      navigator.clipboard.writeText(link)
      setCopied(true)
      toast.success('Booking link copied!')
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

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-950">Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account and booking preferences
          </p>
        </div>

        {/* Booking Link */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Your Booking Page
          </h2>
          <div className="flex items-center space-x-2">
            <code className="flex-1 bg-gray-50 px-3 py-2 rounded-md text-sm border">
              {user && `${window.location.origin}/${user.username}`}
            </code>
            <button
              onClick={copyBookingLink}
              className="btn-secondary"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card p-6 space-y-6">
            {/* Profile Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="input"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="input"
                    disabled
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Username</label>
                  <input
                    {...register('username')}
                    type="text"
                    className="input"
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Timezone</label>
                  <select
                    {...register('timezone')}
                    className="input"
                  >
                    {TIMEZONES.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz.replace('_', ' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Booking Preferences */}
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Booking Preferences
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Meeting Duration (minutes)</label>
                  <select
                    {...register('booking_duration', { valueAsNumber: true })}
                    className="input"
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={90}>1.5 hours</option>
                    <option value={120}>2 hours</option>
                  </select>
                  {errors.booking_duration && (
                    <p className="mt-1 text-sm text-red-600">{errors.booking_duration.message}</p>
                  )}
                </div>

                <div>
                  <label className="label">Buffer Time (minutes)</label>
                  <select
                    {...register('buffer_time', { valueAsNumber: true })}
                    className="input"
                  >
                    <option value={0}>No buffer</option>
                    <option value={5}>5 minutes</option>
                    <option value={10}>10 minutes</option>
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Time between meetings
                  </p>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4 border-t">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}