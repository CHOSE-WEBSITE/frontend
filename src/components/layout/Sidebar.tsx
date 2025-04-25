import React from 'react';

// Import nav link icons
import minesNavIcon from '../../assets/icons/diamon_nav_link.svg';
import diceNavIcon from '../../assets/icons/dice_nav_link.svg';
import plinkoNavIcon from '../../assets/icons/plinko_nav_link.svg';
import blackjackNavIcon from '../../assets/icons/blackjack_nav_link.svg';
import crashNavIcon from '../../assets/icons/crash_nav_link.svg';
import slotNavIcon from '../../assets/icons/slot_nav_link.svg';
import liveCasinoNavIcon from '../../assets/icons/live_casino_nav_link.svg';
import gameShowsNavIcon from '../../assets/icons/game_shows_nav_link.svg';
import bountyBuyNavIcon from '../../assets/icons/bounty_buy_nav_link.svg';
import enhancedRtpNavIcon from '../../assets/icons/enhanced_rtp_nav_link.svg';
import tableGamesNavIcon from '../../assets/icons/table_games_nav_link.svg';
import profileSettingsNavIcon from '../../assets/icons/profile_settings_nav_link.svg';
import supportNavIcon from '../../assets/icons/support_nav_link.svg';
import languageNavIcon from '../../assets/icons/language_nav_link.svg';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-[#1A1E1B] text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 pt-6">

        <div className="mb-6">
          <h3 className="text-xs text-gray-400 mb-2">Original Games</h3>
          <ul>
            <li className="py-2 flex items-center">
              <img src={minesNavIcon} alt="Mines" className="w-5 h-5 mr-3" />
              <span>Mines</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={diceNavIcon} alt="Dice" className="w-5 h-5 mr-3" />
              <span>Dice</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={plinkoNavIcon} alt="Plinko" className="w-5 h-5 mr-3" />
              <span>Plinko</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={blackjackNavIcon} alt="Blackjack" className="w-5 h-5 mr-3" />
              <span>Blackjack</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={crashNavIcon} alt="Crash" className="w-5 h-5 mr-3" />
              <span>Crash</span>
              <span className="ml-2 bg-green-500 text-xs px-2 py-0.5 rounded-full">New</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs text-gray-400 mb-2">Casino Games</h3>
          <ul>
            <li className="py-2 flex items-center">
              <img src={slotNavIcon} alt="Slots" className="w-5 h-5 mr-3" />
              <span>Slots</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={liveCasinoNavIcon} alt="Live Casino" className="w-5 h-5 mr-3" />
              <span>Live Casino</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={gameShowsNavIcon} alt="Game Shows" className="w-5 h-5 mr-3" />
              <span>Game Shows</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={bountyBuyNavIcon} alt="Bounty Buy" className="w-5 h-5 mr-3" />
              <span>Bounty Buy</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={enhancedRtpNavIcon} alt="Enhanced RTP" className="w-5 h-5 mr-3" />
              <span>Enhanced RTP</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={tableGamesNavIcon} alt="Table Games" className="w-5 h-5 mr-3" />
              <span>Table Games</span>
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <ul>
            <li className="py-2 flex items-center">
              <img src={profileSettingsNavIcon} alt="Profile Settings" className="w-5 h-5 mr-3" />
              <span>Profile Settings</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={supportNavIcon} alt="Support" className="w-5 h-5 mr-3" />
              <span>Support</span>
            </li>
            <li className="py-2 flex items-center">
              <img src={languageNavIcon} alt="Language" className="w-5 h-5 mr-3" />
              <span>Language: ENG</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
