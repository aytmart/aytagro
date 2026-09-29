import React from 'react';
import { Cpu, Users, Award, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const ecosystemSteps = [
    { step: '01', title: 'Problem', label: 'মাঠের সমস্যা চিহ্নিতকরণ', color: 'bg-amber-100 text-amber-800' },
    { step: '02', title: 'Solution', label: 'প্রকৌশল সমাধান নির্ধারণ', color: 'bg-emerald-100 text-emerald-800' },
    { step: '03', title: 'Service', label: 'মাঠ ডেলিভারি ও বাস্তবায়ন', color: 'bg-blue-100 text-blue-800' },
    { step: '04', title: 'Support', label: 'ফলন পর্যন্ত নিরবচ্ছিন্ন সেবা', color: 'bg-purple-100 text-purple-800' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Ecosystem Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80"
                  alt="AYT Agro Farmer in Bangladesh Field"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Verified Trust Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1E7E34] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">শতভাগ কৃষকবান্ধব সেবা</h4>
                    <p className="text-xs text-gray-500">বাংলাদেশে প্রথম স্মার্ট এগ্রো ইকোসিস্টেম</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Ecosystem & 3 Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EBF7EE] text-[#1E7E34] text-xs font-bold uppercase tracking-wider">
              আমাদের লক্ষ্য ও দর্শন
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C] leading-tight">
              কৃষিকে সহজ করতে <span className="text-[#1E7E34]">AYT Agro</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              AYT Agro কৃষকের বাস্তব সমস্যার জন্য আধুনিক, সাশ্রয়ী এবং কার্যকর কৃষি সমাধান নিয়ে কাজ করে। আমাদের লক্ষ্য শুধু কৃষি পণ্য বা যন্ত্রপাতি বিক্রি করা নয়; বরং কৃষকের শুরু থেকে শেষ পর্যন্ত পূর্ণাঙ্গ প্রযুক্তি ও সেবা ইকোসিস্টেম তৈরি করা।
            </p>

            {/* Ecosystem Steps Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAF8] border border-[#E1EDE4] space-y-3">
              <div className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider flex items-center gap-1.5">
                <span>আমাদের পূর্ণাঙ্গ ইকোসিস্টেম আর্কিটেকচার</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {ecosystemSteps.map((item, idx) => (
                  <div key={item.step} className="bg-white p-3 rounded-xl border border-gray-100 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-gray-400 font-english">STEP {item.step}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.color}`}>{item.title}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#C1E2CB] bg-white hover:bg-[#F9FCFA] transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1E7E34] flex items-center justify-center mb-3 group-hover:bg-[#1E7E34] group-hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">প্রযুক্তি</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  আধুনিক কৃষি প্রযুক্তি, সেন্সরভিত্তিক সেচ ও উন্নত যন্ত্রপাতি।
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#C1E2CB] bg-white hover:bg-[#F9FCFA] transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1E7E34] flex items-center justify-center mb-3 group-hover:bg-[#1E7E34] group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">দক্ষতা</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  অভিজ্ঞ প্রকৌশলী টিম ও সার্বক্ষণিক ফিল্ড সাপোর্ট।
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#C1E2CB] bg-white hover:bg-[#F9FCFA] transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1E7E34] flex items-center justify-center mb-3 group-hover:bg-[#1E7E34] group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">নির্ভরযোগ্যতা</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  সময়মতো সেবা ও বিশ্বস্ত কোয়ালিটি ইকুইপমেন্ট নিশ্চয়তা।
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
