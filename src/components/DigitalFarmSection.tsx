import React from 'react';
import { DEMO_DIGITAL_FARM_PROFILE } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Smartphone, 
  QrCode, 
  Bot, 
  LineChart, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Calendar, 
  MapPin, 
  Award,
  Sparkles
} from 'lucide-react';

export const DigitalFarmSection: React.FC = () => {
  const { navigate } = useApp();
  const farm = DEMO_DIGITAL_FARM_PROFILE;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F2F6FA] to-white border-b border-indigo-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold font-english">
              SMART DIGITAL FARMING
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
              ডিজিটাল খামার খাতা ও কিউআর কোড ভেরিফিকেশন
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              বিনা খরচে খামারের ডিজিটাল প্রোফাইল তৈরি করুন। মাটির সেন্সর রিডিং, স্প্রে লগ, সার প্রয়োগ হিস্ট্রি এবং ভোক্তার কাছে পণ্যের বিশুদ্ধতার প্রমাণ দিন কিউআর কোডে।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('digital-farm')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>ডিজিটাল ড্যাশবোর্ড খুলুন</span>
            </button>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Live Digital Farm Card UI Preview */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-indigo-200/80 shadow-md space-y-6">
            
            {/* Top Farm Identity Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    AYT Verified Farm
                  </span>
                  <span className="text-xs text-gray-400 font-english">ID: {farm.farmId}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{farm.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-400" />{farm.location}</span>
                  <span>•</span>
                  <span>আয়তন: {farm.totalArea}</span>
                  <span>•</span>
                  <span>কৃষক: {farm.ownerName}</span>
                </div>
              </div>

              {/* QR Verification Badge */}
              <div className="flex items-center gap-2.5 bg-gray-50 p-2.5 rounded-2xl border border-gray-200/80">
                <div className="w-10 h-10 rounded-lg bg-indigo-900 text-white flex items-center justify-center">
                  <QrCode className="w-6 h-6" />
                </div>
                <div className="text-[11px]">
                  <div className="font-bold text-gray-900">ভোক্তা ভেরিফিকেশন</div>
                  <div className="text-emerald-700 font-semibold">100% সার্টিফাইড</div>
                </div>
              </div>
            </div>

            {/* Live Sensor Metrics Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-center">
                <span className="text-[10px] text-gray-500">মাটির আর্দ্রতা (Sensor)</span>
                <div className="text-lg font-black text-indigo-950 font-english">{farm.currentMoisture}%</div>
                <span className="text-[10px] text-emerald-700 font-bold">স্বাভাবিক</span>
              </div>
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 text-center">
                <span className="text-[10px] text-gray-500">মাটির স্বাস্থ্য</span>
                <div className="text-lg font-black text-amber-950 font-english">{farm.soilHealthStatus}</div>
                <span className="text-[10px] text-emerald-700 font-bold">আদর্শ</span>
              </div>
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-center">
                <span className="text-[10px] text-gray-500">ফসলের স্ট্যাটাস</span>
                <div className="text-lg font-black text-emerald-950 font-english">{farm.cropStatus}</div>
                <span className="text-[10px] text-emerald-700 font-bold">সমৃদ্ধ</span>
              </div>
            </div>

            {/* Current Crops Tags */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-gray-700">বর্তমান আবাদকৃত ফসল:</span>
              <div className="flex flex-wrap gap-2">
                {farm.primaryCrops.map((crop, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-medium">
                    🌾 {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Timeline Activities */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-600" />
                <span>সাম্প্রতিক ফিল্ড অ্যাক্টিভিটি লগ (Field Activity Logs):</span>
              </span>
              <div className="space-y-2">
                {farm.activities.map((act) => (
                  <div key={act.id} className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-gray-900">{act.title}</span>
                      <span className="text-gray-500 text-[11px] ml-2 font-english">({act.date})</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      {act.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* Right Column: 4 Feature Value Props */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-2">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">AI ক্রপ ও রোগ নির্ণয় সহকারী</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                ফসলের উপসর্গ বা পোকার ছবি দিয়ে তাৎক্ষণিক জৈব সমাধান ও পরিচর্যার পরামর্শ নিন।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <QrCode className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">ভোক্তা আস্থা ও ট্রেসেবিলিটি</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                আপনার ফল ও সবজির প্যাকেটে কিউআর কোড প্রিন্ট করে দেখান কোনো বিষাক্ত কীটনাশক দেওয়া হয়নি।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-2">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <LineChart className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">লাভ-ক্ষতি ও খরচ ক্যালকুলেটর</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                বীজ, সার, সেচ ও শ্রমিকের খরচ সংরক্ষণ করে প্রতি বিঘায় সঠিক মুনাফা বিশ্লেষণ।
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
