import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Wrench, 
  Compass, 
  Sun, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  GitPullRequest,
  Building
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { getWhatsAppLink } from '../utils/whatsapp';

export const FarmEngineeringPage: React.FC = () => {
  const { navigate } = useApp();

  const engineeringServices = [
    {
      id: 'eng-1',
      title: 'টপোগ্রাফিক ও কনট্যুর সার্ভে (Topographic Survey)',
      desc: 'জমির উচ্চতা, ঢাল ও মাটির লেয়ার বিশ্লেষণ করে সঠিক সেচ নালী ও ড্রেনেজ নেটওয়ার্কের ব্লু-প্রিন্ট প্রণয়ন।',
      features: ['জিপিএস এলিভেশন ম্যাপিং', 'জলাবদ্ধতা প্রতিরোধ মডেলিং', 'জমির সর্বোত্তম ব্যবহার পরিকল্পনা']
    },
    {
      id: 'eng-2',
      title: 'হাইড্রোলিক পাইপলাইন ডিজাইন (Hydraulic Irrigation Network)',
      desc: 'পানির প্রেসার লস ও ফ্লো রেট ব্যালান্স করে পাম্প ক্যাপাসিটি ও পাইপের ডায়ামিটার নির্ধারণ।',
      features: ['প্রেসার কমপেন্সেটেড ড্রিপ লাইন', 'ইউনিফর্ম ওয়াটার ডিসট্রিবিউশন', 'বিদ্যুৎ সাশ্রয়ী পাম্প সিলেকশন']
    },
    {
      id: 'eng-3',
      title: 'গ্রিনহাউজ ও পলিনেট শেড ইঞ্জিনিয়ারিং (Controlled Environment)',
      desc: 'উচ্চমূল্যের অফ-সিজন সবজি ও চারার জন্য আর্দ্রতা ও তাপমাত্রা নিয়ন্ত্রিত আধুনিক স্ট্রাকচার নির্মাণ।',
      features: ['ইউভি স্ট্যাবিলাইজড পলিফিল্ম', 'ইনসেক্ট প্রুফ নেট ওয়াল', 'অটোমেটেড ফগার ও ফ্যান কুলিং']
    },
    {
      id: 'eng-4',
      title: 'সোলার ইরিগেশন ও ব্যাকআপ পাওয়ার (Solar Water Pumping)',
      desc: 'লোডশেডিং মুক্ত নিরবচ্ছিন্ন সেচের জন্য টেকসই সোলার প্যানেল ও ডিসি সাবমার্সিবল পাম্প স্থাপন।',
      features: ['বিদ্যুৎ বিল সম্পূর্ণ শূন্য', 'দীর্ঘমেয়াদী ব্যাটারি ছাড়া ডিরেক্ট রান', '২৫ বছরের প্যানেল গ্যারান্টি']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1A2E3B] via-[#243E4E] to-[#2E4F63] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-900/80 border border-sky-500/40 text-sky-300 text-xs font-bold font-english">
              AYT FARM ENGINEERING & PRECISION DESIGN
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              স্মার্ট ফার্ম ইঞ্জিনিয়ারিং ও টেকনিক্যাল সলিউশন
            </h1>
            <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed">
              Engineering Visual Lab (EV Lab) এর সাথে যৌথ উদ্যোগে আধুনিক খামার পরিকল্পনা, সার্ভে, হাইড্রোলিক ড্রিপ ডিজাইন ও কাঠামোগত ইঞ্জিনিয়ারিং সেবা।
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => navigate('booking')}
                className="px-6 py-3 rounded-xl bg-[#28A745] hover:bg-[#218838] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                ইঞ্জিনিয়ারিং কনসালটেশন বুকিং
              </button>
              <a
                href={APP_CONFIG.ecosystem.engineeringVisualLab}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Engineering Visual Lab ভিজিট করুন</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringServices.map((srv) => (
            <div 
              key={srv.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{srv.desc}</p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('booking')}
                  className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  সার্ভে ও কোটেশন বুকিং
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
