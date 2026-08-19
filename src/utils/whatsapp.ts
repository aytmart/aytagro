import { APP_CONFIG } from '../config/appConfig';

/**
 * Centralized WhatsApp Link Generator
 */
export const generateWhatsAppLink = (message: string, phoneOverride?: string): string => {
  const phone = phoneOverride || APP_CONFIG.WHATSAPP_NUMBER;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const createProductWhatsAppLink = (productName: string, price?: number): string => {
  const priceStr = price ? ` (মূল্য: ৳ ${price.toLocaleString()})` : '';
  const message = `নমস্কার AYT Agro, আমি "${productName}"${priceStr} পণ্যটি সম্পর্কে বিস্তারিত তথ্য ও অর্ডার প্রসেস জানতে চাই।`;
  return generateWhatsAppLink(message);
};

export const createRentalWhatsAppLink = (machineName: string, dailyPrice?: number, days = 1, location = ''): string => {
  const locStr = location ? ` [লোকেশন: ${location}]` : '';
  const total = dailyPrice ? ` (আনুমানিক: ৳ ${(dailyPrice * days).toLocaleString()} / ${days} দিন)` : '';
  const message = `নমস্কার AYT Agro, আমি "${machineName}" যন্ত্রপাতিটি ${days} দিনের জন্য ভাড়া নিতে আগ্রহী${total}${locStr}। বুকিং প্রক্রিয়া জানাবেন।`;
  return generateWhatsAppLink(message);
};

export const createServiceWhatsAppLink = (serviceTitle: string, location = '', landSize = ''): string => {
  const meta = (location || landSize) ? ` [জমি: ${landSize || 'অনির্দিষ্ট'}, এলাকা: ${location || 'অনির্দিষ্ট'}]` : '';
  const message = `নমস্কার AYT Agro, আমি "${serviceTitle}" সেবাটি গ্রহণ করতে চাই${meta}। বিশেষজ্ঞ আলোচনা ও কোটেশন প্রয়োজন।`;
  return generateWhatsAppLink(message);
};

export const createQuoteWhatsAppLink = (summary: string): string => {
  const message = `🌾 AYT Agro - কোটেশন অনুরোধ:\n\n${summary}\n\nদয়া করে পর্যালোচনা করে চূড়ান্ত কোটেশন ও শিডিউল নিশ্চিত করুন।`;
  return generateWhatsAppLink(message);
};

export const openWhatsApp = (message: string): void => {
  const link = generateWhatsAppLink(message);
  window.open(link, '_blank', 'noopener,noreferrer');
};
