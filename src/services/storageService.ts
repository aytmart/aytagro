import { BookingRecord, UserProfile, QuoteCartItem } from '../types';

const STORAGE_KEYS = {
  BOOKINGS: 'ayt_agro_bookings_v2',
  USER_PROFILE: 'ayt_agro_user_v2',
  QUOTE_CART: 'ayt_agro_quote_cart_v2',
};

// Initial sample bookings for dashboard demo
const INITIAL_DEMO_BOOKINGS: BookingRecord[] = [
  {
    id: 'AYT-BK-1082',
    customerName: 'মো. রফিকুল ইসলাম',
    phone: '01712-345678',
    whatsappNumber: '01712-345678',
    address: 'গ্রাম: চকলোকমান, ডাকঘর: ফুলবাড়ি',
    district: 'বগুড়া',
    upazila: 'শিবগঞ্জ',
    bookingType: 'machine',
    itemTitle: 'Power Tiller 12HP (পাওয়ার টিলার)',
    itemId: 'power-tiller-12hp',
    startDate: '2026-08-22',
    endDate: '2026-08-24',
    farmSize: '৪ বিঘা',
    specialRequirement: 'অভিজ্ঞ ড্রাইভার/অপারেটর সহ প্রয়োজন',
    estimatedCost: '৳ ৪,৫০০ (৩ দিন)',
    status: 'Confirmed',
    assignedTechnician: 'মো. তারেক হাসান (সিনিয়র টেকনিশিয়ান)',
    createdAt: '2026-08-18'
  },
  {
    id: 'AYT-BK-1085',
    customerName: 'মো. রফিকুল ইসলাম',
    phone: '01712-345678',
    whatsappNumber: '01712-345678',
    address: 'গ্রাম: চকলোকমান, ডাকঘর: ফুলবাড়ি',
    district: 'বগুড়া',
    upazila: 'শিবগঞ্জ',
    bookingType: 'service',
    itemTitle: 'Smart Drip Irrigation Setup (ড্রিপ সেচ)',
    itemId: 'smart-irrigation',
    startDate: '2026-08-28',
    farmSize: '২ একর পেয়ারা ও মাল্টা বাগান',
    specialRequirement: 'অটোমেটিক টাইমার ও ফিল্টারেশন ইউনিট সহ সাইট সারভে',
    estimatedCost: '৳ ৩৬,০০০ (প্রাথমিক প্রাক্কলন)',
    status: 'Pending',
    createdAt: '2026-08-19'
  }
];

export const getStoredBookings = (): BookingRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_DEMO_BOOKINGS));
      return INITIAL_DEMO_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_BOOKINGS;
  }
};

export const saveNewBooking = (booking: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>): BookingRecord => {
  const all = getStoredBookings();
  const idNumber = Math.floor(1000 + Math.random() * 9000);
  const newBooking: BookingRecord = {
    ...booking,
    id: `AYT-BK-${idNumber}`,
    status: 'Pending',
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  const updated = [newBooking, ...all];
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save booking to localStorage', err);
  }
  return newBooking;
};

export const getStoredUserProfile = (): UserProfile | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const saveUserProfile = (user: UserProfile): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(user));
  } catch (err) {
    console.error('Failed to save user profile', err);
  }
};

export const clearUserProfile = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
};

export const getStoredQuoteCart = (): QuoteCartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUOTE_CART);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveQuoteCart = (items: QuoteCartItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.QUOTE_CART, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to save quote cart', err);
  }
};
