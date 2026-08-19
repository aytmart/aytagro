import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Fuel, Gauge, Shield, Zap } from 'lucide-react';
import { MachineryItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface MachineryDetailModalProps {
  machinery: MachineryItem | null;
  onClose: () => void;
}

export const MachineryDetailModal: React.FC<MachineryDetailModalProps> = ({ machinery, onClose }) => {
  const [days, setDays] = useState<number>(1);
  const [needOperator, setNeedOperator] = useState<boolean>(false);

  if (!machinery) return null;

  const operatorDailyRate = 400;
  const calculatedTotal = (machinery.pricePerDay + (needOperator ? operatorDailyRate : 0)) * days;

  const handleBookViaWhatsApp = () => {
    const operatorText = needOperator ? ' (অভিজ্ঞ অপারেটর সহ)' : ' (শুধু মেশিন)';
    const text = encodeURIComponent(
      `নমস্কার, আমি AYT Agro থেকে "${machinery.name}" ভাড়া নিতে চাই।\n- সময়কাল: ${days} দিন${operatorText}\n- আনুমানিক খরচ: ৳ ${calculatedTotal.toLocaleString()}\nদয়া করে প্রাপ্যতা ও বুকিং নিশ্চিত করুন।`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product Image */}
        <div className="relative h-56 w-full bg-gradient-to-tr from-gray-100 to-emerald-50 flex items-center justify-center p-4">
          <img
            src={machinery.image}
            alt={machinery.name}
            className="h-full max-w-[80%] object-contain drop-shadow-lg"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0F4A24] text-xs font-bold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {machinery.availability}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                {machinery.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-english mt-0.5">
                {machinery.nameEn}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl font-black text-[#1E7E34]">
                ৳ {machinery.pricePerDay.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">প্রতি {machinery.unit} ভাড়া</div>
            </div>
          </div>

          {/* Quick Spec Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#1E7E34]" />
              <div className="text-xs">
                <div className="text-gray-400 font-medium">ক্ষমতা</div>
                <div className="font-bold text-gray-800">{machinery.power}</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
              <Fuel className="w-4 h-4 text-[#1E7E34]" />
              <div className="text-xs">
                <div className="text-gray-400 font-medium">জ্বালানি</div>
                <div className="font-bold text-gray-800">{machinery.fuelType}</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2 col-span-2 sm:col-span-1">
              <Gauge className="w-4 h-4 text-[#1E7E34]" />
              <div className="text-xs">
                <div className="text-gray-400 font-medium">কভারেজ</div>
                <div className="font-bold text-gray-800">{machinery.coverage}</div>
              </div>
            </div>
          </div>

          {/* Detailed Specs Table */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">প্রযুক্তিগত বৈশিষ্ট্য (Specs)</h4>
            <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-700">
              {Object.entries(machinery.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-gray-100/80 pb-1 last:border-0 last:pb-0">
                  <span className="font-medium text-gray-500">{k}:</span>
                  <span className="font-bold text-gray-800">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Days and Operator Selector */}
          <div className="bg-[#F0F7F2] p-4 rounded-2xl border border-[#D0E5D6] space-y-3">
            <h4 className="text-xs font-bold text-[#165B30] uppercase tracking-wider">ভাড়া ক্যালকুলেটর</h4>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-gray-700">ভাড়ার সময়কাল:</label>
                <div className="flex items-center border border-emerald-300 bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => setDays(Math.max(1, days - 1))}
                    className="px-3 py-1 font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-bold text-[#1E7E34] text-sm">{days} দিন</span>
                  <button
                    onClick={() => setDays(days + 1)}
                    className="px-3 py-1 font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-700">
                <input
                  type="checkbox"
                  checked={needOperator}
                  onChange={(e) => setNeedOperator(e.target.checked)}
                  className="rounded text-[#1E7E34] focus:ring-[#1E7E34] w-4 h-4"
                />
                <span>অভিজ্ঞ অপারেটর প্রয়োজন (+৳ 400/দিন)</span>
              </label>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-emerald-200/60">
              <span className="text-xs font-bold text-gray-700">মোট আনুমানিক ভাড়া:</span>
              <span className="text-lg font-black text-[#165B30]">৳ {calculatedTotal.toLocaleString()}</span>
            </div>
          </div>

          {machinery.deposit && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>প্রয়োজনীয় শর্ত: {machinery.deposit}</span>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            বন্ধ করুন
          </button>

          <button
            onClick={handleBookViaWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#1E7E34] hover:bg-[#155D27] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>হোয়াটসঅ্যাপে বুক করুন</span>
          </button>
        </div>

      </div>
    </div>
  );
};
