import React from 'react';
import { NATURAL_FARMING_CARDS, AYT_NATURAL_FARMING_PROCESS } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { Sprout, Layers, Trees, Recycle, Droplets, ShieldCheck, Activity, ArrowRight, Check } from 'lucide-react';

export const NaturalFarmingShowcase: React.FC = () => {
  const { navigate } = useApp();

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-700" />;
      case 'Trees': return <Trees className="w-5 h-5 text-green-700" />;
      case 'Recycle': return <Recycle className="w-5 h-5 text-amber-700" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-sky-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-indigo-700" />;
      default: return <Sprout className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9] border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0F4A24] text-xs font-bold font-english">
            NATURAL FARMING PRINCIPLES
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
            প্রাকৃতিক কৃষির মূল দর্শন ও বৈজ্ঞানিক ভিত্তি
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            প্রকৃতি কখনোই এক রকমের সার বা বিষ দিয়ে মাটি তৈরি করে না। মাটি নিজেই একটি জীবন্ত কার্বনিক জগৎ।
          </p>
        </div>

        {/* 6 Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {NATURAL_FARMING_CARDS.map((card) => (
            <div 
              key={card.id}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                {getCardIcon(card.icon)}
              </div>
              <h3 className="text-base font-bold text-gray-900">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Step-by-Step Natural Farming Timeline */}
        <div className="mt-16 bg-white p-6 sm:p-10 rounded-3xl border border-emerald-100 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#0D3B1C]">
              AYT প্রাকৃতিক কৃষি বাস্তবায়ন প্রক্রিয়া (Step-by-Step Process)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              একটি জমিতে ধাপে ধাপে কীভাবে প্রাকৃতিক কৃষি প্রটোকল বাস্তবায়ন করা হয়:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AYT_NATURAL_FARMING_PROCESS.map((step) => (
              <div 
                key={step.step}
                className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 space-y-2 hover:bg-emerald-50/60 hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#1E7E34] text-white text-xs font-black flex items-center justify-center font-english">
                    {step.step}
                  </span>
                  <span className="text-sm font-bold text-gray-900">{step.titleBn}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-600 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>আপনার খামারের জন্য কাস্টমাইজড প্রাকৃতিক কৃষি মাস্টারপ্ল্যান পেতে যোগাযোগ করুন।</span>
            </div>
            <button
              onClick={() => navigate('natural-farming')}
              className="inline-flex items-center gap-2 bg-[#1E7E34] hover:bg-[#155D27] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>প্রাকৃতিক কৃষি গাইড দেখুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
