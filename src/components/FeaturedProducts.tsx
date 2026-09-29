import React, { useState } from 'react';
import { MessageSquare, Eye, ShoppingBag, Check } from 'lucide-react';
import { FEATURED_PRODUCTS, COMPANY_INFO } from '../data/mockData';
import { ProductItem } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

export const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>('সকল');

  const categories = ['সকল', 'পাম্প', 'সেচ সামগ্রী', 'স্প্রেয়ার', 'সোলার সেচ', 'যন্ত্রপাতি', 'ল্যাব ও টেস্ট'];

  const filteredProducts = selectedCat === 'সকল'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category.includes(selectedCat));

  const handleQuickWhatsAppOrder = (product: ProductItem) => {
    const text = encodeURIComponent(`নমস্কার, আমি "${product.name}" কিনতে চাই। মূল্য: ${product.price}। ডেলিভারি প্রসেস জানাবেন।`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-[#F8FAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
              AYT Agro Products
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
              উন্নত মানের নির্ভরযোগ্য কৃষি যন্ত্রপাতি ও আধুনিক সেচ সরঞ্জাম।
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#1E7E34] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              id={`product-card-${index + 1}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="h-44 bg-[#F8FAF8] group-hover:bg-[#F2F8F4] flex items-center justify-center p-3 relative overflow-hidden transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-white/90 text-gray-700 rounded-md border border-gray-100">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold text-gray-400 font-english uppercase tracking-wider">{product.brand}</span>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-base font-black text-[#1E7E34] font-english">৳ {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through font-english">৳ {product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                  <ul className="text-[11px] text-gray-500 space-y-0.5 pt-1">
                    {Object.entries(product.specs || {}).slice(0, 2).map(([key, val], idx) => (
                      <li key={idx} className="truncate">• {key}: {val}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  id={`product-details-btn-${index + 1}`}
                  className="flex-1 py-2 px-2 rounded-lg border border-gray-200 hover:border-[#1E7E34] hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>বিস্তারিত</span>
                </button>

                <button
                  onClick={() => handleQuickWhatsAppOrder(product)}
                  id={`product-order-btn-${index + 1}`}
                  className="flex-1 py-2 px-2 rounded-lg bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>অর্ডার করুন</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
