export default function StatsCard({
  title,
  value,
  description,
  color,
}: {
  title: string
  value: number
  description: string
  color: string
}) {
  return (
    <div className={`${color} rounded-lg p-6 border border-gray-200`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className="text-gray-500 text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  )
}
