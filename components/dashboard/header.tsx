'use client'

import { useRouter } from 'next/navigation'

export default function Header({ user }: { user: any }) {
  const router = useRouter()

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            مرحباً بك في النظام
          </h2>
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString('ar-SA')}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0) || 'U'}
          </div>
        </div>
      </div>
    </div>
  )
}
