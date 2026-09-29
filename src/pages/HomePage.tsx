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
  Search,
  Sprout,
  Smartphone
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
import { Hero } from '../components/Hero';
import { BrandPhilosophySection } from '../components/BrandPhilosophySection';
import { SixPillarsSection } from '../components/SixPillarsSection';
import { NaturalFarmingShowcase } from '../components/NaturalFarmingShowcase';
import { SoilHealthSection } from '../components/SoilHealthSection';
import { NaturalPestSection } from '../components/NaturalPestSection';
import { SmartWaterSection } from '../components/SmartWaterSection';
import { DigitalFarmSection } from '../components/DigitalFarmSection';
import { EcosystemBar } from '../components/EcosystemBar';
import { getWhatsAppLink } from '../utils/whatsapp';

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
    const link = getWhatsAppLink('হ্যালো AYT Agro, আমি আপনাদের প্রাকৃতিক কৃষি ও আধুনিক সেবা সম্পর্কে জানতে চাই।');
    window.open(link, '_blank');
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION WITH ECOLOGICAL POSITIONING */}
      <Hero />

      {/* 2. PARTNER ECOSYSTEM BAR (AYT Mart, AYT Agro, EV Lab) */}
      <EcosystemBar />

      {/* 3. BRAND PHILOSOPHY SECTION */}
      <BrandPhilosophySection />

      {/* 4. SIX CORE PILLARS SECTION */}
      <SixPillarsSection />

      {/* 5. NATURAL FARMING SHOWCASE & 9-STEP PROCESS */}
      <NaturalFarmingShowcase />

      {/* 6. SOIL HEALTH INTELLIGENCE SECTION */}
      <SoilHealthSection />

      {/* 7. NATURAL PEST MANAGEMENT SECTION */}
      <NaturalPestSection />

      {/* 8. SMART WATER & PRECISION IRRIGATION SECTION */}
      <SmartWaterSection />

      {/* 9. DIGITAL FARM & TRACEABILITY PLATFORM */}
      <DigitalFarmSection />

      {/* 10. MACHINERY RENTAL SECTION (Horizontal Carousel Slider) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                কৃষি যন্ত্রপাতি ভাড়া (Machinery Rental)
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                ভারী যন্ত্রপাতি কেনার প্রয়োজন নেই — সহজ শর্তে ন্যায্য দৈনিক ভাড়ায় মাঠ ডেলিভারি নিন।
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

      {/* 11. FARM ENGINEERING DARK GREEN CTA BANNER */}
      <section className="py-20 bg-[#0A2E16] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <DraftingCompass className="w-3.5 h-3.5" />
                <span>ফার্ম ইঞ্জিনিয়ারিং ও প্ল্যানিং (EV Lab Partnership)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                আপনার জমির জন্য কি <span className="text-[#80ED99]">বিশেষ সমাধান</span> দরকার?
              </h2>

              <p className="text-base text-emerald-100/90 leading-relaxed max-w-2xl font-light">
                “জমির আকার, পানির উৎস, মাটির অবস্থা ও চাষের ধরন অনুযায়ী আমরা তৈরি করতে পারি customized farm engineering & precision irrigation solution।”
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => navigate('farm-engineering')}
                className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>ইঞ্জিনিয়ারিং কনসালটেশন</span>
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

      {/* 12. FIELD PROJECTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                মাঠ পর্যায়ের সফল প্রকল্প (Field Case Studies)
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                বাংলাদেশের বিভিন্ন জেলায় বাস্তবায়িত প্রাকৃতিক কৃষি, ড্রিপ, সোলার ও ড্রেনেজ প্রকল্পের কেস স্টাডি।
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

      {/* 13. BLOG & KNOWLEDGE CENTER */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                কৃষি জ্ঞান ও বৈজ্ঞানিক পরামর্শ (Knowledge Center)
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

      {/* 14. FARMER TESTIMONIALS */}
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

      {/* 15. STATISTICS WITH VIEWPORT ANIMATED COUNTERS */}
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

      {/* 16. FINAL ACTION CTA BANNER */}
      <section className="py-24 relative overflow-hidden bg-[#0A2E16] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-700/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            🌱 আপনার বিশ্বস্ত প্রাকৃতিক ও স্মার্ট কৃষি পার্টনার
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            আজই আপনার কৃষির জন্য <br className="hidden sm:inline" />
            <span className="text-[#80ED99]">সঠিক প্রাকৃতিক ও প্রকৌশল সমাধান নিন</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            Natural farming, soil health test, smart drip, machinery rental অথবা farm engineering সেবার জন্য AYT Agro-এর বিশেষজ্ঞ দলের সঙ্গে সরাসরি যোগাযোগ করুন।
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
