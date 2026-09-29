import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, Mail, Phone, ArrowLeft, ShieldCheck, ChevronRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const TeamPage: React.FC = () => {
  const { navigate } = useApp();

  const leadership = [
    {
      name: 'প্রকৌশলী মোঃ তৌহিদ হাসান',
      role: 'Chief Executive Officer & Founder',
      bio: 'বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের (BAU) এগ্রিকালচারাল ইঞ্জিনিয়ারিং গ্র্যাজুয়েট। স্মার্ট সেচ ও ফার্ম অটোমেশন সেক্টরে ১২ বছরের অভিজ্ঞতা।',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      dept: 'Executive'
    },
    {
      name: 'ড. কাজী মাহমুদুর রহমান',
      role: 'Head of Agronomy & Research',
      bio: 'মাটি ও পুষ্টি ব্যবস্থাপনা গবেষক। খামার পরিকল্পনা ও ফসল চক্র নির্ধারণে বিশেষজ্ঞ।',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      dept: 'Agronomy'
    },
    {
      name: 'মোঃ আশরাফুল আলম',
      role: 'Director of Field Operations',
      bio: 'উত্তরবঙ্গের জেলা হাব ও মেশিনারিজ লজিস্টিকস প্রধান। মাঠ পর্যায়ে দ্রুত যন্ত্র ডেলিভারি ও সাপোর্ট নিশ্চিত করেন।',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      dept: 'Operations'
    },
    {
      name: 'তানভীর আহমেদ',
      role: 'Lead Irrigation & Solar Engineer',
      bio: 'সোলার সাবমারসিবল পাম্প ও মাইক্রো-ড্রিপ পাইপলাইন ডিজাইনার। ৫০+ মেগা প্রকল্প বাস্তবায়নকারী।',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      dept: 'Engineering'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>AYT Agro Leadership & Engineers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আমাদের বিশেষজ্ঞ টিম
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            কৃষিবিদ, হাইড্রোলিক ইঞ্জিনিয়ার এবং মাঠ পর্যায়ের টেকনিক্যাল বিশেষজ্ঞদের সমন্বয়ে গঠিত একটি নিবেদিতপ্রাণ দল।
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold text-[#1E7E34] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md">
                    {member.dept}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 font-english">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
