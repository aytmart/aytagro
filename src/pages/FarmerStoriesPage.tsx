import React from 'react';
import { FARMER_STORIES } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Quote, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const FarmerStoriesPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-[#F7F9F7]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0C2A18] via-[#124225] to-[#1A5732] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-english">
              REAL FARMER EXPERIENCES & IMPACT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              কৃষকের মুখে প্রাকৃতিক কৃষির সাফল্যের গল্প
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              AYT Agro-এর প্রাকৃতিক কৃষি ও স্মার্ট সেচ প্রটোকল বাস্তবায়ন করে বাংলাদেশের বিভিন্ন জেলার কৃষকেরা কীভাবে উৎপাদন খরচ কমিয়েছেন ও নিরাপদ ফসল ফলিয়েছেন।
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FARMER_STORIES.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-3xl border border-emerald-100 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between p-6 sm:p-8 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center font-bold">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-english">
                    {story.crop}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">{story.farmerName}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{story.location}</span>
                    <span>•</span>
                    <span>{story.farmSize}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  {story.experience}
                </p>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>ফলাফল: {story.result}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F3A22] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold">আপনিও আপনার খামারকে প্রাকৃতিক কৃষিতে রূপান্তর করতে চান?</h4>
            <p className="text-xs text-emerald-200">আমাদের অভিজ্ঞ টেকনিক্যাল টিম আপনার পাশে থাকবে প্রতিটি ধাপে।</p>
          </div>
          <button
            onClick={() => navigate('booking')}
            className="px-6 py-3 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            পরামর্শ সেবা শুরু করুন
          </button>
        </div>

      </div>
    </div>
  );
};
