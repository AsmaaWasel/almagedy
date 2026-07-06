'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, Users, MapPin, Bus, LogOut } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'لوحة التحكم',
      href: '/dashboard',
      icon: BarChart3,
    },
    {
      label: 'الحجوزات',
      href: '/dashboard/bookings',
      icon: MapPin,
    },
    {
      label: 'العملاء',
      href: '/dashboard/customers',
      icon: Users,
    },
    {
      label: 'الرحلات',
      href: '/dashboard/trips',
      icon: MapPin,
    },
    {
      label: 'الحافلات',
      href: '/dashboard/buses',
      icon: Bus,
    },
  ]

  const handleLogout = async () => {
    await authClient.signOut()
    window.location.href = '/'
  }

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-screen">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">AlMagedy</h1>
        <p className="text-gray-400 text-sm">لوحة التحكم</p>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-6 border-t border-gray-800">
        <div className="mb-4 pb-4 border-b border-gray-800">
          <p className="text-sm text-gray-400">معرّف المستخدم</p>
          <p className="text-white font-medium truncate">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <LogOut size={20} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  )
}
