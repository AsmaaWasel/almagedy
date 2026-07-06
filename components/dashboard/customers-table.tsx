import { Edit2, Trash2 } from 'lucide-react'

export default function CustomersTable({
  customers,
  isLoading,
  onDelete,
}: {
  customers: any[]
  isLoading: boolean
  onDelete: (id: number) => void
}) {
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-500 mt-2">جاري التحميل...</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الاسم
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              البريد الإلكتروني
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الهاتف
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              المدينة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-100">
                <td className="p-4 text-sm text-gray-900">{customer.name}</td>
                <td className="p-4 text-sm text-gray-600">{customer.email}</td>
                <td className="p-4 text-sm text-gray-600">{customer.phone}</td>
                <td className="p-4 text-sm text-gray-600">{customer.city}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(customer.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-8 text-center text-gray-500 text-sm">
                لا توجد عملاء
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
