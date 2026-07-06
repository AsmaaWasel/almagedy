import { Edit2, Trash2 } from 'lucide-react'

export default function BusesTable({
  buses,
  isLoading,
  onDelete,
}: {
  buses: any[]
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
              رقم التسجيل
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              السعة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              النوع
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {buses.length > 0 ? (
            buses.map((bus) => (
              <tr key={bus.id} className="border-b border-gray-100">
                <td className="p-4 text-sm text-gray-900">{bus.name}</td>
                <td className="p-4 text-sm text-gray-600">
                  {bus.registrationNumber}
                </td>
                <td className="p-4 text-sm text-gray-600">{bus.capacity}</td>
                <td className="p-4 text-sm text-gray-600">{bus.type}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(bus.id)}
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
                لا توجد حافلات
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
