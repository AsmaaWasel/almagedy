'use client'

import { useState, useEffect } from 'react'
import { getTrips, deleteTrip } from '@/app/actions/trips'
import TripsTable from '@/components/dashboard/trips-table'
import TripForm from '@/components/dashboard/trip-form'
import { Plus } from 'lucide-react'

export default function TripsPage() {
  const [trips, setTrips] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [page, setPage] = useState(1)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadTrips()
  }, [search, status, page])

  const loadTrips = async () => {
    setIsLoading(true)
    try {
      const data = await getTrips(page, 10, search, status)
      setTrips(data)
    } catch (error) {
      console.error('Error loading trips:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('هل تأكد من حذف هذه الرحلة؟')) {
      try {
        await deleteTrip(id)
        await loadTrips()
      } catch (error) {
        console.error('Error deleting trip:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الرحلات</h1>
          <p className="text-gray-500 mt-1">إدارة جميع الرحلات الخاصة بك</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة رحلة جديدة</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <TripForm
            onSuccess={() => {
              setShowForm(false)
              loadTrips()
            }}
          />
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="ابحث عن رحلة..."
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
              <option value="active">نشطة</option>
              <option value="completed">منتهية</option>
            </select>
          </div>
        </div>

        <TripsTable
          trips={trips}
          isLoading={isLoading}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}
