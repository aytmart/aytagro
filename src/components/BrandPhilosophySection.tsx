import React from 'react';
import { Sprout, Cpu, Wrench, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BrandPhilosophySection: React.FC = () => {
  const { navigate } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F2F8F4] to-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Pill & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[#0F4A24] text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>আমাদের দর্শন ও ভিশন</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D3B1C] tracking-tight">
            AYT Agro — কৃষির জন্য শুধু পণ্য নয়, একটি সম্পূর্ণ প্রাকৃতিক ও স্মার্ট সমাধান
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            মাটির স্বাস্থ্য, প্রাকৃতিক সম্পদ, নিরাপদ খাদ্য এবং আধুনিক প্রযুক্তিকে একসাথে নিয়ে AYT Agro তৈরি করছে একটি টেকসই <strong>Sustainable Farming Ecosystem</strong>।
          </p>
        </div>

        {/* 4 Core Pillars Formula Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          
          <div 
            onClick={() => navigate('natural-farming')}
            className="p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                Natural Farming
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                মাটির জীবন্ত অনুজীব রক্ষা, খড় মালচিং ও রাসায়নিকমুক্ত প্রাকৃতিক পদ্ধতিতে স্বাস্থ্যকর ফসল উৎপাদন।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-emerald-700">
              <span>বিস্তারিত জানুন</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => navigate('digital-farm')}
            className="p-6 rounded-2xl bg-white border border-indigo-100 hover:border-indigo-500 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                Digital Agriculture
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                সয়েল ময়েশ্চার সেন্সর, ডিজিটাল ক্রপ রেকর্ড খাতা, কিউআর কোড ফার্ম ট্রেস এবং এআই অ্যাসিস্ট্যান্ট।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-indigo-700">
              <span>স্মার্ট ড্যাশবোর্ড</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => navigate('farm-engineering')}
            className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-500 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors">
                Farm Engineering
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                টপোগ্রাফিক সার্ভে, ড্রিপ ও স্প্রিংকলার হাইড্রোলিক নেটওয়ার্ক, সোলার পাম্প ও ড্রেনেজ সিস্টেম ডিজাইন।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-sky-700">
              <span>ইঞ্জিনিয়ারিং সেবা</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => navigate('machinery-rental')}
            className="p-6 rounded-2xl bg-white border border-orange-100 hover:border-orange-500 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                Agricultural Tools
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                কম্পোস্ট শ্রেডার, পাওয়ার উইডার, ব্রাশ কাটার ও আধুনিক রেন্টাল যন্ত্রপাতির মাধ্যমে শ্রম সাশ্রয়।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-orange-700">
              <span>যন্ত্রপাতি রেন্টাল</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
