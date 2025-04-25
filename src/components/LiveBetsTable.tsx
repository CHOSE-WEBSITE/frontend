import React from 'react';

interface Bet {
  id: string;
  user: string;
  amount: string;
  multiplier: string;
  payout: string;
}

const LiveBetsTable: React.FC = () => {
  // Sample data for the table
  const bets: Bet[] = [
    { id: '1', user: 'User name', amount: '$2,000.00', multiplier: 'x2', payout: '$4,000.00' },
    { id: '2', user: 'User name', amount: '$500.00', multiplier: 'x3', payout: '$1,500.00' },
    { id: '3', user: 'User name', amount: '$300.00', multiplier: 'x2', payout: '$600.00' },
    { id: '4', user: 'User name', amount: '$1,000.00', multiplier: 'x5', payout: '$5,000.00' },
    { id: '5', user: 'User name', amount: '$750.00', multiplier: 'x2', payout: '$1,500.00' },
    { id: '6', user: 'User name', amount: '$100.00', multiplier: 'x10', payout: '$1,000.00' },
    { id: '7', user: 'User name', amount: '$250.00', multiplier: 'x4', payout: '$1,000.00' },
    { id: '8', user: 'User name', amount: '$600.00', multiplier: 'x2', payout: '$1,200.00' },
  ];

  return (
    <div className="bg-[#1A1E1B] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-white text-xl font-semibold">Live Bets Table</h2>
      </div>
      
      <div className="flex justify-between p-2 bg-[#242424]">
        <button className="py-1 px-3 bg-[#1A1E1B] text-white rounded-md text-sm">All</button>
        <button className="py-1 px-3 text-gray-400 rounded-md text-sm hover:bg-[#1A1E1B]">High Roller</button>
        <button className="py-1 px-3 text-gray-400 rounded-md text-sm hover:bg-[#1A1E1B]">Lucky Wins</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-[#242424]">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Game
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Wager
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Multiplier
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Payout
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#1A1E1B] divide-y divide-gray-800">
            {bets.map((bet) => (
              <tr key={bet.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                      D
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {bet.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {bet.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {bet.multiplier}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#AFF697]">
                  {bet.payout}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveBetsTable;
