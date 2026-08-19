import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TermsPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold">Terms of Service</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">সেবার শর্তাবলী (Terms of Service)</h1>
              <span className="text-xs text-gray-400">কার্যকরী তারিখ: ১ জানুয়ারি ২০২৬</span>
            </div>
          </div>

          <div className="prose text-xs sm:text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              AYT Agro প্ল্যাটফর্মের যেকোনো সেবা (যন্ত্রপাতি ভাড়া, সেচ ইনস্টলেশন, পরামর্শ) গ্রহণের মাধ্যমে আপনি এই শর্তাবলীতে সম্মতি প্রদান করছেন।
            </p>

            <h3 className="text-base font-bold text-gray-900 pt-2">১. যন্ত্রপাতি ভাড়া ও ব্যবহার</h3>
            <p>
              ভাড়া গ্রহণকারীকে মেশিনের সঠিক ব্যবহার নিশ্চিত করতে হবে। অপারেটরসহ ভাড়ার ক্ষেত্রে অপারেটরের নিরাপত্তা ও সাইট অ্যাক্সেস নিশ্চিত করার দায়িত্ব গ্রাহকের।
            </p>

            <h3 className="text-base font-bold text-gray-900 pt-2">২. বুকিং ও ক্যানসেলেশন নীতি</h3>
            <p>
              সেবা শুরুর নির্ধারিত সময়ের কমপক্ষে ২৪ ঘণ্টা পূর্বে বাতিল করলে কোনো চার্জ প্রযোজ্য হবে না। অন-স্পট বাতিলকরণের ক্ষেত্রে যাতায়াত বা ট্রান্সপোর্ট ফি প্রযোজ্য হতে পারে।
            </p>

            <h3 className="text-base font-bold text-gray-900 pt-2">৩. ওয়ারেন্টি ও বিক্রয়োত্তর সেবা</h3>
            <p>
              AYT Agro-এর সকল হার্ডওয়্যার ও সোলার পাম্প প্রস্তুতকারক ও আমাদের নীতি অনুযায়ী নির্ধারিত ওয়ারেন্টি সুবিধার আওতায় থাকবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
