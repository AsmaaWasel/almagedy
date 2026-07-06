import { Edit2, Trash2 } from 'lucide-react'

export default function TripsTable({
  trips,
  isLoading,
  onDelete,
}: {
  trips: any[]
  isLoading: boolean
  onDelete: (id: number) => void
}) {
  const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString('ar-SA')
  }

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
              عنوان الرحلة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الوجهة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              تاريخ البداية
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              السعر
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              السعة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الحالة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {trips.length > 0 ? (
            trips.map((trip) => (
              <tr key={trip.id} className="border-b border-gray-100">
                <td className="p-4 text-sm text-gray-900">{trip.title}</td>
                <td className="p-4 text-sm text-gray-600">{trip.destination}</td>
                <td className="p-4 text-sm text-gray-600">
                  {formatDate(trip.startDate)}
                </td>
                <td className="p-4 text-sm text-gray-900 font-medium">
                  {parseFloat(trip.price).toFixed(2)} ر.س
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {trip.maxCapacity}
                </td>
                <td className="p-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      trip.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {trip.status === 'active' ? 'نشطة' : 'منتهية'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(trip.id)}
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
              <td colSpan={7} className="p-8 text-center text-gray-500 text-sm">
                لا توجد رحلات
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
