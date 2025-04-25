import React from 'react';

interface GameCardProps {
  title: string;
  image: string;
  provider?: string;
  isNew?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, provider, isNew }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

      {isNew && (
        <div className="absolute top-2 right-2 bg-[#AFF697] text-[#1A1E1B] text-xs font-medium px-2 py-0.5 rounded-full">
          NEW
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3">
        {provider && (
          <div className="text-gray-300 text-xs mb-0.5">{provider}</div>
        )}
        <h3 className="text-white text-sm font-medium">{title}</h3>

        <button className="mt-2 bg-[#AFF697] text-[#1A1E1B] text-xs font-medium py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;
