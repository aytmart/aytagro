import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Sprout, Smartphone, Tractor, FlaskConical, Droplets } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeroProps {
  onExploreServices?: () => void;
  onExploreMachinery?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { navigate } = useApp();

  return (
    <section 
      id="home"
      className="relative min-h-[600px] lg:min-h-[660px] flex items-center bg-gradient-to-br from-[#072412] via-[#0D3B1C] to-[#124E26] text-white overflow-hidden"
    >
      {/* Background Hero Banner Image with Ecological Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
          alt="AYT Agro Natural Farming and Smart Technology Landscape"
          className="w-full h-full object-cover object-center lg:object-right opacity-25 mix-blend-luminosity"
          loading="eager"
        />
        {/* Subtle Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062410] via-[#062410]/90 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062410] via-transparent to-transparent" />
      </div>

      {/* Decorative Floating Glowing Orbs */}
      <div className="absolute top-12 right-12 hidden xl:block w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 hidden xl:block w-96 h-96 rounded-full bg-lime-400/10 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/70 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#4EFA8B]" />
              <span>Natural Farming + Smart Technology + Farm Engineering</span>
            </div>

            {/* Main Bold Bengali Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white leading-[1.25] tracking-tight">
              প্রকৃতির নিয়মে কৃষি, <br />
              <span className="text-[#4EFA8B] inline-block mt-1">প্রযুক্তির সহায়তায়</span>
            </h1>

            {/* English Tagline */}
            <div className="text-xs sm:text-base font-semibold text-emerald-200/90 font-english tracking-wide">
              Natural Farming. Smart Technology. Better Agriculture.
            </div>

            {/* Subheading */}
            <p className="text-sm sm:text-lg text-emerald-100/90 font-normal leading-relaxed max-w-2xl">
              Natural farming, soil health, smart irrigation, digital farm management এবং farmer-friendly agricultural tools নিয়ে AYT Agro-এর নতুন টেকসই কৃষি সমাধান।
            </p>

            {/* Action CTAs matching Section 30 Priority */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              
              {/* Primary CTA: Natural Farming */}
              <button
                id="hero-natural-farming-btn"
                onClick={() => navigate('natural-farming')}
                className="inline-flex items-center justify-center gap-2 bg-[#28A745] hover:bg-[#218838] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 active:scale-95 cursor-pointer flex-1 sm:flex-initial min-w-[140px]"
              >
                <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>🌱 Natural Farming</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
              </button>

              {/* AI Crop Assistant CTA */}
              <button
                id="hero-ai-assistant-btn"
                onClick={() => navigate('crop-assistant')}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base shadow-lg border border-emerald-400/40 transition-all duration-200 active:scale-95 cursor-pointer flex-1 sm:flex-initial min-w-[140px]"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
                <span>🤖 AI কৃষি পরামর্শক</span>
              </button>

              {/* Secondary CTA: Smart Farm */}
              <button
                id="hero-smart-farm-btn"
                onClick={() => navigate('digital-farm')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
                <span>📱 Smart Farm</span>
              </button>

              {/* Tertiary CTA: Farm Tools */}
              <button
                id="hero-farm-tools-btn"
                onClick={() => navigate('machinery-rental')}
                className="inline-flex items-center justify-center gap-2 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/50 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Tractor className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span>🚜 Farm Tools</span>
              </button>
            </div>


            {/* Quick Hero Trust Indicators with 4 Key Areas */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-emerald-200/80">
              <div className="flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-amber-400" />
                <span>মাটির স্বাস্থ্য পরীক্ষা</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-sky-400" />
                <span>৫০% পানি সাশ্রয়ী সেচ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>প্রাকৃতিক বালাই দমন</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>অন-ফিল্ড টেকনিক্যাল সাপোর্ট</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Matrix */}
          <div className="lg:col-span-4 xl:col-span-5 hidden lg:flex justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Floating Soil Health Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 text-gray-900 p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">ল্যাবরেটরি সয়েল টেস্ট</div>
                  <div className="text-[11px] text-emerald-700 font-medium">পিএইচ ও অর্গানিক ম্যাটার</div>
                </div>
              </div>

              {/* Main Rounded Visual Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-600/30">
                <img
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22510?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Natural Farming and Precision Agriculture"
                  className="w-full h-84 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Stat Bubble */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#062410] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-500/40">
                <div className="text-2xl font-black text-[#4EFA8B] font-english">100%</div>
                <div className="text-xs leading-tight text-emerald-100">
                  ইকোলজিক্যাল কৃষি ও<br />টেকসই সমাধান
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

