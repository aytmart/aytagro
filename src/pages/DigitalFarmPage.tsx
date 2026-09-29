import React, { useState } from 'react';
import { DEMO_DIGITAL_FARM_PROFILE } from '../data/naturalAgroData';
import { useApp } from '../context/AppContext';
import { 
  Smartphone, 
  QrCode, 
  Bot, 
  LineChart, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Plus, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  Send,
  Droplets,
  HelpCircle,
  FileCheck
} from 'lucide-react';

export const DigitalFarmPage: React.FC = () => {
  const { navigate } = useApp();
  const farm = DEMO_DIGITAL_FARM_PROFILE;

  const [activities, setActivities] = useState(farm.activities);
  const [newActivity, setNewActivity] = useState('');
  const [newDate, setNewDate] = useState('আজকে');
  const [showAddModal, setShowAddModal] = useState(false);

  // AI Assistant Chat State
  const [chatMessages, setChatMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: 'আসসালামু আলাইকুম! আমি AYT ডিজিটাল এগ্রো এআই অ্যাসিস্ট্যান্ট। আপনার ফসল, মাটির পিএইচ, পোকা দমন বা জৈব সার প্রয়োগ নিয়ে যে কোনো প্রশ্ন করতে পারেন।'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  // Cost Calculator State
  const [calcBigha, setCalcBigha] = useState<number>(3);
  const [calcCrop, setCalcCrop] = useState<string>('বারি বেগুন-১২');

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActivity.trim()) return;
    const item = {
      id: `act-${Date.now()}`,
      date: newDate || 'আজকে',
      title: newActivity.trim(),
      category: 'Input' as const,
      description: newActivity.trim(),
      operator: farm.ownerName,
      status: 'Completed' as const
    };
    setActivities([item, ...activities]);
    setNewActivity('');
    setShowAddModal(false);
  };


  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputQuery('');

    // Responsive AI logic simulation
    setTimeout(() => {
      let reply = 'প্রাকৃতিক নিয়মে এই সমস্যার সর্বোত্তম সমাধান হলো নিম তেলের নির্যাস (৫ মিলি/লিটার) ও ট্রাইকোডার্মা মিশ্রণ ব্যবহার করা। রাসায়নিক বিষ প্রয়োগ না করে জৈব ফাঁদ ব্যবহার করুন।';
      if (userText.includes('পানি') || userText.includes('সেচ')) {
        reply = 'আপনার বর্তমান মাটির সেন্সর রিডিং ৩৫% আর্দ্রতা দেখাচ্ছে। ড্রিপ ইরিগেশনের মাধ্যমে সকালে ৩০ মিনিট সেচ দেওয়াই আদর্শ হবে।';
      } else if (userText.includes('সার') || userText.includes('ইউরিয়া')) {
        reply = 'রাসায়নিক ইউরিয়ার বদলে ভার্মিকম্পোস্ট ও খড় মালচিং প্রয়োগ করুন। এটি মাটিতে নাইট্রোজেনের স্বাভাবিক চক্র বজায় রাখবে।';
      } else if (userText.includes('পোকা') || userText.includes('মাছি')) {
        reply = 'মাছি পোকার জন্য একর প্রতি ৮-১০টি ফেরোমোন ফাঁদ ও হলুদ আঠালো ফাঁদ পাতুন। পোকা দমন সম্পূর্ণ বিষমুক্ত থাকবে।';
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F5F8F6]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0C2D19] via-[#103D22] to-[#174F2D] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-english">
                AYT DIGITAL SMART FARM PLATFORM
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                ডিজিটাল খামার প্রোফাইল ও কিউআর ট্রেস
              </h1>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                আপনার খামারের সকল তথ্য, মাটির সেন্সর ডেটা, স্প্রে লগ ও ডিজিটাল সার্টিফিকেট এক জায়গায়। ভোক্তাকে দিন ১০০% বিশুদ্ধতার প্রমাণ।
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-2 bg-[#28A745] hover:bg-[#218838] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>নতুন অ্যাক্টিভিটি লগ যোগ করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10">
        
        {/* Main 2-Column Section: Left (Farm Card & Log) & Right (AI Assistant & Tools) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Farm Card Profile */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Profile Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      AYT Verified Eco Farm
                    </span>
                    <span className="text-xs text-gray-400 font-mono">{farm.farmId}</span>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mt-2">{farm.name}</h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-400" />{farm.location}</span>
                    <span>•</span>
                    <span>আয়তন: {farm.totalArea}</span>
                    <span>•</span>
                    <span>মালিক/কৃষক: {farm.ownerName}</span>
                  </div>
                </div>

                {/* QR Code Block */}
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-950 text-white rounded-xl flex items-center justify-center mb-1">
                    <QrCode className="w-10 h-10" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-900">ভোক্তা কিউআর ভেরিফাইড</span>
                </div>
              </div>

              {/* Sensor Metres */}
              <div>
                <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  মাটির লাইভ প্যারামিটার (IoT Sensor Telemetry)
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#F4F9F6] border border-emerald-100 text-center space-y-1">
                    <span className="text-[11px] text-gray-500 font-medium">আর্দ্রতা (Moisture)</span>
                    <div className="text-xl font-black text-emerald-900 font-english">{farm.currentMoisture}%</div>
                    <span className="text-[10px] text-emerald-700 font-bold">আদর্শ মাত্রা</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FFFDF5] border border-amber-100 text-center space-y-1">
                    <span className="text-[11px] text-gray-500 font-medium">মাটির স্বাস্থ্য (Status)</span>
                    <div className="text-xl font-black text-amber-900 font-english">{farm.soilHealthStatus}</div>
                    <span className="text-[10px] text-emerald-700 font-bold">{farm.soilType}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F5F8FF] border border-indigo-100 text-center space-y-1">
                    <span className="text-[11px] text-gray-500 font-medium">ফসলের স্বাস্থ্য (Crop)</span>
                    <div className="text-xl font-black text-indigo-900 font-english">{farm.cropStatus}</div>
                    <span className="text-[10px] text-indigo-700 font-bold">স্ট্রেস মুক্ত</span>
                  </div>
                </div>
              </div>

              {/* Crop Badges */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  বর্তমান উৎপাদিত প্রাকৃতিক ফসল:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {farm.primaryCrops.map((c, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
                      🌱 {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Activities List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    <span>খামার কার্যক্রম হিস্ট্রি (Traceability Log)</span>
                  </h3>
                  <span className="text-xs text-gray-500 font-english">{activities.length} টি রেকর্ড</span>
                </div>

                <div className="space-y-2">
                  {activities.map((act) => (
                    <div key={act.id} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-gray-900">{act.title}</div>
                        <div className="text-[11px] text-gray-500 font-english">তারিখ: {act.date} • {act.description}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        {act.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


            </div>

          </div>

          {/* Right Column: AI Assistant + Crop Cost Calculator */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* AI Crop Assistant Panel */}
            <div className="bg-white p-6 rounded-3xl border border-indigo-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">AI ক্রপ ও বালাই সহকারী</h3>
                    <p className="text-[11px] text-emerald-600 font-semibold">● লাইভ সক্রিয়</p>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold font-english">
                  Gemini Powered
                </span>
              </div>

              {/* Chat Message Box */}
              <div className="h-64 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-xs">
                {chatMessages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-xs'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendQuery} className="flex gap-2">
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="ফসলের সমস্যা বা পরামর্শ লিখুন..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Farm Economics / Cost Calculator */}
            <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <LineChart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">প্রাকৃতিক খামার লাভ-ক্ষতি ক্যালকুলেটর</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-600 mb-1">জমির পরিমাণ (বিঘা):</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={calcBigha}
                    onChange={(e) => setCalcBigha(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-1">ফসল নির্বাচন:</label>
                  <select
                    value={calcCrop}
                    onChange={(e) => setCalcCrop(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold text-gray-900"
                  >
                    <option value="বারি বেগুন-১২">বারি বেগুন-১২ (প্রাকৃতিক)</option>
                    <option value="গ্রিন শশা ও করলা">গ্রিন শশা ও করলা (মালচিং)</option>
                    <option value="কাটোয়ার ডাঁটা ও শাক">কাটোয়ার ডাঁটা ও শাক</option>
                    <option value="মাল্টা ও পেয়ারা বাগান">মাল্টা ও পেয়ারা বাগান</option>
                  </select>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-gray-600">অনুমিত প্রাকৃতিক ইনপুট ব্যয়:</span>
                    <span className="font-bold text-gray-900 font-english">৳ {(calcBigha * 4200).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">অনুমিত প্রাকৃতিক বাজার বিক্রয়:</span>
                    <span className="font-bold text-emerald-800 font-english">৳ {(calcBigha * 18500).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-emerald-200 font-bold text-xs text-emerald-950">
                    <span>প্রত্যাশিত নিট লাভ:</span>
                    <span className="font-english text-emerald-700">৳ {(calcBigha * 14300).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Add Activity Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-3xl space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-gray-900">নতুন খামার কার্যক্রম লগ যোগ করুন</h3>
            <form onSubmit={handleAddActivity} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-700 font-bold mb-1">কার্যক্রমের বিবরণ:</label>
                <input
                  type="text"
                  required
                  placeholder="উদা: নিম তেলের নির্যাস স্প্রে অথবা খড় মালচিং সম্পন্ন"
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">তারিখ / সময়:</label>
                <input
                  type="text"
                  placeholder="উদা: ২১ আগস্ট ২০২৬"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white font-bold cursor-pointer"
                >
                  যোগ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
