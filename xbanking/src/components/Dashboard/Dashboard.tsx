import { useState } from 'react';
import MyPositions from './MyPositions';
import Wallets from './Wallets';

interface DashboardProps {
  title: string;
}

export default function Dashboard({ title }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'positions' | 'wallets'>('positions');

  return (
    <div className="p-6 max-w-[1484px] mx-auto">
      <h1 className="text-4xl font-bold mb-6 sm:text-2xl sm:mb-4">{title}</h1>

      {/* Tabs */}
      <div className="flex mb-6 sm:mb-2">
        <button
          onClick={() => setActiveTab('positions')}
          className={`px-4 py-2 font-semibold text-base relative bg-transparent tab transition-all duration-300 ${
            activeTab === 'positions'
              ? 'active text-black'
              : 'text-grey border-grey hover:text-black'
          }`}
        >
          My Positions
        </button>
        <button
          onClick={() => setActiveTab('wallets')}
          className={`px-4 py-2 font-semibold text-base relative bg-transparent tab transition-all duration-300 ${
            activeTab === 'wallets' ? 'active text-black' : 'text-grey border-grey hover:text-black'
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
  );
}
