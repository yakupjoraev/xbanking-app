interface PoolsProps {
  title?: string;
}

export default function Pools({ title = "Staking Pools" }: PoolsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {/* Здесь будет контент для пулов */}
        <p className="text-gray-600">Available staking pools will be displayed here</p>
      </div>
    </div>
  )
}