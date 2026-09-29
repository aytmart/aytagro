import React from 'react';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4FAF6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F3E6] text-[#1E7E34] text-xs font-bold uppercase tracking-wider mb-2">
            মাঠের বাস্তব অভিজ্ঞতা
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B1C]">
            কৃষকের আস্থা, আমাদের অনুপ্রেরণা
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            সারাদেশের শত শত সফল কৃষক ও খামারিদের নির্ভরতার গল্প।
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              id={`testimonial-card-${index + 1}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-100 group-hover:text-emerald-300 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 leading-relaxed font-normal mb-6">
                  “{item.comment}”
                </p>
              </div>

              {/* Farmer Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#1E7E34]"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34] flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#1E7E34]" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="text-[10px] font-bold text-[#1E7E34] mt-0.5 truncate">
                    {item.crop}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
