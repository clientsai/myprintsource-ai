'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { Availability } from '@/lib/types'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const TIME_SLOTS = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2)
  const minute = i % 2 === 0 ? '00' : '30'
  const display = `${hour === 0 ? '12' : hour > 12 ? hour - 12 : hour}:${minute} ${hour < 12 ? 'AM' : 'PM'}`
  const value = `${hour.toString().padStart(2, '0')}:${minute}`
  return { display, value }
})

interface AvailabilitySlot {
  day_of_week: number
  start_time: string
  end_time: string
  is_active: boolean
}

export default function AvailabilityPage() {
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchAvailability()
  }, [])

  const fetchAvailability = async () => {
    try {
      const response = await fetch('/api/availability')
      const data = await response.json()
      if (data.availability) {
        setAvailability(data.availability)
      } else {
        // Initialize with default 9-5 Monday-Friday
        const defaultSlots: AvailabilitySlot[] = []
        for (let day = 1; day <= 5; day++) {
          defaultSlots.push({
            day_of_week: day,
            start_time: '09:00',
            end_time: '17:00',
            is_active: true,
          })
        }
        setAvailability(defaultSlots)
      }
    } catch (error) {
      toast.error('Failed to load availability')
    } finally {
      setLoading(false)
    }
  }

  const addSlot = (day: number) => {
    const newSlot: AvailabilitySlot = {
      day_of_week: day,
      start_time: '09:00',
      end_time: '17:00',
      is_active: true,
    }
    setAvailability([...availability, newSlot])
  }

  const removeSlot = (index: number) => {
    setAvailability(availability.filter((_, i) => i !== index))
  }

  const updateSlot = (index: number, field: keyof AvailabilitySlot, value: any) => {
    const updated = [...availability]
    updated[index] = { ...updated[index], [field]: value }
    setAvailability(updated)
  }

  const saveAvailability = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ availability }),
      })

      if (!response.ok) {
        throw new Error('Failed to save availability')
      }

      toast.success('Availability saved successfully!')
    } catch (error) {
      toast.error('Failed to save availability')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Group availability by day
  const availabilityByDay = DAYS.map((_, dayIndex) => ({
    day: dayIndex,
    slots: availability.filter(a => a.day_of_week === dayIndex),
  }))

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-950">Availability</h1>
          <p className="text-gray-600 mt-2">
            Set your weekly recurring availability. Clients can only book during these times.
          </p>
        </div>

        <div className="card">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Weekly Hours</h2>
              <button
                onClick={saveAvailability}
                disabled={saving}
                className="btn-primary"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>

          <div className="divide-y">
            {availabilityByDay.map(({ day, slots }) => (
              <div key={day} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-medium text-gray-950">{DAYS[day]}</h3>
                  {slots.length === 0 && (
                    <button
                      onClick={() => addSlot(day)}
                      className="btn-outline h-8 px-3 text-sm"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add hours
                    </button>
                  )}
                </div>

                {slots.length > 0 ? (
                  <div className="space-y-3">
                    {slots.map((slot, index) => {
                      const globalIndex = availability.indexOf(slot)
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <select
                            value={slot.start_time}
                            onChange={(e) => updateSlot(globalIndex, 'start_time', e.target.value)}
                            className="input w-32"
                          >
                            {TIME_SLOTS.map((time) => (
                              <option key={time.value} value={time.value}>
                                {time.display}
                              </option>
                            ))}
                          </select>
                          <span className="text-gray-500">to</span>
                          <select
                            value={slot.end_time}
                            onChange={(e) => updateSlot(globalIndex, 'end_time', e.target.value)}
                            className="input w-32"
                          >
                            {TIME_SLOTS.map((time) => (
                              <option key={time.value} value={time.value}>
                                {time.display}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={() => removeSlot(globalIndex)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )
                    })}
                    <button
                      onClick={() => addSlot(day)}
                      className="btn-outline h-8 px-3 text-sm"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add another slot
                    </button>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Unavailable</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}