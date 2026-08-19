import React from 'react';
import { DraftingCompass, MessageSquare, PhoneCall, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FarmEngineeringCTAProps {
  onConsultExpert: () => void;
}

export const FarmEngineeringCTA: React.FC<FarmEngineeringCTAProps> = ({ onConsultExpert }) => {
  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent('নমস্কার, আমি আমার জমির জন্য Customized Farm Engineering / Irrigation সমাধান নিয়ে বিশেষজ্ঞ পরামর্শ চাই।');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#0A2E16] text-white relative overflow-hidden">
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
          alt="Farm Engineering Blueprint Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2E16]/90 mix-blend-multiply" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-lime-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <DraftingCompass className="w-3.5 h-3.5" />
              <span>কাস্টমাইজড ফার্ম ইঞ্জিনিয়ারিং সার্ভিস</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              আপনার জমির জন্য কি <span className="text-[#80ED99]">বিশেষ সমাধান</span> দরকার?
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-light">
              “জমির আকার, পানির উৎস, মাটির অবস্থা ও চাষের ধরন অনুযায়ী আমরা তৈরি করতে পারি customized farm solution।”
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>অন-ফিল্ড সারভে ও ম্যাপিং</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>হাইড্রোলিক পাইপলাইন ডিজাইন</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>বাজেট ও সম্ভাব্য ফলন প্ল্যান</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={onConsultExpert}
              id="farm-engineering-consult-btn"
              className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-7 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Consult an Expert</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleWhatsAppConsultation}
              id="farm-engineering-whatsapp-btn"
              className="bg-white/10 hover:bg-white/20 text-white border border-emerald-500/40 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-xs cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-5 h-5 text-emerald-300" />
              <span>WhatsApp করুন</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
