import Copy from '/img/copy.svg'
import { useState } from 'react'

export default function Wallets() {
  const [copyTooltip, setCopyTooltip] = useState<number | null>(null);

  const wallets = [
    {
      address: "0x65sd7f8sg4s5er6fg4s8df7sdf4s",
      network: "TRC-20",
    },
    {
      address: "0x65sd7f8sg4s5er6fg4s8df7sdf4s",
      network: "TRC-20",
    },
    {
      address: "0x65sd7f8sg4s5er6fg4s8df7sdf4s",
      network: "TRC-20",
    },
    {
      address: "0x65sd7f8sg4s5er6fg4s8df7sdf4s",
      network: "TRC-20",
    },
    {
      address: "0x65sd7f8sg4s5er6fg4s8df7sdf4s",
      network: "TRC-20",
    },
  ];

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyTooltip(index);
      setTimeout(() => {
        setCopyTooltip(null);
      }, 2000); // Hide tooltip after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="py-6">
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full ">
          <thead className="bg-lite-grey">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/3 text-left text-xs font-medium text-grey">Address</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-grey">Network</th>
              <th scope="col" className="px-7 py-3 text-right text-xs font-medium text-grey">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-lite-grey">
            {wallets.map((wallet, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-semibold text-black text-base">{wallet.address}</span>
                    <div className="relative">
                      <button
                        type="button"
                        className='ml-3 min-w-6'
                        onClick={() => handleCopy(wallet.address, index)}
                      >
                        <img src={Copy} alt="Copy icon" />
                        {copyTooltip === index && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green text-white text-xs rounded">
                            Copied!
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-semibold text-black text-base">{wallet.network}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2 text-right">
                  <button className="bg-[#FF1931] transition-all duration-300 
                  text-black p-2 rounded-full text-xs font-semibold hover:bg-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='stroke-2' d="M14.74 9.00003L14.394 18M9.606 18L9.26 9.00003M19.228 5.79003C19.57 5.84203 19.91 5.89703 20.25 5.95603M19.228 5.79003L18.16 19.673C18.1164 20.2383 17.8611 20.7662 17.445 21.1513C17.029 21.5364 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5364 6.55498 21.1513C6.13894 20.7662 5.88359 20.2383 5.84 19.673L4.772 5.79003M19.228 5.79003C18.0739 5.61555 16.9138 5.48313 15.75 5.39303M4.772 5.79003C4.43 5.84103 4.09 5.89603 3.75 5.95503M4.772 5.79003C5.92613 5.61555 7.08623 5.48313 8.25 5.39303M15.75 5.39303V4.47703C15.75 3.29703 14.84 2.31303 13.66 2.27603C12.5536 2.24067 11.4464 2.24067 10.34 2.27603C9.16 2.31303 8.25 3.29803 8.25 4.47703V5.39303M15.75 5.39303C13.2537 5.20011 10.7463 5.20011 8.25 5.39303" stroke="white" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}