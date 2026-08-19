import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, Droplets, MessageSquare, Tractor, PhoneCall, User } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const MobileBottomNav: React.FC = () => {
  const { currentRoute, navigate, user } = useApp();

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent('নমস্কার AYT Agro, আমি আপনাদের সেবা ও কৃষি সমাধান সম্পর্কে জানতে চাই।');
    window.open(`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const navItems = [
    {
      label: 'Home',
      icon: Home,
      route: 'home',
      onClick: () => navigate('home')
    },
    {
      label: 'Services',
      icon: Droplets,
      route: 'services',
      onClick: () => navigate('services')
    },
    {
      label: 'WhatsApp',
      icon: MessageSquare,
      isSpecialWhatsApp: true,
      onClick: handleWhatsAppDirect
    },
    {
      label: 'Rental',
      icon: Tractor,
      route: 'machinery-rental',
      onClick: () => navigate('machinery-rental')
    },
    {
      label: user ? 'Dashboard' : 'Contact',
      icon: user ? User : PhoneCall,
      route: user ? 'dashboard' : 'contact',
      onClick: () => navigate(user ? 'dashboard' : 'contact')
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 px-2 py-1.5 shadow-lg safe-area-bottom">
      <div className="grid grid-cols-5 items-center justify-around">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.route;

          if (item.isSpecialWhatsApp) {
            return (
              <button
                key={idx}
                onClick={item.onClick}
                className="flex flex-col items-center justify-center -mt-4 group cursor-pointer focus:outline-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#1E7E34] mt-0.5">WhatsApp</span>
              </button>
            );
          }

          return (
            <button
              key={idx}
              onClick={item.onClick}
              className={`flex flex-col items-center justify-center py-1 transition-colors cursor-pointer focus:outline-hidden ${
                isActive ? 'text-[#1E7E34] font-bold' : 'text-gray-500 hover:text-[#1E7E34]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              <span className="text-[10px] mt-0.5 leading-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
