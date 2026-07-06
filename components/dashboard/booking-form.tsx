'use client'

import { useState } from 'react'
import { createBooking } from '@/app/actions/bookings'
import { getCustomers } from '@/app/actions/customers'
import { getTrips } from '@/app/actions/trips'
import { getBuses } from '@/app/actions/buses'

export default function BookingForm({ onSuccess }: { onSuccess: () => void }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    customerId: '',
    tripId: '',
    busId: '',
    numberOfPassengers: '',
    totalPrice: '',
    departureDate: '',
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await createBooking({
        customerId: parseInt(formData.customerId),
        tripId: parseInt(formData.tripId),
        busId: formData.busId ? parseInt(formData.busId) : undefined,
        numberOfPassengers: parseInt(formData.numberOfPassengers),
        totalPrice: parseFloat(formData.totalPrice),
        departureDate: formData.departureDate,
        notes: formData.notes,
      })

      setFormData({
        customerId: '',
        tripId: '',
        busId: '',
        numberOfPassengers: '',
        totalPrice: '',
        departureDate: '',
        notes: '',
      })

      onSuccess()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            اختر عميلاً
          </label>
          <input
            type="number"
            placeholder="رقم العميل"
            value={formData.customerId}
            onChange={(e) =>
              setFormData({ ...formData, customerId: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            اختر رحلة
          </label>
          <input
            type="number"
            placeholder="رقم الرحلة"
            value={formData.tripId}
            onChange={(e) => setFormData({ ...formData, tripId: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            عدد الركاب
          </label>
          <input
            type="number"
            placeholder="عدد الركاب"
            value={formData.numberOfPassengers}
            onChange={(e) =>
              setFormData({ ...formData, numberOfPassengers: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            السعر الإجمالي
          </label>
          <input
            type="number"
            placeholder="السعر"
            step="0.01"
            value={formData.totalPrice}
            onChange={(e) =>
              setFormData({ ...formData, totalPrice: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            تاريخ المغادرة
          </label>
          <input
            type="datetime-local"
            value={formData.departureDate}
            onChange={(e) =>
              setFormData({ ...formData, departureDate: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            رقم الحافلة (اختياري)
          </label>
          <input
            type="number"
            placeholder="رقم الحافلة"
            value={formData.busId}
            onChange={(e) => setFormData({ ...formData, busId: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ملاحظات
          </label>
          <textarea
            placeholder="أضف ملاحظات..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? 'جاري الحفظ...' : 'حفظ الحجز'}
        </button>
      </div>
    </form>
  )
}
