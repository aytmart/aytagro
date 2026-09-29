import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/mockData';
import { Droplets, Search, ArrowRight, CheckCircle2, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const ServicesPage: React.FC = () => {
  const { navigate, addToQuote } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'সকল সেবা' },
    { id: 'সেচ ও পানি', label: 'স্মার্ট সেচ ও পানি' },
    { id: 'নিষ্কাশন', label: 'ড্রেনেজ ও নিষ্কাশন' },
    { id: 'মাটি ও ল্যাব', label: 'মাটি ও ল্যাব টেস্ট' },
    { id: 'ফসল পরিচর্যা', label: 'ফসল পরিচর্যা' },
    { id: 'রক্ষণাবেক্ষণ', label: 'যন্ত্রপাতি সার্ভিসিং' },
    { id: 'সোলার', label: 'সোলার এগ্রিকালচার' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Page Header Banner */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5" />
            <span>AYT Agro Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আধুনিক কৃষি সেবাসমূহ
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            স্মার্ট সেচ, ড্রেনেজ, মাটি পরীক্ষা, ফসল পরিচর্যা এবং সৌর কৃষির মাধ্যমে খামারের উৎপাদন বৃদ্ধি ও খরচ কমানোর সর্বাধুনিক প্রযুক্তি সেবা।
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#1E7E34] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-[#1E7E34]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="সেবা খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
            />
          </div>

        </div>
      </div>

      {/* Services List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 space-y-3">
            <p className="text-base font-bold text-gray-700">কোনো সেবা পাওয়া যায়নি</p>
            <p className="text-xs text-gray-400">অন্য কোনো কি-ওয়ার্ড দিয়ে খুঁজুন বা ফিল্টার পরিবর্তন করুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md font-english">
                      {srv.code}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#0F4A24] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      {srv.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 
                      onClick={() => navigate('service-details', srv.slug)}
                      className="text-lg font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug cursor-pointer"
                    >
                      {srv.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {srv.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {srv.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34] flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span>মূল্য নির্ধারণ:</span>
                      <span className="font-bold text-[#1E7E34]">{srv.pricing?.startingPrice || srv.priceGuideline || 'আলোচনা সাপেক্ষে'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => navigate('service-details', srv.slug)}
                    className="py-2.5 px-3 rounded-xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    বিস্তারিত
                  </button>

                  <button
                    onClick={() => navigate('booking', srv.slug)}
                    className="py-2.5 px-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-xs transition-colors text-center cursor-pointer"
                  >
                    বুকিং করুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
