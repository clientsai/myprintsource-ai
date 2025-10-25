'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import {
  Clock,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  FileText
} from 'lucide-react'
import toast from 'react-hot-toast'
import { User } from '@/lib/types'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        router.push('/login')
      }
    } catch (error) {
      console.error('Failed to fetch user:', error)
      router.push('/login')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      toast.success('Logged out successfully')
      router.push('/')
    } catch (error) {
      toast.error('Failed to logout')
    }
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'AI Automation', href: '/availability', icon: Clock },
    { name: 'Projects', href: '/bookings', icon: FileText },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Mobile sidebar backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="/brand/logo-myprintsource.png"
                alt="MyPrintSource AI"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User info */}
          {user && (
            <div className="px-6 py-4 border-b bg-gradient-to-r from-brand-light to-white">
              <p className="text-sm font-medium text-gray-950">{user.name}</p>
              <p className="text-xs text-brand-primary mt-1">@{user.username}</p>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-light text-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t">
            <button
              onClick={handleLogout}
              className="flex w-full items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between bg-white border-b px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="text-lg font-semibold">MyPrintSource</span>
          <div className="w-6" /> {/* Spacer for centering */}
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}