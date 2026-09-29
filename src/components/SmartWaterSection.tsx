import React from 'react';
import { SMART_WATER_SYSTEMS } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { Droplets, CloudRain, Gauge, Waves, Sun, GitFork, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SmartWaterSection: React.FC = () => {
  const { navigate } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-5 h-5 text-sky-600" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-sky-600" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-indigo-600" />;
      case 'Waves': return <Waves className="w-5 h-5 text-teal-600" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'GitFork': return <GitFork className="w-5 h-5 text-blue-600" />;
      default: return <Droplets className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold font-english">
              SMART WATER & IRRIGATION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
              এক ফোঁটাও অপচয় নয়, সঠিক সময়ে সঠিক সেচ
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              ড্রিপ ইরিগেশন, স্প্রিংকলার, সয়েল সেন্সর এবং বৃষ্টির পানি সঞ্চয়ের মাধ্যমে খরা ও জলাবদ্ধতামুক্ত আধুনিক পানি ব্যবস্থাপনা।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('smart-water')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <span>সকল সেচ ব্যবস্থা</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('booking')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#1E7E34] hover:bg-[#155D27] px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <span>সেচ সার্ভে বুকিং</span>
            </button>
          </div>
        </div>

        {/* 6 Water Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMART_WATER_SYSTEMS.map((system) => (
            <div 
              key={system.id}
              onClick={() => navigate('smart-water')}
              className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={system.image} 
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-sky-900/90 text-sky-200 text-[11px] font-bold backdrop-blur-md">
                    {system.tag}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                      {getIcon(system.icon)}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-sky-800 transition-colors">
                      {system.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {system.desc}
                  </p>

                  <div className="pt-2 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{system.efficiency}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-sky-700">
                <span>বিস্তারিত স্পেসিফিকেশন</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
