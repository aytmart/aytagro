import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Leaf, 
  Phone, 
  MessageSquare, 
  Search, 
  Calculator, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Tractor, 
  Droplets, 
  ShoppingBag, 
  Lightbulb, 
  Layers, 
  BookOpen, 
  ShieldCheck, 
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { PageRoute } from '../types';

export const Header: React.FC = () => {
  const { 
    currentRoute, 
    navigate, 
    quoteCart, 
    setIsQuoteDrawerOpen, 
    setIsGlobalSearchOpen,
    user
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  const navLinks: { name: string; route: PageRoute }[] = [
    { name: 'Home', route: 'home' },
    { name: 'Services', route: 'services' },
    { name: 'Products', route: 'products' },
    { name: 'Machinery Rental', route: 'machinery-rental' },
    { name: 'Solutions', route: 'solutions' },
    { name: 'Farm Engineering', route: 'farm-engineering' },
    { name: 'Projects', route: 'projects' },
    { name: 'Blog', route: 'blog' },
    { name: 'Crop Guide', route: 'crop-guide' },
    { name: 'About Us', route: 'about' },
    { name: 'Contact', route: 'contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0A2E16] text-emerald-100 text-[11px] sm:text-xs py-1.5 px-4 border-b border-emerald-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              🌱 <span className="font-semibold text-emerald-300">AYT Agro:</span> {APP_CONFIG.TAGLINE_BN}
            </span>
            <span className="text-emerald-500">•</span>
            <span className="text-emerald-300">সারাদেশে মাঠ পর্যায়ে অন-ফিল্ড সার্ভিসিং ও সাপোর্ট</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${APP_CONFIG.HOTLINE_TEL}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>হটলাইন: <strong>{APP_CONFIG.HOTLINE}</strong></span>
            </a>

            <a 
              href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp সাপোর্ট</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-100' 
            : 'bg-white py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo & Name */}
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 cursor-pointer group select-none flex-shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E7E34] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-[#0F4A24] tracking-tight font-english leading-none">
                  AYT AGRO
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#28A745] font-semibold tracking-wide">
                  Smart Solutions for Better Farming
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 text-[13px] font-bold text-gray-700">
              <button
                onClick={() => handleNav('home')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'home' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNav('services')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'services' || currentRoute === 'service-details' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Services
              </button>

              <button
                onClick={() => handleNav('machinery-rental')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'machinery-rental' || currentRoute === 'machine-details' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Machinery Rental
              </button>

              <button
                onClick={() => handleNav('products')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'products' || currentRoute === 'product-details' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Products
              </button>

              {/* Solutions & Engineering Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleNav('solutions')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                    currentRoute === 'solutions' || currentRoute === 'farm-engineering' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 space-y-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button 
                    onClick={() => handleNav('solutions')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors block"
                  >
                    🌱 সকল সমাধান প্যাকেজ
                  </button>
                  <button 
                    onClick={() => handleNav('farm-engineering')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors block"
                  >
                    📐 Farm Engineering
                  </button>
                  <button 
                    onClick={() => handleNav('projects')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors block"
                  >
                    🚜 মাঠ পর্যায়ের প্রজেক্টসমূহ
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNav('blog')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'blog' || currentRoute === 'article' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Blog
              </button>

              <button
                onClick={() => handleNav('crop-guide')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'crop-guide' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Crop Guide
              </button>

              <button
                onClick={() => handleNav('about')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'about' || currentRoute === 'team' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNav('contact')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'contact' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Right Action Icons & Primary CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Global Search Button */}
              <button
                onClick={() => setIsGlobalSearchOpen(true)}
                aria-label="Search"
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline font-english text-[11px] text-gray-400">Ctrl+K</span>
              </button>

              {/* Quote Cart Button with Badge */}
              <button
                onClick={() => setIsQuoteDrawerOpen(true)}
                className="relative p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F4A24] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#1E7E34]" />
                <span className="hidden sm:inline">কোটেশন</span>
                {quoteCart.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#1E7E34] text-white text-[10px] font-bold flex items-center justify-center">
                    {quoteCart.length}
                  </span>
                )}
              </button>

              {/* User Dashboard / Login */}
              <button
                onClick={() => handleNav(user ? 'dashboard' : 'login')}
                className="p-2 sm:px-3 sm:py-2 rounded-xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span className="hidden md:inline">{user ? user.name.split(' ')[0] : 'লগইন'}</span>
              </button>

              {/* Main Booking / Quote CTA */}
              <button
                onClick={() => handleNav('booking')}
                id="header-book-cta-btn"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E7E34] hover:bg-[#155D27] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>বুকিং করুন</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="xl:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => handleNav('booking')}
                className="py-2.5 px-3 rounded-xl bg-[#1E7E34] text-white text-xs font-bold text-center"
              >
                🚜 সেবা / মেশিন বুকিং
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setIsQuoteDrawerOpen(true); }}
                className="py-2.5 px-3 rounded-xl bg-emerald-50 text-[#0F4A24] text-xs font-bold text-center border border-emerald-200"
              >
                📋 কোটেশন ({quoteCart.length})
              </button>
            </div>

            <div className="space-y-1 font-semibold text-sm text-gray-700 divide-y divide-gray-50">
              {navLinks.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNav(item.route)}
                  className={`w-full text-left py-2.5 px-3 rounded-xl flex items-center justify-between ${
                    currentRoute === item.route ? 'bg-emerald-50 text-[#1E7E34] font-bold' : 'hover:bg-gray-50'
                  }`}
                >
                  <span>{item.name}</span>
                </button>
              ))}

              <button
                onClick={() => handleNav('faq')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 text-gray-600 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>সাধারণ জিজ্ঞাসা (FAQ)</span>
              </button>

              <button
                onClick={() => handleNav('careers')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 text-gray-600 flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>ক্যারিয়ার (Careers)</span>
              </button>
            </div>

            {/* Mobile Contact Quick Box */}
            <div className="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-100 text-xs space-y-1.5 text-emerald-950 mt-3">
              <div className="font-bold flex items-center gap-1.5 text-[#0F4A24]">
                <Phone className="w-3.5 h-3.5" />
                <span>হটলাইন: {APP_CONFIG.HOTLINE}</span>
              </div>
              <p className="text-[11px] text-emerald-800">
                সকাল ৮:০০ - রাত ৮:০০ (সার্বক্ষণিক জরুরি সেবা)
              </p>
            </div>

          </div>
        )}
      </header>
    </>
  );
};
