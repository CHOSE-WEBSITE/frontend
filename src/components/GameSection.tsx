import React, { ReactNode } from 'react';

interface GameSectionProps {
  title: string;
  icon?: string;
  children: ReactNode;
  seeAllLink?: string;
}

const GameSection: React.FC<GameSectionProps> = ({ title, icon, children, seeAllLink }) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon && (
            <img src={icon} alt="" className="w-5 h-5 mr-2" />
          )}
          <h2 className="text-white text-lg font-medium">{title}</h2>
        </div>

        {seeAllLink && (
          <a href={seeAllLink} className="text-[#AFF697] text-sm hover:underline">
            See all
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {children}
      </div>
    </section>
  );
};

export default GameSection;
