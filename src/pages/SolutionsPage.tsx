import React from 'react';
import { useApp } from '../context/AppContext';
import { SOLUTIONS_DATA } from '../data/mockData';
import { Lightbulb, CheckCircle2, ArrowRight, MessageSquare, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const SolutionsPage: React.FC = () => {
  const { navigate } = useApp();

  const handleWhatsAppConsult = (title: string) => {
    const text = `🌾 AYT Agro কৃষি সমাধান কনসালটেশন:\n\nসমাধান প্যাকেজ: ${title}\n\nআমার খামারে এই সমাধান বাস্তবায়নের জন্য বিস্তারিত পরামর্শ ও বাজেট প্রাক্কলন জানতে চাই।`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Banner */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Problem-Centric Agricultural Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            কৃষি সমস্যার সমন্বিত সমাধান
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            পানি সংকট, বিদ্যুৎ ও জ্বালানি অপচয়, জলাবদ্ধতা বা বাগান পরিচর্যা—আপনার খামারের প্রতিটি চ্যালেঞ্জ মোকাবিলায় বৈজ্ঞানিক ও প্রকৌশলসম্মত প্যাকেজ।
          </p>
        </div>
      </div>

      {/* Solutions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {SOLUTIONS_DATA.map((sol, index) => (
          <div
            key={sol.id}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 h-72 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src={sol.image}
                alt={sol.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#0F4A24] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {sol.tag}
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-english">
                  Solution 0{index + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1 leading-snug">
                  {sol.title}
                </h2>
              </div>

              {/* Problem vs Solution */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 text-gray-700 space-y-1">
                  <span className="font-bold text-red-700 flex items-center gap-1.5 text-xs">
                    <AlertCircle className="w-3.5 h-3.5" /> সাধারণ সংকট ও চ্যালেঞ্জ:
                  </span>
                  <p>{sol.problem}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-gray-700 space-y-1">
                  <span className="font-bold text-[#0F4A24] flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34]" /> AYT Agro-এর বাস্তবায়ন প্যাকেজ:
                  </span>
                  <p>{sol.solution}</p>
                </div>
              </div>

              {/* Expected Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#1E7E34]" /> নিশ্চিত সুফল ও লাভজনকতা:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sol.expectedBenefit.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-800 font-semibold bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34] flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigate('booking')}
                  className="py-3 px-5 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>সমাধানটি বাস্তবায়ন করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsAppConsult(sol.title)}
                  className="py-3 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F4A24] text-xs font-bold border border-emerald-200 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#1E7E34]" />
                  <span>WhatsApp এ পরামর্শ নিন</span>
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
