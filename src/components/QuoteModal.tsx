import React, { useState } from 'react';
import { X, Calculator, Send, CheckCircle2, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Smart Irrigation (ড্রিপ/স্প্রিংকলার)');
  const [landSize, setLandSize] = useState('3');
  const [unit, setUnit] = useState('বিঘা');
  const [location, setLocation] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculate rough estimate for guidance
  const calculateEstimate = () => {
    const size = parseFloat(landSize) || 1;
    let basePerBigha = 15000;

    if (serviceType.includes('Smart Irrigation')) {
      basePerBigha = 18000;
    } else if (serviceType.includes('যন্ত্রপাতি ভাড়া')) {
      basePerBigha = 1500 * 3; // 3 days typical
    } else if (serviceType.includes('সোলার')) {
      basePerBigha = 35000;
    } else if (serviceType.includes('ড্রেনেজ')) {
      basePerBigha = 4000;
    } else if (serviceType.includes('মাটি পরীক্ষা')) {
      return '৳ ১,০৫০ (৩টি নমুনা)';
    }

    if (unit === 'শতক') {
      const estimated = Math.round((basePerBigha / 33) * size);
      return `৳ ${estimated.toLocaleString()}`;
    } else if (unit === 'একর') {
      const estimated = Math.round(basePerBigha * 3 * size);
      return `৳ ${estimated.toLocaleString()}`;
    } else {
      const estimated = Math.round(basePerBigha * size);
      return `৳ ${estimated.toLocaleString()}`;
    }
  };

  const handleSendQuoteViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const estimate = calculateEstimate();
    const text = encodeURIComponent(
      `🌾 AYT Agro - কোটেশন অনুরোধ:\n\n` +
      `👤 নাম: ${name || 'অনুসন্ধানকারী'}\n` +
      `📞 ফোন: ${phone || 'দেওয়া হয়নি'}\n` +
      `📍 এলাকা: ${location || 'বাংলাদেশ'}\n` +
      `⚙️ সেবা: ${serviceType}\n` +
      `📐 জমির পরিমাপ: ${landSize} ${unit}\n` +
      `💰 আনুমানিক বাজেট/কোটেশন: ${estimate}\n` +
      `📝 অতিরিক্ত তথ্য: ${additionalNotes || 'নেই'}\n\n` +
      `দয়া করে আমার সাথে যোগাযোগ করে চূড়ান্ত কোটেশন ও সাইট ভিজিট প্ল্যান জানান।`
    );

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0F4A24] to-[#1E7E34] p-6 text-white">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>ফ্রি কোটেশন ও খরচ ক্যালকুলেটর</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            আপনার কৃষির জন্য সঠিক কোটেশন নিন
          </h3>
          <p className="text-xs text-emerald-100 mt-1">
            জমির তথ্য দিয়ে তাৎক্ষণিক আনুমানিক খরচ জানুন এবং আমাদের বিশেষজ্ঞের সাথে পরামর্শ করুন।
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendQuoteViaWhatsApp} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1E7E34] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">কোটেশন অনুরোধ পাঠানো হয়েছে!</h4>
              <p className="text-xs text-gray-500">
                আমাদের কৃষি প্রকৌশলী আপনার সাথে দ্রুত যোগাযোগ করবেন।
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">আপনার নাম *</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: মো. রফিকুল ইসলাম"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34] focus:ring-1 focus:ring-[#1E7E34]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">মোবাইল নম্বর *</label>
                  <input
                    type="tel"
                    required
                    placeholder="যেমন: 01712-345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34] focus:ring-1 focus:ring-[#1E7E34]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">কোন সেবাটি প্রয়োজন? *</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34] bg-white"
                >
                  <option value="Smart Irrigation (ড্রিপ/স্প্রিংকলার)">Smart Irrigation (ড্রিপ/স্প্রিংকলার সেচ)</option>
                  <option value="যন্ত্রপাতি ভাড়া (পাওয়ার টিলার/স্প্রেয়ার/পাম্প)">যন্ত্রপাতি ভাড়া (পাওয়ার টিলার / স্প্রেয়ার / পাম্প)</option>
                  <option value="সোলার সেচ পাম্প ইনস্টলেশন">সোলার সেচ পাম্প ইনস্টলেশন</option>
                  <option value="ড্রেনেজ ও পানি নিষ্কাশন সমাধান">ড্রেনেজ ও পানি নিষ্কাশন সমাধান</option>
                  <option value="মাটি পরীক্ষা ও সার পরামর্শ">মাটি পরীক্ষা ও সার পরামর্শ</option>
                  <option value="ফার্ম ইঞ্জিনিয়ারিং ও মাস্টারপ্ল্যান">ফার্ম ইঞ্জিনিয়ারিং ও মাস্টারপ্ল্যান</option>
                </select>
              </div>

              {/* Land Size & Unit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">জমির পরিমাপ</label>
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">একক</label>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34] bg-white"
                  >
                    <option value="বিঘা">বিঘা</option>
                    <option value="শতক / ডেসিমাল">শতক / ডেসিমাল</option>
                    <option value="একর">একর</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">জমির অবস্থান / জেলা</label>
                <input
                  type="text"
                  placeholder="যেমন: শিবগঞ্জ, বগুড়া"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">অতিরিক্ত বিবরণ (যদি থাকে)</label>
                <textarea
                  rows={2}
                  placeholder="যেমন: পেঁপে বাগান, পানির উৎস নলকূপ..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              {/* Dynamic Instant Cost Calculation Bar */}
              <div className="p-3.5 rounded-2xl bg-[#EAF5EE] border border-[#C2E5CC] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-gray-500 font-medium">আনুমানিক প্রাথমিক হিসাব:</div>
                  <div className="text-xs font-bold text-[#0D3B1C]">{landSize} {unit} জমির জন্য</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-[#1E7E34] font-english">{calculateEstimate()}</div>
                  <div className="text-[10px] text-gray-400">চূড়ান্ত দর আলোচনা সাপেক্ষে</div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে কোটেশন নিশ্চিত করুন</span>
              </button>
            </>
          )}

        </form>

      </div>
    </div>
  );
};
