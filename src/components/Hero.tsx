import React from 'react';
import { ArrowRight, Tractor, Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onExploreMachinery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onExploreMachinery }) => {
  return (
    <section 
      id="home"
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-gradient-to-r from-[#EBF5EE] via-[#F4FAF6] to-[#E5F2E8] overflow-hidden"
    >
      {/* Background Hero Banner Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
          alt="AYT Agro Agricultural Green Landscape with Tractor"
          className="w-full h-full object-cover object-center lg:object-right opacity-35 sm:opacity-40"
          loading="eager"
        />
        {/* Subtle Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-12 right-12 hidden xl:block w-72 h-72 rounded-full bg-emerald-300/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 hidden xl:block w-96 h-96 rounded-full bg-lime-300/10 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F4E9] border border-[#C5E8CE] text-[#165B30] text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#28A745]" />
              <span>স্মার্ট প্রযুক্তিনির্ভর আধুনিক কৃষি সেবা</span>
            </div>

            {/* Main Bold Bengali Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0D3B1C] leading-[1.25] tracking-tight">
              কৃষকের সাথে, কৃষির জন্য <br className="hidden sm:inline" />
              <span className="text-[#1E7E34] inline-block mt-1">AYT Agro আছে সবসময়</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-[#3A4B3F] font-normal leading-relaxed max-w-2xl">
              আধুনিক কৃষি যন্ত্রপাতি, স্মার্ট সেচ ব্যবস্থা ও মাঠ পর্যায়ের সেবা দিয়ে আপনার কৃষিকে করি আরও সহজ, লাভজনক ও আধুনিক।
            </p>

            {/* Action CTAs matching reference */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                id="hero-services-cta-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreServices();
                }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#165B30] hover:bg-[#104323] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>আমাদের সেবা সমূহ</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#machinery-rental"
                id="hero-machinery-cta-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreMachinery();
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2F9F4] text-[#165B30] border border-[#BDDFCA] px-6 py-3.5 rounded-xl font-bold text-base shadow-xs hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>যন্ত্রপাতি ভাড়া নিন</span>
                <span className="text-lg">🚜</span>
              </a>
            </div>

            {/* Quick Hero Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#4A5E4F]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#28A745]" />
                <span>অন-ফিল্ড ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#28A745]" />
                <span>ন্যায্য দৈনিক ভাড়া</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#28A745]" />
                <span>অভিজ্ঞ ইঞ্জিনিয়ারিং সাপোর্ট</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Accent Card for larger screens */}
          <div className="lg:col-span-4 xl:col-span-5 hidden lg:flex justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Highlight Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-100 p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center font-bold">
                  <Tractor className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">১০০+ যন্ত্রপাতি প্রস্তুত</div>
                  <div className="text-[11px] text-gray-500">অন-ডিমান্ড মাঠ ডেলিভারি</div>
                </div>
              </div>

              {/* Main Rounded Visual Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Agricultural Machinery & Farming"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Stat Bubble */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#0F4A24] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-600/40">
                <div className="text-2xl font-black text-lime-400 font-english">500+</div>
                <div className="text-xs leading-tight">
                  সন্তুষ্ট কৃষক ও<br />বাণিজ্যিক খামারি
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
