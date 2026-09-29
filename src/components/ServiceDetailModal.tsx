import React from 'react';
import { X, CheckCircle2, MessageSquare, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(`নমস্কার, আমি AYT Agro-এর "${service.title}" সম্পর্কে বিস্তারিত জানতে ও সেবা নিতে চাই।`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1E7E34] text-white text-xs font-bold font-english mb-2">
                SERVICE CODE #{service.code}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 font-english mt-0.5">
                {service.titleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">সেবার বিবরণ</h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Features Included */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">এই সেবায় অন্তর্ভুক্ত</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 bg-[#F5FAF6] p-2.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits and Ideal For */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div>
              <h5 className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider mb-1.5">কাদের জন্য প্রযোজ্য?</h5>
              <p className="text-xs text-gray-700 font-medium">{service.idealFor}</p>
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider mb-1.5">মূল উপকারিতা</h5>
              <ul className="text-xs text-gray-700 space-y-1">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7E34]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Estimate */}
          {service.startingPrice && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs font-bold text-[#0D3B1C]">আনুমানিক প্রাথমিক খরচ:</span>
              <span className="text-sm font-black text-[#1E7E34]">{service.startingPrice}</span>
            </div>
          )}

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#1E7E34] text-[#1E7E34] hover:bg-emerald-50 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            কোটেশন চান
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#1E7E34] hover:bg-[#155D27] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>হোয়াটসঅ্যাপে বুক করুন</span>
          </button>
        </div>

      </div>
    </div>
  );
};
