'use client'

import { useState, useEffect } from 'react'
import { getBookings, deleteBooking } from '@/app/actions/bookings'
import BookingsTable from '@/components/dashboard/bookings-table'
import BookingForm from '@/components/dashboard/booking-form'
import { Plus } from 'lucide-react'

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [page, setPage] = useState(1)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadBookings()
  }, [search, status, page])

  const loadBookings = async () => {
    setIsLoading(true)
    try {
      const data = await getBookings(page, 10, search, status)
      setBookings(data)
    } catch (error) {
      console.error('Error loading bookings:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('هل تأكد من حذف هذه الحجز؟')) {
      try {
        await deleteBooking(id)
        await loadBookings()
      } catch (error) {
        console.error('Error deleting booking:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الحجوزات</h1>
          <p className="text-gray-500 mt-1">إدارة جميع الحجوزات الخاصة بك</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة حجز جديد</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <BookingForm
            onSuccess={() => {
              setShowForm(false)
              loadBookings()
            }}
          />
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="ابحث عن حجز..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
                setPage(1)
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">جميع الحالات</option>
              <option value="pending">قيد الانتظار</option>
              <option value="confirmed">مؤكد</option>
              <option value="cancelled">ملغى</option>
            </select>
          </div>
        </div>

        <BookingsTable
          bookings={bookings}
          isLoading={isLoading}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}
