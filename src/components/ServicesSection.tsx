import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Droplet, Waves, ShieldCheck, FlaskConical, Sun, DraftingCompass, Tractor, Wrench } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

const iconMap: { [key: string]: React.ReactNode } = {
  Droplet: <Droplet className="w-5 h-5" />,
  Waves: <Waves className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  DraftingCompass: <DraftingCompass className="w-5 h-5" />,
  Tractor: <Tractor className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />
};

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('সকল');

  const categories = ['সকল', 'সেচ ও পানি', 'মাঠ সেবা', 'পরামর্শ ও ল্যাব', 'যন্ত্রপাতি', 'ইঞ্জিনিয়ারিং'];

  const filteredServices = activeCategory === 'সকল' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category.includes(activeCategory) || activeCategory.includes(s.category));

  return (
    <section id="services" className="py-20 bg-[#F8FAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference image */}
        <div className="mb-10">
          <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
                আমাদের সেবা সমূহ
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] mt-1.5 max-w-xl">
                কৃষির প্রতিটি গুরুত্বপূর্ণ ধাপে AYT Agro আপনার পাশে।
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#1E7E34] text-white shadow-xs'
                      : 'bg-white text-[#374151] hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Grid matching 5 columns / responsive flex */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index + 1}`}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 hover:border-[#BCE2C7] transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Code Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0F4A24] font-english text-xs font-black px-2.5 py-0.5 rounded-md shadow-xs">
                  {service.code}
                </div>

                {/* Service Icon floating badge */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-[#1E7E34] text-white flex items-center justify-center shadow-md">
                  {iconMap[service.icon] || <Droplet className="w-5 h-5" />}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-[#1E7E34] uppercase tracking-wider mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-base font-bold text-[#1F2937] group-hover:text-[#1E7E34] transition-colors leading-snug line-clamp-2">
                    {service.title.split('(')[0].trim()}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 mt-2 border-t border-gray-50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    id={`service-learn-more-btn-${index + 1}`}
                    className="text-xs font-bold text-[#1E7E34] hover:text-[#114A20] inline-flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[11px] font-medium text-gray-400 font-english">
                    {service.benefits[0]?.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
};
