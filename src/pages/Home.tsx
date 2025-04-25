import React from 'react';
import HeroSection from '../components/HeroSection';
import GameSection from '../components/GameSection';
import GameCard from '../components/GameCard';
import ProviderSection from '../components/ProviderSection';
import LiveBetsTable from '../components/LiveBetsTable';
import MonthlyRace from '../components/MonthlyRace';

// Import icons
import mostPopularIcon from '../assets/icons/most_popular.svg';
import choseOriginalsIcon from '../assets/icons/chose_originals.svg';
import slotsIcon from '../assets/icons/slots.svg';
import liveCasinoIcon from '../assets/icons/live_casino.svg';
import gameProvidersIcon from '../assets/icons/game_providers.svg';

// Import images
import winBigImage from '../assets/images/win_big.png';
import experienceTheThrill from '../assets/images/experience_the_thrill.png';
import crapsGame from '../assets/images/craps_game.png';
import piggyClusterHunt from '../assets/images/piggy_cluster_hunt_game.png';
import cashCrew from '../assets/images/cash_crew_game.png';
import sugarRush from '../assets/images/sugar_rush_game.png';
import gatesOfOlympus from '../assets/images/gates_of_olympus_game.png';
import diceGame from '../assets/images/dice_game.png';
import crashGame from '../assets/images/crash_game.png';
import plinkoGame from '../assets/images/plinko_game.png';
import minesGame from '../assets/images/mines_game.png';
import blackjackGame from '../assets/images/blackjack_game.png';
import evolutionProvider from '../assets/images/evolution_provider.png';
import pragmaticPlayProvider from '../assets/images/pragmatic_play_provider.png';
import playNGoProvider from '../assets/images/play_n_go_provider.png';
import thirdProvider from '../assets/images/3rd_provider.png';
import fortuneRabbit from '../assets/images/fortune_rabbit.png';
import megaBaccarat from '../assets/images/mega_baccarat.png';
import sideBetCity from '../assets/images/side_bet_city.png';
import bacBo from '../assets/images/bac_bo.png';
import blackjackSlot from '../assets/images/blackjack_slot.png';
import extreamTexasHoldem from '../assets/images/extream_texas_holdem.png';

