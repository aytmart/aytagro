import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Phone, 
  MapPin, 
  Tractor, 
  Droplets, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  LogOut, 
  MessageSquare, 
  ShoppingBag,
  Sparkles,
  FileText
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const DashboardPage: React.FC = () => {
  const { user, bookings, logoutUser, navigate, quoteItems } = useApp();

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-4 border border-gray-100 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1E7E34] flex items-center justify-center mx-auto">
            <User className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">ড্যাশবোর্ড অ্যাক্সেস করতে লগইন করুন</h2>
          <p className="text-xs text-gray-500">আপনার বুকিং ও সেবার হিস্টোরি দেখতে অনুগ্রহ করে লগইন করুন।</p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => navigate('login')}
              className="py-3 px-6 rounded-2xl bg-[#1E7E34] text-white text-xs font-bold shadow-md hover:bg-[#155D27]"
            >
              লগইন
            </button>
            <button
              onClick={() => navigate('register')}
              className="py-3 px-6 rounded-2xl bg-gray-100 text-gray-700 text-xs font-bold hover:bg-gray-200"
            >
              নতুন একাউন্ট
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSupport = () => {
    const text = `🌾 AYT Agro গ্রাহক সাপোর্ট ইনকোয়ারি:\n\nগ্রাহক: ${user.name}\nফোন: ${user.phone}\nআইডি: ${user.id}\n\nআমার বুকিং ও অ্যাকাউন্টের বিষয়ে সরাসরি সহায়তা প্রয়োজন।`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Top Banner */}
      <div className="bg-[#0A2E16] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase">
              <span>Farmer Portal • {user.id}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black">
              স্বাগতম, {user.name}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200/90 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{user.thana ? `${user.thana}, ` : ''}{user.district}</span>
              <span>•</span>
              <Phone className="w-3.5 h-3.5" />
              <span className="font-english">{user.phone}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('booking')}
              className="py-3 px-5 rounded-2xl bg-[#28A745] hover:bg-[#1E7E34] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>নতুন সেবা বুকিং</span>
            </button>

            <button
              onClick={logoutUser}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-emerald-200 hover:text-white transition-colors cursor-pointer"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-1">
            <span className="text-[11px] text-gray-400 font-bold uppercase">মোট বুকিং রিকোয়েস্ট</span>
            <div className="text-2xl font-black text-gray-900 font-english">{bookings.length} টি</div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-1">
            <span className="text-[11px] text-gray-400 font-bold uppercase">সক্রিয় সেবা স্ট্যাটাস</span>
            <div className="text-2xl font-black text-[#1E7E34] font-english">
              {bookings.filter(b => b.status === 'Confirmed' || b.status === 'In Progress').length} টি
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-1">
            <span className="text-[11px] text-gray-400 font-bold uppercase">কোটেশন তালিকা</span>
            <div className="text-2xl font-black text-amber-600 font-english">{quoteItems.length} টি</div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-1">
            <span className="text-[11px] text-gray-400 font-bold uppercase">নিবন্ধিত জমি</span>
            <div className="text-2xl font-black text-[#0F4A24]">{user.landSize || '৫ একর'}</div>
          </div>
        </div>

        {/* Bookings & Quick Actions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Left: Bookings Table (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">সাম্প্রতিক বুকিং হিস্টোরি</h3>
                <p className="text-xs text-gray-400">আপনার জমিতে বুককৃত সেবা ও যন্ত্রপাতির তালিকা</p>
              </div>
              <button
                onClick={() => navigate('booking')}
                className="text-xs font-bold text-[#1E7E34] hover:underline"
              >
                + বুক করুন
              </button>
            </div>

            {bookings.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl space-y-3">
                <Calendar className="w-8 h-8 text-gray-300 mx-auto" />
                <p className="text-xs text-gray-500">আপনার কোনো সক্রিয় বুকিং নেই</p>
                <button
                  onClick={() => navigate('booking')}
                  className="px-4 py-2 bg-emerald-50 text-[#1E7E34] rounded-xl text-xs font-bold hover:bg-emerald-100"
                >
                  প্রথম বুকিং তৈরি করুন
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-4 rounded-2xl border border-gray-100 hover:border-emerald-200 bg-[#F8FAF8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-700 font-english">
                          {b.id}
                        </span>
                        <span className="text-[10px] text-gray-400 font-english">{b.createdAt}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{b.itemTitle}</h4>
                      <p className="text-xs text-gray-500">
                        {b.district} • {b.landSize} • প্রত্যাশিত: {b.bookingDate}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        b.status === 'Confirmed' ? 'bg-emerald-100 text-[#0F4A24]' :
                        b.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        b.status === 'Completed' ? 'bg-gray-100 text-gray-700' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {b.status === 'Pending' ? 'পর্যালোচনাধীন' : b.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Farm Profile & Support (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Farm Profile Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-gray-900">খামার ও ফসলের প্রোফাইল</h4>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">নিবন্ধিত নাম:</span>
                  <strong className="text-gray-800">{user.name}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">প্রধান ফসল:</span>
                  <strong className="text-gray-800">{user.crops?.join(', ') || 'ধান, আলু'}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">নিকটস্থ হাব:</span>
                  <strong className="text-[#1E7E34]">বগুড়া সেন্ট্রাল হাব</strong>
                </div>
              </div>
            </div>

            {/* Direct Support CTA */}
            <div className="bg-[#0F4A24] text-white rounded-3xl p-6 space-y-4 shadow-md">
              <h4 className="text-sm font-bold text-emerald-200">সার্বক্ষণিক কৃষক হেল্পডেস্ক</h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                যেকোনো কারিগরি সমস্যা বা যন্ত্রপাতি পাঠাতে দেরি হলে সরাসরি হেল্পলাইনে মেসেজ করুন।
              </p>
              
              <button
                onClick={handleSupport}
                className="w-full py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে হেল্পডেস্ক</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
