import { useState } from 'react';
import Pools from './Pools';
import Savings from './Savings';

interface StakeEarnProps {
  title: string;
}

export default function StakeEarn({ title }: StakeEarnProps) {
  const [activeTab, setActiveTab] = useState<'pools' | 'savings'>('pools');

  return (
    <div className="py-20 sm:py-20 sm:p-10 max-w-xl mx-auto ">
      <h1 className="text-5xl font-bold mb-6 sm:text-2xl sm:mb-4">{title}</h1>

      <div className="flex flex-col mb-6 sm:p-0 sm:mb-2 bg-white rounded-2xl shadow-card">
        {/* Tabs */}
        <div className="flex mb-6 sm:mb-4 bg-white">
          <button
            onClick={() => setActiveTab('pools')}
            className={`px-4 py-2 font-semibold text-base bg-transparent transition-all duration-300 relative tab ${
              activeTab === 'pools' ? 'text-black active' : 'text-grey hover:text-black'
            }`}
          >
            Staking Pools
          </button>
          <button
            onClick={() => setActiveTab('savings')}
            className={`px-4 py-2 font-semibold text-base bg-transparent transition-all duration-300 relative tab ${
              activeTab === 'savings'
                ? ' text-black active'
                : 'text-grey border-grey hover:text-black'
            }`}
          >
            Savings
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 sm:mt-0">{activeTab === 'pools' ? <Pools /> : <Savings />}</div>
      </div>
    </div>
  );
}
