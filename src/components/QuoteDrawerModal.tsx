import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, ShoppingBag, Send, MessageSquare, Plus, Minus, CheckCircle2, Calculator } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const QuoteDrawerModal: React.FC = () => {
  const { 
    quoteCart, 
    removeFromQuote, 
    clearQuoteCart, 
    isQuoteDrawerOpen, 
    setIsQuoteDrawerOpen, 
    addToQuote, 
    addToast,
    navigate
  } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [landSize, setLandSize] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isQuoteDrawerOpen) return null;

  const totalEstimate = quoteCart.reduce((sum, item) => {
    return sum + (item.unitPrice || 0) * (item.quantity || 1);
  }, 0);

  const handleSendInquiryViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteCart.length === 0) {
      addToast('warning', 'কোটেশন তালিকায় কোনো আইটেম নেই!');
      return;
    }

    const itemsSummary = quoteCart.map((it, idx) => 
      `${idx + 1}. ${it.title} (পরিমাণ: ${it.quantity || 1}${it.unitPrice ? `, একক মূল্য: ৳ ${it.unitPrice.toLocaleString()}` : ''})`
    ).join('\n');

    const totalText = totalEstimate > 0 ? `\n💰 আনুমানিক মোট: ৳ ${totalEstimate.toLocaleString()}` : '';

    const message = 
      `🌾 AYT Agro - সামগ্রিক কোটেশন ও ইনকোয়ারি:\n\n` +
      `👤 নাম: ${customerName || 'অনুসন্ধানকারী'}\n` +
      `📞 ফোন: ${phone || 'দেওয়া হয়নি'}\n` +
      `📍 জেলা: ${district || 'বাংলাদেশ'}\n` +
      `📐 জমির পরিমাপ: ${landSize || 'উল্লেখ নেই'}\n\n` +
      `📦 নির্বাচিত আইটেম সমূহ:\n${itemsSummary}${totalText}\n\n` +
      `📝 অতিরিক্ত নোট: ${notes || 'নেই'}\n\n` +
      `দয়া করে আমার সাথে যোগাযোগ করে বিস্তারিত কোটেশন ও সরবরাহ প্রক্রিয়া নিশ্চিত করুন।`;

    const link = generateWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      clearQuoteCart();
      setIsQuoteDrawerOpen(false);
      addToast('success', 'কোটেশন অনুরোধ সফলভাবে পাঠানো হয়েছে!');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#0F4A24] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold leading-none">কোটেশন ও ইনকোয়ারি লিস্ট</h3>
              <span className="text-[11px] text-emerald-200">{quoteCart.length} টি আইটেম নির্বাচিত</span>
            </div>
          </div>

          <button
            onClick={() => setIsQuoteDrawerOpen(false)}
            className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {quoteCart.length === 0 ? (
            <div className="text-center py-16 space-y-3 text-gray-400">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-gray-600">কোটেশন তালিকা বর্তমানে খালি</p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                পণ্য, যন্ত্রপাতি বা সেবা তালিকা থেকে "Add to Quote" বাটনে ক্লিক করে এখানে আইটেম যুক্ত করুন।
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={() => { setIsQuoteDrawerOpen(false); navigate('products'); }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-[#1E7E34] text-xs font-bold hover:bg-emerald-100"
                >
                  পণ্য ক্যাটালগ দেখুন
                </button>
                <button
                  onClick={() => { setIsQuoteDrawerOpen(false); navigate('machinery-rental'); }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-[#1E7E34] text-xs font-bold hover:bg-emerald-100"
                >
                  যন্ত্রপাতি ভাড়া
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <span>নির্বাচিত আইটেম</span>
                  <button
                    onClick={clearQuoteCart}
                    className="text-red-500 hover:underline cursor-pointer"
                  >
                    সব মুছুন
                  </button>
                </div>

                {quoteCart.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-10 h-10 object-contain rounded-lg bg-white p-1 border border-gray-200" />
                      )}
                      <div className="min-w-0">
                        <h4 className="font-bold text-gray-900 truncate">{item.title}</h4>
                        {item.unitPrice ? (
                          <div className="text-[11px] text-[#1E7E34] font-bold font-english">
                            ৳ {item.unitPrice.toLocaleString()} {item.type === 'machine' ? '/ দিন' : ''}
                          </div>
                        ) : (
                          <div className="text-[11px] text-gray-400">কোটেশন সাপেক্ষে</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                        <button
                          onClick={() => {
                            if ((item.quantity || 1) > 1) {
                              addToQuote({ ...item, quantity: -1 });
                            } else {
                              removeFromQuote(item.id);
                            }
                          }}
                          className="px-1.5 py-0.5 text-gray-500 hover:text-red-500"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-1 text-xs font-bold font-english">{item.quantity || 1}</span>
                        <button
                          onClick={() => addToQuote({ ...item, quantity: 1 })}
                          className="px-1.5 py-0.5 text-gray-500 hover:text-[#1E7E34]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromQuote(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 rounded-md"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              {totalEstimate > 0 && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700">আনুমানিক প্রাথমিক মোট:</span>
                  <span className="text-base font-black text-[#0F4A24] font-english">৳ {totalEstimate.toLocaleString()}</span>
                </div>
              )}

              {/* Customer Contact Form */}
              <form id="quote-drawer-form" onSubmit={handleSendInquiryViaWhatsApp} className="space-y-3 pt-2 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">আপনার যোগাযোগের তথ্য</h4>
                
                <div>
                  <input
                    type="text"
                    required
                    placeholder="আপনার নাম *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="মোবাইল নম্বর *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                  <input
                    type="text"
                    placeholder="জেলা / উপজেলা"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="জমির আয়তন (যেমন: ৩ বিঘা / ৫ একর)"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />

                <textarea
                  rows={2}
                  placeholder="বিশেষ দ্রষ্টব্য বা প্রশ্ন..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{submitted ? 'অনুরোধ পাঠানো হয়েছে...' : 'হোয়াটসঅ্যাপে কোটেশন অনুরোধ পাঠান'}</span>
                </button>
              </form>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-[11px] text-gray-500">
          🌾 AYT Agro • Smart Solutions for Better Farming
        </div>
      </div>
    </div>
  );
};
