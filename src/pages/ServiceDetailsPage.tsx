import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA } from '../data/mockData';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  HelpCircle, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  AlertCircle, 
  Layers 
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { createServiceWhatsAppLink } from '../utils/whatsapp';

export const ServiceDetailsPage: React.FC = () => {
  const { activeSlug, navigate, addToQuote } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.slug === activeSlug) || SERVICES_DATA[0];

  const handleWhatsAppInquiry = () => {
    const link = createServiceWhatsAppLink(service.title, 'বাংলাদেশ', 'সকল জমি');
    window.open(link, '_blank');
  };

  const startingPrice = service.pricing?.startingPrice || service.priceGuideline || 'আলোচনা সাপেক্ষে';

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => navigate('services')} className="hover:text-[#1E7E34]">Services</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#0A2E16] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <span>Code {service.code}</span>
                <span>•</span>
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigate('booking', service.slug)}
                  className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>সেবাটি বুক করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="bg-white/10 hover:bg-white/20 text-white border border-emerald-500/50 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp এ কথা বলুন</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-3xl overflow-hidden border-4 border-emerald-800 shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Full Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">সেবার বিস্তারিত বিবরণ</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Problem & Solution Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50/60 rounded-3xl p-6 border border-red-100 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>সাধারণ সমস্যা</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {service.problemStatement || 'অনুপযুক্ত পানি নিষ্কাশন ও সনাতন সেচের ফলে অতিরিক্ত জ্বালানি খরচ ও পানির অপচয় ঘটে।'}
                </p>
              </div>

              <div className="bg-emerald-50/70 rounded-3xl p-6 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-[#0F4A24] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34]" />
                  <span>AYT Agro-এর আধুনিক সমাধান</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {service.solutionProvided || 'আধুনিক পাইপলাইন ও স্বয়ংক্রিয় কন্ট্রোলারের মাধ্যমে অপচয়মুক্ত সুষম কৃষি নিশ্চিতকরণ।'}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">প্রধান সুবিধাসমূহ ও ডেলিভারেবলস</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#1E7E34] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">কাজের ধাপ ও বাস্তবায়ন প্রক্রিয়া</h2>
              <div className="space-y-4">
                {(service.process || [
                  { step: '০১', title: 'সাইট সার্ভে ও পরীক্ষা', desc: 'জমির মাপ ও পানির উৎস যাচাই।' },
                  { step: '০২', title: 'ব্লুপ্রিন্ট ও ডিজাইন', desc: 'কম্পিউটারাইজড পাইপলাইন লেআউট তৈরি।' },
                  { step: '০৩', title: 'অন-সাইট ইনস্টলেশন', desc: 'প্রকৌশলীদের সরাসরি উপস্থিতিতে নিখুঁত স্থাপন।' },
                  { step: '০৪', title: 'ব্যবহারিক প্রশিক্ষণ', desc: 'কৃষককে রক্ষণাবেক্ষণ ও পরিচালনার প্রশিক্ষণ।' }
                ]).map((proc, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1E7E34] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 font-english">
                      {idx + 1}
                    </div>
                    <div className="flex-1 bg-[#F8FAF8] p-3.5 rounded-2xl border border-gray-100">
                      <span className="text-xs sm:text-sm font-bold text-gray-900 block">{proc.title}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{proc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
                <h2 className="text-xl font-bold text-gray-900">সাধারণ জিজ্ঞাসা (FAQ)</h2>
                <div className="space-y-2 pt-2">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    const question = faq.question || faq.q || '';
                    const answer = faq.answer || faq.a || '';
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-gray-100 overflow-hidden bg-[#F8FAF8]"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-4 text-left font-bold text-xs sm:text-sm text-gray-900 flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <span>{question}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 bg-white">
                            {answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl space-y-5 sticky top-24">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">মূল্য নির্ধারণ গাইডলাইন</span>
                <div className="text-2xl font-black text-[#1E7E34] mt-1">
                  {startingPrice}
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  * চূড়ান্ত খরচ জমির আয়তন, পাইপলাইনের মাপ ও সরঞ্জামের ওপর নির্ভর করবে।
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => navigate('booking', service.slug)}
                  className="w-full py-3.5 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>অনলাইন বুকিং করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => addToQuote({ id: service.id, title: service.title, type: 'service', image: service.image })}
                  className="w-full py-3 rounded-2xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors cursor-pointer"
                >
                  + কোটেশন তালিকায় যোগ করুন
                </button>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl text-xs text-gray-700 space-y-1">
                <div className="font-bold text-[#0F4A24]">📞 জরুরি পরামর্শ হটলাইন:</div>
                <p className="text-[11px] text-gray-600">{APP_CONFIG.HOTLINE} (সকাল ৮টা - রাত ৮টা)</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
