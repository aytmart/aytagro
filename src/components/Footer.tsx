import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, Phone, Mail, MapPin, MessageSquare, Facebook, Youtube, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { PageRoute } from '../types';

export const Footer: React.FC = () => {
  const { navigate, addToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      addToast('success', 'কৃষি নিউজলেটারে সফলভাবে যুক্ত হয়েছেন!');
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleNav = (route: PageRoute) => {
    navigate(route);
  };

  const quickLinks: { name: string; route: PageRoute }[] = [
    { name: 'Home', route: 'home' },
    { name: 'Services', route: 'services' },
    { name: 'Products', route: 'products' },
    { name: 'Machinery Rental', route: 'machinery-rental' },
    { name: 'Solutions', route: 'solutions' },
    { name: 'Farm Engineering', route: 'farm-engineering' },
    { name: 'Projects', route: 'projects' },
    { name: 'Crop Knowledge Guide', route: 'crop-guide' },
    { name: 'Blog', route: 'blog' },
    { name: 'About Us', route: 'about' },
    { name: 'Our Team', route: 'team' },
    { name: 'Careers', route: 'careers' },
    { name: 'FAQ', route: 'faq' },
    { name: 'Contact', route: 'contact' },
  ];

  const serviceCategories: { name: string; route: PageRoute; slug?: string }[] = [
    { name: 'Smart Irrigation (স্মার্ট সেচ)', route: 'service-details', slug: 'smart-irrigation' },
    { name: 'Drainage & Water Mgmt (ড্রেনেজ)', route: 'service-details', slug: 'drainage-water-management' },
    { name: 'Farm Care (ফসল পরিচর্যা)', route: 'service-details', slug: 'farm-care' },
    { name: 'Soil Testing (মাটি পরীক্ষা)', route: 'service-details', slug: 'soil-testing' },
    { name: 'Solar Agriculture (সৌর সেচ)', route: 'service-details', slug: 'solar-agriculture' },
    { name: 'Farm Engineering (ফার্ম ডিজাইন)', route: 'service-details', slug: 'farm-engineering' },
    { name: 'Machinery Maintenance (সার্ভিসিং)', route: 'service-details', slug: 'machinery-maintenance' },
  ];

  return (
    <footer id="contact-footer" className="bg-[#082211] text-gray-300 pt-16 pb-14 md:pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: Brand Info & Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1E7E34] flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight font-english block leading-none">
                  AYT AGRO
                </span>
                <span className="text-xs text-emerald-400 font-medium tracking-wide">
                  {APP_CONFIG.TAGLINE}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              AYT Agro বাংলাদেশের কৃষকদের সমস্যাকে কেন্দ্র করে আধুনিক স্মার্ট সেচ, অন-ডিমান্ড যন্ত্রপাতি ভাড়া, ড্রেনেজ, মাটি পরীক্ষা ও ফার্ম ইঞ্জিনিয়ারিং সেবা প্রদান করে। কৃষির সমৃদ্ধিই আমাদের লক্ষ্য।
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2 max-w-md">
              <span className="text-xs font-bold text-emerald-300 block mb-2">
                কৃষির নতুন প্রযুক্তি ও পরামর্শ পেতে সাবস্ক্রাইব করুন
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="আপনার ইমেইল ঠিকানা..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-emerald-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-hidden focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="bg-[#1E7E34] hover:bg-[#155D27] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
                >
                  <Send className="w-3 h-3" />
                  <span>যুক্ত হন</span>
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ধন্যবাদ! আপনি সফলভাবে যুক্ত হয়েছেন।</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={APP_CONFIG.SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1E7E34] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={APP_CONFIG.SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1E7E34] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={APP_CONFIG.SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1E7E34] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={APP_CONFIG.SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1E7E34] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-english">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {quickLinks.slice(0, 7).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNav(link.route)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-english">
              Our Services
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {serviceCategories.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => s.slug ? navigate('service-details', s.slug) : handleNav(s.route)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-left cursor-pointer truncate max-w-[180px]"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-english">
              Contact & Hubs
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a 
                href={`tel:${APP_CONFIG.HOTLINE_TEL}`} 
                className="flex items-start gap-2.5 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{APP_CONFIG.HOTLINE} (হটলাইন)</span>
              </a>

              <a 
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span>+880 1712-345678 (WhatsApp)</span>
              </a>

              <a 
                href={`mailto:${APP_CONFIG.EMAIL}`}
                className="flex items-start gap-2.5 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{APP_CONFIG.EMAIL}</span>
              </a>

              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>ঢাকা অফিস: {APP_CONFIG.DHAKA_OFFICE}</span>
              </div>

              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>বগুড়া হাব: {APP_CONFIG.BOGURA_HUB}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <div>
            © 2026 <span className="text-emerald-400 font-bold">AYT Agro</span>. All Rights Reserved. Smart Solutions for Better Farming.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => handleNav('privacy')} className="hover:underline cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => handleNav('terms')} className="hover:underline cursor-pointer">Terms of Service</button>
            <span>•</span>
            <button onClick={() => handleNav('faq')} className="hover:underline cursor-pointer">FAQ</button>
            <span>•</span>
            <button onClick={() => handleNav('careers')} className="hover:underline cursor-pointer">Careers</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
