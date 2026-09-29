import React, { useState } from 'react';
import { SIX_CORE_PILLARS, NATURAL_FARMING_CARDS, AYT_NATURAL_FARMING_PROCESS, NATURAL_PACKAGES } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Calculator,
  ChevronDown,
  ChevronUp,
  MessageSquare
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const NaturalFarmingPage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedTab, setSelectedTab] = useState<'overview' | 'process' | 'packages'>('overview');
  const [expandedPackage, setExpandedPackage] = useState<string>('pkg-1');

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-b from-[#062612] via-[#0B391A] to-[#124D25] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80" 
            alt="Natural Farming" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-english">
              AYT NATURAL FARMING PROTOCOL
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              প্রকৃতির নিয়মে কৃষি: বিষমুক্ত, উর্বর ও লাভজনক
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              মাটির জীববৈচিত্র্য রক্ষা করে রাসায়নিক কীটনাশক ও ক্ষতিকর সিন্থেটিক সার ছাড়াই টেকসই ও সর্বোচ্চ ফলনশীল প্রাকৃতিক কৃষি ব্যবস্থাপনা।
            </p>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => setSelectedTab('overview')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTab === 'overview' ? 'bg-[#28A745] text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                মূল দর্শন ও স্তম্ভ
              </button>
              <button
                onClick={() => setSelectedTab('process')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTab === 'process' ? 'bg-[#28A745] text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                বাস্তবায়ন প্রক্রিয়া (Step-by-Step)
              </button>
              <button
                onClick={() => setSelectedTab('packages')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTab === 'packages' ? 'bg-[#28A745] text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                প্রাকৃতিক কৃষি প্যাকেজ ও খরচ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Tab 1: Overview & Principles */}
        {selectedTab === 'overview' && (
          <div className="space-y-16">
            
            {/* Core Philosophy Grid */}
            <div className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
                  প্রাকৃতিক কৃষির ৬টি মৌলিক ভিত্তি
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  প্রকৃতি এবং মাটির স্বাভাবিক অনুজীব বিজ্ঞানকে সাথে নিয়ে গড়ে তোলা পূর্ণাঙ্গ সমাধান।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {NATURAL_FARMING_CARDS.map((card) => (
                  <div key={card.id} className="p-6 rounded-2xl bg-[#F8FAF9] border border-gray-100 hover:border-emerald-500 transition-all space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Matrix: Conventional vs AYT Natural Farming */}
            <div className="p-6 sm:p-10 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0D3B1C]">
                  প্রচলিত রাসায়নিক চাষ বনাম AYT প্রাকৃতিক কৃষি
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  দীর্ঘমেয়াদী লাভ ও স্বাস্থ্য সুরক্ষার পার্থক্য এক নজরে:
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-emerald-200 text-gray-900">
                      <th className="py-3 px-4 font-bold">বিষয়</th>
                      <th className="py-3 px-4 font-bold text-red-700 bg-red-50/50 rounded-tl-xl">প্রচলিত রাসায়নিক পদ্ধতি</th>
                      <th className="py-3 px-4 font-bold text-emerald-800 bg-emerald-100/60 rounded-tr-xl">AYT প্রাকৃতিক কৃষি পদ্ধতি</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-100">
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-800">মাটির দীর্ঘমেয়াদী স্বাস্থ্য</td>
                      <td className="py-3 px-4 text-red-800 bg-red-50/30">মাটি শক্ত হয়, অনুজীব ধ্বংস হয়, পিএইচ নষ্ট হয়</td>
                      <td className="py-3 px-4 text-emerald-900 bg-emerald-100/30 font-semibold">মাটি নরম, কেঁচো ও উপকারী অনুজীবে সমৃদ্ধ হয়</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-800">কীটনাশকের ব্যয় ও স্বাস্থ্যঝুঁকি</td>
                      <td className="py-3 px-4 text-red-800 bg-red-50/30">উচ্চ ব্যয়, ক্যান্সার ও শ্বাসকষ্টের মারাত্মক ঝুঁকি</td>
                      <td className="py-3 px-4 text-emerald-900 bg-emerald-100/30 font-semibold">শূন্য রাসায়নিক বিষ, নিরাপদ স্বাস্থ্য ও কম খরচ</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-800">পানির চাহিদা ও সেচ খরচ</td>
                      <td className="py-3 px-4 text-red-800 bg-red-50/30">অতিরিক্ত পানি প্রয়োজন, বাষ্পীভবনে অপচয়</td>
                      <td className="py-3 px-4 text-emerald-900 bg-emerald-100/30 font-semibold">মালচিং ও ড্রিপে ৫০% পর্যন্ত পানি সাশ্রয়</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-800">বাজারমূল্য ও ভোক্তার চাহিদা</td>
                      <td className="py-3 px-4 text-red-800 bg-red-50/30">সাধারণ পাইকারি দর, রাসায়নিক ভীতি</td>
                      <td className="py-3 px-4 text-emerald-900 bg-emerald-100/30 font-semibold">২০-৪০% প্রিমিয়াম প্রিমিয়াম রেট ও বিশ্বস্ত ক্রেতা</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: 9-Step Process Timeline */}
        {selectedTab === 'process' && (
          <div className="space-y-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
                AYT ৯-ধাপ বিশিষ্ট প্রাকৃতিক কৃষি রূপান্তর প্রক্রিয়া
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                যে কোনো জমিকে বৈজ্ঞানিক নিয়মে প্রাকৃতিক চাষের আওতায় নিয়ে আসার ধাপগুলো:
              </p>
            </div>

            <div className="space-y-4">
              {AYT_NATURAL_FARMING_PROCESS.map((step) => (
                <div 
                  key={step.step}
                  className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1E7E34] text-lg font-black flex items-center justify-center flex-shrink-0 font-english">
                    {step.step}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900">{step.titleBn}</h3>
                      <span className="text-xs text-gray-400 font-english font-semibold">({step.title})</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => navigate('booking')}
                    className="whitespace-nowrap px-4 py-2 rounded-xl bg-gray-50 hover:bg-emerald-50 text-emerald-800 text-xs font-bold transition-colors"
                  >
                    পরামর্শ নিন
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Packages */}
        {selectedTab === 'packages' && (
          <div className="space-y-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
                প্রাকৃতিক কৃষি প্যাকেজ ও মাঠ সেবা
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                আপনার খামারের আয়তন অনুযায়ী সাশ্রয়ী ও পূর্ণাঙ্গ প্রাকৃতিক কৃষি সহায়তা প্যাকেজ:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NATURAL_PACKAGES.map((pkg) => (
                <div 
                  key={pkg.id}
                  className="rounded-3xl bg-white border border-gray-200 hover:border-emerald-500 shadow-xs hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                      {pkg.suitableArea}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <div className="text-sm font-semibold text-emerald-800">
                      {pkg.targetFarmer}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pkg.tagline}
                    </p>

                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <span className="text-xs font-bold text-gray-800">প্যাকেজের প্রধান সেবাসমূহ:</span>
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => navigate('booking')}
                      className="w-full py-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      প্যাকেজ বুকিং করুন
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#092B15] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              আপনার জমিতে প্রাকৃতিক কৃষি শুরু করতে চান?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90">
              আমাদের কৃষি প্রকৌশলী ও টেকনিক্যাল টিম আপনার খামার ভিজিট করে সয়েল টেস্ট ও সম্পূর্ণ কার্যপরিকল্পনা প্রস্তুত করবে।
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('booking')}
              className="px-6 py-3.5 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              মাঠ ভিজিট বুকিং
            </button>
            <a
              href={getWhatsAppLink('হ্যালো AYT Agro, আমি প্রাকৃতিক কৃষি প্রটোকল বাস্তবায়ন করতে চাই।')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              হোয়াটসঅ্যাপে আলোচনা
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
