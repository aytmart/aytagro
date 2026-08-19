import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MACHINERY_DATA } from '../data/mockData';
import { Tractor, Search, MapPin, CheckCircle2, MessageSquare, ArrowRight, Filter, ShieldCheck, UserCheck } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { createRentalWhatsAppLink } from '../utils/whatsapp';

export const MachineryRentalPage: React.FC = () => {
  const { navigate, addToQuote } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'সকল যন্ত্রপাতি' },
    { id: 'জমি প্রস্তুত', label: 'জমি প্রস্তুত (Tillage)' },
    { id: 'ফসল কাটা', label: 'ফসল কাটা (Harvesting)' },
    { id: 'সেচ ও পাম্প', label: 'সেচ ও পাম্প (Pumping)' },
    { id: 'স্প্রে', label: 'বালাইদমন ও স্প্রে' },
    { id: 'সংগ্রহোত্তর', label: 'সংগ্রহোত্তর প্রসেসিং' },
  ];

  const locations = ['all', 'বগুড়া', 'নাটোর', 'দিনাজপুর', 'রংপুর', 'ময়মনসিংহ', 'যশোর', 'কুমিল্লা'];

  const filteredMachines = MACHINERY_DATA.filter((m) => {
    const matchesCat = selectedCategory === 'all' || m.category.includes(selectedCategory);
    const matchesLoc = selectedLocation === 'all' || m.location.includes(selectedLocation);
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.specs.power.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesLoc && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero Banner */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Tractor className="w-3.5 h-3.5" />
            <span>AYT Agro Machinery Rental</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আধুনিক কৃষি যন্ত্রপাতি ভাড়া
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            মেশিন কেনার ভারী মূলধনের চাপ নেই — আধুনিক পাওয়ার টিলার, কম্বাইন হারভেস্টার, সোলার ট্রলি পাম্প ও স্প্রেয়ার দিন বা একর চুক্তিতে সহজে ভাড়া নিন।
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-gray-100 space-y-3">
          
          {/* Top Row: Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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

          {/* Bottom Row: Location Filter & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1E7E34]" /> জেলা হাব:
              </span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="text-xs font-semibold py-1.5 px-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-hidden focus:border-[#1E7E34]"
              >
                <option value="all">সারাদেশ (সকল হাব)</option>
                {locations.filter(l => l !== 'all').map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="যন্ত্রপাতির নাম বা মডেল খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9.5 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Machinery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredMachines.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 space-y-3">
            <p className="text-base font-bold text-gray-700">কোনো যন্ত্রপাতি পাওয়া যায়নি</p>
            <p className="text-xs text-gray-400">ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMachines.map((mach) => (
              <div
                key={mach.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 bg-[#F8FAF8] flex items-center justify-center p-4 relative overflow-hidden">
                    <img
                      src={mach.image}
                      alt={mach.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {mach.category}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        (mach.availability === 'Available' || mach.status === 'Available') ? 'bg-emerald-100 text-[#0F4A24]' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {(mach.availability === 'Available' || mach.status === 'Available') ? '● প্রস্তুত আছে' : '● রিজার্ভ করা'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#1E7E34]" />
                      <span>{mach.location}</span>
                    </div>

                    <h3 
                      onClick={() => navigate('machine-details', mach.slug)}
                      className="text-lg font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug cursor-pointer"
                    >
                      {mach.name}
                    </h3>

                    {/* Pricing Block */}
                    <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-gray-500 font-semibold block">দৈনিক ভাড়া:</span>
                        <span className="text-xl font-black text-[#1E7E34] font-english">৳ {mach.pricePerDay.toLocaleString()}</span>
                        <span className="text-xs text-gray-500"> / দিন</span>
                      </div>
                      {mach.pricePerAcre && (
                        <div className="text-right">
                          <span className="text-[11px] text-gray-500 font-semibold block">একর চুক্তি:</span>
                          <span className="text-sm font-bold text-gray-800 font-english">৳ {mach.pricePerAcre.toLocaleString()}</span>
                          <span className="text-xs text-gray-500"> / একর</span>
                        </div>
                      )}
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2 rounded-xl bg-gray-50 text-gray-700">
                        <span className="text-[10px] text-gray-400 block">ক্ষমতা/পাওয়ার:</span>
                        <strong className="font-english">{mach.specs?.power || mach.power || 'স্ট্যান্ডার্ড'}</strong>
                      </div>
                      <div className="p-2 rounded-xl bg-gray-50 text-gray-700">
                        <span className="text-[10px] text-gray-400 block">কাজের গতি:</span>
                        <strong className="font-english">{mach.specs?.capacity || mach.capacity || 'দ্রুত'}</strong>
                      </div>
                    </div>

                    {/* Operator Tag */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 pt-1">
                      <UserCheck className="w-4 h-4 text-[#1E7E34]" />
                      <span>{(mach.operatorIncluded || mach.operatorAvailable) ? 'দক্ষ চালক/অপারেটর সহ' : 'চালক ছাড়া / চুক্তি সাপেক্ষে'}</span>
                    </div>

                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => navigate('machine-details', mach.slug)}
                    className="py-2.5 px-3 rounded-xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    স্পেসিফিকেশন
                  </button>

                  <button
                    onClick={() => navigate('booking', mach.slug)}
                    className="py-2.5 px-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-xs transition-colors text-center cursor-pointer"
                  >
                    ভাড়া বুক করুন
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
