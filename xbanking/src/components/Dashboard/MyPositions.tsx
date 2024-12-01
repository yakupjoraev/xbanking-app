interface MyPositionsProps {
  title?: string;
}

export default function MyPositions({ title = "My Positions" }: MyPositionsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {/* Здесь будет контент для позиций */}
        <p className="text-gray-600">No active positions yet</p>
      </div>
    </div>
  )
}