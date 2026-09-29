import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Sprout, 
  FlaskConical, 
  Droplets, 
  ShieldCheck, 
  MessageSquare, 
  HelpCircle,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Tractor,
  Camera,
  Layers,
  ArrowRight
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestions?: string[];
  category?: 'pest' | 'soil' | 'water' | 'general' | 'crop';
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'ai',
    text: 'নমস্কার! আমি AYT এআই স্মার্ট কৃষি সহকারী (AYT Agro AI Advisor)। আপনার ফসলের রোগ-বালাই, মাটির উর্বরতা, জৈব সার, ড্রিপ সেচ বা খামার যান্ত্রিকীকরণ সংক্রান্ত যে কোনো প্রশ্ন করুন।',
    timestamp: 'এইমাত্র',
    suggestions: [
      '🍆 বেগুনের ডগা ও ফল ছিদ্রকারী পোকার প্রাকৃতিক প্রতিকার কী?',
      '🧪 বেলে-দোআঁশ মাটির পিএইচ (pH) বাড়ানোর জৈব উপায়',
      '💧 ১ বিঘা জমিতে ড্রিপ সেচ বসাতে কত খরচ হবে?',
      '🌾 ধান ও সবজিতে ট্রাইকোডার্মা ও নিম তেলের ব্যবহার বিধি'
    ]
  }
];

const KNOWLEDGE_BASE = [
  {
    keywords: ['বেগুন', 'ডগা', 'ছিদ্রকারী', 'পোকা', 'ফল ছিদ্রকারী', 'লক্ষণ'],
    response: `🍆 **বেগুনের ডগা ও ফল ছিদ্রকারী পোকা দমন (প্রাকৃতিক সমাধান):**
1. **পর্যবেক্ষণ ও ছাঁটাই:** আক্রান্ত ডগা ও ফল দ্রুত কেটে মাটির নিচে পুঁতে ফেলুন।
2. **ফাঁদ স্থাপন:** প্রতি শতাংশে ২টি লিউওর যুক্ত 'ফেরোমোন ট্র্যাপ' (Pheromone Trap) বসান।
3. **জৈব বালাইনাশক:** প্রতি লিটার পানিতে ৫ মি.লি. নিম তেল ও সামান্য ডিটারজেন্ট মিশিয়ে ৭ দিন পর পর বিকেলে স্প্রে করুন।
4. **বায়ো-এজেন্ট:** ট্রাইকোগ্রামা ও ব্রাকন হেবেটর পরজীবী পোকা মুক্ত করুন।
*রাসায়নিক কীটনাশক ছাড়া এটি শতভাগ কার্যকর ও নিরাপদ।*`,
    category: 'pest'
  },
  {
    keywords: ['মাটি', 'পিএইচ', 'ph', 'অম্লীয়', 'ক্ষারীয়', 'উর্বরতা', 'জৈব সার'],
    response: `🧪 **মাটির স্বাস্থ্য ও উর্বরতা উন্নয়ন পরামর্শ:**
1. **অম্লীয় মাটি (pH < 6.0):** ডলোমাইট বা কৃষি চুন প্রতি শতাংশে ১-২ কেজি প্রয়োগ করুন।
2. **জৈব পদার্থ বৃদ্ধি:** প্রতি বিঘাতে ১ টন ট্রাইকো-কম্পোস্ট বা ভার্মিকম্পোস্ট এবং সবুজ সার (ধৈঞ্চা) চাষ করুন।
3. **অনুজীব সক্রিয়করণ:** জীবামৃত বা পঞ্চগব্য প্রয়োগ করে মাটির উপকারি ব্যাকটেরিয়া বৃদ্ধি করুন।
4. **মাটি পরীক্ষা:** প্রতি দুই বছর পর পর AYT Agro ল্যাবে নমুনা পাঠিয়ে N-P-K ও মাইক্রোনিউট্রিয়েন্ট রিপোর্ট সংগ্রহ করুন।`,
    category: 'soil'
  },
  {
    keywords: ['সেচ', 'ড্রিপ', 'পানি', 'স্প্রিংকলার', 'খরচ', 'বিঘা'],
    response: `💧 **স্মার্ট ওয়াটার ও ড্রিপ ইরিগেশন হিসাব:**
1. **পানি সাশ্রয়:** ড্রিপ সেচে সাধারণ সেচের তুলনায় ৫০%-৭০% পানি সাশ্রয় হয়।
2. **খরচ প্রাক্কলন:** ১ বিঘা সবজি খামারে স্বয়ংক্রিয় ড্রিপ সিস্টেম ইন্সটলেশন ব্যয় আনুমানিক ৩৫,০০০ - ৫৫,০০০ টাকা (পাইপ, ড্রিপার, ফিল্টার ও ফিটিংস সহ)।
3. **সার সাশ্রয় (ফার্টিগেশন):** পানির সাথে সরাসরি তরল জৈব পুষ্টি গাছের শিকড়ে পৌঁছে যায়, ফলে সারের অপচয় ৮০% কমে।
4. **পরামর্শ:** আপনার জমির নকশা পাঠালে আমাদের ইঞ্জিনিয়াররা ফ্রি লেআউট প্রদান করবেন।`,
    category: 'water'
  },
  {
    keywords: ['ট্রাইকোডার্মা', 'নিম তেল', 'জৈব', 'বালাইনাশক', 'ছত্রাক'],
    response: `🌱 **ট্রাইকোডার্মা ও নিম তেলের বৈজ্ঞানিক ব্যবহার:**
1. **ট্রাইকোডার্মা (Trichoderma):** এটি একটি উপকারী ছত্রাক যা শিকড় পচা, কলার পানামা রোগ ও গোড়া পচা দমন করে। বীজ শোধনে ১০ গ্রাম/কেজি অথবা গোবর সারের সাথে মিশিয়ে মাটিতে প্রয়োগ করুন।
2. **নিম তেল (Neem Oil):** জাবপোকা, সাদা মাছি ও থ্রিপস দমনে প্রতি লিটার পানিতে ৫ মি.লি. নিম তেল + ১ গ্রাম সাবানের গুঁড়া গুলে স্প্রে করুন।
3. **স্প্রে সময়:** তীব্র রোদে স্প্রে না করে বিকেল বেলা স্প্রে করলে সর্বোত্তম ফলাফল পাওয়া যায়।`,
    category: 'general'
  },
  {
    keywords: ['ভাড়া', 'রেন্টাল', 'মেশিন', 'পাওয়ার টিলার', 'ট্রাক্টর', 'হারভেস্টার'],
    response: `🚜 **AYT Agro খামার যন্ত্রপাতি ও রেন্টাল সেবা:**
1. **মেশিনারি:** মিনি পাওয়ার টিলার, রাইস ট্রান্সপ্লান্টার, কম্বাইন হারভেস্টার, পাওয়ার উইডার ও সিডার।
2. **বুকিং সুবিধা:** ওয়েবসাইট বা অ্যাপের মাধ্যমে দিন অথবা বিঘা চুক্তিতে বুকিং করা যায়।
3. **অন-ফিল্ড অপারেটর:** দক্ষ মেকানিক ও টেকনিশিয়ান সাপোর্ট প্রদান করা হয়।`,
    category: 'general'
  }
];

