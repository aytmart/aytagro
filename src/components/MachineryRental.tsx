import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Eye, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { MACHINERY_DATA, COMPANY_INFO } from '../data/mockData';
import { MachineryItem } from '../types';
import { MachineryDetailModal } from './MachineryDetailModal';

export const MachineryRental: React.FC = () => {
  const [selectedMachine, setSelectedMachine] = useState<MachineryItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleQuickWhatsAppBook = (item: MachineryItem) => {
    const text = encodeURIComponent(`আমি ${item.name} ভাড়া নিতে চাই। বিস্তারিত ও বুকিং নিয়ম জানাবেন।`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="machinery-rental" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Nav Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
              জনপ্রিয় যন্ত্রপাতি ভাড়া
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
              কেনার প্রয়োজন নেই — প্রয়োজন অনুযায়ী সাশ্রয়ী দৈনিক ভাড়ায় নিন।
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#1E7E34] hover:bg-[#EAF5EE] text-gray-700 hover:text-[#1E7E34] flex items-center justify-center transition-colors shadow-xs active:scale-90 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#1E7E34] hover:bg-[#EAF5EE] text-gray-700 hover:text-[#1E7E34] flex items-center justify-center transition-colors shadow-xs active:scale-90 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container matching reference image */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MACHINERY_DATA.map((item, index) => (
            <div
              key={item.id}
              id={`machinery-card-${index + 1}`}
              className="flex-none w-[270px] sm:w-[290px] bg-white rounded-2xl border border-gray-100/90 hover:border-[#BCE2C7] p-4 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group snap-start"
            >
              <div>
                {/* Product Image Box */}
                <div className="w-full h-36 bg-[#F8FAF8] rounded-xl flex items-center justify-center p-3 relative overflow-hidden group-hover:bg-[#F2F8F4] transition-colors">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-[#0F4A24] rounded-md">
                      {item.availability}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-bold text-[#1F2937] group-hover:text-[#1E7E34] transition-colors line-clamp-1">
                    {item.name.split('(')[0].trim()}
                  </h3>
                  <div className="text-sm font-extrabold text-[#1E7E34] font-english">
                    ৳ {item.pricePerDay.toLocaleString()} <span className="text-xs font-normal text-gray-500">/ দিন</span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">
                    {item.power || 'হাই-পাওয়ার'} • {item.fuel || item.fuelType || 'ডিজেল'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedMachine(item)}
                  id={`machinery-view-details-${index + 1}`}
                  className="flex-1 py-2 px-2.5 rounded-lg border border-gray-200 hover:border-[#1E7E34] hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>বিস্তারিত</span>
                </button>

                <button
                  onClick={() => handleQuickWhatsAppBook(item)}
                  id={`machinery-book-now-${index + 1}`}
                  className="flex-1 py-2 px-2.5 rounded-lg bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>ভাড়া নিন</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Machinery Detail Modal */}
      {selectedMachine && (
        <MachineryDetailModal
          machinery={selectedMachine}
          onClose={() => setSelectedMachine(null)}
        />
      )}
    </section>
  );
};
