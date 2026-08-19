import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { BlogReaderModal } from './BlogReaderModal';

export const KnowledgeSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterCat, setFilterCat] = useState<string>('সকল');

  const categories = ['সকল', 'সেচ ও পানি ব্যবস্থাপনা', 'আধুনিক কৃষি প্রযুক্তি', 'ফার্ম ম্যাকানাইজেশন', 'ড্রেনেজ ও নিষ্কাশন', 'রিনিউয়েবল এগ্রো'];

  const filteredPosts = filterCat === 'সকল'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(b => b.category.includes(filterCat) || filterCat.includes(b.category));

  return (
    <section id="blogs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="w-12 h-1.5 bg-[#1E7E34] rounded-full mb-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3B1C]">
              কৃষি জ্ঞান ও পরামর্শ
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] mt-1.5">
              মাঠ পর্যায়ের অভিজ্ঞতা ও বৈজ্ঞানিক কৃষি পরামর্শ দিয়ে ফলন বাড়ানোর উপায়।
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCat === cat
                    ? 'bg-[#1E7E34] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              id={`blog-card-${index + 1}`}
              onClick={() => setSelectedPost(post)}
              className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-gray-100 hover:border-[#BCE2C7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F4A24]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1E7E34] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="p-5 pt-0 mt-2">
                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#1E7E34] group-hover:text-[#114A20]">
                  <span>সম্পূর্ণ পড়ুন</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Blog Reader Modal */}
      {selectedPost && (
        <BlogReaderModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};
