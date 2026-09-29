import React, { useState } from 'react';
import { SMART_WATER_SYSTEMS } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Droplets, 
  CloudRain, 
  Sun, 
  Gauge, 
  Calculator, 
  CheckCircle2, 
  ArrowRight,
  Waves,
  Pipette,
  Layers
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const SmartWaterPage: React.FC = () => {
  const { navigate } = useApp();

  // Irrigation Water Requirement Calculator
  const [bighaSize, setBighaSize] = useState<number>(2);
  const [cropType, setCropType] = useState<'vegetables' | 'orchard' | 'paddy'>('vegetables');

  const getWaterEstimate = () => {
    let litersPerDayPerBigha = 1800; // default drip
    if (cropType === 'orchard') litersPerDayPerBigha = 1200;
    if (cropType === 'paddy') litersPerDayPerBigha = 4500;

    const totalLiters = litersPerDayPerBigha * bighaSize;
    const conventionalLiters = totalLiters * 2.2;
    const waterSavedLiters = conventionalLiters - totalLiters;
    const estimatedCost = bighaSize * 16500;

    return { totalLiters, conventionalLiters, waterSavedLiters, estimatedCost };
  };

  const { totalLiters, conventionalLiters, waterSavedLiters, estimatedCost } = getWaterEstimate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0C2738] via-[#10364E] to-[#154664] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-900/80 border border-sky-500/40 text-sky-300 text-xs font-bold font-english">
              SMART WATER & PRECISION IRRIGATION
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              স্মার্ট সেচ ও আধুনিক পানি ব্যবস্থাপনা
            </h1>
            <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed">
              ৫০% পানি ও বিদ্যুৎ সাশ্রয় করে ড্রিপ ও মাইক্রো-স্প্রিংকলারের মাধ্যমে সরাসরি গাছের শিকড়ে পরিমিত পানি ও পুষ্টি পৌঁছান।
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => navigate('booking')}
                className="px-6 py-3 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                সেচ সিস্টেম ডিজাইন সার্ভে বুকিং
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* Systems Grid */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
              AYT স্মার্ট সেচ প্রযুক্তি ও সলিউশন
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              বাংলাদেশের আবহাওয়া ও মাটির উপযোগী সর্বাধুনিক সেচ সরঞ্জাম:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SMART_WATER_SYSTEMS.map((system) => (
              <div 
                key={system.id}
                className="rounded-3xl bg-white border border-gray-100 shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48">
                    <img 
                      src={system.image} 
                      alt={system.title}
                      className="w-full h-full object-cover" 
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-sky-950/80 text-sky-200 text-[10px] font-bold backdrop-blur-xs">
                      {system.tag}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">{system.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{system.desc}</p>
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-900 text-xs font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>দক্ষতা: {system.efficiency}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => navigate('booking')}
                    className="w-full py-2.5 rounded-xl bg-gray-50 hover:bg-sky-50 text-sky-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    কোটেশন ও ডিজাইন চান
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drip Irrigation Calculator */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-emerald-50 border border-sky-200 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold">
              <Calculator className="w-3.5 h-3.5" />
              <span>IRRIGATION SAVINGS ESTIMATOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
              ড্রিপ সেচ পানি ও বিদ্যুৎ সাশ্রয় ক্যালকুলেটর
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              জমির আয়তন অনুযায়ী দৈনিক পানি প্রয়োজন ও সাশ্রয়ের পরিমাণ হিসাব করুন:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">জমির আয়তন (বিঘা):</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={bighaSize}
                  onChange={(e) => setBighaSize(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-bold text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">ফসলের ধরন:</label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-bold text-gray-900"
                >
                  <option value="vegetables">সবজি ও ফসল (বেগুন, টমেটো, মরিচ, শশা)</option>
                  <option value="orchard">ফলবাগান (মাল্টা, ড্রাগন, পেয়ারা, আম)</option>
                  <option value="paddy">ধান ও ভুট্টা</option>
                </select>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-sky-100 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">প্রচলিত প্লাড সেচে দৈনিক পানি অপচয়:</span>
                  <span className="font-bold text-red-700 font-english">{conventionalLiters.toLocaleString()} লিটার</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-sky-50 rounded-xl">
                  <span className="text-gray-700 font-bold">AYT ড্রিপ সিস্টেমে পরিমিত পানি প্রয়োজন:</span>
                  <span className="font-black text-sky-900 font-english">{totalLiters.toLocaleString()} লিটার</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-emerald-50 rounded-xl font-bold text-emerald-950">
                  <span>দৈনিক সাশ্রয়কৃত পানি:</span>
                  <span className="font-black text-emerald-700 font-english">~{waterSavedLiters.toLocaleString()} লিটার</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('booking')}
                  className="w-full py-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  সার্ভে ও ইন্সটলেশন কোটেশন নিন
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
