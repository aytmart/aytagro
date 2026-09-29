import React from 'react';
import { useApp } from '../context/AppContext';
import { PROJECTS_DATA } from '../data/mockData';
import { MapPin, ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Field Projects & Case Studies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            মাঠ পর্যায়ের সফল প্রকল্প
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            বাংলাদেশের বিভিন্ন জেলায় সফলভাবে বাস্তবায়িত আধুনিক সেচ, সোলার পাম্প ও ড্রেনেজ প্রকল্পের বিস্তারিত কেস স্টাডি ও ফলাফল।
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        {PROJECTS_DATA.map((proj) => (
          <div
            key={proj.id}
            onClick={() => navigate('project-details', proj.slug)}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 group cursor-pointer"
          >
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#0F4A24] text-white text-xs font-bold px-3 py-1 rounded-full">
                {proj.category}
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1E7E34]" />
                  <span>{proj.location}</span>
                  <span>•</span>
                  <span>আয়তন: {proj.landSize}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug">
                  {proj.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {proj.shortDesc}
                </p>

                {/* Impact Badges */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                    প্রকল্পের মূল ফলাফল (Impact):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {proj.results.map((res, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-emerald-50 text-[#0F4A24] text-xs font-bold border border-emerald-100 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34]" />
                        <span>{res}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1E7E34]">
                <span>সম্পূর্ণ কেস স্টাডি পড়ুন</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
