import React, { useState } from 'react';
import { VERIFIED_FARM_PRODUCE } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { APP_CONFIG } from '../config/appConfig';
import { 
  ShieldCheck, 
  QrCode, 
  ExternalLink, 
  ShoppingBag, 
  MapPin, 
  CheckCircle2, 
  Search,
  Filter,
  Check
} from 'lucide-react';

export const VerifiedProducePage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedProduceId, setSelectedProduceId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredItems = VERIFIED_FARM_PRODUCE.filter(item => 
    item.farmName.toLowerCase().includes(search.toLowerCase()) ||
    item.farmerName.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase()) ||
    item.crops.some(c => c.toLowerCase().includes(search.toLowerCase()))
  );

  const activeModalItem = VERIFIED_FARM_PRODUCE.find(i => i.id === selectedProduceId);

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#082E19] via-[#104727] to-[#185E34] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-english">
              AYT VERIFIED NATURAL PRODUCE & TRACEABILITY
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              শতভাগ বিষমুক্ত ও কিউআর ট্রেসযোগ্য প্রাকৃতিক ফসল
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              AYT প্রটোকলে চাষকৃত ফল ও সবজির প্রতিটি ব্যাচের রয়েছে ডিজিটাল ট্রেসেবিলিটি। মাটি থেকে প্যাকেজিং পর্যন্ত সকল তথ্য দেখে নিশ্চিত হয়ে ক্রয় করুন।
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={APP_CONFIG.ecosystem.aytMart}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>AYT Mart এ অর্ডার করুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="ফসল বা খামারির নাম দিয়ে খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="text-xs text-emerald-800 font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>প্রতিটি ফসল ল্যাব টেস্টেড ও কীটনাশকমুক্ত</span>
          </div>
        </div>

        {/* Produce Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="rounded-3xl bg-white border border-gray-100 shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-emerald-900 flex items-center justify-center">
                  <div className="text-center p-6 text-white space-y-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-800/90 text-emerald-200 text-xs font-bold font-english">
                      {item.badge}
                    </span>
                    <h4 className="text-xl font-bold">{item.farmName}</h4>
                    <p className="text-xs text-emerald-200">{item.crops.join(' • ')}</p>
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-200 text-[10px] font-bold backdrop-blur-xs flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{item.farmId}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.farmName}</h3>
                  
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.location} ({item.farmerName})</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">চাষ পদ্ধতি:</span> {item.productionMethod}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">মাটির গ্রেড:</span> <span className="font-bold text-emerald-700 font-english">{item.soilHealthGrade}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">সর্বশেষ ফসল সংগ্রহ:</span> <span className="font-english">{item.lastHarvestDate}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{item.verificationStatus}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedProduceId(item.id)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-100 hover:bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <QrCode className="w-4 h-4" />
                  <span>ট্রেস রেকর্ড দেখুন</span>
                </button>
                <a
                  href={APP_CONFIG.ecosystem.aytMart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold flex items-center justify-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>অর্ডার</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Traceability Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs text-gray-400 font-mono font-english">{activeModalItem.farmId}</span>
                <h3 className="text-xl font-bold text-gray-900">{activeModalItem.farmName}</h3>
              </div>
              <button 
                onClick={() => setSelectedProduceId(null)}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="font-bold text-emerald-900">ডিজিটাল কোয়ালিটি সার্টিফিকেট:</div>
                <p className="text-emerald-800 mt-0.5">
                  এই খামারের ফসল AYT ন্যাচারাল প্রটোকল অনুসারে মাটির স্বাস্থ্য পরীক্ষা ও ড্রিপ সেচ দ্বারা উৎপাদিত। কোনো সিন্থেটিক রাসায়নিক কীটনাশক প্রয়োগ করা হয়নি।
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500">উৎপাদক কৃষক:</span>
                  <div className="font-bold text-gray-900">{activeModalItem.farmerName}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500">লোকেশন:</span>
                  <div className="font-bold text-gray-900">{activeModalItem.location}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500">পানির উৎস:</span>
                  <div className="font-bold text-gray-900">{activeModalItem.waterSource}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500">আয়তন:</span>
                  <div className="font-bold text-gray-900">{activeModalItem.area}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
              <button
                onClick={() => setSelectedProduceId(null)}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <a
                href={APP_CONFIG.ecosystem.aytMart}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs flex items-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>মার্টে অর্ডার দিন</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

