import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageRoute, QuoteCartItem, ToastMessage, UserProfile, BookingRecord } from '../types';
import { 
  getStoredBookings, 
  saveNewBooking, 
  getStoredUserProfile, 
  saveUserProfile, 
  clearUserProfile, 
  getStoredQuoteCart, 
  saveQuoteCart 
} from '../services/storageService';

interface AppContextType {
  currentRoute: PageRoute;
  activeSlug: string | null;
  navigate: (route: PageRoute, slug?: string) => void;
  
  // Quote Cart / Inquiries
  quoteCart: QuoteCartItem[];
  addToQuote: (item: QuoteCartItem) => void;
  removeFromQuote: (id: string) => void;
  clearQuoteCart: () => void;
  isQuoteDrawerOpen: boolean;
  setIsQuoteDrawerOpen: (open: boolean) => void;

  // Global Search Modal
  isGlobalSearchOpen: boolean;
  setIsGlobalSearchOpen: (open: boolean) => void;

  // Toast Notifications
  toasts: ToastMessage[];
  addToast: (type: 'success' | 'error' | 'warning' | 'info', message: string) => void;
  removeToast: (id: string) => void;

  // User Auth Profile
  user: UserProfile | null;
  loginUser: (profile: UserProfile) => void;
  logoutUser: () => void;

  // Bookings
  bookings: BookingRecord[];
  createBooking: (booking: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>) => BookingRecord;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  
  const [quoteCart, setQuoteCart] = useState<QuoteCartItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);
  
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  // Initialize from storage & URL hash
  useEffect(() => {
    setQuoteCart(getStoredQuoteCart());
    setUser(getStoredUserProfile());
    setBookings(getStoredBookings());

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash) {
        setCurrentRoute('home');
        setActiveSlug(null);
        return;
      }
      
      const parts = hash.split('?slug=');
      const routeName = parts[0] as PageRoute;
      const slug = parts[1] || null;

      const validRoutes: PageRoute[] = [
        'home', 'services', 'service-details', 'products', 'product-details',
        'machinery-rental', 'machine-details', 'booking', 'solutions',
        'farm-engineering', 'irrigation', 'drainage', 'solar-agriculture',
        'soil-testing', 'advisory', 'projects', 'project-details',
        'blog', 'article', 'crop-guide', 'about', 'team', 'contact',
        'faq', 'careers', 'login', 'register', 'dashboard', 'privacy', 'terms', '404'
      ];

      if (validRoutes.includes(routeName)) {
        setCurrentRoute(routeName);
        setActiveSlug(slug);
      } else {
        setCurrentRoute('404');
        setActiveSlug(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: PageRoute, slug?: string) => {
    setCurrentRoute(route);
    setActiveSlug(slug || null);
    
    const hash = slug ? `#/${route}?slug=${encodeURIComponent(slug)}` : `#/${route}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    const id = Date.now().toString() + Math.random().toString();
    const newToast: ToastMessage = { id, type, message };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToQuote = (item: QuoteCartItem) => {
    setQuoteCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      let updated: QuoteCartItem[];
      if (existing) {
        updated = prev.map((p) => p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
      } else {
        updated = [...prev, { ...item, quantity: item.quantity || 1 }];
      }
      saveQuoteCart(updated);
      return updated;
    });
    addToast('success', `"${item.title}" কোটেশন তালিকায় যুক্ত হয়েছে`);
  };

  const removeFromQuote = (id: string) => {
    setQuoteCart((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      saveQuoteCart(updated);
      return updated;
    });
    addToast('info', 'আইটেমটি সরানো হয়েছে');
  };

  const clearQuoteCart = () => {
    setQuoteCart([]);
    saveQuoteCart([]);
  };

  const loginUser = (profile: UserProfile) => {
    setUser(profile);
    saveUserProfile(profile);
    addToast('success', `স্বাগতম, ${profile.name}!`);
  };

  const logoutUser = () => {
    setUser(null);
    clearUserProfile();
    addToast('info', 'আপনি সফলভাবে লগআউট হয়েছেন।');
    navigate('home');
  };

  const createBooking = (bookingData: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>) => {
    const newRecord = saveNewBooking(bookingData);
    setBookings(getStoredBookings());
    addToast('success', `আপনার বুকিং (${newRecord.id}) সফলভাবে গৃহীত হয়েছে!`);
    return newRecord;
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        activeSlug,
        navigate,
        quoteCart,
        addToQuote,
        removeFromQuote,
        clearQuoteCart,
        isQuoteDrawerOpen,
        setIsQuoteDrawerOpen,
        isGlobalSearchOpen,
        setIsGlobalSearchOpen,
        toasts,
        addToast,
        removeToast,
        user,
        loginUser,
        logoutUser,
        bookings,
        createBooking
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
