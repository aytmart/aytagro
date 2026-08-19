import React from 'react';
import { X, Calendar, User, Clock, CheckCircle2, Share2, MessageSquare } from 'lucide-react';
import { BlogPost } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const handleAskQuestion = () => {
    const text = encodeURIComponent(`নমস্কার, আমি AYT Agro ব্লগের "${post.title}" সম্পর্কিত পরামর্শ ও সমাধান চাই।`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1E7E34] text-white text-xs font-bold">
                {post.category}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {post.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Post Metadata */}
        <div className="px-6 sm:px-8 py-3 bg-gray-50 border-b border-gray-100 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#1E7E34]" />
            <span className="font-semibold text-gray-700">{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Modal Article Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          
          <div className="p-4 rounded-2xl bg-[#EBF7EE] border-l-4 border-[#1E7E34] text-sm text-[#165B30] font-medium leading-relaxed">
            {post.summary}
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Tips Box */}
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 space-y-2.5">
            <h4 className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider">বিশেষ পরামর্শ ও করণীয়</h4>
            <div className="space-y-2">
              {post.keyTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-xs sm:text-sm font-semibold hover:bg-gray-100 cursor-pointer"
          >
            বন্ধ করুন
          </button>

          <button
            onClick={handleAskQuestion}
            className="inline-flex items-center justify-center gap-2 bg-[#1E7E34] hover:bg-[#155D27] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>কৃষিবিদের কাছে প্রশ্ন করুন</span>
          </button>
        </div>

      </div>
    </div>
  );
};
