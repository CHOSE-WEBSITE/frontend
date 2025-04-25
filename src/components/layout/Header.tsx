import React from 'react';
import appLogo from '../../assets/icons/app_logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1A1E1B] text-white py-2 px-4 w-full z-10">
      <div className="flex justify-between items-center h-10">
        <div className="flex items-center">
          <img src={appLogo} alt="CHOSE" className="h-5" />
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-[#232823] rounded px-2 py-1">
            <span className="text-xs font-mono text-gray-300">0111132134</span>
            <button className="ml-1">
              <svg className="w-3 h-3 text-[#AFF697]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <button className="bg-[#AFF697] text-[#1A1E1B] text-xs font-medium py-1 px-4 rounded hover:bg-opacity-90 transition-colors">
            Deposit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