const Home: React.FC = () => {
  // Sample data for providers
  const providers = [
    { id: '1', name: 'Evolution', logo: evolutionProvider },
    { id: '2', name: 'Pragmatic Play', logo: pragmaticPlayProvider },
    { id: '3', name: 'Play n Go', logo: playNGoProvider },
    { id: '4', name: '3rd Provider', logo: thirdProvider },
    { id: '5', name: 'Evolution', logo: evolutionProvider },
  ];

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <HeroSection
          title="Win Big!"
          subtitle="Up to 10000$ Welcome Bonus"
          buttonText="Start Now"
          image={winBigImage}
        />
        <HeroSection
          title="Experience the Thrill"
          subtitle="High Choses. High Rewards."
          buttonText="Join the Club"
          image={experienceTheThrill}
          isBackgroundImage={true}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button className="bg-[#1A1E1B] text-white py-2 px-4 rounded-full flex items-center hover:bg-[#2C372D]">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M12 4.16999V20.8308L11.2005 21.7408C10.0911 23.0009 9.18161 22.6609 9.18161 20.9808V13.7804H6.09336C4.69415 13.7804 4.30437 12.9204 5.23384 11.8704L12 4.16999Z" fill="#AFF697"/>
            <path opacity="0.4" d="M18.7662 13.1296L12 20.83V4.16921L12.7995 3.25917C13.9089 1.99911 14.8184 2.33913 14.8184 4.01921V11.2195H17.9067C19.3059 11.2195 19.6957 12.0796 18.7662 13.1296Z" fill="#AFF697"/>
          </svg>
          Landing page
        </button>
        <button className="bg-[#1A1E1B] text-white py-2 px-4 rounded-full flex items-center hover:bg-[#2C372D]">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <path opacity="0.4" d="M16.8198 2.5H7.17983C5.04983 2.5 3.31983 4.23969 3.31983 6.35932V20.4468C3.31983 22.2465 4.60983 23.0064 6.18983 22.1365L11.0698 19.427C11.5898 19.1371 12.4298 19.1371 12.9398 19.427L17.8198 22.1365C19.3998 23.0164 20.6898 22.2565 20.6898 20.4468V6.35932C20.6798 4.23969 18.9498 2.5 16.8198 2.5Z" fill="#AFF697"/>
          </svg>
          Favourites
        </button>
        <button className="bg-[#1A1E1B] text-white py-2 px-4 rounded-full flex items-center hover:bg-[#2C372D]">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <path opacity="0.4" d="M16.8198 2.5H7.17983C5.04983 2.5 3.31983 4.23969 3.31983 6.35932V20.4468C3.31983 22.2465 4.60983 23.0064 6.18983 22.1365L11.0698 19.427C11.5898 19.1371 12.4298 19.1371 12.9398 19.427L17.8198 22.1365C19.3998 23.0164 20.6898 22.2565 20.6898 20.4468V6.35932C20.6798 4.23969 18.9498 2.5 16.8198 2.5Z" fill="#AFF697"/>
          </svg>
          Chose Originals
        </button>
        <button className="bg-[#1A1E1B] text-white py-2 px-4 rounded-full flex items-center hover:bg-[#2C372D]">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M21.8906 7.51562H2.10938C0.946266 7.51562 0 8.46189 0 9.625V19.9375C0 21.1006 0.946266 22.0469 2.10938 22.0469H21.8906C23.0537 22.0469 24 21.1006 24 19.9375V9.625C24 8.46189 23.0537 7.51562 21.8906 7.51562ZM14.8125 5.17188H9.1875C8.79919 5.17188 8.48438 4.85706 8.48438 4.46875C8.48438 4.08044 8.79919 3.76562 9.1875 3.76562H14.8125C15.2008 3.76562 15.5156 4.08044 15.5156 4.46875C15.5156 4.85706 15.2008 5.17188 14.8125 5.17188Z" fill="#AFF697"/>
          </svg>
          Slots
        </button>
        <button className="bg-[#1A1E1B] text-white py-2 px-4 rounded-full flex items-center hover:bg-[#2C372D]">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_83_1056)">
              <path d="M12 4.16999V20.8308L11.2005 21.7408C10.0911 23.0009 9.18161 22.6609 9.18161 20.9808V13.7804H6.09336C4.69415 13.7804 4.30437 12.9204 5.23384 11.8704L12 4.16999Z" fill="#AFF697"/>
            </g>
          </svg>
          Live Casino
        </button>
        <button className="bg-[#1A1E1B] text-white py-2 px-4 rounded-full flex items-center hover:bg-[#2C372D]">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M12 4.16999V20.8308L11.2005 21.7408C10.0911 23.0009 9.18161 22.6609 9.18161 20.9808V13.7804H6.09336C4.69415 13.7804 4.30437 12.9204 5.23384 11.8704L12 4.16999Z" fill="#AFF697"/>
          </svg>
          Game Show
        </button>
        <div className="relative ml-auto">
          <input
            type="text"
            placeholder="Search for a game..."
            className="bg-[#1A1E1B] text-white py-2 pl-10 pr-4 rounded-full w-64 focus:outline-none focus:ring-1 focus:ring-[#AFF697]"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <GameSection title="Most popular games" icon={mostPopularIcon} seeAllLink="#">
        <GameCard title="CRAPS" image={crapsGame} provider="Evolution" />
        <GameCard title="PIGGY CLUSTER HUNT" image={piggyClusterHunt} provider="Pragmatic Play" />
        <GameCard title="CASH CREW" image={cashCrew} provider="Evolution" />
        <GameCard title="SUGAR RUSH" image={sugarRush} provider="Pragmatic Play" />
        <GameCard title="GATES OF OLYMPUS" image={gatesOfOlympus} provider="Pragmatic Play" />
        <GameCard title="GATES OF OLYMPUS" image={gatesOfOlympus} provider="Pragmatic Play" />
        <GameCard title="GATES OF OLYMPUS" image={gatesOfOlympus} provider="Pragmatic Play" />
      </GameSection>

      <GameSection title="Chose Originals" icon={choseOriginalsIcon} seeAllLink="#">
        <GameCard title="Dice" image={diceGame} />
        <GameCard title="Crash" image={crashGame} isNew={true} />
        <GameCard title="Plinko" image={plinkoGame} />
        <GameCard title="Mines" image={minesGame} />
        <GameCard title="Blackjack" image={blackjackGame} />
      </GameSection>

      <ProviderSection
        title="Game Providers"
        icon={gameProvidersIcon}
        providers={providers}
      />

      <GameSection title="Slots" icon={slotsIcon} seeAllLink="#">
        <GameCard title="Fortune Rabbit" image={fortuneRabbit} provider="Pragmatic Play" />
        <GameCard title="Mega Baccarat" image={megaBaccarat} provider="Evolution" />
        <GameCard title="Blackjack" image={blackjackSlot} provider="Evolution" />
        <GameCard title="Side Bet City" image={sideBetCity} provider="Evolution" />
        <GameCard title="Bac Bo" image={bacBo} provider="Evolution" />
      </GameSection>

      <GameSection title="Live Casino" icon={liveCasinoIcon} seeAllLink="#">
        <GameCard title="Mega Baccarat" image={megaBaccarat} provider="Evolution" />
        <GameCard title="Blackjack" image={blackjackSlot} provider="Evolution" />
        <GameCard title="Side Bet City" image={sideBetCity} provider="Evolution" />
        <GameCard title="Bac Bo" image={bacBo} provider="Evolution" />
        <GameCard title="Extreme Texas Hold'em" image={extreamTexasHoldem} provider="Evolution" />
      </GameSection>

      <MonthlyRace />

      <LiveBetsTable />
    </div>
  );
};

export default Home;
