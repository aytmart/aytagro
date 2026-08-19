import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Leaf, 
  Droplets, 
  Tractor, 
  FlaskConical, 
  SunMedium, 
  DraftingCompass, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Star, 
  Quote, 
  Clock, 
  MapPin, 
  Sparkles, 
  Eye, 
  ChevronRight, 
  ChevronLeft, 
  Calendar,
  Calculator,
  Search
} from 'lucide-react';
import { 
  SERVICES_DATA, 
  MACHINERY_DATA, 
  PRODUCTS_DATA, 
  SOLUTIONS_DATA, 
  PROJECTS_DATA, 
  BLOG_POSTS, 
  TESTIMONIALS, 
  STATISTICS_DATA 
} from '../data/mockData';
import { APP_CONFIG } from '../config/appConfig';
import { createRentalWhatsAppLink } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const { navigate, addToQuote, setIsQuoteDrawerOpen } = useApp();

  // Machinery horizontal carousel state
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Statistics in-view counter
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleHeroWhatsApp = () => {
    const text = encodeURIComponent('নমস্কার AYT Agro, আমি আপনাদের আধুনিক কৃষি সেবা ও যন্ত্রপাতি ভাড়া সম্পর্কে বিস্তারিত কথা বলতে চাই।');
    window.open(`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0">
      
      {/* -------------------------------------------------------------
          1. HERO SECTION
         ------------------------------------------------------------- */}
      <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#072411] text-white">
        {/* Background Landscape Photo (Strictly green crop landscape & tractor, zero women) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
            alt="Lush green agricultural fields with morning sunlight"
            className="w-full h-full object-cover object-center transform scale-105 animate-in fade-in duration-1000"
          />
          {/* Multi-layer High-contrast Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#072411]/95 via-[#072411]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072411] via-transparent to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Smart Solutions for Better Farming</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              কৃষকের সাথে, কৃষির জন্য <br />
              <span className="text-[#80ED99]">AYT Agro</span> আছে সবসময়
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 leading-relaxed font-light max-w-2xl">
              আধুনিক কৃষি যন্ত্রপাতি, স্মার্ট সেচ ব্যবস্থা ও মাঠ পর্যায়ের সেবা দিয়ে আপনার কৃষিকে করি আরও সহজ, লাভজনক ও আধুনিক।
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => navigate('services')}
                className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-7 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>আমাদের সেবা দেখুন</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate('machinery-rental')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs px-7 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>যন্ত্রপাতি ভাড়া নিন 🚜</span>
              </button>

              <button
                onClick={handleHeroWhatsApp}
                className="bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-200 border border-[#25D366]/50 px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp করুন</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-emerald-200/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>অন-ফিল্ড টেকনিক্যাল টিম</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>সাশ্রয়ী ও স্বচ্ছ মূল্য তালিকা</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>সারাদেশে সেবা সম্প্রসারণ</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. HOMEPAGE TRUST / SERVICE STRIP
         ------------------------------------------------------------- */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { title: 'Smart কৃষি সেবা', sub: 'প্রযুক্তিনির্ভর সমাধান', icon: Droplets, route: 'services' },
            { title: 'Machinery Rental', sub: 'প্রয়োজন অনুযায়ী ভাড়া', icon: Tractor, route: 'machinery-rental' },
            { title: 'Smart Irrigation', sub: 'পানি সাশ্রয়ী ব্যবস্থা', icon: Droplets, route: 'services' },
            { title: 'Soil Testing', sub: 'সঠিক কৃষি সিদ্ধান্ত', icon: FlaskConical, route: 'service-details', slug: 'soil-testing' },
            { title: 'Field Support', sub: 'মাঠ পর্যায়ের দ্রুত সেবা', icon: Wrench, route: 'contact' },
          ].map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                onClick={() => st.slug ? navigate('service-details', st.slug) : navigate(st.route as any)}
                className="p-3 rounded-2xl hover:bg-[#F2F8F4] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-[#1E7E34] text-[#1E7E34] group-hover:text-white flex items-center justify-center transition-colors mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-tight">
                    {st.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">{st.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. HOMEPAGE ABOUT (Problem -> Solution -> Service -> Support)
         ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EE] text-[#1E7E34] text-xs font-bold uppercase tracking-wider">
                আমাদের লক্ষ্য ও পরিচিতি
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C] leading-tight">
                কৃষিকে সহজ করতে <span className="text-[#1E7E34]">AYT Agro</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                AYT Agro কৃষকের বাস্তব সমস্যাকে কেন্দ্র করে আধুনিক, সাশ্রয়ী ও কার্যকর কৃষি সমাধান তৈরি করবে। আমরা বিশ্বাস করি—পরিকল্পিত কৃষি প্রযুক্তি ও সঠিক প্রকৌশল সেবার মাধ্যমে প্রতিটি খামারকে লাভজনক করা সম্ভব।
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1E7E34] flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">Technology</h4>
                  <p className="text-[11px] text-gray-500 mt-1">আধুনিক কৃষি প্রযুক্তি ও সেন্সর অটোমেশন</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1E7E34] flex items-center justify-center mb-2">
                    <DraftingCompass className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">Engineering</h4>
                  <p className="text-[11px] text-gray-500 mt-1">পরিকল্পিত ফার্ম ও পাইপলাইন ব্লুপ্রিন্ট</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1E7E34] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">Service</h4>
                  <p className="text-[11px] text-gray-500 mt-1">মাঠ পর্যায়ে টেকনিশিয়ানের সার্বক্ষণিক সাপোর্ট</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1E7E34] hover:text-[#114A20] group cursor-pointer"
                >
                  <span>আমাদের সম্পর্কে বিস্তারিত জানুন</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Ecosystem Process Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#0F4A24] to-[#1E7E34] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
              <h3 className="text-xl font-bold mb-4">আমাদের পূর্ণাঙ্গ ইকোসিস্টেম</h3>
              
              <div className="space-y-4">
                {[
                  { step: 'Problem', title: 'বাস্তব সমস্যা চিহ্নিতকরণ', desc: 'পানি অপচয়, শ্রমিক সংকট বা জলাবদ্ধতার কারণ অনুসন্ধান।' },
                  { step: 'Solution', title: 'উপযুক্ত প্রযুক্তি ও ডিজাইন', desc: 'ড্রিপ, ড্রেনেজ বা সোলার পাম্পের বৈজ্ঞানিক প্ল্যানিং।' },
                  { step: 'Service', title: 'মাঠে বাস্তবায়ন ও যন্ত্রপাতি সরবরাহ', desc: 'অন-ফিল্ড দক্ষ ইঞ্জিনিয়ার দ্বারা ইনস্টলেশন বা মেশিন হ্যান্ডওভার।' },
                  { step: 'Support', title: 'সার্বক্ষণিক রক্ষণাবেক্ষণ ও ফলোআপ', desc: 'ফসল উৎপাদন পর্যন্ত বিশেষজ্ঞ পরামর্শ ও পার্টস সাপোর্ট।' }
                ].map((eco, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 bg-white/10 p-3 rounded-2xl backdrop-blur-xs border border-white/10">
                    <span className="text-[11px] font-black font-english uppercase px-2 py-0.5 rounded-md bg-emerald-400 text-[#0F4A24] flex-shrink-0 mt-0.5">
                      {eco.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{eco.title}</h4>
                      <p className="text-[11px] text-emerald-100/80 mt-0.5">{eco.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. CORE SERVICES SECTION
         ------------------------------------------------------------- */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                আমাদের কৃষি সেবা
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                কৃষির প্রতিটি গুরুত্বপূর্ণ ধাপে AYT Agro-এর নির্ভরযোগ্য সমাধান।
              </p>
            </div>

            <button
              onClick={() => navigate('services')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E7E34] hover:text-[#114A20] group cursor-pointer"
            >
              <span>সকল সেবা এক্সপ্লোর করুন</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => navigate('service-details', service.slug)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md font-english">
                      {service.code}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1E7E34] group-hover:text-[#114A20]">
                    <span>বিস্তারিত ও বুকিং</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          5. MACHINERY RENTAL SECTION (Horizontal Carousel Slider)
         ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                কৃষি যন্ত্রপাতি ভাড়া
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                কেনার প্রয়োজন নেই — প্রয়োজন অনুযায়ী ভাড়া নিন।
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider('left')}
                disabled={!canScrollLeft}
                aria-label="Previous machine"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-50 hover:border-[#1E7E34] disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollSlider('right')}
                disabled={!canScrollRight}
                aria-label="Next machine"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-50 hover:border-[#1E7E34] disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate('machinery-rental')}
                className="ml-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#1E7E34] text-xs font-bold transition-colors cursor-pointer"
              >
                সব দেখুন
              </button>
            </div>
          </div>

          {/* Carousel Slider */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {MACHINERY_DATA.map((machine) => (
              <div
                key={machine.id}
                className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start bg-[#F8FAF8] rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 bg-white p-4 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-100 text-[#0F4A24] text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {machine.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug truncate">
                      {machine.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-[#1E7E34] font-english">৳ {machine.pricePerDay.toLocaleString()}</span>
                      <span className="text-xs text-gray-500 font-medium">/ {machine.unit}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#1E7E34]" />
                      <span className="truncate">{machine.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => navigate('machine-details', machine.slug)}
                    className="py-2.5 px-3 rounded-xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    বিবরণ
                  </button>

                  <button
                    onClick={() => navigate('booking')}
                    className="py-2.5 px-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-xs transition-colors text-center cursor-pointer"
                  >
                    ভাড়া নিন
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          6. HOW IT WORKS SECTION (4 Steps)
         ------------------------------------------------------------- */}
      <section className="py-20 bg-[#F4FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F3E6] text-[#1E7E34] text-xs font-bold uppercase tracking-wider mb-2">
              সহজ কার্যপদ্ধতি
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C]">
              কীভাবে কাজ করে AYT Agro
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              আপনার জমির প্রয়োজন জানানো থেকে শুরু করে মাঠে সমাধান পৌঁছে দেওয়া পর্যন্ত ৪টি সহজ ধাপ।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '০১', title: 'প্রয়োজন জানান', desc: 'ওয়েবসাইট, হটলাইন বা হোয়াটসঅ্যাপে জমির তথ্য ও সেবা নির্বাচন করুন।' },
              { num: '০২', title: 'সমাধান নির্ধারণ', desc: 'আমাদের কৃষি প্রকৌশলী জমির মাপ ও বাজেট অনুযায়ী নিখুঁত সমাধান তৈরি করবেন।' },
              { num: '০৩', title: 'মাঠে ডেলিভারি', desc: 'নির্দিষ্ট সময়ে আপনার জমিতে যন্ত্রপাতি, টেকনিশিয়ান বা সরঞ্জাম পৌঁছাবে।' },
              { num: '০৪', title: 'কাজ সম্পন্ন ও সাপোর্ট', desc: 'সফলভাবে কাজ সম্পন্ন শেষে নিয়মিত মনিটরিং ও ফলোআপ নিশ্চিত করা হবে।' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-[#80ED99] font-english mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          7. AGRICULTURAL SOLUTIONS
         ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EE] text-[#1E7E34] text-xs font-bold uppercase tracking-wider mb-2">
              কাস্টমাইজড কৃষি প্যাকেজ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C]">
              আপনার জমি, আপনার প্রয়োজন — সমাধান আমাদের
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              ক্ষুদ্র পারিবারিক বাগান থেকে শুরু করে বৃহৎ বাণিজ্যিক প্রজেক্ট — প্রতিটি চাহিদার জন্য বিশেষায়িত ইঞ্জিনিয়ারিং সমাধান।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_DATA.map((sol) => (
              <div
                key={sol.id}
                className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {sol.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {sol.problem}
                    </p>
                    <div className="space-y-1 pt-1">
                      {sol.expectedBenefit.map((b, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34] flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => navigate('solutions')}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#1E7E34] text-[#1E7E34] hover:text-white border border-[#1E7E34] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>সমাধানটি সম্পর্কে জানুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          8. FEATURED PRODUCTS CATALOG
         ------------------------------------------------------------- */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                AYT Agro Products
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                উন্নত মানের নির্ভরযোগ্য কৃষি যন্ত্রপাতি ও আধুনিক সেচ সরঞ্জাম।
              </p>
            </div>

            <button
              onClick={() => navigate('products')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E7E34] hover:text-[#114A20] group cursor-pointer"
            >
              <span>সকল পণ্য দেখুন ({PRODUCTS_DATA.length}+)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {PRODUCTS_DATA.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 bg-[#F8FAF8] flex items-center justify-center p-3 relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white/90 text-gray-700 rounded-md border border-gray-100">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 font-english uppercase tracking-wider">{p.brand}</span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors line-clamp-2 leading-snug">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-base font-black text-[#1E7E34] font-english">৳ {p.price.toLocaleString()}</span>
                      {p.originalPrice && (
                        <span className="text-xs text-gray-400 line-through font-english">৳ {p.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => navigate('product-details', p.slug)}
                    className="flex-1 py-2 px-2 rounded-lg border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    বিস্তারিত
                  </button>
                  <button
                    onClick={() => addToQuote({ id: p.id, title: p.name, type: 'product', unitPrice: p.price, image: p.image })}
                    className="flex-1 py-2 px-2 rounded-lg bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    + কোটেশন
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          9. FARM ENGINEERING DARK GREEN CTA BANNER
         ------------------------------------------------------------- */}
      <section className="py-20 bg-[#0A2E16] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <DraftingCompass className="w-3.5 h-3.5" />
                <span>ফার্ম ইঞ্জিনিয়ারিং ও প্ল্যানিং</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                আপনার জমির জন্য কি <span className="text-[#80ED99]">বিশেষ সমাধান</span> দরকার?
              </h2>

              <p className="text-base text-emerald-100/90 leading-relaxed max-w-2xl font-light">
                “জমির আকার, পানির উৎস, মাটির অবস্থা ও চাষের ধরন অনুযায়ী আমরা তৈরি করতে পারি customized farm solution।”
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => navigate('farm-engineering')}
                className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Consult an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleHeroWhatsApp}
                className="bg-white/10 hover:bg-white/20 text-white border border-emerald-500/40 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-xs cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp করুন</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          10. FIELD PROJECTS SECTION
         ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                মাঠ পর্যায়ের সফল প্রকল্প
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                বাংলাদেশের বিভিন্ন জেলায় বাস্তবায়িত ড্রিপ, সোলার ও ড্রেনেজ প্রকল্পের কেস স্টাডি।
              </p>
            </div>

            <button
              onClick={() => navigate('projects')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E7E34] hover:text-[#114A20] group cursor-pointer"
            >
              <span>সকল প্রজেক্ট দেখুন</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((proj) => (
              <div
                key={proj.id}
                onClick={() => navigate('project-details', proj.slug)}
                className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                      <MapPin className="w-3 h-3 text-[#1E7E34]" />
                      <span>{proj.location}</span>
                      <span>•</span>
                      <span>{proj.landSize}</span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug line-clamp-2">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {proj.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#1E7E34] group-hover:text-[#114A20]">
                    <span>কেস স্টাডি পড়ুন</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          11. BLOG & KNOWLEDGE CENTER
         ------------------------------------------------------------- */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                কৃষি জ্ঞান ও পরামর্শ
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                মাঠ পর্যায়ের অভিজ্ঞতা ও বৈজ্ঞানিক পরামর্শ দিয়ে ফলন বাড়ানোর উপায়।
              </p>
            </div>

            <button
              onClick={() => navigate('blog')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E7E34] hover:text-[#114A20] group cursor-pointer"
            >
              <span>সকল ব্লগ পড়ুন</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => navigate('article', post.slug)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1E7E34] group-hover:text-[#114A20]">
                    <span>সম্পূর্ণ পড়ুন</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          12. FARMER TESTIMONIALS (Bangladeshi male farmers / fields)
         ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F3E6] text-[#1E7E34] text-xs font-bold uppercase tracking-wider mb-2">
              মাঠের বাস্তব অভিজ্ঞতা
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C]">
              কৃষকের আস্থা, আমাদের অনুপ্রেরণা
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              সারাদেশের শত শত সফল কৃষক ও খামারিদের নির্ভরতার গল্প।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAF8] rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-emerald-200 group-hover:text-emerald-300 transition-colors" />
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed font-normal mb-6">
                    “{item.comment}”
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#1E7E34]"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-gray-900 truncate">
                        {item.name}
                      </h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34] flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#1E7E34]" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#1E7E34] mt-0.5 truncate">
                      {item.crop}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          13. STATISTICS WITH VIEWPORT ANIMATED COUNTERS
         ------------------------------------------------------------- */}
      <section ref={statsRef} className="py-16 bg-[#0D3B1C] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATISTICS_DATA.map((stat, idx) => (
              <div key={idx} className="space-y-2 p-3">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#80ED99] font-english tracking-tight">
                  <AnimatedNumber target={stat.value} trigger={statsInView} />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {stat.label}
                </h3>
                <p className="text-xs text-emerald-200/70 max-w-xs mx-auto">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          14. FINAL ACTION CTA
         ------------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden bg-[#0A2E16] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-700/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            🌱 আপনার বিশ্বস্ত কৃষি পার্টনার
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            আজই আপনার কৃষির জন্য <br className="hidden sm:inline" />
            <span className="text-[#80ED99]">সঠিক সমাধান নিন</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            সেচ, drainage, machinery, farm engineering অথবা যেকোনো কৃষি সেবার জন্য AYT Agro-এর সঙ্গে যোগাযোগ করুন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsQuoteDrawerOpen(true)}
              className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Get a Quote (কোটেশন নিন)</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleHeroWhatsApp}
              className="bg-white/10 hover:bg-white/20 text-white border border-emerald-500/50 px-8 py-4 rounded-2xl font-bold text-base backdrop-blur-xs transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-5 h-5 text-emerald-300" />
              <span>WhatsApp Us (সরাসরি চ্যাট)</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

const AnimatedNumber: React.FC<{ target: number; trigger: boolean }> = ({ target, trigger }) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let curr = 0;
    const duration = 1400;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      curr += increment;
      if (curr >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(curr));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return <span>{val}</span>;
};
