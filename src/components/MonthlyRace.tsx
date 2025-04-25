import React from 'react';
import moneyCashIcon from '../assets/icons/money_cash.png';
import alarmClockIcon from '../assets/icons/alarm_clock.png';

const MonthlyRace: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-[#AFF697]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.16999V20.8308L11.2005 21.7408C10.0911 23.0009 9.18161 22.6609 9.18161 20.9808V13.7804H6.09336C4.69415 13.7804 4.30437 12.9204 5.23384 11.8704L12 4.16999Z" fill="#AFF697"/>
            <path opacity="0.4" d="M18.7662 13.1296L12 20.83V4.16921L12.7995 3.25917C13.9089 1.99911 14.8184 2.33913 14.8184 4.01921V11.2195H17.9067C19.3059 11.2195 19.6957 12.0796 18.7662 13.1296Z" fill="#AFF697"/>
          </svg>
          <h2 className="text-white text-xl font-semibold">Monthly Race</h2>
        </div>

        <a href="#" className="text-[#AFF697] text-sm hover:underline">
          See all table
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Prize Card */}
        <div className="bg-[#1A1E1B] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#AFF697]/20 rounded-lg flex items-center justify-center mr-3">
              <img src={moneyCashIcon} alt="Money Cash" className="w-full h-full" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Total Prize</p>
              <h3 className="text-white font-medium text-lg">XXXX$</h3>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Timer Card */}
        <div className="bg-[#1A1E1B] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-lg flex items-center justify-center mr-3">
              <img src={alarmClockIcon} alt="Alarm Clock" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Time Remaining</p>
              <h3 className="text-white font-medium text-lg">25m:40m</h3>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyRace;
