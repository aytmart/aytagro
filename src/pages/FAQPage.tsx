import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HelpCircle, Search, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const FAQPage: React.FC = () => {
  const { navigate } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'যন্ত্রপাতি ভাড়া',
      q: 'AYT Agro থেকে যন্ত্রপাতি ভাড়া নেওয়ার প্রক্রিয়া কী?',
      a: 'ওয়েবসাইটে গিয়ে কাঙ্ক্ষিত মেশিনটি নির্বাচন করে "ভাড়া নিন" বাটনে ক্লিক করে জমির বিবরণ ও তারিখ দিন, অথবা সরাসরি আমাদের হটলাইন বা হোয়াটসঅ্যাপে যোগাযোগ করুন। আমাদের প্রতিনিধি আপনার সাথে কথা বলে মেশিন বুকিং কনফার্ম করবে।'
    },
    {
      category: 'যন্ত্রপাতি ভাড়া',
      q: 'মেশিনের সাথে কি অপারেটর এবং জ্বালানি দেওয়া হয়?',
      a: 'বেশিরভাগ ভারী মেশিনের সাথে দক্ষ অপারেটর অন্তর্ভুক্ত থাকে। জ্বালানি খরচ সাধারণত কাজের পরিমাণ অনুযায়ী গ্রাহকের নিজস্ব খরচে সরবরাহ করতে হয়। সৌরচালিত যন্ত্রপাতিতে কোনো জ্বালানি খরচ লাগে না।'
    },
    {
      category: 'স্মার্ট সেচ',
      q: 'ড্রিপ সেচ ব্যবস্থা স্থাপন করলে পানির কতটা অপচয় কমে?',
      a: 'বিজ্ঞানসম্মত ড্রিপ সেচ ব্যবস্থায় সনাতন প্লাবন সেচের তুলনায় ৫০% থেকে ৭০% পর্যন্ত পানি সাশ্রয় হয়। এছাড়া সরাসরি উদ্ভিদের শিকড়ে পানি ও তরল সার পৌঁছানোর কারণে ফলন ২০-৪০% বৃদ্ধি পায়।'
    },
    {
      category: 'মাটি ও ল্যাব',
      q: 'মাটি পরীক্ষার রিপোর্ট পেতে কতদিন সময় লাগে?',
      a: 'মাটির নমুনা সংগ্রহের পর আমাদের পোর্টেবল টেস্ট কিট দিয়ে অন-ফিল্ডে কিছু তাৎক্ষণিক প্যারামিটার (যেমন pH, আর্দ্রতা) আধা ঘণ্টার মধ্যেই জানানো হয়। সম্পূর্ণ ল্যাব রিপোর্ট ও সার প্রয়োগ কার্ড ২-৩ কর্মদিবসের মধ্যে দেওয়া হয়।'
    },
    {
      category: 'সোলার এগ্রিকালচার',
      q: 'সোলার পাম্পের সুবিধা কী এবং মেঘলা দিনে কি কাজ করে?',
      a: 'সোলার পাম্পে বিদ্যুৎ বা ডিজেলের কোনো বিল নেই। আধুনিক এমপিটিটি (MPPT) কন্ট্রোলারযুক্ত সোলার পাম্প মেঘলা দিনেও প্রয়োজনীয় ওয়াটার ডিসচার্জ বজায় রাখতে সক্ষম।'
    },
    {
      category: 'পেমেন্ট ও ডেলিভারি',
      q: 'পেমেন্ট ও ভাড়ার মূল্য কীভাবে পরিশোধ করতে হয়?',
      a: 'বিকাশ, নগদ, ব্যাংক ট্রান্সফার অথবা ক্যাশ অন ডেলিভারি (সেবা গ্রহণের সময়) মাধ্যমে পরিশোধ করা যায়। বড় ফার্ম প্রজেক্টের ক্ষেত্রে কাজের অগ্রগতি অনুযায়ী কিস্তিতে পেমেন্ট নেওয়া হয়।'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsAppAsk = () => {
    const text = 'নমস্কার AYT Agro, আমার কৃষি সংক্রান্ত একটি বিশেষ প্রশ্ন আছে।';
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            সাধারণ জিজ্ঞাসা ও উত্তর
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            AYT Agro সেবা, যন্ত্রপাতি ভাড়া, স্মার্ট সেচ ও মূল্য নির্ধারণ সংক্রান্ত সচরাচর জিজ্ঞাসিত প্রশ্নাবলীর পরিষ্কার উত্তর।
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-gray-100 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-8 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="আপনার প্রশ্ন লিখে খুঁজুন (যেমন: ড্রিপ সেচ, ভাড়া, পেমেন্ট)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-gray-900 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex-shrink-0">
                    {faq.category}
                  </span>
                  <span>{faq.q}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 bg-gray-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions? */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-200 space-y-4">
          <h3 className="text-lg font-bold text-[#0F4A24]">আপনার প্রশ্নের উত্তর খুঁজে পাননি?</h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            আমাদের কাস্টমার কেয়ার টিম সার্বক্ষণিক প্রস্তুত। সরাসরি হোয়াটসঅ্যাপ বা ফোনে প্রশ্ন করুন।
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleWhatsAppAsk}
              className="py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে সরাসরি জিজ্ঞাসা</span>
            </button>
            <button
              onClick={() => navigate('contact')}
              className="py-3 px-6 rounded-xl bg-white text-[#1E7E34] border border-[#1E7E34] text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              যোগাযোগ ফর্ম
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
