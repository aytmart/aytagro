import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, Lock, Phone, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { UserProfile } from '../types';

export const LoginPage: React.FC = () => {
  const { loginUser, navigate, addToast } = useApp();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !password) {
      addToast('error', 'মোবাইল নম্বর ও পাসওয়ার্ড পূরণ করুন');
      return;
    }

    // Authenticate and save user session
    const mockProfile: UserProfile = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      name: phone === '01712345678' ? 'মোঃ রফিকুল ইসলাম' : 'কৃষক গ্রাহক',
      phone,
      district: 'বগুড়া',
      thana: 'শেরপুর',
      landSize: '৫ একর',
      crops: ['ধান', 'আলু', 'ভুট্টা']
    };

    loginUser(mockProfile);
    navigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 sm:p-10 shadow-xl border border-gray-100 space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#1E7E34] text-white flex items-center justify-center mx-auto shadow-md">
            <Leaf className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 font-english">
            AYT AGRO
          </h1>
          <p className="text-xs text-gray-500">
            কৃষক ও গ্রাহক অ্যাকাউন্টে লগইন করুন
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">মোবাইল নম্বর</label>
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

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">পাসওয়ার্ড / পিন</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#1E7E34] rounded" />
              <span>লগইন মনে রাখুন</span>
            </label>
            <button type="button" onClick={() => addToast('info', 'পাসওয়ার্ড পুনরুদ্ধারের জন্য হটলাইনে কল করুন')} className="text-[#1E7E34] hover:underline cursor-pointer">
              পিন ভুলে গেছেন?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>লগইন করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-gray-500 border-t border-gray-100">
          <span>নতুন গ্রাহক? </span>
          <button
            onClick={() => navigate('register')}
            className="font-bold text-[#1E7E34] hover:underline cursor-pointer"
          >
            নতুন অ্যাকাউন্ট খুলুন
          </button>
        </div>

      </div>
    </div>
  );
};
