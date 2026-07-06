import { Edit2, Trash2 } from 'lucide-react'

export default function BookingsTable({
  bookings,
  isLoading,
  onDelete,
}: {
  bookings: any[]
  isLoading: boolean
  onDelete: (id: number) => void
}) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

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
              اسم العميل
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الرحلة
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              الركاب
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              السعر
            </th>
            <th className="text-right text-sm font-semibold text-gray-600 p-4">
              تاريخ المغادرة
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
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-gray-100">
                <td className="p-4 text-sm text-gray-900">
                  {booking.customerName}
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {booking.tripTitle}
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {booking.numberOfPassengers}
                </td>
                <td className="p-4 text-sm text-gray-900 font-medium">
                  {parseFloat(booking.totalPrice).toFixed(2)} ر.س
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {formatDate(booking.departureDate)}
                </td>
                <td className="p-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status === 'confirmed'
                      ? 'مؤكد'
                      : booking.status === 'pending'
                        ? 'قيد الانتظار'
                        : 'ملغى'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(booking.id)}
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
              <td
                colSpan={7}
                className="p-8 text-center text-gray-500 text-sm"
              >
                لا توجد حجوزات
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
