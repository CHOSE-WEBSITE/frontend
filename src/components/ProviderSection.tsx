import React from 'react';

interface Provider {
  id: string;
  name: string;
  logo: string;
}

interface ProviderSectionProps {
  title: string;
  icon: string;
  providers: Provider[];
}

const ProviderSection: React.FC<ProviderSectionProps> = ({ title, icon, providers }) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={icon} alt="" className="w-6 h-6 mr-2" />
          <h2 className="text-white text-xl font-semibold">{title}</h2>
        </div>
        
        <a href="#" className="text-[#AFF697] text-sm hover:underline">
          See all
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {providers.map((provider) => (
          <div key={provider.id} className="bg-[#1A1E1B] rounded-lg p-4 flex items-center justify-center h-20">
            <img 
              src={provider.logo} 
              alt={provider.name} 
              className="max-h-10 max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProviderSection;
