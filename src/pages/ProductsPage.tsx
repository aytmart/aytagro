import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS_DATA } from '../data/mockData';
import { ShoppingBag, Search, Filter, CheckCircle2, MessageSquare, ArrowRight, Star, Plus } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const ProductsPage: React.FC = () => {
  const { navigate, addToQuote } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'সকল পণ্য' },
    { id: 'ড্রিপ ও সেচ', label: 'ড্রিপ ও মাইক্রো সেচ' },
    { id: 'সোলার', label: 'সোলার পাম্প ও কন্ট্রোলার' },
    { id: 'স্প্রেয়ার', label: 'হাই প্রেসার স্প্রেয়ার' },
    { id: 'ড্রেনেজ', label: 'ড্রেনেজ ও সামারসিবল পাম্প' },
    { id: 'স্মার্ট সেন্সর', label: 'সেন্সর ও স্মার্ট টুলস' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category.includes(selectedCategory);
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero Banner */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>AYT Agro Equipment & Products</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আধুনিক কৃষি পণ্য ও সরঞ্জাম
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            স্মার্ট ড্রিপ কিট, সোলার সাবমারসিবল পাম্প, হাই-প্রেসার পাওয়ার স্প্রেয়ার ও কৃষি সেন্সর—উৎপাদন বৃদ্ধির টেকসই সরঞ্জাম।
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#1E7E34] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-[#1E7E34]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="পণ্যের নাম দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
            />
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 space-y-3">
            <p className="text-base font-bold text-gray-700">কোনো পণ্য পাওয়া যায়নি</p>
            <p className="text-xs text-gray-400">অনুগ্রহ করে ভিন্ন কোনো শব্দ দিয়ে অনুসন্ধান করুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 bg-[#F8FAF8] p-4 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white/90 text-gray-700 rounded-md border border-gray-100">
                        {prod.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        (prod.stock === 'In Stock' || prod.stockStatus === 'In Stock') ? 'bg-emerald-100 text-[#0F4A24]' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {(prod.stock === 'In Stock' || prod.stockStatus === 'In Stock') ? 'মজুদ আছে' : 'সীমিত'}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 font-english uppercase tracking-wider">{prod.brand}</span>
                    
                    <h3 
                      onClick={() => navigate('product-details', prod.slug)}
                      className="text-sm font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug line-clamp-2 cursor-pointer"
                    >
                      {prod.name}
                    </h3>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-lg font-black text-[#1E7E34] font-english">৳ {prod.price.toLocaleString()}</span>
                      {prod.originalPrice && (
                        <span className="text-xs text-gray-400 line-through font-english">৳ {prod.originalPrice.toLocaleString()}</span>
                      )}
                    </div>

                    <div className="text-[11px] text-gray-500 font-medium">
                      ওয়ারেন্টি: <strong>{prod.warranty}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => navigate('product-details', prod.slug)}
                    className="py-2 px-2 rounded-xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    বিবরণ
                  </button>

                  <button
                    onClick={() => addToQuote({ id: prod.id, title: prod.name, type: 'product', unitPrice: prod.price, image: prod.image })}
                    className="py-2 px-2 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>কোটেশন</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
