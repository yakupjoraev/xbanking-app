import { useState } from 'react'
import MyPositions from './MyPositions'
import Wallets from './Wallets'

interface DashboardProps {
    title: string;
}

export default function Dashboard({ title }: DashboardProps) {
    const [activeTab, setActiveTab] = useState<'positions' | 'wallets'>('positions')

    return (
        <div className="p-6 max-w-[1484px] mx-auto">
            <h1 className="text-4xl font-bold mb-6 sm:text-2xl sm:mb-4">{title}</h1>

            {/* Tabs */}
            <div className="flex mb-6 sm:mb-2">
                <button
                    onClick={() => setActiveTab('positions')}
                    className={`px-4 py-2 font-semibold text-base bg-transparent border-b-4 transition-all duration-300 ${activeTab === 'positions'
                        ? 'border-black text-black'
                        : 'text-grey border-grey hover:text-black hover:border-black'
                        }`}
                >
                    My Positions
                </button>
                <button
                    onClick={() => setActiveTab('wallets')}
                    className={`px-4 py-2 font-semibold text-base bg-transparent border-b-4 transition-all duration-300 ${activeTab === 'wallets'
                        ? 'border-black text-black'
                        : 'text-grey border-grey hover:text-black hover:border-black'
                        }`}
                >
                    Wallets
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 sm:mt-0">
                {activeTab === 'positions' ? <MyPositions /> : <Wallets />}
            </div>
        </div>
    )
}