import { useState } from 'react'
import IconArrow from '/img/arrow-down.svg'
import Search from '/img/search.svg'
import Solana from '/img/tokens/solana.svg'
import Bitcoin from '/img/tokens/bitcoin.svg'
import Toncoin from '/img/tokens/toncoin.svg'
import Arbitrum from '/img/tokens/arbitrum.svg'
import Avalanche from '/img/tokens/avalanche.svg'
import Binance from '/img/tokens/binance.svg'
import Ethereum from '/img/tokens/ethereum.svg'

interface Token {
  id: string;
  name: string;
  icon: string;
}

const tokens: Token[] = [
  { id: 'solana', name: 'Solana', icon: Solana },
  { id: 'bitcoin', name: 'Bitcoin', icon: Bitcoin },
  { id: 'toncoin', name: 'Toncoin', icon: Toncoin },
  { id: 'arbitrum', name: 'Arbitrum', icon: Arbitrum },
  { id: 'avalanche', name: 'Avalanche', icon: Avalanche },
  { id: 'binance', name: 'Binance', icon: Binance },
  { id: 'ethereum', name: 'Ethereum', icon: Ethereum },
]

export default function Savings() {
  const [openAccordion, setOpenAccordion] = useState<'tokens' | 'networks' | null>(null);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [tokenSearchQuery, setTokenSearchQuery] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState<Token | null>(null);
  const [networkSearchQuery, setNetworkSearchQuery] = useState('');

  const filteredTokens = tokens.filter(token =>
    token.name.toLowerCase().includes(tokenSearchQuery.toLowerCase())
  );

  const filteredNetworks = tokens.filter(token =>
    token.name.toLowerCase().includes(networkSearchQuery.toLowerCase())
  );

  const toggleAccordion = (key: 'tokens' | 'networks') => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="flex flex-col gap-3 bg-white">
      {/* Токены */}
      <div className={`relative bg-lite-grey border-transparent p-4 min-h-16 ${openAccordion === 'tokens' ? 'rounded-t-2xl rounded-b-none' : 'rounded-2xl'}`}>
        <div
          className="flex justify-between items-center gap-3 cursor-pointer"
          onClick={() => toggleAccordion('tokens')}
        >
          <span className="font-semibold text-lg w-full text-grey">
            {selectedToken ? selectedToken.name : 'Select Token'}
          </span>
          <img
            width="16"
            height="16"
            className={`fill-current text-black transform transition-transform ${openAccordion === 'tokens' ? 'rotate-180' : ''}`}
            src={IconArrow}
          />
        </div>

        {openAccordion === 'tokens' && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-cont mt-2 bg-lite-grey rounded-b-2xl rounded-t-none shadow-lg z-50">
            <div className="p-4 w-full">
              <div className="relative flex items-center gap-2 bg-white rounded-2xl">
                <img
                  width="24"
                  height="24"
                  className="absolute left-3 top-1/2 -translate-y-1/2 fill-current text-grey"
                  src={Search}
                  alt="Search icon"
                />
                <input
                  type="text"
                  placeholder="Search token"
                  value={tokenSearchQuery}
                  onChange={(e) => setTokenSearchQuery(e.target.value)}
                  className="w-full p-4 pl-12 bg-white rounded-xl outline-none text-sm"
                />
              </div>
              <div className="mt-4 max-h-[300px] overflow-y-auto">
                {filteredTokens.map((token) => (
                  <div
                    key={token.id}
                    className="flex items-center gap-3 p-3 hover:bg-lite-grey rounded-xl cursor-pointer"
                    onClick={() => {
                      setSelectedToken(token);
                      setOpenAccordion(null);
                    }}
                  >
                    <img src={token.icon} alt={token.name} className="w-6 h-6" />
                    <span className="font-medium">{token.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col border-transparent min-h-16 overflow-hidden rounded-lg">
        <div className='flex justify-between items-center gap-2 py-2 px-4 bg-green'>
          <span className='font-bold text-base text-white'>Annual staking reward (APR):</span>
          <span className='font-bold text-base text-white'>3.08%</span>
        </div>

        <div className='py-3 px-4 bg-lite-green'>
          <ul>
            <li className='flex justify-between items-center gap-2'>
              <span>Daily yield:</span>
              <span>0 XB</span>
            </li>

            <li className='flex justify-between items-center gap-2'>
              <span>Monthly yield:</span>
              <span>0 XB</span>
            </li>

            <li className='flex justify-between items-center gap-2'>
              <span>Annual yield:</span>
              <span>0 XB</span>
            </li>

            <li className='flex justify-between items-center gap-2'>
              <span>Total profit:</span>
              <span>0 XB</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Сети */}
      <div className={`relative bg-lite-grey border-transparent p-4 min-h-16 ${openAccordion === 'networks' ? 'rounded-t-2xl rounded-b-none' : 'rounded-2xl'}`}>
        <div
          className="flex justify-between items-center gap-3 cursor-pointer"
          onClick={() => toggleAccordion('networks')}
        >
          <span className="font-semibold text-lg w-full text-grey">
            {selectedNetwork ? selectedNetwork.name : 'Select Network'}
          </span>
          <img
            width="16"
            height="16"
            className={`fill-current text-black transform transition-transform ${openAccordion === 'networks' ? 'rotate-180' : ''}`}
            src={IconArrow}
          />
        </div>

        {openAccordion === 'networks' && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-cont mt-2 bg-lite-grey rounded-b-2xl rounded-t-none shadow-lg z-50">
            <div className="p-4 w-full">
              <div className="relative flex items-center gap-2 bg-white rounded-2xl">
                <img
                  width="24"
                  height="24"
                  className="absolute left-3 top-1/2 -translate-y-1/2 fill-current text-grey"
                  src={Search}
                  alt="Search icon"
                />
                <input
                  type="text"
                  placeholder="Search network"
                  value={networkSearchQuery}
                  onChange={(e) => setNetworkSearchQuery(e.target.value)}
                  className="w-full p-4 pl-12 bg-white rounded-xl outline-none text-sm"
                />
              </div>
              <div className="mt-4 max-h-[300px] overflow-y-auto">
                {filteredNetworks.map((network) => (
                  <div
                    key={network.id}
                    className="flex items-center gap-3 p-3 hover:bg-lite-grey rounded-xl cursor-pointer"
                    onClick={() => {
                      setSelectedNetwork(network);
                      setOpenAccordion(null);
                    }}
                  >
                    <img src={network.icon} alt={network.name} className="w-6 h-6" />
                    <span className="font-medium">{network.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-lite-grey rounded-2xl border-transparent p-4 min-h-16">
        <div className="flex justify-between items-center gap-3">
          <input
            type="number"
            className="bg-transparent border border-transparent rounded-2xl outline-none 
            font-semibold text-lg w-full placeholder:text-grey"
            placeholder="Enter amount" />

          <span className="py-2 px-3 bg-blue rounded-[40px] font-semibold text-sm text-white">Max</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full p-4 font-semibold text-lg 
        bg-blue rounded-lg text-white transition-all duration-300 
        hover:bg-yellow hover:text-black">
        Confirm and Stake
      </button>
    </div >
  )
}