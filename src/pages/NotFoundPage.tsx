import React from 'react';
import { useApp } from '../context/AppContext';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-[70vh] bg-[#F8FAF8] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 sm:p-10 text-center space-y-4 border border-gray-100 shadow-md">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1E7E34] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-black text-gray-900 font-english">404</h1>
        <h2 className="text-base font-bold text-gray-800">কাঙ্ক্ষিত পৃষ্ঠাটি পাওয়া যায়নি</h2>
        <p className="text-xs text-gray-500">
          আপনি যে লিংকটিতে প্রবেশ করার চেষ্টা করছেন তা পরিবর্তিত বা মুছে ফেলা হতে পারে।
        </p>

        <div className="pt-2">
          <button
            onClick={() => navigate('home')}
            className="w-full py-3.5 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>মূল পাতায় ফিরে যান</span>
          </button>
        </div>
      </div>
    </div>
  );
};
