import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, Droplets, Tractor, ShoppingBag, Lightbulb, BookOpen, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { 
  SERVICES_DATA, 
  MACHINERY_DATA, 
  PRODUCTS_DATA, 
  SOLUTIONS_DATA, 
  PROJECTS_DATA, 
  BLOG_POSTS, 
  CROP_GUIDES 
} from '../data/mockData';

export const GlobalSearchModal: React.FC = () => {
  const { isGlobalSearchOpen, setIsGlobalSearchOpen, navigate } = useApp();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsGlobalSearchOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsGlobalSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsGlobalSearchOpen]);

  if (!isGlobalSearchOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = q ? SERVICES_DATA.filter(s => 
    s.title.toLowerCase().includes(q) || 
    s.titleEn.toLowerCase().includes(q) || 
    s.shortDesc.toLowerCase().includes(q)
  ) : [];

  const matchedMachines = q ? MACHINERY_DATA.filter(m => 
    m.name.toLowerCase().includes(q) || 
    m.nameEn.toLowerCase().includes(q) || 
    m.category.toLowerCase().includes(q)
  ) : [];

  const matchedProducts = q ? PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.nameEn.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q)
  ) : [];

  const matchedSolutions = q ? SOLUTIONS_DATA.filter(s => 
    s.title.toLowerCase().includes(q) || 
    s.problem.toLowerCase().includes(q) || 
    s.solution.toLowerCase().includes(q)
  ) : [];

  const matchedBlogs = q ? BLOG_POSTS.filter(b => 
    b.title.toLowerCase().includes(q) || 
    b.summary.toLowerCase().includes(q)
  ) : [];

  const matchedCropGuides = q ? CROP_GUIDES.filter(c => 
    c.name.toLowerCase().includes(q) || 
    c.category.toLowerCase().includes(q)
  ) : [];

  const totalMatches = 
    matchedServices.length + 
    matchedMachines.length + 
    matchedProducts.length + 
    matchedSolutions.length + 
    matchedBlogs.length + 
    matchedCropGuides.length;

  const handleSelect = (route: any, slug?: string) => {
    setIsGlobalSearchOpen(false);
    navigate(route, slug);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <Search className="w-5 h-5 text-[#1E7E34] flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="সেবা, যন্ত্রপাতি, পণ্য, ফসল গাইড বা ব্লগ খুঁজুন..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-hidden font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsGlobalSearchOpen(false)}
            className="text-xs font-bold text-gray-500 hover:text-gray-800 px-2 py-1 bg-gray-200/70 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills when empty */}
        {!query && (
          <div className="p-6 space-y-4">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">জনপ্রিয় অনুসন্ধান:</div>
            <div className="flex flex-wrap gap-2">
              {['Smart Irrigation', 'Power Tiller', 'সোলার পাম্প', 'মাটি পরীক্ষা', 'পাওয়ার স্প্রেয়ার', 'ড্রেনেজ পাম্প', 'ধান চাষ গাইড', 'ড্রিপ কিট'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#0F4A24] text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-[#1E7E34]" />
                  <span>{tag}</span>
                </button>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <button onClick={() => handleSelect('services')} className="p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] font-bold">
                🌾 সকল সেবা
              </button>
              <button onClick={() => handleSelect('machinery-rental')} className="p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] font-bold">
                🚜 যন্ত্রপাতি ভাড়া
              </button>
              <button onClick={() => handleSelect('products')} className="p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] font-bold">
                📦 পণ্য সামগ্রী
              </button>
              <button onClick={() => handleSelect('crop-guide')} className="p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] font-bold">
                🌱 ফসল গাইড
              </button>
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 divide-y divide-gray-100">
            {totalMatches === 0 ? (
              <div className="text-center py-10 text-gray-400 space-y-2">
                <p className="text-sm font-medium">"{query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি।</p>
                <p className="text-xs">বানান পরীক্ষা করুন বা সরাসরি আমাদের হোয়াটসঅ্যাপে প্রশ্ন করুন।</p>
              </div>
            ) : null}

            {/* Services */}
            {matchedServices.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="text-[11px] font-bold text-[#1E7E34] uppercase tracking-wider flex items-center gap-1.5 px-2">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>কৃষি সেবা ({matchedServices.length})</span>
                </div>
                {matchedServices.map(s => (
                  <div
                    key={s.id}
                    onClick={() => handleSelect('service-details', s.slug)}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/70 flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1E7E34]">{s.title}</h4>
                      <p className="text-[11px] text-gray-500 truncate max-w-md">{s.shortDesc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E7E34] group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            )}

            {/* Machinery */}
            {matchedMachines.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 px-2">
                  <Tractor className="w-3.5 h-3.5" />
                  <span>ভাড়া যন্ত্রপাতি ({matchedMachines.length})</span>
                </div>
                {matchedMachines.map(m => (
                  <div
                    key={m.id}
                    onClick={() => handleSelect('machine-details', m.slug)}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/70 flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1E7E34]">{m.name}</h4>
                      <span className="text-[11px] font-bold text-[#1E7E34] font-english">৳ {m.pricePerDay.toLocaleString()} / দিন ({m.location})</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E7E34] group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            )}

            {/* Products */}
            {matchedProducts.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 px-2">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>পণ্য ও ইকুইপমেন্ট ({matchedProducts.length})</span>
                </div>
                {matchedProducts.map(p => (
                  <div
                    key={p.id}
                    onClick={() => handleSelect('product-details', p.slug)}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/70 flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1E7E34]">{p.name}</h4>
                      <span className="text-[11px] font-bold text-[#1E7E34] font-english">৳ {p.price.toLocaleString()}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E7E34] group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            )}

            {/* Solutions */}
            {matchedSolutions.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="text-[11px] font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1.5 px-2">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>সমাধান প্যাকেজ ({matchedSolutions.length})</span>
                </div>
                {matchedSolutions.map(sol => (
                  <div
                    key={sol.id}
                    onClick={() => handleSelect('solutions')}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/70 flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1E7E34]">{sol.title}</h4>
                      <p className="text-[11px] text-gray-500 truncate max-w-md">{sol.tag}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E7E34]" />
                  </div>
                ))}
              </div>
            )}

            {/* Blogs */}
            {matchedBlogs.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5 px-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>ব্লগ ও পরামর্শ ({matchedBlogs.length})</span>
                </div>
                {matchedBlogs.map(b => (
                  <div
                    key={b.id}
                    onClick={() => handleSelect('article', b.slug)}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/70 flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1E7E34]">{b.title}</h4>
                      <span className="text-[11px] text-gray-400">{b.date} • {b.readTime}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E7E34]" />
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
