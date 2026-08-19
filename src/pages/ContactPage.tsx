import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const { addToast } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [subject, setSubject] = useState('সাধারণ অনুসন্ধান');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = 
      `🌾 AYT Agro বার্তা ও অনুসন্ধান:\n\n` +
      `👤 নাম: ${name}\n` +
      `📞 ফোন: ${phone}\n` +
      `📍 জেলা: ${district}\n` +
      `📌 বিষয়: ${subject}\n\n` +
      `📝 বার্তা: ${message}`;

    window.open(generateWhatsAppLink(text), '_blank');
    setSubmitted(true);
    addToast('success', 'আপনার বার্তা সফলভাবে প্রেরণ করা হয়েছে!');
    setTimeout(() => {
      setName('');
      setPhone('');
      setDistrict('');
      setMessage('');
      setSubmitted(false);
    }, 2000);
  };

  const hubs = [
    { name: 'ঢাকা হেড অফিস', address: APP_CONFIG.DHAKA_OFFICE, phone: '+880 1712-345678' },
    { name: 'বগুড়া সেন্ট্রাল হাব', address: APP_CONFIG.BOGURA_HUB, phone: '+880 1712-345679' },
    { name: 'নাটোর রিজিওনাল হাব', address: 'হরিশপুর বাইপাস মোড়, নাটোর সদর', phone: '+880 1712-345680' },
    { name: 'দিনাজপুর হাব', address: 'দশমাইল মোড়, কাহারোল রোড, দিনাজপুর', phone: '+880 1712-345681' },
    { name: 'রংপুর হাব', address: 'মডার্ন মোড়, কুড়িগ্রাম রোড, রংপুর', phone: '+880 1712-345682' },
    { name: 'যশোর হাব', address: 'মনিহার চত্বর, ঝিনাইদহ রোড, যশোর', phone: '+880 1712-345683' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Contact & Field Hubs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            যোগাযোগ ও ফিল্ড হাবসমূহ
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            যেকোনো সেবা, যন্ত্রপাতি ভাড়া বা প্রযুক্তি পরামর্শের জন্য আমাদের সাথে সরাসরি দেখা করুন অথবা ফোনে যোগাযোগ করুন।
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider">সরাসরি বার্তা পাঠান</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
                আপনার জিজ্ঞাসা লিখে পাঠান
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">আপনার নাম *</label>
                  <input
                    type="text"
                    required
                    placeholder="নাম লিখুন"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">মোবাইল নম্বর *</label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">জেলা / উপজেলা</label>
                  <input
                    type="text"
                    placeholder="যেমন: বগুড়া"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">অনুসন্ধানের বিষয়</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-hidden focus:border-[#1E7E34]"
                  >
                    <option value="স্মার্ট সেচ প্রকল্প">স্মার্ট সেচ প্রকল্প</option>
                    <option value="যন্ত্রপাতি ভাড়া">যন্ত্রপাতি ভাড়া</option>
                    <option value="মাটি ও পানি পরীক্ষা">মাটি ও পানি পরীক্ষা</option>
                    <option value="সোলার পাম্প স্থাপন">সোলার পাম্প স্থাপন</option>
                    <option value="সাধারণ প্রশ্ন">সাধারণ প্রশ্ন</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">আপনার বার্তা *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="বিস্তারিত লিখুন..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>বার্তা প্রেরণ করুন</span>
              </button>
            </form>
          </div>

          {/* Right Fast Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-[#0F4A24] rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">জরুরি যোগাযোগ</span>
                <h3 className="text-xl font-bold mt-1">সরাসরি কথা বলুন</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${APP_CONFIG.HOTLINE_TEL}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-emerald-200 block">কাস্টমার হটলাইন (সকাল ৮টা - রাত ৮টা):</span>
                    <strong className="text-base font-english text-white">{APP_CONFIG.HOTLINE}</strong>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-emerald-200 block">WhatsApp লাইভ সাপোর্ট:</span>
                    <strong className="text-base font-english text-white">+880 1712-345678</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${APP_CONFIG.EMAIL}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-emerald-200 block">ইমেইল যোগাযোগ:</span>
                    <strong className="text-sm font-english text-white">{APP_CONFIG.EMAIL}</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Hubs Grid */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-gray-900">প্রধান আঞ্চলিক হাবসমূহ</h4>
              <div className="space-y-3 text-xs">
                {hubs.slice(0, 3).map((h, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
                    <div className="font-bold text-[#0F4A24] flex items-center justify-between">
                      <span>{h.name}</span>
                      <span className="font-english text-gray-500">{h.phone}</span>
                    </div>
                    <p className="text-gray-500">{h.address}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
