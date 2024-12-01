interface SavingsProps {
  title?: string;
}

export default function Savings({ title = "Savings Options" }: SavingsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {/* Здесь будет контент для сбережений */}
        <p className="text-gray-600">Available savings options will be displayed here</p>
      </div>
    </div>
  )
}