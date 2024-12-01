import { useState } from 'react'
import Pools from './Pools'
import Savings from './Savings'

interface StakeEarnProps {
    title: string;
}

export default function StakeEarn({ title }: StakeEarnProps) {
    const [activeTab, setActiveTab] = useState<'pools' | 'savings'>('pools')

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab('pools')}
                    className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'pools'
                            ? 'bg-yellow text-black'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                >
                    Staking Pools
                </button>
                <button
                    onClick={() => setActiveTab('savings')}
                    className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'savings'
                            ? 'bg-yellow text-black'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                >
                    Savings
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 'pools' ? <Pools /> : <Savings />}
            </div>
        </div>
    )
}