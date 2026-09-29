import React from 'react';
import { Users2, ShieldCheck, Headphones, BadgePercent } from 'lucide-react';
import { TRUST_PILLARS } from '../data/mockData';

const iconMap: { [key: string]: React.ReactNode } = {
  Users: <Users2 className="w-6 h-6 text-[#1E7E34]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#1E7E34]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#1E7E34]" />,
  BadgePercent: <BadgePercent className="w-6 h-6 text-[#1E7E34]" />
};

export const TrustHighlights: React.FC = () => {
  return (
    <div className="bg-[#F2F8F4] border-y border-[#E1EDE4] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const icons = [
              <Users2 className="w-6 h-6 text-[#1E7E34]" />,
              <ShieldCheck className="w-6 h-6 text-[#1E7E34]" />,
              <Headphones className="w-6 h-6 text-[#1E7E34]" />,
              <BadgePercent className="w-6 h-6 text-[#1E7E34]" />
            ];
            return (
              <div 
                key={idx}
                id={`trust-pillar-${idx + 1}`}
                className="flex items-center gap-3.5 p-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  {icons[idx % icons.length]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
