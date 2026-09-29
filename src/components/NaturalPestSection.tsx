import React from 'react';
import { PEST_MANAGEMENT_GUIDES } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Eye, Search, AlertCircle, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';

export const NaturalPestSection: React.FC = () => {
  const { navigate } = useApp();

  const cycleSteps = [
    { num: '০১', title: 'Observe', bn: 'পর্যবেক্ষণ', desc: 'গাছের পাতা, ডগা ও ফলের নিয়মিত স্ক্রাউটিং।' },
    { num: '০২', title: 'Identify', bn: 'শত্রু ও বন্ধু পোকা শনাক্ত', desc: 'ক্ষতিকর ও পরাগায়নকারী বন্ধু পোকার তফাত বোঝা।' },
    { num: '০৩', title: 'Prevent', bn: 'প্রাথমিক প্রতিরোধ', desc: 'পরিচ্ছন্ন চাষাবাদ, জাত নির্বাচন ও সাথী ফসল।' },
    { num: '০৪', title: 'Monitor', bn: 'ফাঁদ দ্বারা পর্যবেক্ষণ', desc: 'ফেরোমোন ও স্টিকি ট্র্যাপে পোকার ঘনত্ব মাপা।' },
    { num: '০৫', title: 'Natural Control', bn: 'জৈব ও যান্ত্রিক দমন', desc: 'বায়ো-এজেন্ট, নিম তেল, হাত দ্বারা সংগ্রহ।' },
    { num: '০৬', title: 'Evaluate', bn: 'ফলাফল পর্যালোচনা', desc: 'বালাই নিয়ন্ত্রণের কার্যকারিতা ও মাটির সুরক্ষা।' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F9F6] border-b border-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold font-english">
            NATURAL PEST MANAGEMENT (IPM)
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
            প্রতিরোধ আগে, ক্ষতিকর রাসায়নিক নয়
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Prevent First. Monitor Early. Control Responsibly. বিষমুক্ত নিরাপদ ফসল উৎপাদনে সমন্বিত বালাই ব্যবস্থাপনার কার্যকর বিজ্ঞানসম্মত প্রটোকল।
          </p>
        </div>

        {/* 6 Step Cycle Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-12">
          {cycleSteps.map((step) => (
            <div 
              key={step.num}
              className="p-4 rounded-2xl bg-white border border-teal-100 text-center space-y-1.5 shadow-xs hover:border-teal-500 transition-colors"
            >
              <span className="w-8 h-8 mx-auto rounded-full bg-teal-50 text-teal-700 text-xs font-black flex items-center justify-center font-english">
                {step.num}
              </span>
              <div className="text-xs font-bold text-gray-900">{step.bn}</div>
              <div className="text-[10px] text-teal-700 font-semibold font-english">{step.title}</div>
              <p className="text-[11px] text-gray-500 leading-tight pt-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Common Pests & Natural Solutions Grid */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>বহুল পরিচিত পোকা ও প্রাকৃতিক সমাধান</span>
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('crop-assistant')}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>🤖 AI বালাই সহকারী</span>
              </button>
              <button
                onClick={() => navigate('natural-pest-management')}
                className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1 ml-2"
              >
                <span>সম্পূর্ণ পেস্ট গাইড</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PEST_MANAGEMENT_GUIDES.slice(0, 2).map((guide) => (
              <div 
                key={guide.id}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">{guide.pestName}</h4>
                    <span className="text-xs italic text-gray-500 font-english">{guide.pestNameEn}</span>
                  </div>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                    guide.riskCategory === 'Moderate' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {guide.riskCategory}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-700">
                  <div>
                    <span className="font-bold text-gray-900">আক্রান্ত ফসল:</span> {guide.targetCrops.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">লক্ষণ:</span> {guide.symptoms}
                  </div>
                  <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 text-teal-950">
                    <span className="font-bold text-teal-900">প্রাকৃতিক নিয়ন্ত্রণ:</span> {guide.biologicalMechanicalControl}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
