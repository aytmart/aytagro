import React from 'react';
import { MessageSquareText, Calculator, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

const iconMap: { [key: string]: React.ReactNode } = {
  MessageSquareText: <MessageSquareText className="w-6 h-6 text-[#1E7E34]" />,
  Calculator: <Calculator className="w-6 h-6 text-[#1E7E34]" />,
  Truck: <Truck className="w-6 h-6 text-[#1E7E34]" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-[#1E7E34]" />
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EE] text-[#1E7E34] text-xs font-bold uppercase tracking-wider mb-2">
            সহজ ও স্পষ্ট প্রক্রিয়া
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C]">
            কীভাবে কাজ করে?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            মাত্র ৪টি সহজ ধাপে আপনার জমিতে পৌঁছে যাবে আধুনিক কৃষি সমাধান ও সেবা।
          </p>
        </div>

        {/* 4 Numbered Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const defaultIcons = [
              <MessageSquareText className="w-6 h-6 text-[#1E7E34]" />,
              <Calculator className="w-6 h-6 text-[#1E7E34]" />,
              <Truck className="w-6 h-6 text-[#1E7E34]" />,
              <CheckCircle2 className="w-6 h-6 text-[#1E7E34]" />
            ];
            return (
              <div
                key={item.step}
                id={`how-it-works-step-${index + 1}`}
                className="bg-[#F8FAF8] rounded-3xl p-6 border border-gray-100/90 hover:border-[#BCE2C7] transition-all duration-300 hover:shadow-lg relative group flex flex-col justify-between"
              >
                <div>
                  {/* Header row: Step number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {defaultIcons[index % defaultIcons.length]}
                    </div>
                    <span className="text-3xl font-black text-gray-300 font-english group-hover:text-[#1E7E34] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-3 border-t border-gray-200/60 flex items-center text-xs font-semibold text-gray-400 group-hover:text-[#1E7E34] transition-colors">
                  <span>ধাপ {index + 1} সম্পন্ন করুন</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
