import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function RecentBookings({ bookings }: { bookings: any[] }) {
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">أحدث الحجوزات</h3>
        <Link
          href="/dashboard/bookings"
          className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
        >
          <span>عرض الكل</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-right text-sm font-semibold text-gray-600 pb-3">
                اسم العميل
              </th>
              <th className="text-right text-sm font-semibold text-gray-600 pb-3">
                الرحلة
              </th>
              <th className="text-right text-sm font-semibold text-gray-600 pb-3">
                التاريخ
              </th>
              <th className="text-right text-sm font-semibold text-gray-600 pb-3">
                السعر
              </th>
              <th className="text-right text-sm font-semibold text-gray-600 pb-3">
                الحالة
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-100">
                  <td className="py-4 text-sm text-gray-900">
                    {booking.customerName}
                  </td>
                  <td className="py-4 text-sm text-gray-600">
                    {booking.tripTitle}
                  </td>
                  <td className="py-4 text-sm text-gray-600">
                    {formatDate(booking.bookingDate)}
                  </td>
                  <td className="py-4 text-sm text-gray-900 font-medium">
                    {parseFloat(booking.totalPrice).toFixed(2)} ر.س
                  </td>
                  <td className="py-4">
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
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-gray-500 text-sm"
                >
                  لا توجد حجوزات حالياً
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
