import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, MACHINERY_DATA } from '../data/mockData';
import { 
  Calendar, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Tractor, 
  Droplets, 
  DraftingCompass, 
  AlertCircle,
  Copy,
  Sparkles
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { BookingRecord } from '../types';

export const BookingPage: React.FC = () => {
  const { activeSlug, createBooking, addToast, navigate, user } = useApp();

  const [bookingType, setBookingType] = useState<'service' | 'machine' | 'engineering'>('service');
  const [selectedItemSlug, setSelectedItemSlug] = useState<string>('');

  // Form Fields
  const [farmerName, setFarmerName] = useState(user ? user.name : '');
  const [phone, setPhone] = useState(user ? user.phone : '');
  const [district, setDistrict] = useState(user ? user.district : 'বগুড়া');
  const [thana, setThana] = useState(user ? user.thana || '' : '');
  const [landSize, setLandSize] = useState('');
  const [cropType, setCropType] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [notes, setNotes] = useState('');
  const [urgent, setUrgent] = useState(false);

  // Success State
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  useEffect(() => {
    if (activeSlug) {
      const matchService = SERVICES_DATA.find((s) => s.slug === activeSlug);
      const matchMachine = MACHINERY_DATA.find((m) => m.slug === activeSlug);

      if (matchService) {
        setBookingType('service');
        setSelectedItemSlug(matchService.slug);
      } else if (matchMachine) {
        setBookingType('machine');
        setSelectedItemSlug(matchMachine.slug);
      }
    }
  }, [activeSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let itemTitle = 'সাধারণ কৃষি পরামর্শ';
    if (bookingType === 'service') {
      const s = SERVICES_DATA.find((x) => x.slug === selectedItemSlug) || SERVICES_DATA[0];
      itemTitle = s.title;
    } else if (bookingType === 'machine') {
      const m = MACHINERY_DATA.find((x) => x.slug === selectedItemSlug) || MACHINERY_DATA[0];
      itemTitle = m.name;
    } else {
      itemTitle = 'ফার্ম ইঞ্জিনিয়ারিং ও সাইট প্ল্যানিং কনসালটেশন';
    }

    const newRecord = createBooking({
      type: bookingType,
      itemSlug: selectedItemSlug || 'general',
      itemTitle,
      farmerName,
      phone,
      district,
      thana,
      landSize: landSize || 'অনির্দিষ্ট',
      bookingDate: bookingDate || 'জরুরি/আলোচনা সাপেক্ষে',
      notes: notes + (urgent ? ' (জরুরি ভিত্তিতে প্রয়োজন)' : '')
    });

    setConfirmedBooking(newRecord);
  };

  const handleWhatsAppShare = () => {
    if (!confirmedBooking) return;
    const text = 
      `🌾 AYT Agro বুকিং নিশ্চিতকরণ:\n\n` +
      `📌 বুকিং ট্র্যাকিং আইডি: ${confirmedBooking.id}\n` +
      `🚜 সেবা/যন্ত্র: ${confirmedBooking.itemTitle}\n` +
      `👤 কৃষক/গ্রাহকের নাম: ${confirmedBooking.farmerName}\n` +
      `📞 মোবাইল: ${confirmedBooking.phone}\n` +
      `📍 অবস্থান: ${confirmedBooking.thana ? `${confirmedBooking.thana}, ` : ''}${confirmedBooking.district}\n` +
      `📐 জমির পরিমাপ: ${confirmedBooking.landSize}\n` +
      `📅 প্রত্যাশিত তারিখ: ${confirmedBooking.bookingDate}\n` +
      `📝 মন্তব্য: ${confirmedBooking.notes || 'নেই'}\n\n` +
      `দয়া করে আমার এই বুকিংটি অনুমোদন করে দ্রুত কনফার্ম করুন।`;

    window.open(generateWhatsAppLink(text), '_blank');
  };

  const copyBookingId = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.id);
      addToast('info', 'বুকিং আইডি ক্লিপবোর্ডে কপি করা হয়েছে');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Banner */}
      <div className="bg-[#0A2E16] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Online Booking & Service Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            অনলাইন সেবা ও যন্ত্রপাতি বুকিং
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            আপনার কাঙ্ক্ষিত সেবা, মেশিন বা ইঞ্জিনিয়ারিং কনসালটেশনের তথ্য দিন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করে সেবা নিশ্চিত করবে।
          </p>
        </div>
      </div>

      {/* Main Booking Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {confirmedBooking ? (
          /* Confirmation Screen */
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#1E7E34] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                আপনার বুকিং সফলভাবে গৃহীত হয়েছে!
              </h2>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                আমাদের প্রতিনিধি সর্বোচ্চ ৩০ মিনিটের মধ্যে আপনার দেওয়া মোবাইল নম্বরে কল করে বুকিং নিশ্চিত করবে।
              </p>
            </div>

            {/* Booking ID badge */}
            <div className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs text-gray-500 font-medium">বুকিং রেফারেন্স আইডি:</span>
              <strong className="text-base font-black text-[#0F4A24] font-english">{confirmedBooking.id}</strong>
              <button
                onClick={copyBookingId}
                className="p-1 text-[#1E7E34] hover:bg-emerald-100 rounded-md transition-colors cursor-pointer"
                title="Copy ID"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Booking Details Box */}
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-gray-100 text-left text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">সেবা / যন্ত্রপাতি:</span>
                <strong className="text-gray-900">{confirmedBooking.itemTitle}</strong>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">গ্রাহকের নাম:</span>
                <strong className="text-gray-900">{confirmedBooking.farmerName}</strong>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">মোবাইল নম্বর:</span>
                <strong className="text-gray-900 font-english">{confirmedBooking.phone}</strong>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">লোকেশন:</span>
                <strong className="text-gray-900">{confirmedBooking.district}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">বুকিং স্ট্যাটাস:</span>
                <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                  {confirmedBooking.status === 'Pending' ? 'পর্যালোচনাধীন (Pending)' : confirmedBooking.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleWhatsAppShare}
                className="py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp এ বুকিং কনফার্ম করুন</span>
              </button>

              <button
                onClick={() => { setConfirmedBooking(null); navigate('home'); }}
                className="py-3.5 px-6 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                হোম পেজে ফিরুন
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 space-y-8">
            
            {/* Booking Type Switcher */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-gray-100">
              <button
                type="button"
                onClick={() => setBookingType('service')}
                className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  bookingType === 'service' ? 'bg-white text-[#1E7E34] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Droplets className="w-4 h-4" />
                <span>কৃষি সেবা বুকিং</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingType('machine')}
                className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  bookingType === 'machine' ? 'bg-white text-[#1E7E34] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Tractor className="w-4 h-4" />
                <span>যন্ত্রপাতি ভাড়া</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingType('engineering')}
                className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  bookingType === 'engineering' ? 'bg-white text-[#1E7E34] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <DraftingCompass className="w-4 h-4" />
                <span>ফার্ম ইঞ্জিনিয়ারিং</span>
              </button>
            </div>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Item Dropdown Selection */}
              {bookingType === 'service' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">সেবা নির্বাচন করুন *</label>
                  <select
                    required
                    value={selectedItemSlug}
                    onChange={(e) => setSelectedItemSlug(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-hidden focus:border-[#1E7E34]"
                  >
                    <option value="">-- যেকোনো একটি সেবা নির্বাচন করুন --</option>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.slug}>{s.title} ({s.code})</option>
                    ))}
                  </select>
                </div>
              )}

              {bookingType === 'machine' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">যন্ত্রপাতি নির্বাচন করুন *</label>
                  <select
                    required
                    value={selectedItemSlug}
                    onChange={(e) => setSelectedItemSlug(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-hidden focus:border-[#1E7E34]"
                  >
                    <option value="">-- যেকোনো একটি যন্ত্রপাতি নির্বাচন করুন --</option>
                    {MACHINERY_DATA.map((m) => (
                      <option key={m.id} value={m.slug}>{m.name} - ৳{m.pricePerDay}/দিন ({m.location})</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Farmer Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">আপনার নাম *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="যেমন: মোঃ রফিকুল ইসলাম"
                      value={farmerName}
                      onChange={(e) => setFarmerName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">মোবাইল নম্বর *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="যেমন: 017XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                    />
                  </div>
                </div>
              </div>

              {/* Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">জেলা *</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: বগুড়া / নাটোর / ময়মনসিংহ"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">উপজেলা / থানা / ইউনিয়ন</label>
                  <input
                    type="text"
                    placeholder="যেমন: শেরপুর, বগুড়া"
                    value={thana}
                    onChange={(e) => setThana(e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>
              </div>

              {/* Farm Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">জমির পরিমাপ</label>
                  <input
                    type="text"
                    placeholder="যেমন: ৩ বিঘা / ৫ একর"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">প্রত্যাশিত তারিখ</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">অতিরিক্ত বিবরণ বা বিশেষ সমস্যা</label>
                <textarea
                  rows={3}
                  placeholder="আপনার খামারের বিশেষ কোনো শর্ত বা সমস্যার কথা লিখুন..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              {/* Urgent Checkbox */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/70">
                <input
                  type="checkbox"
                  id="urgent-check"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="w-4 h-4 accent-[#1E7E34] rounded cursor-pointer"
                />
                <label htmlFor="urgent-check" className="text-xs font-bold text-amber-900 cursor-pointer">
                  জরুরি ভিত্তিতে সেবা প্রয়োজন (Fast-track Field Dispatch)
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>বুকিং রিকোয়েস্ট সাবমিট করুন</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </form>
          </div>
        )}

      </div>

    </div>
  );
};
