import React from 'react';
import { SIX_CORE_PILLARS } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  FlaskConical, 
  ShieldCheck, 
  Droplets, 
  Smartphone, 
  Tractor, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { PageRoute } from '../types';

export const SixPillarsSection: React.FC = () => {
  const { navigate } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-600" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-sky-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'Tractor': return <Tractor className="w-6 h-6 text-orange-600" />;
      default: return <Sprout className="w-6 h-6 text-emerald-600" />;
    }
  };

  const getCardBg = (color: string) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-50/50 border-emerald-100 hover:border-emerald-500';
      case 'amber': return 'bg-amber-50/50 border-amber-100 hover:border-amber-500';
      case 'teal': return 'bg-teal-50/50 border-teal-100 hover:border-teal-500';
      case 'sky': return 'bg-sky-50/50 border-sky-100 hover:border-sky-500';
      case 'indigo': return 'bg-indigo-50/50 border-indigo-100 hover:border-indigo-500';
      case 'orange': return 'bg-orange-50/50 border-orange-100 hover:border-orange-500';
      default: return 'bg-gray-50 border-gray-100 hover:border-emerald-500';
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-english">
              AYT AGRO CORE PILLARS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
              ৬টি মূল স্তম্ভে আমাদের টেকসই কৃষি সমাধান
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              মাটি থেকে ফসল, পানি থেকে প্রযুক্তি — কৃষির প্রতিটি পদক্ষেপে বৈজ্ঞানিক ও প্রাকৃতিক পদ্ধতির পূর্ণাঙ্গ মেলবন্ধন।
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('natural-farming')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E7E34] hover:text-[#0F4A24] bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <span>সকল স্তম্ভ সম্পর্কে জানুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIX_CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => navigate(pillar.route as PageRoute)}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-xs hover:shadow-lg cursor-pointer group flex flex-col justify-between ${getCardBg(pillar.color)}`}
            >
              <div className="space-y-4">
                
                {/* Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-2xl font-black text-gray-300 group-hover:text-emerald-600/40 font-english transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors flex items-center gap-2">
                    <span>{pillar.titleBn}</span>
                    <span className="text-xs text-gray-500 font-normal font-english">({pillar.title})</span>
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {pillar.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Key Points List */}
                <div className="space-y-1.5 pt-2 border-t border-gray-200/60">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Link Footer */}
              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold text-[#1E7E34] group-hover:text-[#0F4A24]">
                <span>বিস্তারিত দেখুন</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
