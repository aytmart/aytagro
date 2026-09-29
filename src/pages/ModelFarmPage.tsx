import React, { useState } from 'react';
import { MODEL_FARM_ZONES } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Award,
  Compass
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const ModelFarmPage: React.FC = () => {
  const { navigate } = useApp();
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0A2E16] via-[#104322] to-[#175A2E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-english">
              AYT AGRO MODEL DEMONSTRATION FARM
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              AYT মডেল ডেমোনেস্ট্রেশন ফার্ম ও লার্নিং সেন্টার
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              সরাসরি মাঠে এসে দেখুন কীভাবে রাসায়নিক বিষ ছাড়া উচ্চ ফলনশীল প্রাকৃতিক চাষ ও ড্রিপ সেচ কাজ করে। কৃষক ও কৃষি উদ্যোক্তাদের বাস্তব অভিজ্ঞতা অর্জনের কেন্দ্র।
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* Model Farm Zones Grid */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B1C]">
              মডেল ফার্মের ৫টি মূল ডেমোনেস্ট্রেশন জোন
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              প্রতিটি জোনে রয়েছে সরাসরি প্র্যাকটিক্যাল প্রদর্শনী ও প্রযুক্তি ট্রায়াল:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODEL_FARM_ZONES.map((zone) => (
              <div 
                key={zone.id}
                className="rounded-3xl bg-white border border-gray-100 shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48">
                    <img 
                      src={zone.image} 
                      alt={zone.name}
                      className="w-full h-full object-cover" 
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-200 text-[10px] font-bold backdrop-blur-xs">
                      {zone.area}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">{zone.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-semibold text-emerald-800">ফসল: {zone.crop}</p>
                    
                    <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-700">
                      <div><span className="font-bold text-gray-900">মাটি ব্যবস্থাপনা:</span> {zone.soilPractice}</div>
                      <div><span className="font-bold text-gray-900">পানি সিস্টেম:</span> {zone.waterSystem}</div>
                      <div><span className="font-bold text-gray-900">প্রাকৃতিক বালাই দমন:</span> {zone.pestStrategy}</div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Registration Form */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-emerald-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0D3B1C]">
              মডেল ফার্ম ভিজিট ও প্রশিক্ষণ রেজিস্ট্রেশন
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              একক বা দলগতভাবে ফার্ম ভিজিটের জন্য আপনার সুবিধাজনক তারিখ বুক করুন:
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-emerald-900">আপনার ভিজিট অনুরোধ গ্রহণ করা হয়েছে!</h4>
              <p className="text-xs text-emerald-700">আমাদের প্রতিনিধি শীঘ্রই কল দিয়ে আপনার ভিজিট কনফার্ম করবে।</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-gray-700 font-bold mb-1">আপনার নাম:</label>
                <input
                  type="text"
                  required
                  placeholder="নাম লিখুন"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">মোবাইল নাম্বার:</label>
                <input
                  type="tel"
                  required
                  placeholder="০১৭xxxxxxxx"
                  value={visitorPhone}
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">পছন্দের তারিখ:</label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div className="sm:col-span-3 flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  ভিজিট কনফার্ম করুন
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
