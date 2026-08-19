import React from 'react';
import { X, CheckCircle2, MessageSquare, ShieldCheck, Tag } from 'lucide-react';
import { ProductItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const handleOrderViaWhatsApp = () => {
    const text = encodeURIComponent(`নমস্কার, আমি AYT Agro-এর পণ্য "${product.name}" (মূল্য: ${product.price}) অর্ডার করতে বা বিস্তারিত জানতে চাই।`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="h-60 bg-gradient-to-br from-[#F4FAF6] to-gray-100 flex items-center justify-center p-6 relative">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-[80%] object-contain drop-shadow-md"
          />
          <div className="absolute top-4 left-4 bg-emerald-100 text-[#0F4A24] text-xs font-bold px-2.5 py-1 rounded-md">
            {product.category}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold text-gray-400 font-english uppercase">{product.brand}</span>
              <h3 className="text-xl font-bold text-gray-900 leading-snug">{product.name}</h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#1E7E34]">{product.price}</div>
              {product.originalPrice && (
                <div className="text-xs text-gray-400 line-through">{product.originalPrice}</div>
              )}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">স্পেসিফিকেশন</h4>
            <div className="space-y-1.5">
              {product.specs.map((sp, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0" />
                  <span>{sp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
            <ShieldCheck className="w-4 h-4 text-[#1E7E34]" />
            <span>নিশ্চয়তা: {product.warranty} (দেশব্যাপী হোম ডেলিভারি ও সাপোর্ট)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-xs font-semibold hover:bg-gray-100 cursor-pointer"
          >
            বন্ধ করুন
          </button>

          <button
            onClick={handleOrderViaWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#1E7E34] hover:bg-[#155D27] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>হোয়াটসঅ্যাপে অর্ডার করুন</span>
          </button>
        </div>

      </div>
    </div>
  );
};
