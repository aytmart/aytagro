import React, { useState } from 'react';
import { SAMPLE_SOIL_REPORTS, SOIL_IMPROVEMENT_METHODS } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  FlaskConical, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  Droplets, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

export const SoilHealthSection: React.FC = () => {
  const { navigate } = useApp();
  const [selectedReportIndex, setSelectedReportIndex] = useState<number>(0);
  const currentReport = SAMPLE_SOIL_REPORTS[selectedReportIndex];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-english">
              SOIL HEALTH MANAGEMENT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
              সার দেওয়ার আগে মাটিকে বুঝুন
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              অতিরিক্ত রাসায়নিক সার মাটিকে শক্ত ও অম্লীয় করে তোলে। বৈজ্ঞানিক সয়েল হেলথ টেস্ট ও প্রাকৃতিক জৈব উপাদানে মাটির উর্বরতা পুনরুদ্ধার করুন।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('crop-assistant')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>🤖 AI মাটি বিশ্লেষণ</span>
            </button>
            <button
              onClick={() => navigate('soil-health')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <span>মাটির স্বাস্থ্য গাইড</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('booking')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#1E7E34] hover:bg-[#155D27] px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <FlaskConical className="w-4 h-4" />
              <span>মাটি পরীক্ষা বুকিং</span>
            </button>
          </div>

        </div>

        {/* 2 Column Interactive Grid: Left (Demo Soil Card) & Right (Improvement Methods) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Soil Test Analyzer */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-50/60 to-emerald-50/40 p-6 sm:p-8 rounded-3xl border border-amber-200/70 shadow-xs space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">নমুনা সয়েল হেলথ রিপোর্ট</h3>
                  <p className="text-xs text-gray-500 font-english">Lab Tested Soil Quality Sample</p>
                </div>
              </div>

              {/* Sample Switcher Tabs */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-amber-200 text-xs font-semibold">
                <button
                  onClick={() => setSelectedReportIndex(0)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    selectedReportIndex === 0 ? 'bg-amber-500 text-white font-bold' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  বগুড়া
                </button>
                <button
                  onClick={() => setSelectedReportIndex(1)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    selectedReportIndex === 1 ? 'bg-amber-500 text-white font-bold' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  যশোর
                </button>
              </div>
            </div>

            {/* Farm Meta */}
            <div className="bg-white p-4 rounded-2xl border border-amber-100 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-500">খামার / কৃষক:</span>
                <div className="font-bold text-gray-900">{currentReport.farmerName}</div>
              </div>
              <div>
                <span className="text-gray-500">লোকেশন:</span>
                <div className="font-bold text-gray-900">{currentReport.location}</div>
              </div>
              <div>
                <span className="text-gray-500">রিপোর্ট আইডি:</span>
                <div className="font-mono text-gray-700">{currentReport.id}</div>
              </div>
              <div>
                <span className="text-gray-500">সামগ্রিক অবস্থা:</span>
                <div className={`font-bold inline-flex items-center gap-1 ${
                  currentReport.overallCondition === 'Good' ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {currentReport.overallCondition === 'Good' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                  <span>{currentReport.overallCondition === 'Good' ? 'সন্তোষজনক' : 'বিশেষ যত্ন প্রয়োজন'}</span>
                </div>
              </div>
            </div>

            {/* Metric Gauges Bar */}
            <div className="grid grid-cols-3 gap-3">
              
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-medium">মাটির পিএইচ (pH)</span>
                <div className="text-xl font-black text-gray-900 font-english">{currentReport.ph}</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  currentReport.phStatus === 'Optimal' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {currentReport.phStatus === 'Optimal' ? 'আদর্শ (Optimal)' : 'অম্লীয় (Acidic)'}
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-medium">জৈব পদার্থ (OM)</span>
                <div className="text-xl font-black text-gray-900 font-english">{currentReport.organicMatter}%</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  currentReport.organicMatterStatus === 'Adequate' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {currentReport.organicMatterStatus === 'Adequate' ? 'সন্তোষজনক' : 'কম (Low)'}
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-medium">মাটির আর্দ্রতা</span>
                <div className="text-xl font-black text-gray-900 font-english">{currentReport.moisture}%</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold">
                  স্বাভাবিক
                </span>
              </div>

            </div>

            {/* Expert Recommendations */}
            <div className="bg-white p-4 rounded-2xl border border-amber-100 space-y-2">
              <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>কৃষিবিদদের পরামর্শ (Recommendations):</span>
              </div>
              <div className="space-y-1.5 text-xs text-gray-700">
                {currentReport.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
              <span>* এটি ল্যাব পরীক্ষার ডেমো ফরম্যাট।</span>
              <button 
                onClick={() => navigate('soil-health')}
                className="text-amber-800 font-bold hover:underline"
              >
                সম্পূর্ণ সয়েল রিপোর্ট পোর্টাল →
              </button>
            </div>

          </div>

          {/* Right Column: Key Soil Improvement Methods */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1 mb-2">
              <h3 className="text-lg font-bold text-gray-900">
                মাটির স্বাস্থ্য পুনরুদ্ধারে কার্যকর প্রাকৃতিক পদ্ধতি
              </h3>
              <p className="text-xs text-gray-600">
                মাটির জৈবিক উর্বরতা ও পানি ধারণক্ষমতা বাড়াতে আমাদের প্রস্তাবিত টেকনিক:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SOIL_IMPROVEMENT_METHODS.map((method, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-amber-400 hover:bg-white transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
                      {method.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {method.desc}
                  </p>
                  <div className="pt-1.5 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-emerald-700">{method.impact}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <div className="text-xs text-emerald-950">
                <span className="font-bold">আপনার জমির মাটি পরীক্ষা করাতে চান?</span>
                <p className="text-[11px] text-emerald-800">আমাদের ভ্রাম্যমাণ টিম মাটির নমুনা সংগ্রহ ও পরামর্শ প্রদান করে।</p>
              </div>
              <button
                onClick={() => navigate('booking')}
                className="whitespace-nowrap px-4 py-2 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold cursor-pointer transition-colors"
              >
                অনুরোধ পাঠান
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
