import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, User, Phone, MapPin, Lock, ArrowRight } from 'lucide-react';
import { UserProfile } from '../types';

export const RegisterPage: React.FC = () => {
  const { loginUser, navigate, addToast } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [thana, setThana] = useState('');
  const [landSize, setLandSize] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !password) {
      addToast('error', 'প্রয়োজনীয় তথ্য পূরণ করুন');
      return;
    }

    const newProfile: UserProfile = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      name,
      phone,
      district: district || 'বগুড়া',
      thana: thana || 'সদর',
      landSize: landSize || 'অনির্দিষ্ট',
      crops: ['ধান', 'সবজি']
    };

    loginUser(newProfile);
    navigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 sm:p-10 shadow-xl border border-gray-100 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#1E7E34] text-white flex items-center justify-center mx-auto shadow-md">
            <Leaf className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 font-english">
            কৃষক রেজিস্ট্রেশন
          </h1>
          <p className="text-xs text-gray-500">
            সহজে সেবা ও মেশিনারি বুকিংয়ের জন্য অ্যাকাউন্ট তৈরি করুন
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">আপনার নাম *</label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="যেমন: মোঃ রফিকুল ইসলাম"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
              />
            </div>
          </div>

          <div className="space-y-1">
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

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">জেলা</label>
              <input
                type="text"
                placeholder="যেমন: বগুড়া"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">উপজেলা</label>
              <input
                type="text"
                placeholder="যেমন: শেরপুর"
                value={thana}
                onChange={(e) => setThana(e.target.value)}
                className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">জমির মোট আয়তন</label>
            <input
              type="text"
              placeholder="যেমন: ৩ বিঘা / ৫ একর"
              value={landSize}
              onChange={(e) => setLandSize(e.target.value)}
              className="w-full p-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">পাসওয়ার্ড / পিন তৈরি করুন *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="কমপক্ষে ৪-৬ সংখ্যার পিন"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>রেজিস্ট্রেশন সম্পন্ন করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-gray-500 border-t border-gray-100">
          <span>ইতিমধ্যে অ্যাকাউন্ট আছে? </span>
          <button
            onClick={() => navigate('login')}
            className="font-bold text-[#1E7E34] hover:underline cursor-pointer"
          >
            লগইন করুন
          </button>
        </div>

      </div>
    </div>
  );
};
