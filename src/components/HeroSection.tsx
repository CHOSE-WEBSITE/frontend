import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  isBackgroundImage?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  image,
  isBackgroundImage = false
}) => {
  if (isBackgroundImage) {
    // Background image style (for "Experience the Thrill")
    return (
      <div className="relative overflow-hidden rounded-lg bg-[#1A1E1B]">
        {/* Background image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        <div className="relative h-[180px] p-6 flex flex-col justify-center">
          <div className="w-3/4">
            <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-gray-300 mb-6">{subtitle}</p>
            <div>
              <button className="bg-[#1A3B1D] border border-[#AFF697] hover:bg-[#2C372D] text-[#AFF697] font-medium py-2 px-6 rounded-md transition-colors">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Side image style (for "Win Big!")
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#1A1E1B]">
      <div className="flex h-[180px]">
        <div className="p-6 w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-300 mb-6">{subtitle}</p>
          <div>
            <button className="bg-[#1A3B1D] border border-[#AFF697] hover:bg-[#2C372D] text-[#AFF697] font-medium py-2 px-6 rounded-md transition-colors">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
