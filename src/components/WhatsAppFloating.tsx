import React, { useState } from 'react';
import { MessageSquare, X, Send, Leaf, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickOptions = [
    { label: '💧 আমি Smart Irrigation সম্পর্কে জানতে চাই', msg: 'আমি Smart Irrigation সম্পর্কে জানতে চাই।' },
    { label: '🚜 আমি Power Tiller ভাড়া নিতে চাই', msg: 'আমি Power Tiller ভাড়া নিতে চাই।' },
    { label: '📐 আমি Farm Engineering consultation চাই', msg: 'আমি Farm Engineering consultation চাই।' },
    { label: '🧪 আমি মাটি পরীক্ষা করাতে চাই', msg: 'আমি আমার জমির মাটি পরীক্ষা ও সার পরামর্শ চাই।' }
  ];

  const handleSendWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expandable Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#0F4A24] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#1E7E34] flex items-center justify-center text-white">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="w-3 h-3 bg-emerald-400 border-2 border-[#0F4A24] rounded-full absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">AYT Agro সাপোর্ট</h4>
                <p className="text-[11px] text-emerald-200 font-light">সাধারণত ১ মিনিটে উত্তর দেওয়া হয়</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Pre-filled Questions */}
          <div className="p-4 bg-[#F8FAF8] space-y-2 max-h-60 overflow-y-auto">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              একটি বিষয় বেছে নিন:
            </div>
            
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSendWhatsApp(opt.msg)}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#EBF7EE] border border-gray-100 hover:border-[#1E7E34] text-xs font-semibold text-gray-800 hover:text-[#1E7E34] transition-all shadow-2xs flex items-center justify-between group cursor-pointer"
              >
                <span>{opt.label}</span>
                <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1 text-[#1E7E34]" />
              </button>
            ))}
          </div>

          {/* Custom Message Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="আপনার প্রশ্ন লিখুন..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSendWhatsApp(customMsg.trim());
                  setCustomMsg('');
                }
              }}
              className="flex-1 text-xs p-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) {
                  handleSendWhatsApp(customMsg.trim());
                  setCustomMsg('');
                }
              }}
              className="p-2.5 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact via WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group relative cursor-pointer"
      >
        {/* Pulse ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none" />
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </button>

    </div>
  );
};
