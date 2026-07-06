import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { getBookings } from '@/app/actions/bookings'
import { getCustomerCount } from '@/app/actions/customers'
import { getTripCount } from '@/app/actions/trips'
import { getBusCount } from '@/app/actions/buses'
import StatsCard from '@/components/dashboard/stats-card'
import RecentBookings from '@/components/dashboard/recent-bookings'

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })

  const [bookings, customerCount, tripCount, busCount] = await Promise.all([
    getBookings(1, 5),
    getCustomerCount(),
    getTripCount(),
    getBusCount(),
  ])

  const bookingCount = bookings.length || 0

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          أهلاً، {session?.user?.name}
        </h1>
        <p className="text-gray-500 mt-1">مرحباً في لوحة التحكم الخاصة بك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="إجمالي الحجوزات"
          value={bookingCount}
          description="جميع الحجوزات"
          color="bg-blue-50"
        />
        <StatsCard
          title="العملاء"
          value={customerCount}
          description="إجمالي العملاء"
          color="bg-green-50"
        />
        <StatsCard
          title="الرحلات"
          value={tripCount}
          description="الرحلات النشطة"
          color="bg-purple-50"
        />
        <StatsCard
          title="الحافلات"
          value={busCount}
          description="عدد الحافلات"
          color="bg-orange-50"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <RecentBookings bookings={bookings} />
      </div>
    </div>
  )
}
