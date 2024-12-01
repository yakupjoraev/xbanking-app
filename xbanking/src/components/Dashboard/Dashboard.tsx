import { useState } from 'react'
import MyPositions from './MyPositions'
import Wallets from './Wallets'

interface DashboardProps {
    title: string;
}

export default function Dashboard({ title }: DashboardProps) {
    const [activeTab, setActiveTab] = useState<'positions' | 'wallets'>('positions')

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab('positions')}
                    className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'positions'
                        ? 'bg-yellow text-black'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                >
                    My Positions
                </button>
                <button
                    onClick={() => setActiveTab('wallets')}
                    className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'wallets'
                        ? 'bg-yellow text-black'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                >
                    Wallets
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 'positions' ? <MyPositions /> : <Wallets />}
            </div>
        </div>
    )
}