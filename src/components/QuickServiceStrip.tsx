import React from 'react';
import { Sprout, Tractor, Droplets, FlaskConical, Headphones } from 'lucide-react';
import { QUICK_SERVICE_STRIP } from '../data/mockData';

const iconMap: { [key: string]: React.ReactNode } = {
  Sprout: <Sprout className="w-7 h-7 text-[#1E7E34]" />,
  Tractor: <Tractor className="w-7 h-7 text-[#1E7E34]" />,
  Droplets: <Droplets className="w-7 h-7 text-[#1E7E34]" />,
  FlaskConical: <FlaskConical className="w-7 h-7 text-[#1E7E34]" />,
  Headphones: <Headphones className="w-7 h-7 text-[#1E7E34]" />
};

interface QuickServiceStripProps {
  onSelectService?: (title: string) => void;
}

export const QuickServiceStrip: React.FC<QuickServiceStripProps> = ({ onSelectService }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
      <div 
        id="quick-service-strip-container"
        className="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-3 sm:p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 backdrop-blur-sm"
      >
        {QUICK_SERVICE_STRIP.map((item, index) => (
          <div
            key={item.id}
            id={`quick-strip-item-${index + 1}`}
            onClick={() => onSelectService && onSelectService(item.title)}
            className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F2F9F4] transition-all duration-200 group border border-transparent hover:border-[#D1E7D7] cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] group-hover:bg-[#1E7E34] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:text-white">
              <span className="group-hover:text-white transition-colors duration-200">
                {iconMap[item.icon] || <Sprout className="w-7 h-7" />}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-[#1F2937] group-hover:text-[#1E7E34] transition-colors truncate">
                {item.title}
              </h3>
              <p className="text-xs text-[#6B7280] truncate group-hover:text-[#4B5563]">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