export const CropAssistantPage: React.FC = () => {
  const { navigate } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      // Find matching knowledge
      const lowerQuery = query.toLowerCase();
      let matched = KNOWLEDGE_BASE.find(k => 
        k.keywords.some(kw => lowerQuery.includes(kw.toLowerCase()))
      );

      let responseText = '';
      let suggestions: string[] = [];

      if (matched) {
        responseText = matched.response;
        suggestions = [
          '🧪 এই বিষয়ে ল্যাব টেস্ট বা বিশেষজ্ঞদের সাথে কথা বলুন',
          '📞 সরাসরি হোয়াটসঅ্যাপে পরামর্শ নিন',
          '🌱 অন্যান্য প্রাকৃতিক চাষাবাদ পদ্ধতি জানুন'
        ];
      } else {
        responseText = `🌿 আপনার প্রশ্নের জন্য ধন্যবাদ! 

"${query}" সম্পর্কিত সুনির্দিষ্ট ক্ষেত্রভিত্তিক সমাধানের জন্য আমাদের কৃষিবিজ্ঞানী ও অন-ফিল্ড ইঞ্জিনিয়ারদের সাথে সরাসরি কথা বলতে পারেন।

প্রাকৃতিক চাষাবাদে রোগ বালাইয়ের লক্ষণ দেখলে দ্রুত ছবি তুলে অথবা মাটির পরীক্ষার রিপোর্ট নিয়ে আমাদের সাথে যোগাযোগ করুন।`;
        suggestions = [
          '🍆 বেগুনের পোকা দমন পদ্ধতি',
          '🧪 মাটির পিএইচ ও সার সুপারিশ',
          '💧 ড্রিপ সেচের বাজেট ও ইন্সটলেশন',
          '🚜 কৃষি যন্ত্রপাতি ভাড়া বুকিং'
        ];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleWhatsAppConsult = (currentContext?: string) => {
    const text = encodeURIComponent(`নমস্কার AYT Agro, আমি এআই পরামর্শক থেকে যোগাযোগ করছি: ${currentContext || 'আমার খামারের জন্য প্রাকৃতিক সমাধান ও টেকনিক্যাল সাপোর্ট প্রয়োজন।'}`);
    window.open(`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F4F9F6] py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#0D3B1C] to-[#1E7E34] text-white rounded-3xl p-6 sm:p-8 mb-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/40 text-emerald-300 text-xs font-bold font-english">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                <span>AYT AGRO AI CROP ADVISOR</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                স্মার্ট এআই কৃষি পরামর্শক
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-light">
                প্রাকৃতিক কৃষি, বালাই ব্যবস্থাপনা, মাটির স্বাস্থ্য পরীক্ষা ও ড্রিপ সেচ বিষয়ক ইনস্ট্যান্ট এআই সমাধান।
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleWhatsAppConsult()}
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে বিশেষজ্ঞ কল</span>
              </button>
              <button
                onClick={() => navigate('natural-farming')}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
              >
                <Sprout className="w-4 h-4" />
                <span>ন্যাচারাল গাইড</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Preset Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          <button
            onClick={() => handleSendMessage('বেগুনের ডগা ও ফল ছিদ্রকারী পোকার প্রতিকার')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-bold hover:bg-emerald-50 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>বেগুনের পোকা দমন</span>
          </button>
          <button
            onClick={() => handleSendMessage('মাটির পিএইচ (pH) বাড়ানোর জৈব উপায় ও সার')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-bold hover:bg-emerald-50 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
            <span>মাটির পিএইচ ও সার</span>
          </button>
          <button
            onClick={() => handleSendMessage('১ বিঘা জমিতে ড্রিপ সেচ বসাতে কত খরচ হবে?')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-bold hover:bg-emerald-50 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Droplets className="w-3.5 h-3.5 text-sky-600" />
            <span>ড্রিপ সেচ হিসাব</span>
          </button>
          <button
            onClick={() => handleSendMessage('ট্রাইকোডার্মা ও নিম তেল ব্যবহার বিধি')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-bold hover:bg-emerald-50 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            <span>ট্রাইকোডার্মা ও নিম তেল</span>
          </button>
          <button
            onClick={() => handleSendMessage('পাওয়ার টিলার ও হারভেস্টার ভাড়া')}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-bold hover:bg-emerald-50 shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Tractor className="w-3.5 h-3.5 text-orange-600" />
            <span>যন্ত্রপাতি রেন্টাল</span>
          </button>
        </div>

        {/* Chat Card Window */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden flex flex-col h-[550px] sm:h-[600px]">
          
          {/* Top Chat Bar */}
          <div className="p-4 bg-emerald-50/70 border-b border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1E7E34] text-white flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <span>AYT এগ্রো এআই সহকারী</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                </h3>
                <span className="text-[11px] text-emerald-700 font-medium">সক্রিয় • ২৪/৭ কৃষি পরামর্শ</span>
              </div>
            </div>

            <button
              onClick={() => setMessages(INITIAL_MESSAGES)}
              className="p-2 rounded-xl text-gray-500 hover:text-[#1E7E34] hover:bg-white transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">রিসেট চ্যাট</span>
            </button>
          </div>

          {/* Messages Feed Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#FAFDFB]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-[#1E7E34] text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                    <Bot className="w-4 h-4 text-yellow-300" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                      msg.sender === 'user'
                        ? 'bg-[#1E7E34] text-white rounded-tr-none'
                        : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Suggestion Pills */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (sug.includes('হোয়াটসঅ্যাপে')) {
                              handleWhatsAppConsult(msg.text.slice(0, 100));
                            } else if (sug.includes('ল্যাব টেস্ট')) {
                              navigate('soil-health');
                            } else {
                              handleSendMessage(sug);
                            }
                          }}
                          className="px-2.5 py-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 text-[11px] font-semibold transition-colors text-left cursor-pointer"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[10px] text-gray-400 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E7E34] text-white flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-yellow-300" />
                </div>
                <div className="p-3 bg-white rounded-2xl border border-gray-100 text-xs text-gray-500 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-emerald-800 font-medium">এআই পরামর্শ বিশ্লেষণ করছে...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-gray-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="আপনার ফসলের সমস্যা বা প্রশ্ন বাংলায় বা ইংরেজিতে লিখুন..."
                className="flex-1 py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-hidden focus:border-[#1E7E34] focus:bg-white text-xs sm:text-sm text-gray-900 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-3 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] disabled:opacity-50 text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
