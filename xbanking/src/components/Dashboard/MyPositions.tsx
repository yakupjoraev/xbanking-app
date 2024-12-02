import Salona from '/img/tokens/salona.svg'

export default function MyPositions() {
  const positions = [
    {
      img: Salona,
      token: "Solana",
      symbol: "SOL",
      position: "321",
      rewards: "1.50 SOL",
    },
    {
      img: Salona,
      token: "Solana",
      symbol: "SOL",
      position: "321",
      rewards: "1.50 SOL",
    },
    {
      img: Salona,
      token: "Solana",
      symbol: "SOL",
      position: "321",
      rewards: "1.50 SOL",
    },
    {
      img: Salona,
      token: "Solana",
      symbol: "SOL",
      position: "321",
      rewards: "1.50 SOL",
    },
    {
      img: Salona,
      token: "Solana",
      symbol: "SOL",
      position: "321",
      rewards: "1.50 SOL",
    },
  ];

  return (
    <div className="py-6">
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full ">
          <thead className="bg-lite-grey">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-grey">Token</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-grey">Position</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-grey">Rewards</th>
              <th scope="col" className="px-7 py-3 text-right text-xs font-medium text-grey">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-lite-grey">
            {positions.map((position, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className='mr-3' src={position.img} alt="token icon" />
                    <span className="font-semibold text-black text-base">{position.token}</span>
                    <span className="ml-2 text-grey font-semibold text-base">{position.symbol}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-semibold text-black text-base">{position.position}</span>
                    <span className="ml-1 text-grey font-semibold text-base">{position.symbol}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-semibold text-black text-base">{position.rewards}</span>
                    <span className="ml-1 text-grey font-semibold text-base">{position.symbol}</span>
                    <button className="ml-3 bg-blue transition-all duration-300 border border-transparent
                      text-white rounded-lg text-xs font-semibold py-2 px-4 hover:text-blue hover:bg-transparent hover:border-blue">
                      Claim
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2 text-right">
                  <button className="bg-green transition-all duration-300 
                  text-white rounded-lg text-xs font-semibold py-2 px-4 hover:bg-blue">
                    Create New Position
                  </button>
                  <button className="bg-orange transition-all duration-300 
                  text-white py-2 px-4 rounded-lg text-xs font-semibold hover:bg-blue">
                    Withdraw
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