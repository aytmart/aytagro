import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS_DATA } from '../data/mockData';
import { 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  Plus, 
  Minus, 
  Truck, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const ProductDetailsPage: React.FC = () => {
  const { activeSlug, navigate, addToQuote } = useApp();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS_DATA.find((p) => p.slug === activeSlug) || PRODUCTS_DATA[0];

  const handleWhatsAppOrder = () => {
    const text = `🌾 AYT Agro পণ্য ক্রয় সংক্রান্ত ইনকোয়ারি:\n\nপণ্য: ${product.name}\nব্র্যান্ড: ${product.brand}\nপরিমাণ: ${quantity} টি\nমূল্য: ৳ ${(product.price * quantity).toLocaleString()}\n\nআমি পণ্যটি অর্ডার করতে আগ্রহী। ডেলিভারি ও পেমেন্ট বিস্তারিত জানান।`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => navigate('products')} className="hover:text-[#1E7E34]">Products</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#F8FAF8] rounded-3xl p-8 flex items-center justify-center h-80 sm:h-96 border border-gray-100 relative">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute top-4 left-4 bg-[#0F4A24] text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.category}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <Truck className="w-4 h-4 text-[#1E7E34] mx-auto mb-1" />
                <span className="text-[11px] text-gray-600 font-semibold block">সারাদেশে ডেলিভারি</span>
              </div>
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-[#1E7E34] mx-auto mb-1" />
                <span className="text-[11px] text-gray-600 font-semibold block">{product.warranty}</span>
              </div>
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <RotateCcw className="w-4 h-4 text-[#1E7E34] mx-auto mb-1" />
                <span className="text-[11px] text-gray-600 font-semibold block">অরিজিনাল পণ্য</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-bold text-gray-400 font-english uppercase tracking-wider">
                {product.brand} • {product.stock || product.stockStatus || 'In Stock'}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 leading-snug">
                {product.name}
              </h1>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <span className="text-3xl font-black text-[#1E7E34] font-english">
                ৳ {(product.price * quantity).toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-english">
                  ৳ {(product.originalPrice * quantity).toLocaleString()}
                </span>
              )}
              <span className="text-xs text-emerald-800 font-bold ml-auto bg-white px-2.5 py-1 rounded-lg border border-emerald-200">
                {product.stock || product.stockStatus || 'In Stock'}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">পণ্যের বিবরণ</h3>
              <p>{product.description}</p>
            </div>

            {/* Specs Table */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">টেকনিক্যাল স্পেসিফিকেশন</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">{key}</span>
                    <span className="font-bold text-gray-800 font-english mt-0.5">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-700">পরিমাণ:</span>
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-600 hover:text-red-500"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold font-english">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-600 hover:text-[#1E7E34]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => addToQuote({ id: product.id, title: product.name, type: 'product', unitPrice: product.price, quantity, image: product.image })}
                  className="py-3.5 px-4 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>কোটেশন তালিকায় যোগ করুন</span>
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="py-3.5 px-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#0F4A24] border border-[#25D366]/40 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp এ অর্ডার ইনকোয়ারি</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
