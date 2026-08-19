import React from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import { Calendar, Clock, ChevronRight, Share2, MessageSquare, ArrowLeft, BookOpen, CheckCircle2, User } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const ArticlePage: React.FC = () => {
  const { activeSlug, navigate } = useApp();

  const post = BLOG_POSTS.find((p) => p.slug === activeSlug) || BLOG_POSTS[0];

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`🌾 AYT Agro কৃষি পরামর্শ ব্লগ: "${post.title}"\nপড়তে ভিজিট করুন: ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => navigate('blog')} className="hover:text-[#1E7E34]">Blog</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold truncate">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0F4A24] text-xs font-bold uppercase">
          {post.category}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-gray-200/70 text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-gray-700">
              <User className="w-3.5 h-3.5 text-[#1E7E34]" />
              {post.author}
            </span>
            <span>•</span>
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

          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-[#1E7E34] hover:bg-emerald-100 font-bold transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>WhatsApp শেয়ার</span>
          </button>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        
        {/* Quick Summary Callout */}
        <div className="p-6 rounded-3xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
          <span className="text-xs font-bold text-[#0F4A24] uppercase tracking-wider block">মূল বিষয়বস্তু (Key Takeaway):</span>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            {post.summary}
          </p>
        </div>

        {/* Full Text Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
          <p className="whitespace-pre-line leading-loose">
            {post.content}
          </p>
        </div>

        {/* Back to Blog Button */}
        <div className="pt-4 flex items-center justify-between">
          <button
            onClick={() => navigate('blog')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] text-xs font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>সকল ব্লগে ফিরুন</span>
          </button>

          <button
            onClick={() => navigate('services')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
          >
            <span>প্রাসঙ্গিক কৃষি সেবা দেখুন</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
