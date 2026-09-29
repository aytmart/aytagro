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
  Layers, 
  BookOpen, 
  ShieldCheck, 
  Briefcase,
  HelpCircle,
  Sprout,
  FlaskConical,
  Smartphone,
  Bot,
  MapPin,
  Award,
  Users
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
  const [naturalDropdownOpen, setNaturalDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

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
    setNaturalDropdownOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <>
      {/* Main Fixed Frozen Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-emerald-100' 
            : 'bg-white/95 backdrop-blur-md py-2 sm:py-2.5 border-b border-gray-100 shadow-2xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-3">
            
            {/* Brand Logo & Name */}
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group select-none min-w-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E7E34] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-2xl font-black text-[#0F4A24] tracking-tight font-english leading-none whitespace-nowrap">
                    AYT AGRO
                  </span>
                  <span className="hidden md:inline-flex text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold tracking-wide flex-shrink-0">
                    Natural Ecosystem
                  </span>
                </div>
                <span className="hidden sm:block text-[10px] sm:text-[11px] text-[#1E7E34] font-medium tracking-wide truncate">
                  প্রকৃতির নিয়মে কৃষি, প্রযুক্তির সহায়তায়
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links (6 Core Pillars Focus) */}
            <nav className="hidden xl:flex items-center gap-1 text-[13px] font-bold text-gray-700">
              <button
                onClick={() => handleNav('home')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'home' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                হোম
              </button>

              {/* Natural Farming Pillars Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleNav('natural-farming')}
                  className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                    ['natural-farming', 'soil-health', 'natural-pest-management', 'smart-water', 'model-farm'].includes(currentRoute)
                      ? 'text-[#1E7E34] bg-emerald-50 font-bold' 
                      : 'hover:text-[#1E7E34] hover:bg-gray-50'
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  <span>প্রাকৃতিক কৃষি</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-white rounded-2xl shadow-xl border border-emerald-100 p-2 space-y-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button 
                    onClick={() => handleNav('natural-farming')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <Sprout className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="font-bold text-gray-900">Natural Farming</div>
                      <div className="text-[11px] text-gray-500 font-normal">প্রাকৃতিক ও ইকোলজিক্যাল কৃষি</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('soil-health')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <FlaskConical className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="font-bold text-gray-900">Soil Health (মাটির স্বাস্থ্য)</div>
                      <div className="text-[11px] text-gray-500 font-normal">ল্যাব টেস্ট, পিএইচ ও জৈব পদার্থ</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('natural-pest-management')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <div>
                      <div className="font-bold text-gray-900">Natural Pest Management</div>
                      <div className="text-[11px] text-gray-500 font-normal">প্রতিরোধ, ফাঁদ ও বালাই দমন</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('smart-water')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <Droplets className="w-4 h-4 text-sky-600" />
                    <div>
                      <div className="font-bold text-gray-900">Smart Water & Irrigation</div>
                      <div className="text-[11px] text-gray-500 font-normal">ড্রিপ সেচ, স্প্রিংকলার ও সেন্সর</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('model-farm')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    <div>
                      <div className="font-bold text-gray-900">AYT Model Farm</div>
                      <div className="text-[11px] text-gray-500 font-normal">মডেল ফার্মের জোন ও প্র্যাকটিস</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Digital Farm */}
              <button
                onClick={() => handleNav('digital-farm')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  currentRoute === 'digital-farm' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                <span>ডিজিটাল ফার্ম</span>
              </button>

              {/* Machinery & Farm Tools */}
              <button
                onClick={() => handleNav('machinery-rental')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  currentRoute === 'machinery-rental' || currentRoute === 'machine-details' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                <Tractor className="w-3.5 h-3.5 text-orange-600" />
                <span>ফার্ম টুলস ও রেন্টাল</span>
              </button>

              {/* Products */}
              <button
                onClick={() => handleNav('products')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'products' || currentRoute === 'product-details' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                পণ্যসমূহ
              </button>

              {/* Services */}
              <button
                onClick={() => handleNav('services')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'services' || currentRoute === 'service-details' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                সেবাসমূহ
              </button>

              {/* Packages */}
              <button
                onClick={() => handleNav('packages')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currentRoute === 'packages' ? 'text-[#1E7E34] bg-emerald-50' : 'hover:text-[#1E7E34] hover:bg-gray-50'
                }`}
              >
                প্যাকেজ
              </button>

              {/* More Tools & Knowledge Dropdown */}
              <div className="relative group">
                <button
                  className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                    ['crop-assistant', 'farm-calculator', 'verified-farm', 'farmer-stories', 'crop-guide', 'farm-engineering', 'projects', 'about', 'contact'].includes(currentRoute)
                      ? 'text-[#1E7E34] bg-emerald-50' 
                      : 'hover:text-[#1E7E34] hover:bg-gray-50'
                  }`}
                >
                  <span>আরও</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <div className="absolute top-full right-0 hidden group-hover:block w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 space-y-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button 
                    onClick={() => handleNav('crop-assistant')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <Bot className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="font-bold text-gray-900">AI Crop Assistant</div>
                      <div className="text-[11px] text-gray-500 font-normal">স্মার্ট ফসল পরামর্শ ও রোগ নির্ণয়</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('farm-calculator')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="font-bold text-gray-900">Farm Cost Calculator</div>
                      <div className="text-[11px] text-gray-500 font-normal">খরচ ও লাভজনকতার ক্যালকুলেটর</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('verified-farm')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-teal-600" />
                    <div>
                      <div className="font-bold text-gray-900">Verified Farm & QR Trace</div>
                      <div className="text-[11px] text-gray-500 font-normal">খামারের সত্যতা ও ট্রেসেবিলিটি</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('farmer-stories')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-bold text-gray-900">Farmer Stories</div>
                      <div className="text-[11px] text-gray-500 font-normal">বাস্তব কৃষকদের সাফল্যের গল্প</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNav('crop-guide')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-bold text-gray-900">Crop Knowledge Guide</div>
                      <div className="text-[11px] text-gray-500 font-normal">ফসল অনুযায়ী গাইডলাইন</div>
                    </div>
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button 
                    onClick={() => handleNav('farm-engineering')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors block"
                  >
                    📐 Farm Engineering
                  </button>
                  <button 
                    onClick={() => handleNav('about')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors block"
                  >
                    🏢 আমাদের সম্পর্কে (About)
                  </button>
                  <button 
                    onClick={() => handleNav('contact')}
                    className="w-full text-left p-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 hover:text-[#1E7E34] transition-colors block"
                  >
                    📞 যোগাযোগ (Contact)
                  </button>
                </div>
              </div>
            </nav>

            {/* Right Action Icons & Primary CTAs */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              
              {/* Global Search Button */}
              <button
                onClick={() => setIsGlobalSearchOpen(true)}
                aria-label="Search"
                className="p-1.5 sm:px-2.5 sm:py-2 rounded-xl bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#1E7E34] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline font-english text-[11px] text-gray-400">Ctrl+K</span>
              </button>

              {/* Quote Cart Button with Badge */}
              <button
                onClick={() => setIsQuoteDrawerOpen(true)}
                aria-label="Quote Cart"
                className="relative p-1.5 sm:px-3 sm:py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0F4A24] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#1E7E34]" />
                <span className="hidden sm:inline">কোটেশন</span>
                {quoteCart.length > 0 && (
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1E7E34] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                    {quoteCart.length}
                  </span>
                )}
              </button>

              {/* User Dashboard / Login */}
              <button
                onClick={() => handleNav(user ? 'dashboard' : 'login')}
                aria-label="User Account"
                className="p-1.5 sm:px-3 sm:py-2 rounded-xl border border-gray-200 hover:border-[#1E7E34] text-gray-700 hover:text-[#1E7E34] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span className="hidden md:inline">{user ? user.name.split(' ')[0] : 'লগইন'}</span>
              </button>

              {/* AI Crop Advisor Quick Button */}
              <button
                onClick={() => handleNav('crop-assistant')}
                id="header-ai-advisor-btn"
                className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
              >
                <Bot className="w-4 h-4 text-yellow-300" />
                <span>AI পরামর্শ</span>
              </button>

              {/* Primary Fast CTA: Natural Farming */}
              <button
                onClick={() => handleNav('natural-farming')}
                id="header-natural-farm-btn"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E7E34] hover:bg-[#155D27] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
              >
                <Sprout className="w-3.5 h-3.5" />
                <span>ন্যাচারাল ফার্মিং</span>
              </button>


              {/* Mobile Hamburger Toggle - GUARANTEED VISIBLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="xl:hidden p-1.5 sm:p-2 rounded-xl text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors flex-shrink-0"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-800" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            
            {/* Quick Action Hub */}
            <div className="grid grid-cols-3 gap-1.5 pb-2">
              <button
                onClick={() => handleNav('natural-farming')}
                className="py-2.5 px-2 rounded-xl bg-[#1E7E34] text-white text-[11px] font-bold text-center flex flex-col items-center justify-center gap-1"
              >
                <Sprout className="w-4 h-4" />
                <span>Natural Agro</span>
              </button>
              <button
                onClick={() => handleNav('crop-assistant')}
                className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold text-center flex flex-col items-center justify-center gap-1 shadow-xs"
              >
                <Bot className="w-4 h-4 text-yellow-300" />
                <span>AI পরামর্শ</span>
              </button>
              <button
                onClick={() => handleNav('digital-farm')}
                className="py-2.5 px-2 rounded-xl bg-indigo-600 text-white text-[11px] font-bold text-center flex flex-col items-center justify-center gap-1"
              >
                <Smartphone className="w-4 h-4" />
                <span>Smart Farm</span>
              </button>
            </div>


            <div className="space-y-1 font-semibold text-sm text-gray-700 divide-y divide-gray-50">
              <button
                onClick={() => handleNav('home')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50"
              >
                হোম (Home)
              </button>

              <button
                onClick={() => handleNav('natural-farming')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 text-[#1E7E34] font-bold flex items-center gap-2"
              >
                <Sprout className="w-4 h-4" />
                <span>প্রাকৃতিক কৃষি (Natural Farming)</span>
              </button>

              <button
                onClick={() => handleNav('soil-health')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <FlaskConical className="w-4 h-4 text-amber-600" />
                <span>মাটির স্বাস্থ্য (Soil Health)</span>
              </button>

              <button
                onClick={() => handleNav('natural-pest-management')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>প্রাকৃতিক বালাই দমন (IPM)</span>
              </button>

              <button
                onClick={() => handleNav('smart-water')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Droplets className="w-4 h-4 text-sky-600" />
                <span>স্মার্ট সেচ ও পানি (Smart Water)</span>
              </button>

              <button
                onClick={() => handleNav('digital-farm')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-indigo-600" />
                <span>ডিজিটাল ফার্ম (Digital Farm)</span>
              </button>

              <button
                onClick={() => handleNav('machinery-rental')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Tractor className="w-4 h-4 text-orange-600" />
                <span>ফার্ম টুলস ও রেন্টাল</span>
              </button>

              <button
                onClick={() => handleNav('products')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-600" />
                <span>পণ্যসমূহ (Organic & Tools)</span>
              </button>

              <button
                onClick={() => handleNav('packages')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-purple-600" />
                <span>ন্যাচারাল ফার্ম প্যাকেজ</span>
              </button>

              <button
                onClick={() => handleNav('model-farm')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>AYT মডেল ফার্ম</span>
              </button>

              <button
                onClick={() => handleNav('verified-farm')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-teal-600" />
                <span>Verified Farm & QR Trace</span>
              </button>

              <button
                onClick={() => handleNav('crop-assistant')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>AI Crop Assistant</span>
              </button>

              <button
                onClick={() => handleNav('farm-calculator')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>Farm Cost Calculator</span>
              </button>

              <button
                onClick={() => handleNav('farmer-stories')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-green-600" />
                <span>কৃষকদের সাফল্যের গল্প</span>
              </button>

              <button
                onClick={() => handleNav('booking')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-gray-50 text-emerald-700 font-bold"
              >
                📋 সেবা ও মেশিন বুকিং
              </button>
            </div>

            {/* Quick Hotline & Support in Drawer */}
            <div className="pt-2">
              <a 
                href={`tel:${APP_CONFIG.HOTLINE_TEL}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>হটলাইন: {APP_CONFIG.HOTLINE}</span>
              </a>
            </div>

          </div>
        )}
      </header>
    </>
  );
};

