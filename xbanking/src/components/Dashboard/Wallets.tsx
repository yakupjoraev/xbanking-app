interface WalletsProps {
  title?: string;
}

export default function Wallets({ title = "My Wallets" }: WalletsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {/* Здесь будет контент для кошельков */}
        <p className="text-gray-600">Connect your wallet to get started</p>
      </div>
    </div>
  )
}