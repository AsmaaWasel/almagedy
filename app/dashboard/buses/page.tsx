'use client'

import { useState, useEffect } from 'react'
import { getBuses, deleteBus } from '@/app/actions/buses'
import BusesTable from '@/components/dashboard/buses-table'
import BusForm from '@/components/dashboard/bus-form'
import { Plus } from 'lucide-react'

export default function BusesPage() {
  const [buses, setBuses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadBuses()
  }, [search, page])

  const loadBuses = async () => {
    setIsLoading(true)
    try {
      const data = await getBuses(page, 10, search)
      setBuses(data)
    } catch (error) {
      console.error('Error loading buses:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('هل تأكد من حذف هذه الحافلة؟')) {
      try {
        await deleteBus(id)
        await loadBuses()
      } catch (error) {
        console.error('Error deleting bus:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الحافلات</h1>
          <p className="text-gray-500 mt-1">إدارة أسطول الحافلات الخاصة بك</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة حافلة جديدة</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <BusForm
            onSuccess={() => {
              setShowForm(false)
              loadBuses()
            }}
          />
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <input
            type="text"
            placeholder="ابحث عن حافلة..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <BusesTable buses={buses} isLoading={isLoading} onDelete={handleDelete} />
      </div>
    </div>
  )
}
