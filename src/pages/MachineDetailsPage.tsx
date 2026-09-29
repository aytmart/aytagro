import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MACHINERY_DATA } from '../data/mockData';
import { 
  Tractor, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  UserCheck, 
  ChevronRight, 
  Fuel, 
  Zap, 
  Scale, 
  Gauge,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { createRentalWhatsAppLink } from '../utils/whatsapp';

export const MachineDetailsPage: React.FC = () => {
  const { activeSlug, navigate, addToQuote } = useApp();
  const [rentDurationDays, setRentDurationDays] = useState<number>(1);
  const [withOperator, setWithOperator] = useState<boolean>(true);

  const machine = MACHINERY_DATA.find((m) => m.slug === activeSlug) || MACHINERY_DATA[0];

  const baseTotal = machine.pricePerDay * rentDurationDays;
  const operatorCost = withOperator && !machine.operatorIncluded ? rentDurationDays * 600 : 0;
  const grandTotal = baseTotal + operatorCost;

  const handleWhatsAppBooking = () => {
    const link = createRentalWhatsAppLink(machine.name, machine.pricePerDay, rentDurationDays, machine.location);
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('home')} className="hover:text-[#1E7E34]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <button onClick={() => navigate('machinery-rental')} className="hover:text-[#1E7E34]">Machinery Rental</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold truncate">{machine.name}</span>
        </div>
      </div>

      {/* Hero / Header */}
      <div className="bg-[#0A2E16] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase font-english">
                <span>{machine.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {machine.location}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {machine.name}
              </h1>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-3xl sm:text-4xl font-black text-[#80ED99] font-english">
                  ৳ {machine.pricePerDay.toLocaleString()}
                </span>
                <span className="text-sm text-emerald-200">/ {machine.unit}</span>
                {machine.pricePerAcre && (
                  <span className="text-xs bg-emerald-900/80 px-2.5 py-1 rounded-lg border border-emerald-600/50 ml-2">
                    একর চুক্তি: ৳ {machine.pricePerAcre.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-emerald-100/90 font-light leading-relaxed">
                উচ্চ ক্ষমতাসম্পন্ন ও জ্বালানি সাশ্রয়ী কৃষি ইঞ্জিন। কম সময়ে বেশি জমিতে নিবিড় কাজের জন্য প্রস্তুত।
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigate('booking', machine.slug)}
                  className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>অনলাইন ভাড়া বুকিং</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppBooking}
                  className="bg-white/10 hover:bg-white/20 text-white border border-emerald-500/50 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp এ কথা বলুন</span>
                </button>

                <button
                  onClick={() => addToQuote({ id: machine.id, title: machine.name, type: 'machine', unitPrice: machine.pricePerDay, image: machine.image })}
                  className="px-5 py-3.5 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 text-xs font-bold border border-emerald-700 cursor-pointer"
                >
                  + কোটেশন তালিকায় রাখুন
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 shadow-2xl flex items-center justify-center h-72 sm:h-80 border-4 border-emerald-800/40">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Technical Specs Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-5">
              <h2 className="text-xl font-bold text-gray-900">যন্ত্রের টেকনিক্যাল স্পেসিফিকেশন</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block">ইঞ্জিন ক্ষমতা (Power)</span>
                    <strong className="text-sm text-gray-900 font-english">{machine.specs.power}</strong>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center flex-shrink-0">
                    <Fuel className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block">জ্বালানি / পাওয়ার ধরণ</span>
                    <strong className="text-sm text-gray-900 font-english">{machine.specs.fuelType}</strong>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block">কাজের গতি ও পরিধি</span>
                    <strong className="text-sm text-gray-900 font-english">{machine.specs.capacity}</strong>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1E7E34] flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block">ওজন / বহনযোগ্যতা</span>
                    <strong className="text-sm text-gray-900 font-english">{machine.specs.weight}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Terms & Conditions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">ভাড়ার নিয়মাবলী ও শর্তসমূহ</h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0 mt-0.5" />
                  <span><strong>অপারেটর:</strong> {machine.operatorIncluded ? 'ভাড়ার খরচের সাথে দক্ষ অপারেটর অন্তর্ভুক্ত থাকবে।' : 'অভিজ্ঞ অপারেটর চাইলে দৈনিক নির্ধারিত হারে প্রদান করা হবে।'}</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0 mt-0.5" />
                  <span><strong>জ্বালানি খরচ:</strong> মেশিনের ডিজেল/অকটেন খরচ সাধারণত গ্রাহককে বহন করতে হবে (সৌর চালিত মেশিনে বিদ্যুৎ খরচ শূন্য)।</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0 mt-0.5" />
                  <span><strong>ডেলিভারি ও পরিবহন:</strong> জেলা হাব থেকে গ্রাহকের জমিতে পরিবহন খরচ আলোচনা সাপেক্ষে নির্ধারিত হবে।</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1E7E34] flex-shrink-0 mt-0.5" />
                  <span><strong>সার্ভিস ও ব্যাকআপ:</strong> কাজের মাঝে কোনো যান্ত্রিক ত্রুটি দেখা দিলে আমাদের অন-ফিল্ড টেকনিশিয়ান সর্বোচ্চ ২ ঘণ্টার মধ্যে সহায়তা প্রদান করবে।</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Cost Estimator (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl space-y-5 sticky top-24">
              <h3 className="text-base font-bold text-gray-900">ভাড়া হিসাব ও বুকিং ক্যালকুলেটর</h3>

              {/* Duration Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600">ভাড়ার সময়কাল (দিন):</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5, 7, 10].map((d) => (
                    <button
                      key={d}
                      onClick={() => setRentDurationDays(d)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        rentDurationDays === d
                          ? 'bg-[#1E7E34] text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
                      }`}
                    >
                      {d} দিন
                    </button>
                  ))}
                </div>
              </div>

              {/* Breakdown */}
              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-600">
                  <span>বেসিক ভাড়া ({rentDurationDays} দিন × ৳{machine.pricePerDay}):</span>
                  <span className="font-bold font-english">৳ {baseTotal.toLocaleString()}</span>
                </div>
                {operatorCost > 0 && (
                  <div className="flex items-center justify-between text-gray-600">
                    <span>অপারেটর সহায়তা:</span>
                    <span className="font-bold font-english">৳ {operatorCost.toLocaleString()}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-gray-200 flex items-center justify-between font-bold text-sm text-[#0F4A24]">
                  <span>মোট আনুমানিক:</span>
                  <span className="text-lg font-black font-english text-[#1E7E34]">৳ {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => navigate('booking', machine.slug)}
                  className="w-full py-3.5 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>অনলাইন বুকিং নিশ্চিত করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#0F4A24] border border-[#25D366]/40 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp এ বুক করুন</span>
                </button>
              </div>

              <div className="p-3 bg-emerald-50 rounded-2xl text-[11px] text-gray-600 space-y-1">
                <div className="font-bold text-[#0F4A24]">📍 বর্তমান হাব লোকেশন:</div>
                <p>{machine.location} হাব থেকে দ্রুত ডেলিভারি সুবিধা।</p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
