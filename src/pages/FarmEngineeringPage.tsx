import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DraftingCompass, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Ruler, Cpu, SunMedium, Waves } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const FarmEngineeringPage: React.FC = () => {
  const { navigate, addToast } = useApp();

  const [landSize, setLandSize] = useState('');
  const [district, setDistrict] = useState('');
  const [farmType, setFarmType] = useState('বাণিজ্যিক ফলের বাগান');
  const [phone, setPhone] = useState('');

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = 
      `🌾 AYT Agro ফার্ম ইঞ্জিনিয়ারিং কনসালটেশন:\n\n` +
      `🌾 খামারের ধরণ: ${farmType}\n` +
      `📐 জমির পরিমাপ: ${landSize || 'উল্লেখ নেই'}\n` +
      `📍 জেলা: ${district || 'বাংলাদেশ'}\n` +
      `📞 মোবাইল: ${phone}\n\n` +
      `আমি আমার জমিতে ড্রিপ সেচ/ড্রেনেজ/সোলার পাইপলাইন ডিজাইনের জন্য বিশেষজ্ঞ পরামর্শক ভিজিট চাই।`;

    window.open(generateWhatsAppLink(text), '_blank');
    addToast('success', 'ইঞ্জিনিয়ারিং কনসালটেশন অনুরোধ গৃহীত হয়েছে!');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <DraftingCompass className="w-3.5 h-3.5" />
            <span>Farm Engineering & Blueprint Planning</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আধুনিক ফার্ম ইঞ্জিনিয়ারিং ও প্ল্যানিং
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            একটি সফল ও টেকসই খামারের ভিত্তি হলো সঠিক নকশা ও হাইড্রোলিক ইঞ্জিনিয়ারিং। জমির ঢাল, মাটির স্তর ও পানির উৎস বিশ্লেষণ করে আমরা তৈরি করি দীর্ঘস্থায়ী কৃষি পরিকাঠামো।
          </p>
        </div>
      </div>

      {/* Engineering Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'হাইড্রোলিক পাইপলাইন ডিজাইন',
              desc: 'পানির চাপ সমভাবে বজায় রাখতে সঠিক পাইপ সাইজিং ও ভালভ নেটওয়ার্ক নকশা।',
              icon: Waves
            },
            {
              title: 'কন্ট্যুর ও ড্রেনেজ গ্রেডিয়েন্ট',
              desc: 'অতিরিক্ত বৃষ্টির পানি দ্রুত বের করে দিতে জমির প্রাকৃতিক ঢাল ভিত্তিক ড্রেন প্ল্যান।',
              icon: Ruler
            },
            {
              title: 'সোলার পাওয়ার সাইজিং',
              desc: 'পাম্পের লোড ও পানির গভীরতা অনুযায়ী নিখুঁত সোলার প্যানেল ও ইনভার্টার ক্যালকুলেশন।',
              icon: SunMedium
            },
            {
              title: 'আইওটি ও অটোমেশন কন্ট্রোল',
              desc: 'মাটির আর্দ্রতা সেন্সরের মাধ্যমে স্বয়ংক্রিয় সেচ ও ফার্টিগেশন ইউনিট সেটআপ।',
              icon: Cpu
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process & Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Process Flow (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3B1C]">
                ইঞ্জিনিয়ারিং প্রজেক্ট বাস্তবায়ন ধাপ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: '০১', title: 'সাইট সার্ভে ও মাটি-পানি টেস্ট', desc: 'আমাদের ইঞ্জিনিয়ার জমিতে গিয়ে কন্ট্যুর ম্যাপ, পানির স্তর ও মাটির গঠন পরীক্ষা করবেন।' },
                { step: '০২', title: 'ক্যাড (CAD) ও থ্রিডি পাইপলাইন ব্লুপ্রিন্ট', desc: 'কম্পিউটারাইজড নকশায় পাইপ, স্প্রিংকলার, ভালভ ও পাম্পের অবস্থান সুনির্দিষ্ট করা।' },
                { step: '০৩', title: 'ম্যাটেরিয়াল সিলেকশন ও প্রাক্কলন', desc: 'সেরা মানের ইউপিভিসি পাইপ, ড্রিপ টেপ ও পাম্পের স্বচ্ছ বাজেট প্রদান।' },
                { step: '০৪', title: 'অন-সাইট ইনস্টলেশন ও ট্রায়াল রান', desc: 'দক্ষ টেকনিশিয়ান দ্বারা পাইপলাইন স্থাপন, প্রেসার টেস্টিং ও খামার কর্মীকে প্রশিক্ষণ।' }
              ].map((p, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-2xs">
                  <span className="text-xl font-black text-[#80ED99] font-english mt-0.5">{p.step}</span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">{p.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Quick Consultation Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl space-y-5">
            <div>
              <span className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider">কনসালটেশন বুকিং</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">
                বিশেষজ্ঞ ইঞ্জিনিয়ার পরামর্শের অনুরোধ
              </h3>
            </div>

            <form onSubmit={handleConsultSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">খামারের ধরণ</label>
                <select
                  value={farmType}
                  onChange={(e) => setFarmType(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-hidden focus:border-[#1E7E34]"
                >
                  <option value="বাণিজ্যিক ফলের বাগান (আম/পেয়ারা/ড্রাগন)">বাণিজ্যিক ফলের বাগান (আম/পেয়ারা/ড্রাগন)</option>
                  <option value="সবজি ও পলিহাউস প্রজেক্ট">সবজি ও পলিহাউস প্রজেক্ট</option>
                  <option value="নার্সারি ও টিস্যু কালচার ল্যাব">নার্সারি ও টিস্যু কালচার ল্যাব</option>
                  <option value="ধান ও ভুট্টা খামার সেচ">ধান ও ভুট্টা খামার সেচ</option>
                  <option value="জলাবদ্ধ জমি ড্রেনেজ">জলাবদ্ধ জমি ড্রেনেজ</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">জমির আয়তন</label>
                <input
                  type="text"
                  placeholder="যেমন: ৫ একর / ১০ বিঘা"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">জেলা / উপজেলা</label>
                <input
                  type="text"
                  placeholder="যেমন: বগুড়া সদর"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">মোবাইল নম্বর *</label>
                <input
                  type="tel"
                  required
                  placeholder="যেমন: 017XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>ইঞ্জিনিয়ার কনসালটেশন বুক করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};
