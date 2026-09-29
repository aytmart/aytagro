import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold">Privacy Policy</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">গোপনীয়তা নীতি (Privacy Policy)</h1>
              <span className="text-xs text-gray-400">সর্বশেষ আপডেট: মে ২০২৬</span>
            </div>
          </div>

          <div className="prose text-xs sm:text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              AYT Agro (স্মার্ট সলিউশনস ফর বেটার ফার্মিং) আমাদের গ্রাহক, কৃষক এবং ওয়েবসাইট ব্যবহারকারীদের ব্যক্তিগত তথ্যের সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেয়। এই নীতিমালায় ব্যাখ্যা করা হয়েছে কীভাবে আপনার তথ্য সংগৃহীত এবং ব্যবহৃত হয়।
            </p>

            <h3 className="text-base font-bold text-gray-900 pt-2">১. আমরা কোন তথ্য সংগ্রহ করি?</h3>
            <p>
              সেবা বুকিং, যন্ত্রপাতি ভাড়া অথবা কোটেশন তৈরির জন্য আমরা আপনার নাম, মোবাইল নম্বর, জেলা/উপজেলা, জমির আয়তন ও ফসলের তথ্য সংগ্রহ করি।
            </p>

            <h3 className="text-base font-bold text-gray-900 pt-2">২. তথ্যের ব্যবহার</h3>
            <p>
              সংগৃহীত তথ্য শুধুমাত্র ফিল্ড সার্ভিস প্রদান, মেশিনারিজ পৌঁছানো, কাস্টমার সাপোর্ট এবং প্রয়োজনীয় কৃষি পরামর্শ সংক্রান্ত যোগাযোগে ব্যবহৃত হয়। আমরা কোনো তৃতীয় পক্ষের কাছে আপনার তথ্য বিক্রয় বা হস্তান্তর করি না।
            </p>

            <h3 className="text-base font-bold text-gray-900 pt-2">৩. তথ্যের নিরাপত্তা</h3>
            <p>
              আপনার ডাটা নিরাপদ এনক্রিপ্টেড ডাটাবেজে সংরক্ষিত থাকে এবং শুধুমাত্র অনুমোদিত ফিল্ড ইঞ্জিনিয়ার ও সার্ভিস টিম কাজ সম্পন্নের উদ্দেশ্যে এটি দেখতে পারে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
