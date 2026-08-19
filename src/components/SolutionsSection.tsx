import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { SOLUTIONS_DATA, COMPANY_INFO } from '../data/mockData';
import { SolutionItem } from '../types';

export const SolutionsSection: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<SolutionItem>(SOLUTIONS_DATA[0]);

  const handleInquireSolution = (sol: SolutionItem) => {
    const text = encodeURIComponent(`নমস্কার, আমি AYT Agro-এর "${sol.title}" সম্পর্কে বিস্তারিত প্যাকেজ ও খরচ জানতে চাই।`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="solutions" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EE] text-[#1E7E34] text-xs font-bold uppercase tracking-wider mb-2">
            কাস্টমাইজড কৃষি প্যাকেজ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C]">
            আপনার জমি, আপনার প্রয়োজন — সমাধান আমাদের
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            ক্ষুদ্র পারিবারিক বাগান থেকে শুরু করে বৃহৎ বাণিজ্যিক প্রজেক্ট — প্রতিটি চাহিদার জন্য আমাদের রয়েছে বিশেষায়িত ইঞ্জিনিয়ারিং প্যাকেজ।
          </p>
        </div>

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((sol, index) => (
            <div
              key={sol.id}
              id={`solution-card-${index + 1}`}
              className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-gray-100/90 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Tag */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#0F4A24]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {sol.tag}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base sm:text-lg font-bold leading-tight drop-shadow-xs">{sol.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {sol.problem}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {sol.expectedBenefit.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Metric & CTA Button */}
              <div className="p-5 pt-0">
                <div className="bg-[#EBF7EE] p-2.5 rounded-xl text-center mb-3 text-xs font-bold text-[#165B30]">
                  🔥 ফলাফল: {sol.expectedBenefit[0] || 'উচ্চ ফলন ও খরচ হ্রাস'}
                </div>

                <button
                  onClick={() => handleInquireSolution(sol)}
                  id={`solution-inquire-btn-${index + 1}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#1E7E34] text-[#1E7E34] hover:text-white border border-[#1E7E34] text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>সমাধানটি নিতে যোগাযোগ করুন</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
