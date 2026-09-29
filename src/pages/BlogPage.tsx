import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import { BookOpen, Calendar, Clock, ArrowRight, Search, ChevronRight } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'সকল নিবন্ধ' },
    { id: 'স্মার্ট সেচ', label: 'স্মার্ট সেচ প্রযুক্তি' },
    { id: 'মাটি ও পুষ্টি', label: 'মাটি ও পুষ্টি ব্যবস্থাপনা' },
    { id: 'সৌর কৃষি', label: 'সৌর কৃষি ও নবায়নযোগ্য শক্তি' },
    { id: 'বালাই ব্যবস্থাপনা', label: 'বালাই ও স্প্রে ব্যবস্থাপনা' },
  ];

  const filteredPosts = BLOG_POSTS.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category.includes(selectedCategory);
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AYT Agro Knowledge Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            কৃষি জ্ঞান ও প্রযুক্তি ব্লগ
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            মাঠের বাস্তব অভিজ্ঞতা, বৈজ্ঞানিক চাষপদ্ধতি ও আধুনিক কৃষি প্রযুক্তি সংক্রান্ত দিকনির্দেশনা ও নিবন্ধমালা।
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          
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

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ব্লগ বা বিষয় খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
            />
          </div>

        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 space-y-3">
            <p className="text-base font-bold text-gray-700">কোনো নিবন্ধ পাওয়া যায়নি</p>
            <p className="text-xs text-gray-400">ভিন্ন কি-ওয়ার্ড দিয়ে খুঁজুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate('article', post.slug)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F4A24]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1E7E34] group-hover:text-[#114A20]">
                    <span>সম্পূর্ণ পড়ুন</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
