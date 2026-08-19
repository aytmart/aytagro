import React from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, ShieldCheck, Target, Users, MapPin, ArrowRight, Award, Compass } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const AboutPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>About AYT Agro</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আমাদের গল্প ও লক্ষ্য
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            বাংলাদেশের কৃষকদের জন্য সাশ্রয়ী, নির্ভরযোগ্য ও প্রযুক্তিনির্ভর কৃষি সমাধান গড়ে তোলার অঙ্গীকারে AYT Agro-এর যাত্রা।
          </p>
        </div>
      </div>

      {/* Origin Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3B1C]">
              কেন আমরা শুরু করেছি?
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              বাংলাদেশের কৃষিতে সবচেয়ে বড় প্রতিবন্ধকতা হলো উপযুক্ত আধুনিক যন্ত্রপাতির উচ্চমূল্য, পানি নিষ্কাশন ও সেচ ব্যবস্থার প্রযুক্তিগত ঘাটতি এবং সঠিক সময়ে অন-ফিল্ড কারিগরি সহায়তার অভাব।
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              AYT Agro তৈরি হয়েছে এই শূন্যতা পূরণ করতে। আমরা কৃষকদের ভারী যন্ত্রপাতি কেনার বিশাল মূলধনের বোঝা থেকে মুক্তি দিয়ে 'On-Demand Rental' ও 'Smart Irrigation' প্রকৌশল সমাধান মাঠ পর্যায়ে সহজলভ্য করছি।
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('team')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1E7E34] hover:text-[#114A20] group cursor-pointer"
              >
                <span>আমাদের টিম ও পরিচালনা পর্ষদ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border-4 border-emerald-100">
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
              alt="Agricultural farmland with modern irrigation system"
              className="w-full h-80 object-cover"
            />
          </div>

        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#0F4A24] rounded-3xl p-8 text-white space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">আমাদের ভিশন (Vision)</h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              ২০৩০ সালের মধ্যে বাংলাদেশের প্রতিটি কৃষি অঞ্চলের খামারগুলোতে আধুনিক পানি ব্যবস্থাপনা, ড্রেনেজ ও অটোমেশন প্রযুক্তি পৌঁছে দিয়ে কৃষিকে শতভাগ লাভজনক ও টেকসই পেশায় রূপান্তর করা।
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0D3B1C]">আমাদের মিশন (Mission)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              কৃষকের আর্থিক সক্ষমতা অনুযায়ী কাস্টমাইজড কৃষি সেবা প্রদান করা, মাঠ পর্যায়ে দক্ষ টেকনিক্যাল সার্ভিস নিশ্চিত করা এবং পরিবেশবান্ধব সৌর শক্তির ব্যবহারে কৃষির উৎপাদন খরচ ৩০-৫০% হ্রাস করা।
            </p>
          </div>

        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3B1C]">
            আমাদের মূল মূল্যবোধ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'কৃষক অগ্রাধিকার', desc: 'প্রতিটি সেবায় কৃষকের লাভ ও মাঠের বাস্তবিক সুবিধাই আমাদের সর্বোচ্চ অগ্রাধিকার।' },
            { title: 'প্রকৌশল মান', desc: 'গুণগত মানের পাইপলাইন ও পরীক্ষিত যন্ত্রপাতি ছাড়া কোনো আপোষ নেই।' },
            { title: 'স্বচ্ছ মূল্য তালিকা', desc: 'কোনো লুকায়িত চার্জ নেই—ন্যায্য ও উন্মুক্ত মূল্য নীতি।' },
            { title: 'দ্রুত সাপোর্ট', desc: 'মাঠের সমস্যা দ্রুত সমাধানে তাৎক্ষণিক অন-ফিল্ড সার্ভিস।' }
          ].map((val, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center font-bold text-xs font-english">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-gray-900">{val.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
