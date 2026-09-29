import React, { useState } from 'react';
import { SAMPLE_SOIL_REPORTS, SOIL_IMPROVEMENT_METHODS } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  FlaskConical, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Calculator, 
  ShieldCheck,
  Droplets,
  Layers,
  Leaf
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const SoilHealthPage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedReportId, setSelectedReportId] = useState<string>('SH-2026-01');
  const activeReport = SAMPLE_SOIL_REPORTS.find(r => r.id === selectedReportId) || SAMPLE_SOIL_REPORTS[0];

  // Soil Calculator State
  const [inputPh, setInputPh] = useState<number>(5.4);
  const [inputOM, setInputOM] = useState<number>(1.2);
  const [landAreaBigha, setLandAreaBigha] = useState<number>(1);

  // Calculation logic
  const calcLimeNeededKg = inputPh < 6.0 ? Math.round((6.5 - inputPh) * 80 * landAreaBigha) : 0;
  const calcVermicompostTon = Math.round(((2.5 - Math.min(inputOM, 2.5)) * 1.2 * landAreaBigha) * 10) / 10;
  const calcMulchKg = Math.round(150 * landAreaBigha);

  return (
    <div className="min-h-screen bg-[#FDFEFC]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#2B1B0E] via-[#3D2713] to-[#4E3219] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/80 border border-amber-500/40 text-amber-300 text-xs font-bold font-english">
              AYT SOIL HEALTH INTELLIGENCE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              সার দেওয়ার আগে মাটিকে বুঝুন
            </h1>
            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed">
              মাটি মৃত কোনো ধুলোবালি নয়, এটি কোটি কোটি উপকারী জীবাণুর এক জীবন্ত বাস্তুসংস্থান। বৈজ্ঞানিক সয়েল টেস্ট ও প্রাকৃতিক পুষ্টি ব্যবস্থাপনায় মাটিকে পুনরুজ্জীবিত করুন।
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => navigate('booking')}
                className="px-6 py-3 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                মাটি পরীক্ষা বুকিং করুন
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* Section 1: Interactive Soil Health Test Viewer */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
                নমুনা সয়েল হেলথ ডায়াগনস্টিক রিপোর্ট (Soil Report Viewer)
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                AYT মোবাইল ল্যাবরেটরি থেকে প্রাপ্ত পূর্ণাঙ্গ মাটি পরীক্ষার কাঠামো:
              </p>
            </div>

            {/* Select sample */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-bold">স্যাম্পল নির্বাচন:</span>
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                {SAMPLE_SOIL_REPORTS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedReportId(r.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedReportId === r.id ? 'bg-[#1E7E34] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {r.location.split(',')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Report Card */}
          <div className="bg-white rounded-3xl border border-amber-200/80 shadow-md p-6 sm:p-10 space-y-8">
            
            {/* Header info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-gray-100 text-xs">
              <div>
                <span className="text-gray-400">খামারি / প্রেরক:</span>
                <div className="font-bold text-gray-900 text-sm mt-0.5">{activeReport.farmerName}</div>
              </div>
              <div>
                <span className="text-gray-400">লোকেশন:</span>
                <div className="font-bold text-gray-900 text-sm mt-0.5">{activeReport.location}</div>
              </div>
              <div>
                <span className="text-gray-400">খামার আইডি:</span>
                <div className="font-bold text-gray-900 text-sm mt-0.5 font-english">{activeReport.farmId}</div>
              </div>
              <div>
                <span className="text-gray-400">পরীক্ষার তারিখ:</span>
                <div className="font-bold text-gray-900 text-sm mt-0.5 font-english">{activeReport.date}</div>
              </div>

            </div>

            {/* 6 Key Chemical & Biological Parameters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-bold">মাটির পিএইচ (pH)</span>
                <div className="text-2xl font-black text-amber-950 font-english">{activeReport.ph}</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeReport.phStatus === 'Optimal' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {activeReport.phStatus}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-bold">জৈব পদার্থ (OM)</span>
                <div className="text-2xl font-black text-emerald-950 font-english">{activeReport.organicMatter}%</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeReport.organicMatterStatus === 'Adequate' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {activeReport.organicMatterStatus}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-bold">নাইট্রোজেন (N)</span>
                <div className="text-xl font-black text-sky-950 font-english">{activeReport.nitrogen}</div>
                <span className="text-[10px] text-sky-800 font-semibold">প্রাকৃতিক রূপ</span>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-bold">ফসফরাস (P)</span>
                <div className="text-xl font-black text-indigo-950 font-english">{activeReport.phosphorus}</div>
                <span className="text-[10px] text-indigo-800 font-semibold">পরিমিত</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-bold">পটাশিয়াম (K)</span>
                <div className="text-xl font-black text-purple-950 font-english">{activeReport.potassium}</div>
                <span className="text-[10px] text-purple-800 font-semibold">সন্তোষজনক</span>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 text-center space-y-1">
                <span className="text-[11px] text-gray-500 font-bold">আর্দ্রতা ও মাইক্রোবস</span>
                <div className="text-xl font-black text-teal-950 font-english">{activeReport.moisture}%</div>
                <span className="text-[10px] text-teal-800 font-semibold">সক্রিয়</span>
              </div>

            </div>

            {/* Prescribed Scientific Recommendations */}
            <div className="bg-[#FAFDFB] p-6 rounded-2xl border border-emerald-200 space-y-3">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>মাটির পুষ্টি ও উর্বরতা বৃদ্ধিতে কৃষি প্রকৌশলীর নির্দেশনা:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                {activeReport.recommendations.map((rec, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Soil Correction Calculator */}
        <div className="bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/60 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Calculator className="w-3.5 h-3.5" />
              <span>SOIL CORRECTION CALCULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              মাটি সংশোধন ও জৈব ডোজ ক্যালকুলেটর
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              আপনার জমির পিএইচ ও জৈব পদার্থের মান বসিয়ে প্রয়োজনীয় চুন, ভার্মিকম্পোস্ট ও মালচিংয়ের পরিমাণ হিসাব করুন:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input fields */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">জমির পরিমাণ (বিঘা):</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={landAreaBigha}
                  onChange={(e) => setLandAreaBigha(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">বর্তমান মাটির পিএইচ (pH) [স্বাভাবিক মান ৬.০ - ৭.০]:</label>
                <input
                  type="number"
                  min="3.5"
                  max="9.0"
                  step="0.1"
                  value={inputPh}
                  onChange={(e) => setInputPh(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-bold text-amber-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">বর্তমান জৈব পদার্থ (OM %) [আদর্শ মান ২.৫%]:</label>
                <input
                  type="number"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={inputOM}
                  onChange={(e) => setInputOM(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-bold text-emerald-900"
                />
              </div>
            </div>

            {/* Calculated Results */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100">
                  প্রাকৃতিক সংশোধনের প্রস্তাবিত পরিমাণ ({landAreaBigha} বিঘার জন্য):
                </h4>

                <div className="space-y-3 pt-3 text-xs">
                  <div className="flex justify-between items-center p-2.5 bg-amber-50 rounded-xl">
                    <span className="font-bold text-gray-800">কৃষি চুন / ডলোমাইট (pH সংশোধনে):</span>
                    <span className="font-black text-amber-900 font-english text-sm">
                      {calcLimeNeededKg > 0 ? `${calcLimeNeededKg} কেজি` : 'প্রয়োজন নেই (আদর্শ pH)'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 bg-emerald-50 rounded-xl">
                    <span className="font-bold text-gray-800">উন্নত ভার্মিকম্পোস্ট বা ট্রাইকো-কম্পোস্ট:</span>
                    <span className="font-black text-emerald-900 font-english text-sm">
                      {calcVermicompostTon} টন
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 bg-sky-50 rounded-xl">
                    <span className="font-bold text-gray-800">খড় বা জৈব মালচিং উপাদান:</span>
                    <span className="font-black text-sky-900 font-english text-sm">
                      {calcMulchKg} কেজি
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('booking')}
                className="w-full py-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                মাটি পরীক্ষার প্যাকেজ বুক করুন
              </button>
            </div>

          </div>
        </div>

        {/* Section 3: 6 Natural Soil Improvement Techniques */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
              মাটির উর্বরতা রক্ষার ৬টি বিজ্ঞানসম্মত প্রাকৃতিক পদ্ধতি
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOIL_IMPROVEMENT_METHODS.map((method, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-2 hover:border-amber-400 transition-all">
                <h3 className="text-base font-bold text-gray-900">{method.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{method.desc}</p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{method.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
