import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CROP_GUIDES } from '../data/mockData';
import { Sprout, Droplets, Calendar, ShieldCheck, ArrowRight, Search, CheckCircle2, ChevronRight } from 'lucide-react';

export const CropGuidePage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedCrop, setSelectedCrop] = useState(CROP_GUIDES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCrops = CROP_GUIDES.filter((c) => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5" />
            <span>AYT Agro Crop Knowledge Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            ফসল চাষ ও সেচ নির্দেশিকা
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            বিভিন্ন ফসলের বৈজ্ঞানিক সেচ চক্র, মাটির প্রস্তুতি, সার প্রয়োগ ও বালাই ব্যবস্থাপনার বিস্তারিত ফিল্ড গাইড।
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Crop Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="ফসল খুঁজুন (যেমন: ধান, আলু)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9.5 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
                {filteredCrops.map((crop) => (
                  <div
                    key={crop.id}
                    onClick={() => setSelectedCrop(crop)}
                    className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                      selectedCrop.id === crop.id
                        ? 'bg-[#1E7E34] text-white shadow-md'
                        : 'bg-gray-50 hover:bg-emerald-50 text-gray-800'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold">{crop.name}</h4>
                      <span className={`text-[11px] ${selectedCrop.id === crop.id ? 'text-emerald-100' : 'text-gray-400'}`}>
                        {crop.category} • {crop.season}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${selectedCrop.id === crop.id ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Selected Crop Guide (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-md space-y-8 animate-in fade-in duration-150">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase">
                    {selectedCrop.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                    {selectedCrop.name} চাষ ও প্রযুক্তি গাইড
                  </h2>
                </div>

                <div className="p-3 bg-gray-50 rounded-2xl text-xs space-y-0.5 border border-gray-100 flex-shrink-0">
                  <span className="text-gray-400 block font-semibold">উপযুক্ত মৌসুম:</span>
                  <strong className="text-gray-900">{selectedCrop.season}</strong>
                </div>
              </div>

              {/* Irrigation Schedule */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-[#0F4A24]">
                  <Droplets className="w-5 h-5 text-[#1E7E34]" />
                  <span>সেচ সময়সূচি ও পানির পরিমাণ (Water Schedule)</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCrop.irrigationStages.map((stg, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#1E7E34] flex items-center justify-center font-bold text-xs flex-shrink-0 font-english mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">{stg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Practices & Diseases */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-[#0F4A24]">
                  <ShieldCheck className="w-5 h-5 text-[#1E7E34]" />
                  <span>উৎপাদন বৃদ্ধির মূল কৌশল ও বালাই ব্যবস্থাপনা</span>
                </div>

                <div className="space-y-2">
                  {selectedCrop.keyPractices.map((prac, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0" />
                      <span>{prac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Machinery & Equipment */}
              <div className="p-6 rounded-3xl bg-[#0F4A24] text-white space-y-4">
                <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider">
                  {selectedCrop.name} চাষে প্রয়োজনীয় AYT Agro যন্ত্রপাতি ও সেবা:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedCrop.recommendedMachinery.map((mach, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                      <span className="text-emerald-300">🚜</span>
                      <span className="font-semibold">{mach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => navigate('booking')}
                    className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>এই ফসলের জন্য সেবা বুক করুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
