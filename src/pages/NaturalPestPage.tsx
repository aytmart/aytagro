import React, { useState } from 'react';
import { PEST_MANAGEMENT_GUIDES } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Bug, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  Shield,
  Layers
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const NaturalPestPage: React.FC = () => {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCropFilter, setSelectedCropFilter] = useState('all');

  const filteredPests = PEST_MANAGEMENT_GUIDES.filter((pest) => {
    const matchesSearch = pest.pestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.pestNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.symptoms.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCrop = selectedCropFilter === 'all' || 
      pest.targetCrops.some(c => c.toLowerCase().includes(selectedCropFilter.toLowerCase()));

    return matchesSearch && matchesCrop;
  });

  return (
    <div className="min-h-screen bg-[#F7FAF8]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0C301D] via-[#103D25] to-[#154E30] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold font-english">
              NATURAL PEST & DISEASE MANAGEMENT (IPM)
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              বিষমুক্ত সমন্বিত বালাই দমন গাইড
            </h1>
            <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
              ফসলের রোগ ও পোকা প্রতিরোধে ক্ষতিকর রাসায়নিক বিষ বর্জন করুন। ফেরোমোন ট্র্যাপ, উপকারী পোকা সংরক্ষণ ও নিম নির্যাসের সাহায্যে নিরাপদ ফসল ফলান।
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="পোকার নাম বা লক্ষণ দিয়ে খুঁজুন (যেমন: মাছি, মাজরা, সাদা মাছি)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-xs font-bold text-gray-700">ফসল:</span>
            <select
              value={selectedCropFilter}
              onChange={(e) => setSelectedCropFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-800 bg-white"
            >
              <option value="all">সকল ফসল</option>
              <option value="ধান">ধান (Paddy)</option>
              <option value="বেগুন">বেগুন ও সবজি</option>
              <option value="ভুট্টা">ভুট্টা</option>
              <option value="শশা">লাউ ও শশা</option>
            </select>
          </div>

        </div>

        {/* Pest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPests.map((pest) => (
            <div 
              key={pest.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-start justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Bug className="w-5 h-5 text-teal-600" />
                    <span>{pest.pestName}</span>
                  </h3>
                  <span className="text-xs italic text-gray-500 font-english font-medium">{pest.pestNameEn}</span>
                </div>
                <span className={`text-[11px] px-3 py-1 rounded-full font-bold ${
                  pest.riskCategory === 'Action Required' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  ঝুঁকি: {pest.riskCategory}
                </span>
              </div>

              <div className="space-y-2 text-xs text-gray-700">
                <div>
                  <span className="font-bold text-gray-900">আক্রান্ত ফসলসমূহ:</span>{' '}
                  <span className="text-teal-800 font-semibold">{pest.targetCrops.join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">ক্ষতির লক্ষণ:</span> {pest.symptoms}
                </div>
                <div>
                  <span className="font-bold text-gray-900">প্রতিরোধমূলক ব্যবস্থা:</span> {pest.prevention}
                </div>

                
                <div className="p-3.5 bg-teal-50/80 rounded-2xl border border-teal-100 text-teal-950 mt-2 space-y-1">
                  <div className="font-bold text-teal-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>জৈব ও প্রাকৃতিক দমন প্রটোকল:</span>
                  </div>
                  <p className="leading-relaxed">{pest.biologicalMechanicalControl}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Homemade Bio-Remedy Recipes */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-teal-100 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-[#0D3B1C]">
              ঘরে তৈরি প্রাকৃতিক বালাইনাশক রেসিপি (Bio-Formulations)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              সহজলভ্য ভেষজ উপাদান দিয়ে কম খরচে কার্যকর স্প্রে তৈরির নিয়ম:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2">
              <h4 className="text-sm font-bold text-teal-950">১. নিম তেলের নির্যাস স্প্রে</h4>
              <p className="text-xs text-gray-700">
                প্রতি লিটার পানিতে ৫ মিলি নিম তেল ও ২ মিলি হালকা ডিটারজেন্ট মিশিয়ে স্প্রে করুন। চুষে খাওয়া পোকা ও শুঁয়োপোকা নিয়ন্ত্রণে অত্যন্ত কার্যকর।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-2">
              <h4 className="text-sm font-bold text-amber-950">২. রসুন-কাঁচা মরিচের স্প্রে</h4>
              <p className="text-xs text-gray-700">
                ৫০ গ্রাম রসুন ও ৫০ গ্রাম কাঁচা মরিচ পেস্ট করে ১ লিটার পানিতে ২৪ ঘণ্টা ভিজিয়ে ছেঁকে স্প্রে করুন। তীব্র গন্ধে পোকা পালিয়ে যায়।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <h4 className="text-sm font-bold text-emerald-950">৩. ট্রাইকো-ডার্মা পাউডার দ্রবণ</h4>
              <p className="text-xs text-gray-700">
                মাটির ছত্রাকজনিত গোড়া পচা ও ঢলে পড়া রোগ দমনে ট্রাইকোডার্মা মিশ্রিত পানি গাছের গোড়ায় প্রয়োগ করুন।
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="p-8 rounded-3xl bg-[#0B2A18] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">আপনার ফসলে কোনো নতুন পোকা বা রোগ দেখা দিয়েছে?</h4>
            <p className="text-xs text-emerald-200">আমাদের হোয়াটসঅ্যাপ নাম্বারে আক্রান্ত গাছের ছবি পাঠান। কৃষিবিদ বিনামূল্যে প্রাকৃতিক সমাধান দেবেন।</p>
          </div>
          <a
            href={getWhatsAppLink('হ্যালো AYT Agro, আমার ফসলে পোকার সমস্যা হয়েছে। প্রাকৃতিক পরামর্শ চাই।')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            ছবি পাঠিয়ে সমাধান নিন
          </a>
        </div>

      </div>
    </div>
  );
};
