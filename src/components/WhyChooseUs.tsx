import React from 'react';
import { Users2, Award, Zap, PiggyBank, Check, Star, ArrowUpRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

const iconMap: { [key: string]: React.ReactNode } = {
  Users2: <Users2 className="w-6 h-6 text-[#1E7E34]" />,
  Award: <Award className="w-6 h-6 text-[#1E7E34]" />,
  Zap: <Zap className="w-6 h-6 text-[#1E7E34]" />,
  PiggyBank: <PiggyBank className="w-6 h-6 text-[#1E7E34]" />
};

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#F4FAF6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & 4 Benefits Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E1F3E6] text-[#1E7E34] text-xs font-bold uppercase tracking-wider">
              আমাদের শ্রেষ্ঠত্ব
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C] leading-tight">
              কেন <span className="text-[#1E7E34]">AYT Agro</span> কৃষকের প্রথম পছন্দ?
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              আমরা শুধু পণ্য সরবরাহ করি না, প্রতিটি কৃষকের ফলন বৃদ্ধি ও ব্যয় সংকোচনে সরাসরি মাঠে থেকে কাজ করি। আমাদের প্রকৌশল ও মাঠ দল আপনার কৃষিকে করে তোলে টেকসই ও অত্যন্ত লাভজনক।
            </p>

            {/* 4 Benefits 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {WHY_CHOOSE_US.map((item, idx) => {
                const icons = [
                  <Award className="w-6 h-6 text-[#1E7E34]" />,
                  <PiggyBank className="w-6 h-6 text-[#1E7E34]" />,
                  <Zap className="w-6 h-6 text-[#1E7E34]" />,
                  <Users2 className="w-6 h-6 text-[#1E7E34]" />
                ];
                const stats = ['১০০% বিশ্বস্ত', '৪০% সাশ্রয়', '২৪/৭ সাপোর্ট', '৫০০+ খামার'];
                return (
                  <div
                    key={idx}
                    id={`why-card-${idx + 1}`}
                    className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#EAF5EE] flex items-center justify-center">
                        {icons[idx % icons.length]}
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-gray-50 text-gray-700 font-english">
                        {stats[idx % stats.length]}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="pt-3">
              <button
                onClick={onOpenQuote}
                id="why-choose-us-quote-btn"
                className="inline-flex items-center gap-2 bg-[#1E7E34] hover:bg-[#155D27] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>বিশেষজ্ঞের ফ্রি পরামর্শ নিন</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: High Quality Realistic Farmer & Machinery Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              
              {/* Main Photo Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                  alt="Happy Farmer in Green Crop Field with AYT Agro Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Review Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-800">
                  "সঠিক পরামর্শ ও সাশ্রয়ী ড্রিপ সেচে আমার ফলন ৪০% বৃদ্ধি পেয়েছে।"
                </p>
                <div className="text-[11px] text-gray-500 mt-1 font-medium">
                  — মো. রফিকুল ইসলাম (বগুড়া)
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
