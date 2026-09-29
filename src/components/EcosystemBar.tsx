import React from 'react';
import { APP_CONFIG } from '../config/appConfig';
import { ExternalLink, ShoppingBag, Sprout, Compass, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const EcosystemBar: React.FC = () => {
  return (
    <section className="py-12 bg-[#082211] text-white border-t border-emerald-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Ecosystem Statement */}
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-bold font-english border border-emerald-700/50">
              AYT AGRO & PARTNER ECOSYSTEM
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              একটি সংযুক্ত ডিজিটাল কৃষি ও ইঞ্জিনিয়ারিং প্ল্যাটফর্ম
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              কৃষি যন্ত্রপাতি ও নিরাপদ খাদ্য সরবরাহ থেকে শুরু করে ভিজ্যুয়াল ল্যাব ইঞ্জিনিয়ারিং — আমাদের পার্টনার নেটওয়ার্কের সেবা নিন।
            </p>
          </div>

          {/* Right: 3 Ecosystem Action Link Cards */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-3.5 w-full lg:w-auto">
            
            {/* AYT Mart */}
            <a
              href={APP_CONFIG.ecosystem.aytMart}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-3 rounded-2xl transition-all hover:scale-105 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>AYT Mart</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[11px] text-emerald-300">নিরাপদ কৃষিপণ্য ও গ্রোসারি</div>
              </div>
            </a>

            {/* AYT Agro Portal */}
            <a
              href={APP_CONFIG.ecosystem.aytAgroPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-500/30 px-4 py-3 rounded-2xl transition-all hover:scale-105 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#4EFA8B] flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>AYT Agro Portal</span>
                  <ExternalLink className="w-3 h-3 text-[#4EFA8B] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[11px] text-emerald-300">মূল এগ্রো পোর্টাল ও সার্ভিস</div>
              </div>
            </a>

            {/* Engineering Visual Lab */}
            <a
              href={APP_CONFIG.ecosystem.engineeringVisualLab}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-3 rounded-2xl transition-all hover:scale-105 group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>EV Lab</span>
                  <ExternalLink className="w-3 h-3 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[11px] text-emerald-300">Engineering Visual Lab</div>
              </div>
            </a>

            {/* WhatsApp Quick Direct Link */}
            <a
              href={getWhatsAppLink('হ্যালো AYT Agro, আমি প্রাকৃতিক কৃষি ও যন্ত্রপাতি সেবা নিয়ে বিস্তারিত জানতে চাই।')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-2xl font-bold text-xs transition-all hover:scale-105 shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs font-black">সরাসরি হোয়াটসঅ্যাপ</div>
                <div className="text-[10px] opacity-90">{APP_CONFIG.contact.whatsappNumber}</div>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
