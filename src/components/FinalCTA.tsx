import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('নমস্কার, আমি AYT Agro-এর সেবা সম্পর্কে বিস্তারিত কথা বলতে চাই।');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A2E16] text-white">
      {/* Background Photography with High Contrast Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
          alt="Agricultural Harvest and Green Field"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E16] via-[#0A2E16]/80 to-[#0A2E16]" />
      </div>

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

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            id="final-cta-get-quote-btn"
            className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Get a Quote (কোটেশন নিন)</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleWhatsAppClick}
            id="final-cta-whatsapp-btn"
            className="bg-white/10 hover:bg-white/20 text-white border border-emerald-500/50 px-8 py-4 rounded-2xl font-bold text-base backdrop-blur-xs transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-emerald-300" />
            <span>WhatsApp Us (সরাসরি চ্যাট)</span>
          </button>
        </div>

        {/* Bottom Trust Note */}
        <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-emerald-200/80">
          <span>✓ ফ্রি পরামর্শ ও সাইট ভিজিট প্ল্যান</span>
          <span>✓ দেশব্যাপী অন-ফিল্ড সার্ভিসিং</span>
          <span>✓ শতভাগ অরিজিনাল ইকুইপমেন্ট</span>
        </div>

      </div>
    </section>
  );
};
