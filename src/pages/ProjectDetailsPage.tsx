import React from 'react';
import { useApp } from '../context/AppContext';
import { PROJECTS_DATA } from '../data/mockData';
import { MapPin, CheckCircle2, ArrowRight, MessageSquare, ChevronRight, Layers, AlertCircle, Wrench, Sparkles } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const ProjectDetailsPage: React.FC = () => {
  const { activeSlug, navigate } = useApp();

  const project = PROJECTS_DATA.find((p) => p.slug === activeSlug) || PROJECTS_DATA[0];

  const handleWhatsApp = () => {
    const text = `🌾 AYT Agro প্রজেক্ট রেফারেন্স ইনকোয়ারি:\n\nপ্রজেক্ট: ${project.title} (${project.location})\n\nআমার খামারে এই ধরণের আধুনিক প্রজেক্ট বাস্তবায়নের খরচ ও প্রক্রিয়া সম্পর্কে জানতে চাই।`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => navigate('projects')} className="hover:text-[#1E7E34]">Projects</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold truncate">{project.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase">
            <span>{project.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              {project.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-emerald-200">
            <span>📍 অবস্থান: <strong>{project.location}</strong></span>
            <span>•</span>
            <span>📐 জমির পরিমাপ: <strong>{project.landSize}</strong></span>
            <span>•</span>
            <span>🌾 প্রকল্পের ধরণ: <strong>{project.category}</strong></span>
          </div>
        </div>
      </div>

      {/* Main Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-3">
              <h2 className="text-xl font-bold text-gray-900">প্রকল্প সারসংক্ষেপ</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.fullCaseStudy || project.shortDesc}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50/60 rounded-3xl p-6 border border-red-100 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>প্রাথমিক সংকট ও চ্যালেঞ্জ</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-emerald-50/70 rounded-3xl p-6 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-[#0F4A24] font-bold text-sm">
                  <Wrench className="w-4 h-4 text-[#1E7E34]" />
                  <span>AYT Agro প্রকৌশল বাস্তবায়ন</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.solutionProvided || project.solution || project.shortDesc}
                </p>
              </div>
            </div>

            {/* Quantifiable Results */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">পরিমাপযোগ্য ফলাফল ও সুবিধা</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.results.map((res, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">{res}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl space-y-5 sticky top-24">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">অনুরূপ প্রজেক্ট চান?</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  আপনার জমির জন্য এমন আধুনিক সমাধান পরিকল্পনা করুন
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                আমাদের ইঞ্জিনিয়ারিং টিম আপনার জমিতে গিয়ে বিস্তারিত সমীক্ষা করে সেরা প্রযুক্তি প্যাকেজ ডিজাইন করবে।
              </p>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => navigate('farm-engineering')}
                  className="w-full py-3.5 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>প্রজেক্ট প্ল্যানিং শুরু করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#0F4A24] border border-[#25D366]/40 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp এ কথা বলুন</span>
                </button>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl text-xs text-gray-700 space-y-1.5">
                <div className="font-bold text-[#0F4A24]">📞 সার্বক্ষণিক হটলাইন:</div>
                <p className="text-[11px] text-gray-600">যেকোনো তথ্যের জন্য সরাসরি কল করুন {APP_CONFIG.HOTLINE}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
