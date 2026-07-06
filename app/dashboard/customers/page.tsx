'use client'

import { useState, useEffect } from 'react'
import { getCustomers, deleteCustomer } from '@/app/actions/customers'
import CustomersTable from '@/components/dashboard/customers-table'
import CustomerForm from '@/components/dashboard/customer-form'
import { Plus } from 'lucide-react'

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadCustomers()
  }, [search, page])

  const loadCustomers = async () => {
    setIsLoading(true)
    try {
      const data = await getCustomers(page, 10, search)
      setCustomers(data)
    } catch (error) {
      console.error('Error loading customers:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('هل تأكد من حذف هذا العميل؟')) {
      try {
        await deleteCustomer(id)
        await loadCustomers()
      } catch (error) {
        console.error('Error deleting customer:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">العملاء</h1>
          <p className="text-gray-500 mt-1">إدارة العملاء الخاصة بك</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة عميل جديد</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <CustomerForm
            onSuccess={() => {
              setShowForm(false)
              loadCustomers()
            }}
          />
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <input
            type="text"
            placeholder="ابحث عن عميل..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <CustomersTable
          customers={customers}
          isLoading={isLoading}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}
