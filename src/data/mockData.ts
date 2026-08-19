import { 
  ServiceItem, 
  MachineryItem, 
  ProductItem, 
  SolutionItem, 
  ProjectItem, 
  BlogPost, 
  CropGuide, 
  FAQItem, 
  JobOpening 
} from '../types';

export const COMPANY_INFO = {
  name: 'AYT Agro',
  tagline: 'Smart Solutions for Better Farming',
  taglineBn: 'কৃষির সমস্যার সমাধান, একসাথে।',
  phone: '09678-123456',
  phoneDirect: '+8809678123456',
  whatsappNumber: '8801712345678',
  email: 'info@aytagro.com',
  address: 'বাড়ি # ৪২, রোড # ১১, সেক্টর # ৩, উত্তরা, ঢাকা-১২৩০',
  branchAddress: 'কৃষি ভবন রোড, সাতমাথা, বগুড়া-৫৮০০',
  jashoreHub: 'যশোর-খুলনা হাইওয়ে, মনিরামপুর, যশোর',
  facebook: 'https://facebook.com/aytagro',
  youtube: 'https://youtube.com/@aytagro',
  instagram: 'https://instagram.com/aytagro',
  linkedin: 'https://linkedin.com/company/aytagro'
};

// -------------------------------------------------------------
// 1. SERVICES DATA (8 Comprehensive Services)
// -------------------------------------------------------------
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    code: '01',
    slug: 'smart-irrigation',
    title: 'Smart Irrigation (স্মার্ট সেচ)',
    titleEn: 'Smart Irrigation Solutions',
    category: 'Smart Irrigation',
    shortDesc: 'ড্রিপ ও স্প্রিংকলার প্রযুক্তির মাধ্যমে ৫০% পর্যন্ত পানি সাশ্রয় ও সুষম পুষ্টি সরবরাহ।',
    fullDesc: 'AYT Agro-এর স্মার্ট সেচ ব্যবস্থা আধুনিক ড্রিপ, মাইক্রো-স্প্রিংকলার এবং স্বয়ংক্রিয় টাইমার প্রযুক্তির সমন্বয়ে গঠিত। এটি গাছের গোড়ায় ফোঁটায় ফোঁটায় সঠিক মাত্রায় পানি ও তরল সার পৌঁছায়। এর ফলে পানির অপচয় রোধ হয়, জ্বালানি খরচ কমে এবং ফসলের ফলন ২০-৪০% পর্যন্ত বৃদ্ধি পায়।',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=80',
    icon: 'Droplets',
    features: ['৫০% পর্যন্ত পানি ও বিদ্যুৎ সাশ্রয়', 'গাছের শিকড়ে সরাসরি সুষম পানি ও তরল সার প্রদান', 'অটোমেটিক টাইমার ও সয়েল ময়েশ্চার সেন্সর সাপোর্ট', 'সবজি, ফলবাগান ও মাল্টা চাষে সর্বোচ্চ ফলন'],
    equipmentList: ['Drip Emitter Lines (16mm)', 'Micro Sprinklers & Foggers', 'Disc & Screen Filter Units', 'Venturi Fertilizer Injector', 'Automatic Solenoid Valves & Timers'],
    process: [
      { step: '০১', title: 'সাইট সার্ভে', desc: 'জমির মাপ, ঢাল, মাটির ধরন ও পানির উৎস পরীক্ষা।' },
      { step: '০২', title: 'হাইড্রোলিক ডিজাইন', desc: 'প্রতিটি লাইনের প্রেসার ও ওয়াটার ডিসচার্জ সিমুলেশন।' },
      { step: '০৩', title: 'ইনস্টলেশন ও ট্রায়াল', desc: 'দক্ষ ইঞ্জিনিয়ার দ্বারা পাইপলাইন স্থাপন ও প্রেশার টেস্ট।' },
      { step: '০৪', title: 'কৃষক প্রশিক্ষণ', desc: 'ফিল্টার পরিষ্কার ও সার পরিচালনার ব্যবহারিক গাইড।' }
    ],
    idealFor: 'পেঁপে, মাল্টা, ড্রাগন ফ্রুট, পেয়ারা, ক্যাপসিকাম, টমেটো, তরমুজ ও গ্রিনহাউস বাগান।',
    benefits: ['শ্রমিক খরচ ৮০% পর্যন্ত হ্রাস', 'আগাছার বিস্তার রোধ', 'সার অপচয়মুক্ত ফার্ট্রিগেশন', 'খরা মৌসুমেও সতেজ বাগান'],
    pricing: { startingPrice: '৳ ১৫,০০০', unit: 'প্রতি বিঘা (সাইট ও পাইপলাইন ভেদে)', note: 'ফ্রি সাইট ভিজিট ও মেটেরিয়াল কোটেশন' },
    faqs: [
      { question: 'ড্রিপ সেচে কি সাধারণ পুকুরের পানি ব্যবহার করা যায়?', answer: 'হ্যাঁ, আমাদের ডিস্ক ও স্যান্ড ফিল্ট্রেশন সিস্টেম পানির ময়লা ও শ্যাওলা সম্পূর্ণ ফিল্টার করে ড্রিপার জ্যাম হওয়া প্রতিরোধ করে।' },
      { question: 'কতদিন পর্যন্ত এই পাইপলাইন স্থায়ী হয়?', answer: 'আমাদের ব্যবহৃত ইউভি-স্ট্যাবিলাইজড ভার্জিন পাইপলাইন রোদ-বৃষ্টিতে ৫ থেকে ৭ বছর অনায়াসে টেকসই থাকে।' }
    ],
    relatedServiceIds: ['5', '6', '7']
  },
  {
    id: '2',
    code: '02',
    slug: 'drainage-water-management',
    title: 'Drainage & Water Mgmt (ড্রেনেজ)',
    titleEn: 'Farm Drainage & Excess Water Removal',
    category: 'Drainage & Water',
    shortDesc: 'জলাবদ্ধ জমি দ্রুত নিষ্কাশন ও স্থায়ী ড্রেনেজ চ্যানেল তৈরির ইঞ্জিনিয়ারিং সমাধান।',
    fullDesc: 'বর্ষাকালে বা আকস্মিক বন্যায় নিচু জমিতে পানি জমে ফসল নষ্ট হওয়া বাংলাদেশের অন্যতম প্রধান সমস্যা। AYT Agro হাই-ক্যাপাসিটি ড্রেনেজ পাম্প এবং বৈজ্ঞানিক সারফেস ও সাব-সারফেস ড্রেন তৈরির মাধ্যমে জলাবদ্ধতা নিরসন করে মাটির অক্সিজেন প্রবাহ ফিরিয়ে আনে।',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    icon: 'Waves',
    features: ['ঘন্টায় ১ লক্ষ লিটার পানি নিষ্কাশন ক্ষমতা সম্পন্ন পাম্প', 'মাটির ক্ষয়রোধ ও স্থায়ী গ্রেডিয়েন্ট চ্যানেল ডিজাইন', 'বর্ষার আকস্মিক জলাবদ্ধতা থেকে ফসল রক্ষা', 'মাটির লবণাক্ততা ও অতিরিক্ত আর্দ্রতা নিয়ন্ত্রণ'],
    equipmentList: ['Diesel High-Flow Dewatering Pump', 'Flexible Heavy-Duty Layflat Discharge Pipe', 'Trenching Equipment', 'Perforated Sub-surface Pipes'],
    process: [
      { step: '০১', title: 'পানি প্রবাহ স্টাডি', desc: 'জমির সর্বোচ্চ ও সর্বনিম্ন লেভেল নির্ণয়।' },
      { step: '০২', title: 'আউটলেট নির্ধারণ', desc: 'কাছের খাল বা প্রাকৃতিক জলাধারে নিকাশ প্ল্যান।' },
      { step: '০৩', title: 'পাম্পিং ও চ্যানেল খনন', desc: 'জরুরি ভিত্তিতে পানি অপসারণ বা স্থায়ী ড্রেন নির্মাণ।' }
    ],
    idealFor: 'আলু ক্ষেত, ধান বীজতলা, ভুট্টা, নিচু এলাকার শাকসবজি ও ড্রাগন বাগান।',
    benefits: ['শিকড় পচা রোগ থেকে তাৎক্ষণিক মুক্তি', 'নির্দিষ্ট সময়ে ফসল বপনের নিশ্চয়তা', 'মাটির উর্বরতা সংরক্ষণ'],
    pricing: { startingPrice: '৳ ১,২০০', unit: 'প্রতি দিন (পাম্প রেন্টাল) / প্রকল্প চুক্তি', note: 'জরুরি ইমার্জেন্সি সাপোর্ট উপলভ্য' },
    faqs: [
      { question: 'কত দ্রুত জরুরি পানি নিষ্কাশন সাপোর্ট পাওয়া যায়?', answer: 'আমাদের জেলা হাব থেকে কল করার ২ থেকে ৪ ঘণ্টার মধ্যে পাম্প ও টেকনিশিয়ান মাঠে পৌঁছায়।' }
    ],
    relatedServiceIds: ['1', '6', '8']
  },
  {
    id: '3',
    code: '03',
    slug: 'farm-care',
    title: 'Farm Care (ফসল ও জমি পরিচর্যা)',
    titleEn: 'Field Protection & Crop Maintenance',
    category: 'Farm Care',
    shortDesc: 'উন্নত পাওয়ার স্প্রেয়ার দিয়ে কীটনাশক ও পুষ্টি স্প্রে, আগাছা দমন ও সার্বিক পরিচর্যা।',
    fullDesc: 'ফসলের রোগবালাই ও পোকার আক্রমণ সঠিক সময়ে দমন করতে না পারলে সম্পূর্ণ ফসল নষ্ট হতে পারে। AYT Agro আধুনিক ব্যাটারি ও ইঞ্জিন চালিত আল্ট্রা-ফাইন মিস্ট স্প্রেয়ারের মাধ্যমে সুষম স্প্রে সেবা প্রদান করে, যাতে ওষুধের কার্যকারিতা দ্বিগুণ হয় ও খরচ বাঁচে।',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80',
    icon: 'ShieldCheck',
    features: ['আল্ট্রা-ফাইন মিস্টে পাতার নিচে ও উপরে নিখুঁত কভারেজ', 'দ্রুত সময়ে বড় আয়তনের জমিতে স্প্রে সম্পন্ন', 'প্রশিক্ষিত অপারেটর দ্বারা নিরাপদ প্রয়োগ', 'আগাছা নিধন ও ছাঁটাই সেবা'],
    equipmentList: ['Backpack 4-Stroke Power Sprayer', 'Trolley Mist Blower 100L', 'Electric Pruning Shears', 'Brush Cutters with safety guards'],
    process: [
      { step: '০১', title: 'রোগ নিরীক্ষণ', desc: 'কীট বা ছত্রাকের সংক্রমণ মাত্রা পরীক্ষা।' },
      { step: '০২', title: 'সঠিক ডোজ প্রস্তুত', desc: 'কৃষি সম্প্রসারণ নির্দেশিকা অনুযায়ী দ্রবণ মিশ্রণ।' },
      { step: '০৩', title: 'ইউনিফর্ম স্প্রে', desc: 'বাতাসের গতি বিবেচনায় রেখে ইউনিফর্ম মিস্ট স্প্রে।' }
    ],
    idealFor: 'ধান, আম বাগান, লিচু, পেয়ারা, বেগুন, মরিচ ও সরিষা ক্ষেত।',
    benefits: ['ওষুধের অপচয় ৫০% কম', 'মানবদেহের জন্য ঝুঁকিমুক্ত স্প্রে', 'পোকা ও রোগবালাইয়ের দ্রুত নিয়ন্ত্রণ'],
    pricing: { startingPrice: '৳ ৩০০', unit: 'প্রতি বিঘা স্প্রে সেবা / ৳ ৫০০ দৈনিক রেন্টাল', note: 'নিরাপত্তা গিয়ার সহ সরবরাহ' },
    faqs: [
      { question: 'স্প্রে করার সময় কি নিজস্ব ওষুধ ব্যবহার করা যাবে?', answer: 'অবশ্যই, আপনি আপনার ওষুধ দিতে পারেন অথবা আমাদের কৃষিবিদের প্রেসক্রাইবড অর্গানিক বা নিরাপদ বালাইনাশক ব্যবহার করতে পারেন।' }
    ],
    relatedServiceIds: ['4', '7', '8']
  },
  {
    id: '4',
    code: '04',
    slug: 'soil-testing',
    title: 'Soil Testing (মাটি পরীক্ষা ও সার প্রেসক্রিপশন)',
    titleEn: 'Scientific Soil Testing & Fertilizer Plan',
    category: 'Soil Testing',
    shortDesc: 'মাটির পিএইচ (pH), এনপিকে (NPK), জৈব পদার্থ ও পুষ্টি উপাদান পরীক্ষা করে সঠিক সার প্রেসক্রিপশন।',
    fullDesc: 'অতিরিক্ত বা ভুল সার ব্যবহারের কারণে মাটির স্বাস্থ্য নষ্ট হয় এবং কৃষকের অপ্রয়োজনীয় আর্থিক ক্ষতি হয়। AYT Agro বৈজ্ঞানিক পদ্ধতিতে মাটির ১২টি প্যারামিটার পরীক্ষা করে ফসলের জাত ও মাটির চাহিদা অনুযায়ী সুনির্দিষ্ট সার পরামর্শ প্রদান করে।',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1000&q=80',
    icon: 'FlaskConical',
    features: ['মাটির pH, EC, N, P, K, জিঙ্ক ও জৈব কার্বন নির্ণয়', '৩ থেকে ৫ কর্মদিবসে পূর্ণাঙ্গ কালার কোডেড রিপোর্ট', 'অতিরিক্ত সার খরচ ৩০% পর্যন্ত কমানোর গাইডলাইন', 'মাটির অম্লতা বা ক্ষারত্ব সংশোধনের সমাধান'],
    equipmentList: ['Digital Multi-Parameter Soil Test Kit', 'Core Soil Sampler Auger', 'EC/TDS & pH Meters', 'Spectrophotometer Lab Testing'],
    process: [
      { step: '০১', title: 'নমুনা সংগ্রহ', desc: 'জমির বিভিন্ন অংশ থেকে ' + 'Z' + ' পদ্ধতিতে নমুনা গ্রহণ।' },
      { step: '০২', title: 'ল্যাব টেস্ট', desc: 'প্রধান পুষ্টি উপাদান ও মাইক্রোনিউট্রিয়েন্ট বিশ্লেষণ।' },
      { step: '০৩', title: 'প্রেসক্রিপশন প্রদান', desc: 'পরবর্তী ফসলের জন্য সুনির্দিষ্ট সার তালিকা।' }
    ],
    idealFor: 'নতুন বাগান সৃজন, বাণিজ্যিক সবজি চাষ, ড্রাগন ও পেয়ারার বাগান এবং লবণাক্ত উপকূলীয় জমি।',
    benefits: ['অপ্রয়োজনীয় সারের অপচয় রোধ', 'মাটির দীর্ঘমেয়াদী উর্বরতা রক্ষা', 'উন্নত মানের ও রোগমুক্ত ফলন'],
    pricing: { startingPrice: '৳ ৩৫০', unit: 'প্রতি নমুনা (মৌলিক ৩টি উপাদান) / ৳ ১,০৫০ (পূর্ণাঙ্গ ল্যাব)', note: 'মাঠ থেকে সরাসরি নমুনা কালেকশন' },
    faqs: [
      { question: 'নমুনা সংগ্রহের কতদিন পর রিপোর্ট পাওয়া যাবে?', answer: 'ডিজিটাল অন-ফিল্ড কিটের মাধ্যমে ১ ঘণ্টায় প্রাথমিক রিপোর্ট এবং ল্যাব টেস্টের ক্ষেত্রে ৩ কর্মদিবসের মধ্যে হোয়াটসঅ্যাপে পাওয়া যাবে।' }
    ],
    relatedServiceIds: ['1', '3', '6']
  },
  {
    id: '5',
    code: '05',
    slug: 'solar-agriculture',
    title: 'Solar Agriculture (সোলার সেচ)',
    titleEn: 'Solar-Powered Irrigation & Pumping',
    category: 'Solar Agriculture',
    shortDesc: 'বিদ্যুৎ ও ডিজেল ছাড়াই সূর্যের আলো দিয়ে নিরবচ্ছিন্ন সেচ ব্যবস্থা ও সৌর পাম্প ইনস্টলেশন।',
    fullDesc: 'পল্লী অঞ্চলে ঘন ঘন লোডশেডিং কিংবা ডিজেলের চড়া দাম কৃষকের উৎপাদন খরচ বহুগুণ বাড়িয়ে দেয়। AYT Agro হাই-এফিসিয়েন্সি মোনোক্রিস্টালাইন সোলার প্যানেল এবং ভিএফডি কন্ট্রোলার চালিত সোলার পাম্প সেটআপ করে, যা সম্পূর্ণ গ্রিন ও আজীবন ফ্রি সেচের নিশ্চয়তা দেয়।',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    icon: 'SunMedium',
    features: ['ডিজেল ও বিদ্যুৎ বিলের স্থায়ী মুক্তি', 'সকাল থেকে বিকেল পর্যন্ত স্বয়ংক্রিয় সেচ পরিচালনা', '২৫ বছরের প্যানেল পারফরম্যান্স ওয়ারেন্টি', 'ড্রিপ ও স্প্রিংকলার সেচের সাথে শতভাগ সামঞ্জস্যপূর্ণ'],
    equipmentList: ['Mono PERC High-Efficiency Solar Modules', 'VFD Solar Pump Inverter Controller', 'Submersible / Surface DC/AC Solar Pump', 'Galvanized Auto-Tracking / Fixed Mounting Structure'],
    process: [
      { step: '০১', title: 'পানি চাহিদা ও লোড বিশ্লেষণ', desc: 'দৈনিক পানির চাহিদা ও হেড ক্যালকুলেশন।' },
      { step: '০২', title: 'সোলার স্ট্রাকচার আর্কিটেকচার', desc: 'সূর্যালোকের দিক অনুযায়ী প্যানেল অ্যাঙ্গেল ডিজাইন।' },
      { step: '০৩', title: 'কমিশনিং ও অটোমেশন', desc: 'ড্রাই-রান প্রোটেকশন সহ অটোমেটিক স্টার্ট/স্টপ সেটআপ।' }
    ],
    idealFor: 'বিদ্যুৎবিহীন প্রত্যন্ত জমি, চরাঞ্চল, ফলবাগান, পোল্ট্রি ও ডেইরি ফার্ম।',
    benefits: ['১০ বছর পর্যন্ত জিরো অপারেটিং কস্ট', 'পরিবেশবান্ধব কার্বন-ফ্রি কৃষি', 'গ্রিড বিদ্যুতের ভোগান্তি থেকে চিরতরে মুক্তি'],
    pricing: { startingPrice: '৳ ৩৫,০০০', unit: 'থেকে শুরু (১ HP থেকে ৫ HP প্যাকেজ)', note: 'সহজ কিস্তি ও সরকারি ভর্তুকি সহায়তা সংক্রান্ত পরামর্শ' },
    faqs: [
      { question: 'মেঘলা দিনে সোলার পাম্প কি কাজ করে?', answer: 'আমাদের উন্নত MPPT VFD কন্ট্রোলার কম সূর্যালোক ও মেঘলা আবহাওয়াতেও প্রয়োজনীয় ফ্রিকোয়েন্সিতে পাম্প সচল রাখে।' }
    ],
    relatedServiceIds: ['1', '2', '6']
  },
  {
    id: '6',
    code: '06',
    slug: 'farm-engineering',
    title: 'Farm Engineering (ফার্ম ডিজাইন ও প্ল্যানিং)',
    titleEn: 'Agricultural Engineering & Master Planning',
    category: 'Farm Engineering',
    shortDesc: 'জমির মাস্টারপ্ল্যান, লেআউট ডিজাইন, পাইপলাইন নেটওয়ার্ক ও ড্রেনেজ অবকাঠামো তৈরি।',
    fullDesc: 'একটি লাভজনক খামার গড়ে তোলার ভিত্তি হলো সঠিক ইঞ্জিনিয়ারিং পরিকল্পনা। AYT Agro প্রফেশনাল এগ্রো-ইঞ্জিনিয়ারদের মাধ্যমে ফার্ম লেআউট, রাস্তা ও ড্রেন নেটওয়ার্ক, ওয়াটার হার্ভেস্টিং পুকুর, গ্রিনহাউস এবং স্টোরেজ শেডের ব্লুপ্রিন্ট ও বাস্তবায়ন করে থাকে।',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=80',
    icon: 'DraftingCompass',
    features: ['ডিজিটাল টপোগ্রাফিক সার্ভে ও ২ডি/৩ডি লেআউট ড্রয়িং', 'সর্বোচ্চ জমি ব্যবহারের উপযোগী প্লট বিভাজন', 'পাইপলাইন হাইড্রোলিক্স ও গ্রেভিটি ওয়াটার নেটওয়ার্ক ডিজাইন', 'নির্মাণ বাজেট, ম্যাটেরিয়াল স্পেসিফিকেশন ও তদারকি'],
    equipmentList: ['RTK GPS & Total Station Survey Tools', 'CAD & Hydraulic Simulation Software', 'Soil Density Testing Gauges', 'On-site Execution Engineering Team'],
    process: [
      { step: '০১', title: 'মাঠ পরিদর্শন ও ড্রোন সার্ভে', desc: 'জমির সীমানা ও উচ্চতার পুঙ্খানুপুঙ্খ ম্যাপিং।' },
      { step: '০২', title: 'মাস্টারপ্ল্যান ব্লুপ্রিন্ট', desc: 'রাস্তা, ড্রেনেজ, সেচ ও বিল্ডিং জোনিং ড্রয়িং।' },
      { step: '০৩', title: 'কস্ট এস্টিমেশন ও বিওকিউ', desc: 'ধাপভিত্তিক ব্যয়ের পুঙ্খানুপুঙ্খ আর্থিক বাজেট।' },
      { step: '০৪', title: 'ফিল্ড ইমপ্লিমেন্টেশন', desc: 'ইঞ্জিনিয়ারের প্রত্যক্ষ তদারকিতে অবকাঠামো নির্মাণ।' }
    ],
    idealFor: 'বাণিজ্যিক এগ্রো ফার্ম, রিসোর্ট ও এগ্রো-ট্যুরিজম, আধুনিক ডেইরি/পোল্ট্রি কমপ্লেক্স এবং নার্সারি।',
    benefits: ['ভুল নির্মাণের কারণে ভবিষ্যৎ আর্থিক ক্ষতি রোধ', 'সুশৃঙ্খল খামার পরিচালনায় সর্বোচ্চ উৎপাদনশীলতা', 'ব্যাংক লোন ও প্রাতিষ্ঠানিক বিনিয়োগের জন্য গ্রহণযোগ্য প্রজেক্ট প্রোফাইল'],
    pricing: { startingPrice: '৳ ১০,০০০', unit: 'প্রাথমিক কনসালটেশন ও লেআউট ড্রাফট', note: 'পূর্ণাঙ্গ প্রকল্পের জন্য কাস্টম চুক্তি' },
    faqs: [
      { question: 'ছোট ১-২ বিঘার খামারের জন্যও কি ইঞ্জিনিয়ারিং প্ল্যান প্রয়োজন?', answer: 'হ্যাঁ, ছোট জমিতে সঠিক পাইপলাইন ও বেড প্ল্যানিং করলে প্রতি শতক জমি থেকে সর্বোচ্চ লাভ বের করা সম্ভব হয়।' }
    ],
    relatedServiceIds: ['1', '2', '5']
  },
  {
    id: '7',
    code: '07',
    slug: 'machinery-rental-service',
    title: 'Machinery Rental (যন্ত্রপাতি ভাড়া)',
    titleEn: 'On-Demand Agricultural Machinery Rental',
    category: 'Machinery Maintenance',
    shortDesc: 'পাওয়ার টিলার, স্প্রেয়ার, রিপার, পাম্প ও ব্রাশ কাটার সাশ্রয়ী দৈনিক বা সাপ্তাহিক ভাড়ায়।',
    fullDesc: 'দামী আধুনিক কৃষি যন্ত্রপাতি কেনা সবার পক্ষে সম্ভব নয়। তাই AYT Agro নিয়ে এসেছে অন-ডিমান্ড মেশিন রেন্টাল সার্ভিস। আপনার প্রয়োজনমতো পাওয়ার টিলার, রিপার, বীজ বোনার ড্রিল কিংবা পাম্প সরাসরি আপনার জমিতে পৌঁছে দেওয়া হবে।',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80',
    icon: 'Tractor',
    features: ['কেনার বিশাল ক্যাপিটাল ছাড়াই আধুনিক যন্ত্র ব্যবহারের সুযোগ', 'দক্ষ ড্রাইভার/অপারেটর সহ বা ছাড়া ভাড়া নেওয়ার অপশন', 'প্রতিটি মেশিন সম্পূর্ণ সার্ভিসিং ও তেল-মবিল রেডি অবস্থায় সরবরাহ', 'মাঠ পর্যায়ে কোনো যান্ত্রিক ত্রুটি দেখা দিলে তাৎক্ষণিক রিপ্লেসমেন্ট'],
    equipmentList: ['12-16 HP Power Tillers', 'Crop Reapers & Harvesters', 'High Pressure Sprayers', 'Heavy Duty Water & Mud Pumps'],
    process: [
      { step: '০১', title: 'মেশিন নির্বাচন', desc: 'ক্যাটালগ থেকে প্রয়োজনীয় যন্ত্র ও ভাড়ার দিন বাছাই।' },
      { step: '০২', title: 'লোকেশন নিশ্চিতকরণ', desc: 'আমাদের নিকটস্থ হাব থেকে ডেলিভারি বুকিং।' },
      { step: '০৩', title: 'মাঠে ডেলিভারি', desc: 'মেশিন বুঝিয়ে দেওয়া এবং ট্রায়াল রান করানো।' }
    ],
    idealFor: 'জমি চাষ, ধান কাটা ও মাড়াই, আগাছা দমন ও পানি সেচ।',
    benefits: ['বিশাল টাকা আটকে থাকার ঝুঁকি নেই', 'রক্ষণাবেক্ষণ বা মেরামতের কোনো ঝামেলা নেই', 'নির্দিষ্ট সময়ে দ্রুত চাষ ও ফসল ঘরে তোলা'],
    pricing: { startingPrice: '৳ ৫০০ - ৳ ১,৫০০', unit: 'প্রতি দিন (যন্ত্রপাতি ভেদে)', note: 'সাপ্তাহিক ও মাসিক ভিত্তিতে বিশেষ ছাড়' },
    faqs: [
      { question: 'মেশিনের সাথে কি তেল দেওয়া হয়?', answer: 'প্রাথমিক ট্রায়ালের জন্য ফুল-ট্যাংক তেল দেওয়া থাকে, পরবর্তী ব্যবহারের তেল গ্রাহকের খরচে।' }
    ],
    relatedServiceIds: ['3', '8', '2']
  },
  {
    id: '8',
    code: '08',
    slug: 'machinery-maintenance',
    title: 'Machinery Maintenance (যন্ত্রপাতি সার্ভিসিং)',
    titleEn: 'Agricultural Equipment Servicing & Repairs',
    category: 'Machinery Maintenance',
    shortDesc: 'দক্ষ মেকানিক ও জেনুইন স্পেয়ার পার্টস দিয়ে কৃষি যন্ত্রপাতির অন-ফিল্ড মেরামত ও সার্ভিসিং।',
    fullDesc: 'মৌসুমের গুরুত্বপূর্ণ সময়ে মেশিন নষ্ট হলে ফসলের অপূরণীয় ক্ষতি হয়। AYT Agro দক্ষ মোবাইল টেকনিশিয়ান টিমের মাধ্যমে আপনার খামারে গিয়ে ইঞ্জিন সার্ভিসিং, কার্বুরেটর টিউনিং, পাম্প ইমপেলার রিপ্লেসমেন্ট এবং বৈদ্যুতিক তারের সমস্যার দ্রুত স্থায়ী সমাধান করে।',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    icon: 'Wrench',
    features: ['অন-ফিল্ড মোবাইল মেকানিক সার্ভিসিং টিম', '১০০% অরিজিনাল ও টেকসই স্পেয়ার পার্টসের নিশ্চয়তা', 'ইঞ্জিন ওভারহোলিং ও হাইড্রোলিক পাম্প রিপেয়ারিং', 'বার্ষিক রক্ষণাবেক্ষণ চুক্তি (AMC) সুবিধা'],
    equipmentList: ['Mobile Diagnostic Toolkit', 'Original Carburetors, Gaskets & Seals', 'Bearing Pullers & Alignment Gauges', 'Lubricants & Genuine Filters'],
    process: [
      { step: '০১', title: 'সমস্যা রিপোর্ট', desc: 'হোয়াটসঅ্যাপে মেশিনের মডেল ও সমস্যার বিবরণ প্রদান।' },
      { step: '০২', title: 'টেকনিশিয়ান ভিজিট', desc: 'প্রয়োজনীয় পার্টস নিয়ে মাঠে মেকানিকের উপস্থিতি।' },
      { step: '০৩', title: 'টেস্টিং ও ডেলিভারি', desc: 'মেরামত শেষে লোড টেস্ট দিয়ে মেশিন হস্তান্তর।' }
    ],
    idealFor: 'পাওয়ার টিলার, ডিজেল ইঞ্জিন, সেচ পাম্প, স্প্রেয়ার, জেনারেটর ও মিনি ট্রাক্টর।',
    benefits: ['মেশিনের দীর্ঘস্থায়িত্ব নিশ্চিতকরণ', 'জ্বালানি অপচয় রোধ', 'মাঝপথে নষ্ট হওয়ার ঝুঁকিহীন কাজ'],
    pricing: { startingPrice: '৳ ৩০০', unit: 'প্রাথমিক ভিজিট ফি + পার্টসের মূল্য', note: 'সার্ভিস গ্যারান্টি প্রদান করা হয়' },
    faqs: [
      { question: 'গ্রামের গভীর প্রান্তরে কি মেকানিক পাঠানো সম্ভব?', answer: 'হ্যাঁ, আমাদের বগুড়া, যশোর ও ঢাকা হাবের মোবাইল টেকনিশিয়ানরা প্রত্যন্ত মাঠে বাইকে গিয়ে সার্ভিস প্রদান করে।' }
    ],
    relatedServiceIds: ['7', '2', '3']
  }
];

// -------------------------------------------------------------
// 2. MACHINERY RENTAL DATA (10 Machines with complete specs)
// -------------------------------------------------------------
export const MACHINERY_DATA: MachineryItem[] = [
  {
    id: 'pt-12hp',
    slug: 'power-tiller-12hp',
    name: 'Power Tiller 12HP (পাওয়ার টিলার)',
    nameEn: 'Dongfeng 12HP Heavy Duty Power Tiller',
    category: 'Power Tiller',
    pricePerDay: 1500,
    pricePerWeek: 9000,
    unit: 'দিন',
    location: 'বগুড়া / রাজশাহী / ঢাকা',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'ইঞ্জিন মডেল': 'Single Cylinder 4-Stroke Diesel',
      'ক্ষমতা': '12 HP @ 2200 RPM',
      'চাষের গভীরতা': '৬ - ৮ ইঞ্চি',
      'চাষের প্রস্থ': '২.৫ ফুট (Rotary Blades)',
      'জ্বালানি খরচ': '১.২ - ১.৫ লিটার / ঘণ্টা'
    },
    engineType: '4-Stroke Water-Cooled Diesel',
    power: '12 Horsepower',
    fuel: 'Diesel',
    capacity: 'প্রতি ঘণ্টায় ২০-২৫ শতক জমি চাষ',
    coverage: 'দৈনিক ৩-৪ বিঘা জমি নিবিড় চাষ',
    usage: 'ধানের কাদা চাষ, সবজি বেড তৈরি, শুকনো জমি চাষ ও লাঙল দেওয়া।',
    deposit: '৳ ২,০০০ (ফেরতযোগ্য জামানত) অথবা জাতীয় পরিচয়পত্রের কপি',
    operatorAvailable: true,
    rentalTerms: [
      'মেশিন হ্যান্ডওভারের সময় উপস্থিত থেকে ট্রায়াল রান দেখে নিতে হবে।',
      'অপারেটর ফি (যদি প্রয়োজন হয়): প্রতিদিন ৳ ৭০০ (খাবার সহ)।',
      'ভাড়া শেষে অক্ষত অবস্থায় মেশিন ফেরত দিতে হবে।'
    ]
  },
  {
    id: 'ps-4stroke',
    slug: 'power-sprayer-4stroke',
    name: 'Power Sprayer 4-Stroke (পাওয়ার স্প্রেয়ার)',
    nameEn: 'Honda Type GX35 Backpack Power Sprayer',
    category: 'Power Sprayer',
    pricePerDay: 500,
    pricePerWeek: 3000,
    unit: 'দিন',
    location: 'সারাদেশে ডেলিভারি',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'ট্যাংক ক্যাপাসিটি': '২৫ লিটার',
      'ইঞ্জিন': '35cc 4-Stroke Petrol Engine',
      'স্প্রে প্রেশার': '15-25 Bar (অ্যাডজাস্টেবল)',
      'স্প্রে দূরত্ব': '৮ - ১২ মিটার লম্বা থ্রো'
    },
    engineType: '4-Stroke Air-Cooled Petrol',
    power: '1.5 HP',
    fuel: 'Octane / Petrol',
    capacity: 'প্রতি ঘণ্টায় ৩-৪ বিঘা স্প্রে',
    coverage: 'দৈনিক ২০-২৫ বিঘা ফলবাগান বা ধানক্ষেত',
    usage: 'আমের মুকুল, পেয়ারা, ধান, সবজি ও উঁচু গাছে সহজে ওষুধ প্রয়োগ।',
    deposit: '৳ ১,০০০ (ফেরতযোগ্য জামানত)',
    operatorAvailable: true,
    rentalTerms: [
      'অকটেনের সাথে মোবিল মেশানোর প্রয়োজন নেই (৪-স্ট্রোক ইঞ্জিন)।',
      'ব্যবহার শেষে স্প্রে ট্যাংক পরিষ্কার পানিতে ধুয়ে ফেরত দিতে হবে।'
    ]
  },
  {
    id: 'wp-3inch',
    slug: 'water-pump-3inch-diesel',
    name: 'Water Pump 3 Inch (সেচ পাম্প)',
    nameEn: '3 Inch High Flow Irrigation Water Pump',
    category: 'Water Pump',
    pricePerDay: 800,
    pricePerWeek: 4800,
    unit: 'দিন',
    location: 'বগুড়া / যশোর / ময়মনসিংহ',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'ইনলেট/আউটলেট': '৩ ইঞ্চি (80mm)',
      'সর্বোচ্চ প্রবাহ': '৬০,০০০ লিটার / ঘণ্টা',
      'সাকশন গভীরতা': '৮ মিটার (২৬ ফুট)',
      'হেড লিফট': '২৮ মিটার'
    },
    engineType: '6.5 HP 4-Stroke Engine',
    power: '6.5 HP',
    fuel: 'Diesel / Petrol Option',
    capacity: 'ঘণ্টায় ৬০ হাজার লিটার পানি সরবরাহ',
    coverage: '১ বিঘা জমিতে দ্রুত সেচ পূরণ (১.৫ ঘণ্টায়)',
    usage: 'খাল, পুকুর বা ডোবা থেকে সরাসরি মাঠে সেচ প্রদান।',
    deposit: '৳ ১,৫০০ (ফেরতযোগ্য)',
    operatorAvailable: false,
    rentalTerms: ['২০ ফুট সাকশন পাইপ ও ফুটভালভ সাথে ফ্রি দেওয়া হবে।']
  },
  {
    id: 'dp-highflow',
    slug: 'drainage-pump-mud-cutter',
    name: 'Drainage Pump (ড্রেনেজ ও কাদা পাম্প)',
    nameEn: 'Heavy Duty 4 Inch Sludge & Dewatering Pump',
    category: 'Drainage Pump',
    pricePerDay: 1200,
    pricePerWeek: 7200,
    unit: 'দিন',
    location: 'সারাদেশে জরুরি ডেলিভারি',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'আউটপুট সাইজ': '৪ ইঞ্চি',
      'পানি প্রবাহ': '১,০০,০০০ লিটার / ঘণ্টা',
      'ইমপেলার': 'Non-Clog Semi Open Sludge Impeller',
      'ইঞ্জিন': '8.0 HP Diesel Engine'
    },
    engineType: '8 HP Diesel',
    power: '8.0 HP',
    fuel: 'Diesel',
    capacity: 'ঘণ্টায় ১ লাখ লিটার পানি নিষ্কাশন',
    coverage: 'জলাবদ্ধ আলু ক্ষেত বা নিচু জমি দ্রুত নিষ্কাশন',
    usage: 'বন্যা, ভারী বৃষ্টি ও ড্রেনেজ চ্যানেল নিষ্কাশন।',
    deposit: '৳ ২,০০০',
    operatorAvailable: true,
    rentalTerms: ['১০০ ফুট ফ্লেক্সিবল ডিসচার্জ পাইপ বান্ডেল সহ সরবরাহ।']
  },
  {
    id: 'bc-52cc',
    slug: 'brush-cutter-grass-harvester',
    name: 'Brush Cutter (ঘাস ও আগাছা কাটার)',
    nameEn: '52cc Multi-Blade Brush Cutter & Weeder',
    category: 'Brush Cutter',
    pricePerDay: 600,
    pricePerWeek: 3500,
    unit: 'দিন',
    location: 'ঢাকা / বগুড়া / রাজশাহী / রংপুর',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'ইঞ্জিন সাইজ': '52cc 2-Stroke Petrol',
      'ব্লেড টাইপ': '3-Teeth Steel Blade + Paddy Reaper Attachment',
      'ওজন': '৭.৫ কেজি (ব্যালেন্সড শোল্ডার বেল্ট সহ)',
      'ঘূর্ণন গতি': '9000 RPM'
    },
    engineType: '2-Stroke Heavy Petrol Engine',
    power: '2.2 HP',
    fuel: 'Petrol + 2T Mix (1:25)',
    capacity: 'প্রতি ঘণ্টায় ১০-১৫ শতক আগাছা পরিষ্কার',
    coverage: 'বাগানের আগাছা ও ঘাস দ্রুত পরিষ্কার',
    usage: 'ফলবাগানের আগাছা নিধন, ঘাস কাটা, গম ও ধান কাটার উপযোগী।',
    deposit: '৳ ১,০০০',
    operatorAvailable: true,
    rentalTerms: ['সেফটি গগলস ও ফেস শিল্ড সহ সরবরাহ করা হয়।']
  },
  {
    id: 'mt-7hp',
    slug: 'mini-tiller-intercultivator',
    name: 'Mini Tiller (মিনি টিলার ও নিড়ানি)',
    nameEn: '7HP Petrol Weeder & Mini Tiller',
    category: 'Mini Tiller',
    pricePerDay: 1000,
    pricePerWeek: 6000,
    unit: 'দিন',
    location: 'বগুড়া / যশোর / ঢাকা',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'ইঞ্জিন': '7HP Petrol 212cc',
      'চাষের প্রস্থ': '১.৫ - ২ ফুট (অ্যাডজাস্টেবল)',
      'ওজন': '৫২ কেজি (সহজে বাগানে ঘোরানো যায়)',
      'গিয়ার': '২ ফরোয়ার্ড, ১ রিভার্স'
    },
    engineType: '4-Stroke OHV Petrol Engine',
    power: '7.0 HP',
    fuel: 'Octane / Petrol',
    capacity: 'ফলগাছের সারির মাঝে নিখুঁত মাটি আলগা করণ',
    coverage: 'দৈনিক ২-৩ বিঘা সবজি বেড',
    usage: 'সবজি বাগান, পেঁপে, মাল্টা ও মরিচের সারির মাঝে নিড়ানি ও মাটি তোলার কাজ।',
    deposit: '৳ ১,৫০০',
    operatorAvailable: true,
    rentalTerms: ['রিজ ব্লেড ও উইডার ব্লেড সেট সাথে অন্তর্ভুক্ত।']
  },
  {
    id: 'sd-manual',
    slug: 'seed-drill-planter',
    name: 'Multi-Crop Seed Drill (বীজ বপন যন্ত্র)',
    nameEn: 'Precision Multi-Crop Planter & Fertilizer Drill',
    category: 'Seed Drill',
    pricePerDay: 700,
    pricePerWeek: 4000,
    unit: 'দিন',
    location: 'রাজশাহী / বগুড়া / দিনাজপুর',
    availability: 'Available',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'সারি সংখ্যা': '২ থেকে ৪ সারি (অ্যাডজাস্টেবল)',
      'বীজ ড্রপ দূরত্ব': '৩ থেকে ১২ ইঞ্চি',
      'উপযোগী বীজ': 'ভুট্টা, গম, সরিষা, তিল, চিনাবাদাম',
      'সার বক্স': 'বীজের সাথে একযোগে সার প্রদান'
    },
    engineType: 'Push Type / Tiller Coupled',
    power: 'Manual / Tractor Attachment',
    fuel: 'N/A',
    capacity: 'প্রতি ঘণ্টায় ২০ শতক জমিতে সুনির্দিষ্ট বীজ রোপণ',
    coverage: 'দৈনিক ৩ বিঘা নিখুঁত লাইন সোয়িং',
    usage: 'নির্দিষ্ট দূরত্বে ও গভীরতায় বীজ বপন করে বীজের অপচয় ৫০% কমানো।',
    deposit: '৳ ১,০০০',
    operatorAvailable: false,
    rentalTerms: ['বীজের সাইজ অনুযায়ী ভিন্ন ভিন্ন রোলার চাকা দেওয়া হয়।']
  },
  {
    id: 'cr-reaper',
    slug: 'crop-reaper-harvester',
    name: 'Paddy & Wheat Reaper (ধান ও গম কাটার যন্ত্র)',
    nameEn: 'Walk-Behind Self-Propelled Crop Reaper 4G120',
    category: 'Reaper',
    pricePerDay: 1800,
    pricePerWeek: 11000,
    unit: 'দিন',
    location: 'বগুড়া / ময়মনসিংহ / কুমিল্লা',
    availability: 'Reserved',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'কাটার প্রস্থ': '১.২ মিটার (৪ ফুট)',
      'কাটার গতি': 'ঘন্টায় ৩০-৪০ শতক ধান/গম',
      'ইঞ্জিন': '6 HP Air-Cooled Diesel Engine',
      'ফসল সারিবদ্ধকরণ': 'কাটার পর একপাশে সুন্দরভাবে শুইয়ে রাখে'
    },
    engineType: 'Single Cylinder Diesel',
    power: '6.0 HP',
    fuel: 'Diesel',
    capacity: '১ বিঘা ধান মাত্র ৪৫ মিনিটে কর্তন',
    coverage: 'দৈনিক ৫-৬ বিঘা ধান/গম কাটা',
    usage: 'শ্রমিক সংকটের সময় দ্রুত ও নিখুঁতভাবে ধান ও গম কেটে ফসল ঘরে তোলা।',
    deposit: '৳ ২,৫০০',
    operatorAvailable: true,
    rentalTerms: ['অপারেটর সহ নেওয়া বাধ্যতামূলক (অভিজ্ঞ চালক দ্বারা পরিচালিত)।']
  }
];

// -------------------------------------------------------------
// 3. PRODUCTS CATALOG (Filterable with specs, brands, pricing)
// -------------------------------------------------------------
export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p-drip-kit-1bigha',
    slug: 'drip-irrigation-kit-1-bigha',
    name: 'Commercial Drip Irrigation Kit (১ বিঘা সেট)',
    nameEn: 'AYT Pro-Flow Drip Kit for 1 Bigha Farm',
    category: 'Drip Kits',
    brand: 'AYT Agro Tech',
    price: 18500,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 38,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'কভারেজ': '১ বিঘা (৩৩ শতক / ৫০০-৬০০ চারা)',
      'পাইপ দৈর্ঘ্য': '৬০০ মিটার ড্রিপার লাইন (16mm)',
      'ড্রিপার স্পেসিং': '৪০ সেমি (2 LPH ডিসচার্জ)',
      'ফিল্টার': '1.5 Inch Screen Filter Included',
      'ফার্ট্রিগেশন': 'Venturi Injector Set সহ'
    },
    description: 'সম্পূর্ণ রেডি-টু-ইনস্টল ড্রিপ ইরিগেশন কিট। সবজি ও ফলবাগানে পানি ও তরল সার স্বয়ংক্রিয়ভাবে দেওয়ার সম্পূর্ণ প্যাকেজ।',
    features: ['৫০% পানি সাশ্রয়', 'ইউভি প্রোটেক্টেড ভার্জিন গ্রেড পাইপ', 'সহজে ফিল্টার ক্লিন করার সুবিধা', 'ইনস্টলেশন ভিডিও ও ম্যানুয়াল বই সহ'],
    usage: 'পেয়ারা, পেঁপে, মাল্টা, ড্রাগন ও সবজি চাষে আদর্শ।',
    warranty: '৩ বছরের মেটেরিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি'
  },
  {
    id: 'p-solar-pump-2hp',
    slug: 'solar-submersible-pump-2hp',
    name: 'Solar Submersible Pump 2HP (সোলার পাম্প সেট)',
    nameEn: 'AYT Heliocore 2HP DC Solar Submersible System',
    category: 'Solar Equipment',
    brand: 'AYT SolarCore',
    price: 85000,
    originalPrice: 95000,
    rating: 5.0,
    reviewsCount: 19,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'মোটর ক্ষমতা': '2.0 HP (1500W Brushless DC)',
      'প্যানেল ক্যাপাসিটি': '2200W Mono Perc Modules (4 x 550W)',
      'সর্বোচ্চ ফ্লো': '১২,০০০ লিটার / ঘণ্টা',
      'সর্বোচ্চ হেড': '৭০ মিটার (২৩০ ফুট)'
    },
    description: 'কোনো বিদ্যুৎ বিল বা ডিজেল ছাড়া শুধু সূর্যালোক দিয়ে প্রতিদিন লাখ লিটার পানি সেচ দেওয়ার আধুনিক পাম্প।',
    features: ['MPPT স্মার্ট ইনভার্টার কন্ট্রোলার', 'ড্রাই-রান ও ভোল্টেজ প্রোটেকশন', 'স্টেইনলেস স্টিল SS304 বডি', '২৫ বছরের প্যানেল আউটপুট ওয়ারেন্টি'],
    usage: 'গভীর/অগভীর নলকূপ ও পুকুর থেকে সার্বক্ষণিক সেচ।',
    warranty: '২ বছরের পাম্প ও ২৫ বছরের সোলার প্যানেল ওয়ারেন্টি'
  },
  {
    id: 'p-power-sprayer-gx35',
    slug: 'honda-type-power-sprayer-gx35',
    name: 'Knapsack 4-Stroke Power Sprayer 25L',
    nameEn: 'AYT Agro Jet-35 Heavy Backpack Sprayer',
    category: 'Sprayers',
    brand: 'AYT Pro',
    price: 11500,
    originalPrice: 13000,
    rating: 4.8,
    reviewsCount: 54,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'ইঞ্জিন': '35.8cc 4-Stroke (Honda Design)',
      'ট্যাংক সাইজ': '২৫ লিটার হেভি ডিউটি প্লাস্টিক',
      'প্রেশার রেঞ্জ': '1.5 - 2.5 MPa',
      'নজল সেট': '৩ ধরনের ব্রাস নজল সেট সহ'
    },
    description: 'ধোঁয়া ও শব্দমুক্ত ৪-স্ট্রোক পেট্রল ইঞ্জিন স্প্রেয়ার। উঁচু গাছেও শক্তিশালী স্প্রে নিশ্চিত করে।',
    features: ['সহজ ইজি-স্টার্ট মেকানিজম', 'সফট কুশন ব্যাকপ্যাক স্ট্র্যাপ', 'পিতলের হেভি ডিউটি পিস্টন ও গান'],
    usage: 'ধানের ব্লাস্ট, ফলের মাছি ও সবজির পোকা দমনে অত্যন্ত কার্যকর।',
    warranty: '১ বছরের ফ্রি সার্ভিসিং ও পার্টস ওয়ারেন্টি'
  },
  {
    id: 'p-layflat-pipe-3inch',
    slug: 'heavy-duty-layflat-pipe-3inch',
    name: '3 Inch Heavy Duty Layflat Delivery Pipe (১০০ ফুট)',
    nameEn: 'AYT AquaFlex 3 Inch PVC Layflat Irrigation Hose',
    category: 'Pipes',
    brand: 'AquaFlex Pro',
    price: 3200,
    originalPrice: 3800,
    rating: 4.7,
    reviewsCount: 42,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'ব্যাস': '৩ ইঞ্চি (76mm)',
      'দৈর্ঘ্য': '১০০ ফুট (৩০.৫ মিটার)',
      'বার্স্ট প্রেশার': '6 Bar',
      'উপাদান': '3-Ply Reinforced PVC with Polyester Yarn'
    },
    description: 'সহজে ভাঁজ করে গুটিয়ে রাখা যায় এমন টেকসই নমনীয় সেচ পাইপ। ট্র্যাক্টরের চাকার চাপেও ফাটে না।',
    features: ['রোদে ফাটল ধরে না', 'হালকা ও সহজে বহনযোগ্য', 'উভয় প্রান্তে স্টেইনলেস ক্ল্যাম্প সহ'],
    usage: 'পাম্প থেকে দূরবর্তী জমিতে পানি নেওয়ার জন্য।',
    warranty: '২ বছরের গ্যারান্টি'
  },
  {
    id: 'p-micro-sprinkler-set',
    slug: 'micro-sprinkler-irrigation-set-50pcs',
    name: 'Micro Sprinkler Overhead Set (৫০ পিস কিট)',
    nameEn: 'AYT RainMist 360-Degree Micro Sprinkler Kit',
    category: 'Irrigation Equipment',
    brand: 'AYT Agro Tech',
    price: 4800,
    originalPrice: 5500,
    rating: 4.9,
    reviewsCount: 27,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'পরিমাণ': '৫০ পিস স্প্রিংকলার + স্টেক স্ট্যান্ড',
      'কভারেজ ব্যাসার্ধ': '২.৫ থেকে ৩.৫ মিটার (৩৬০ ডিগ্রি)',
      'পানি প্রবাহ': '৮০ - ১২০ লিটার / ঘণ্টা প্রতি নজল',
      'কানেকশন': '4/7mm মাইক্রো টিউব অ্যাডাপ্টার'
    },
    description: 'বৃষ্টির মতো মিহি পানির কণা ছিটিয়ে তাপমাত্রা নিয়ন্ত্রণ ও সুষম সেচ নিশ্চিত করে।',
    features: ['কুয়াশার মতো ওয়াটার ড্রপলেটস', 'নার্সারি ও সবজি চারার জন্য নিরাপদ', 'অ্যান্টি-ড্রিপ ভালভ সহ'],
    usage: 'নার্সারি, ফুলবাগান, চারা উৎপাদন ও পলিহাউস।',
    warranty: '১ বছরের ওয়ারেন্টি'
  },
  {
    id: 'p-digital-soil-meter-4in1',
    slug: 'digital-soil-tester-ph-moisture-meter',
    name: 'Digital Soil Tester 4-in-1 (pH/Moisture/Temp/Light)',
    nameEn: 'AYT AgriSense 4-in-1 Soil Diagnostic Probe',
    category: 'Agricultural Tools',
    brand: 'AgriSense Lab',
    price: 1850,
    originalPrice: 2400,
    rating: 4.6,
    reviewsCount: 65,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80'],
    specs: {
      'পরিমাপক': 'pH (3.5 - 9.0), আর্দ্রতা (৫ লেভেল), তাপমাত্রা, সূর্যালোক',
      'ডিসপ্লে': 'ব্যাকলিট এলসিডি স্ক্রিন',
      'প্রোব দৈর্ঘ্য': '২০০ মিমি অ্যালুমিনিয়াম সেন্সর',
      'ব্যাটারি': '9V ব্যাটারি চালিত'
    },
    description: 'মাটির অম্লতা ও পানির অভাব তাৎক্ষণিকভাবে পরীক্ষা করার পকেট ডিজিটাল মিটার।',
    features: ['সহজ ব্যবহার (মাটিতে সরাসরি গুঁজে দিলেই রিডিং)', 'দ্রুত ও নির্ভুল ডিজিটাল ফলাফল', 'কম্প্যাক্ট ও সহজে বহনযোগ্য'],
    usage: 'বাগান, ছাদকৃষি, নার্সারি ও ফসলি জমির মাটি পরীক্ষা।',
    warranty: '৬ মাসের রিপ্লেসমেন্ট ওয়ারেন্টি'
  }
];

// -------------------------------------------------------------
// 4. SOLUTIONS DATA (Grouped by Problem & Farmer Profile)
// -------------------------------------------------------------
export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'sol-small-farm',
    slug: 'small-farm-solution',
    title: 'ক্ষুদ্র খামারের স্বয়ংসম্পূর্ণ প্যাকেজ',
    titleEn: 'Small Farm All-in-One Solution',
    tag: '১-৩ বিঘা খামার',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    problem: 'সীমিত জমিতে অতিরিক্ত শ্রমিক খরচ এবং প্রচলিত পদ্ধতিতে সেচে পানির অপচয়ে লাভ কমে যাওয়া।',
    solution: 'কম খরচে বাজেট ড্রিপ কিট, মিনি টিলার দিয়ে দ্রুত চাষ ও মোবাইল স্প্রেয়ার দিয়ে নিয়মিত রোগ নিয়ন্ত্রণ।',
    equipment: ['AYT 1-Bigha Drip Kit', 'Knapsack Power Sprayer', 'Manual Seed Planter'],
    services: ['মাটি পরীক্ষা', 'প্রাথমিক লেআউট সাপোর্ট', 'অন-কল কৃষি পরামর্শ'],
    expectedBenefit: ['শ্রমিক খরচ ৬০% সাশ্রয়', 'ফলন ২৫% বৃদ্ধি', 'একক জমিতে বছরজুড়ে বহুফসল চাষ'],
    caseSnippet: 'বগুড়ার রফিকুল ইসলাম ১.৫ বিঘা জমিতে পেঁপে ও সবজি চাষে লাভ দ্বিগুণ করেছেন।'
  },
  {
    id: 'sol-commercial-farm',
    slug: 'commercial-farm-solution',
    title: 'বাণিজ্যিক এগ্রো প্রজেক্ট সলিউশন',
    titleEn: 'Commercial Scale Agro Project Solution',
    tag: '১০+ বিঘা বাণিজ্যিক প্রজেক্ট',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    problem: 'বড় জমিতে বিশাল সেচ খরচ, লোডশেডিং, অদক্ষ ড্রেনেজ এবং সমন্বিত পরিচালনার অভাব।',
    solution: 'অটোমেটিক সোলার সেচ নেটওয়ার্ক, হাইড্রোলিক মাস্টারপ্ল্যান ও সেন্ট্রালাইজড ফার্টিগেশন ইউনিট স্থাপন।',
    equipment: ['High-Power Solar Submersible System', 'Industrial Disc Filter Bank', 'Automated Solenoid Valves'],
    services: ['টপোগ্রাফিক ৩ডি ফার্ম সার্ভে', 'সারফেস ও সাব-সারফেস ড্রেনেজ কনস্ট্রাকশন', 'সিজনাল টেকনিক্যাল মনিটরিং'],
    expectedBenefit: ['জিরো বিদ্যুৎ/ডিজেল বিল', 'উৎপাদন ব্যয় ৪০% হ্রাস', 'আন্তর্জাতিক মানের ফল ও ফসলের গ্রেডিং'],
    caseSnippet: 'যশোরের ৩০ বিঘা ড্রাগন ও মাল্টা বাগানে নিরবচ্ছিন্ন স্বয়ংক্রিয় সেচ চালু আছে।'
  },
  {
    id: 'sol-nursery-greenhouse',
    slug: 'nursery-greenhouse-solution',
    title: 'স্মার্ট নার্সারি ও চারা উৎপাদন সলিউশন',
    titleEn: 'Smart Nursery & Seedling Solution',
    tag: 'নার্সারি ও গ্রিনহাউস',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    problem: 'অতিবৃষ্টি বা তীব্র তাপদাহে সংবেদনশীল চারা ঝলসে যাওয়া ও অসম সেচে চারার মৃত্যুহার বেশি হওয়া।',
    solution: 'ওভারহেড মাইক্রো-স্প্রিংকলার ও ফগার সিস্টেম দিয়ে আর্দ্রতা ও তাপমাত্রা নিখুঁত নিয়ন্ত্রণ।',
    equipment: ['RainMist Micro Sprinklers', 'Cooling Fogger Jets', 'Digital Humidity & Temp Sensors'],
    services: ['নার্সারি শেড আর্কিটেকচার', 'ওয়াটার হার্ভেস্টিং পাইপলাইন', 'রুট ডেভেলপমেন্ট পুষ্টি শিডিউল'],
    expectedBenefit: ['চারার বাঁচার হার ৯৮% নিশ্চিত', 'চারা দ্রুত পরিপক্ক হওয়া', 'নিয়ন্ত্রিত পরিবেশে অফ-সিজন চারা উৎপাদন'],
    caseSnippet: 'ময়মনসিংহের গ্রিন নার্সারিতে চারার গ্রোথ রেট ৩০ দিন থেকে কমে ২১ দিনে নেমেছে।'
  },
  {
    id: 'sol-irrigation-problem',
    slug: 'smart-water-saving-solution',
    title: 'পানি সাশ্রয়ী আধুনিক সেচ সমাধান',
    titleEn: 'Water-Saving Modern Irrigation Solution',
    tag: 'সেচ সমস্যা ও খরা নিরসন',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    problem: 'ভূগর্ভস্থ পানির স্তর নিচে নেমে যাওয়া এবং প্রচলিত নালা সেচে ৬০% পানির অপচয় ও মাটির ক্ষয়।',
    solution: 'ক্লোজড পাইপলাইন ড্রিপ ও বাবলার সেচ ব্যবস্থা, যা সরাসরি শিকড়ে সঠিক ফোঁটায় পানি দেয়।',
    equipment: ['Pressure Compensating Emitters', 'Main & Sub-main HDPE Pipes', 'Air Release Safety Valves'],
    services: ['হাইড্রোলিক পাইপ ডিজাইন', 'প্রেশার টেস্ট ও ফ্ল্যাশিং', 'কৃষক ট্রেনিং'],
    expectedBenefit: ['পানির অপচয় ৫০-৭০% রোধ', 'পাম্প চালানোর সময় ও তেল খরচ অর্ধেক', 'মাটির লবণাক্ততা নিয়ন্ত্রণ'],
    caseSnippet: 'রাজশাহীর বরেন্দ্র অঞ্চলে কম পানিতে বরবটি ও টমেটো চাষে বৈপ্লবিক সাফল্য।'
  },
  {
    id: 'sol-drainage-waterlogging',
    slug: 'waterlogging-drainage-solution',
    title: 'জলাবদ্ধ জমি উদ্ধার ও দ্রুত ড্রেনেজ',
    titleEn: 'Waterlogging & Flood Recovery Solution',
    tag: 'জলাবদ্ধতা ও বন্যা পরবর্তী সেবা',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
    problem: 'ভারী বৃষ্টিতে নিচু জমিতে পানি আটকে ফসল পচে যাওয়া এবং সময়মতো পরবর্তী ফসল বপন করতে না পারা।',
    solution: 'হাই-ফ্লো কাদা ও পানি নিষ্কাশন পাম্পিং এবং জমিতে স্থায়ী ঢাল ও ড্রেনেজ চ্যানেল তৈরি।',
    equipment: ['Heavy Diesel Mud/Trash Pump', '3-4 Inch Layflat Pipes', 'Trench Diggers'],
    services: ['ইমার্জেন্সি ২৪/৭ ওয়াটার পাম্পিং', 'স্থায়ী ড্রেনেজ কালভার্ট ও নিকাশ ডিজাইন'],
    expectedBenefit: ['২৪-৪৮ ঘণ্টার মধ্যে সম্পূর্ণ পানি নিষ্কাশন', 'শিকড় পচা থেকে ফসল রক্ষা', 'মাটিতে দ্রুত চাষ উপযোগী জো আসা'],
    caseSnippet: 'মুন্সীগঞ্জের ১০০ বিঘা আলু জমিতে বৃষ্টির জমে থাকা পানি মাত্র ১২ ঘণ্টায় অপসারণ করা হয়েছে।'
  },
  {
    id: 'sol-solar-farm',
    slug: 'solar-irrigation-solution',
    title: 'সৌর বিদ্যুৎ চালিত কৃষি সমাধান',
    titleEn: 'Zero-Electricity Cost Solar Farm Solution',
    tag: 'বিদ্যুৎবিহীন ও চরাঞ্চল',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    problem: 'বিদ্যুৎ সংযোগের জটিলতা বা ঘন ঘন লোডশেডিং এবং ডিজেল পাম্প চালানোর ব্যয়বহুল খরচ।',
    solution: 'স্মার্ট এমপিপিটি ভিএফডি কন্ট্রোলার চালিত সোলার পাম্প সিস্টেম ইনস্টলেশন।',
    equipment: ['Tier-1 Solar Panels', 'Submersible Stainless Steel Pump', 'Lightning Arrester & Earthing'],
    services: ['সোলার অ্যাঙ্গেল সিমুলেশন', 'স্ট্রাকচার ফেব্রিকেশন ও ফাউন্ডেশন', 'গ্রিড-হাইব্রিড অপশন'],
    expectedBenefit: ['আজীবন ফ্রি সেচ', 'ডিজেল ইঞ্জিনের ধোঁয়া ও মেরামতের ঝামেলা নেই', 'সরকারি গ্রিন এনার্জি স্ট্যান্ডার্ড'],
    caseSnippet: 'কুড়িগ্রামের চরাঞ্চলে সোলার পাম্প দিয়ে গম ও ভুট্টার জমিতে স্বাচ্ছন্দে সেচ নিশ্চিত হয়েছে।'
  }
];

// -------------------------------------------------------------
// 5. PROJECTS DATA (Bangladeshi Field Case Studies - Demo labeled)
// -------------------------------------------------------------
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'bogura-malta-smart-irrigation',
    title: 'বগুড়া ১৫ বিঘা মাল্টা ও পেয়ারা স্মার্ট ড্রিপ সেচ প্রকল্প',
    category: 'Irrigation',
    location: 'শিবগঞ্জ, বগুড়া',
    district: 'বগুড়া',
    year: '২০২৫',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
    ],
    clientType: 'বাণিজ্যিক কৃষি উদ্যোক্তা',
    landSize: '১৫ বিঘা (৫ একর)',
    shortDesc: 'স্বয়ংক্রিয় ফার্ট্রিগেশন ও ড্রিপ লাইনের মাধ্যমে পানির অপচয় ৬০% হ্রাস ও ফলের মিষ্টতা বৃদ্ধি।',
    challenge: 'পাহাড় ও ঢালু জমিতে প্রচলিত সেচে উঁচু অংশের গাছ পানি পাচ্ছিল না এবং নিচে অতিরিক্ত পানি জমে শিকড় নষ্ট হচ্ছিল।',
    solutionProvided: 'প্রেসার কমপেনসেটিং (PC) ড্রিপ লাইন ও সেন্ট্রাল ফিল্ট্রেশন ট্যাংক স্থাপন করা হয় যাতে সমান চাপে প্রতিটি গাছে নির্দিষ্ট পরিমাণ পানি যায়।',
    implementation: ['৭,৫০০ মিটার ড্রিপার লাইন স্থাপন', 'ভেন্টুরি ফার্ট্রিগেশন সিস্টেম যুক্তকরণ', 'অটোমেটিক সয়েল আর্দ্রতা সেন্সর কানেকশন'],
    results: ['পানির বিল ও পাম্প চালানোর সময় ৫৫% কমেছে', 'প্রথম বছরেই মাল্টার ফলন ৩০% বৃদ্ধি পেয়েছে', 'শ্রমিক খরচ প্রতি মাসে প্রায় ৳ ১৮,০০০ সাশ্রয় হয়েছে'],
    clientFeedback: {
      quote: 'AYT Agro-এর ড্রিপ সেচ নেওয়ার পর বাগানে পানি দেওয়ার পেছনে কোনো শ্রমিক বা বাড়তি সময় লাগেনি। একটি সুইচে পুরো ১৫ বিঘা সেচ হয়ে যায়।',
      clientName: 'মো. রফিকুল ইসলাম',
      designation: 'স্বত্বাধিকারী, রফিক এগ্রো ফার্ম'
    },
    isDemoSample: true
  },
  {
    id: 'proj-2',
    slug: 'jashore-dragon-solar-irrigation',
    title: 'যশোর ২৫ বিঘা ড্রাগন ফ্রুট সোলার সেচ ও ড্রেনেজ অবকাঠামো',
    category: 'Solar',
    location: 'মনিরামপুর, যশোর',
    district: 'যশোর',
    year: '২০২৫',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'],
    clientType: 'ড্রাগন ফ্রুট চাষী সমবায়',
    landSize: '২৫ বিঘা',
    shortDesc: 'সৌর বিদ্যুৎ চালিত ৫ এইচপি সাবমার্সিবল পাম্প ও ড্রেনেজ চ্যানেল নেটওয়ার্ক।',
    challenge: 'ঘন ঘন লোডশেডিংয়ের কারণে খরা মৌসুমে সেচ ব্যাহত হচ্ছিল এবং বর্ষায় ড্রাগনের গোড়ায় পানি জমে মারাত্মক ফাঙ্গাস আক্রমণ হচ্ছিল।',
    solutionProvided: '৫ এইচপি সোলার পাম্পের সাথে মাইক্রো স্প্রিংকলার এবং সম্পূর্ণ বাগানে ২ ফুট গভীর ইন্টার-বেড ড্রেনেজ চ্যানেল তৈরি।',
    implementation: ['১৬টি ৫৫০ ওয়াট মোনো প্যানেল ইন্সটল', '৫ এইচপি ডিসি সাবমার্সিবল পাম্প', 'মাটির ঢাল কেটে নিষ্কাশন নর্দমা খনন'],
    results: ['সম্পূর্ণ ডিজেল ও বিদ্যুৎ খরচ মুক্ত সেচ ব্যবস্থা', 'বর্ষায় পানি জমা শূন্যে নেমে আসায় ড্রাগন পচা রোগ দূর হয়েছে', 'সিজনে টানা ৬ মাস প্রিমিয়াম কোয়ালিটি ড্রাগন হার্ভেস্ট'],
    clientFeedback: {
      quote: 'সোলার সেচ ব্যবস্থা আমাদের দীর্ঘদিনের সেচ ভোগান্তি দূর করেছে। ড্রেনেজ চ্যানেল থাকায় বর্ষাতেও ড্রাগনের কোনো ক্ষতি হয়নি।',
      clientName: 'কামাল উদ্দিন মোল্লা',
      designation: 'ম্যানেজিং পার্টনার, মনিরামপুর ড্রাগন হাব'
    },
    isDemoSample: true
  },
  {
    id: 'proj-3',
    slug: 'munshiganj-potato-drainage',
    title: 'মুন্সীগঞ্জ ৮০ বিঘা আলু ক্ষেতের জরুরি ড্রেনেজ প্রকল্প',
    category: 'Drainage',
    location: 'সিরাজদিখান, মুন্সীগঞ্জ',
    district: 'মুন্সীগঞ্জ',
    year: '২০২৪',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80'],
    clientType: 'আলু চাষী এসোসিয়েশন',
    landSize: '৮০ বিঘা',
    shortDesc: 'ঘন্টায় ২ লক্ষ লিটার ক্ষমতাসম্পন্ন হেভি পাম্প দ্বারা বৃষ্টির পানি নিষ্কাশন।',
    challenge: 'অসময়ের টানা ভারী বর্ষণে বীজ আলুর ক্ষেতে প্রায় ৩ ফুট পানি জমে পুরো ফসল পচে যাওয়ার উপক্রম হয়েছিল।',
    solutionProvided: 'AYT Agro-এর ইমার্জেন্সি মোবাইল টিম ৪টি হেভি কাদা ও ড্রেনেজ পাম্প নিয়ে মাঠে নেমে ২৪ ঘণ্টার মধ্যে পানি পার্শ্ববর্তী খালে ফেলে।',
    implementation: ['৪টি হেভি ডিউটি ৪-ইঞ্চি পাম্প মোতায়েন', '১,২০০ ফুট ফ্লেক্সিবল লে-ফ্ল্যাট পাইপলাইন সম্প্রসারণ', 'টানা ৩৬ ঘণ্টা নন-স্টপ পাম্পিং অপারেশন'],
    results: ['৮০ বিঘা জমির বীজ আলু শতভাগ রক্ষা পেয়েছে', 'কৃষকদের আনুমানিক ৫০ লক্ষ টাকার সম্ভাব্য ক্ষতি ঠেকানো সম্ভব হয়েছে'],
    clientFeedback: {
      quote: 'জরুরি বিপদের দিনে AYT Agro-এর টিম যেভাবে রাতেও পাম্প চালিয়ে পানি বের করেছে তা অকল্পনীয়। তারা আমাদের সম্পূর্ণ ফসল বাঁচিয়েছে।',
      clientName: 'মো. হাবিবুর রহমান',
      designation: 'সাধারণ সম্পাদক, সিরাজদিখান কৃষক ফ্রন্ট'
    },
    isDemoSample: true
  }
];

// -------------------------------------------------------------
// 6. BLOG POSTS & KNOWLEDGE CENTER
// -------------------------------------------------------------
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'when-to-irrigate-crops',
    title: 'কখন জমিতে সেচ দেবেন? মাটির আর্দ্রতা বোঝার বৈজ্ঞানিক কৌশল',
    category: 'Irrigation',
    date: '১৫ মে, ২০২৬',
    readTime: '৪ মিনিট',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    author: { name: 'কৃষিবিদ মাহফুজুর রহমান', designation: 'সিনিয়র এগ্রোনোমিস্ট, AYT Agro' },
    summary: 'অতিরিক্ত বা কম সেচ—দুটোই ফসলের জন্য ক্ষতিকর। মাটির আর্দ্রতা যাচাই করে সঠিক সময়ে সেচ দিলে ফলন বাড়ে ও খরচ কমে।',
    content: [
      'জমিতে শুধু চোখ দিয়ে দেখে সেচ দেওয়া সঠিক সিদ্ধান্ত নয়। অনেক সময় মাটির উপরের স্তর শুকনো থাকলেও নিচের শিকড় অঞ্চলে পর্যাপ্ত আর্দ্রতা থাকে। আবার উল্টোভাবে, উপরিভাগ ভেজা মনে হলেও নিচে পানি না পৌঁছাতে পারে।',
      'বৈজ্ঞানিক পদ্ধতি: মাটির ৪-৬ ইঞ্চি গভীর থেকে একমুঠো মাটি তুলে হাতের তালুতে বল তৈরি করুন। যদি মাটি সহজেই দলা বাঁধে এবং চাপ দিলে না ভাঙে, তবে আর্দ্রতা পর্যাপ্ত। যদি মাটি ঝুরঝুরে হয়ে ভেঙে যায়, তবে অবিলম্বে সেচ দেওয়া প্রয়োজন।',
      'সকাল ও বিকেলের সেচ: প্রখর দুপুরে তীব্র রোদে সেচ দিলে বাষ্পীভবনে পানির অপচয় হয় এবং গরম পানিতে গাছের শিকড়ে থার্মাল শক লাগে। তাই সবসময় ভোরে অথবা সূর্যাস্তের পর সেচ দেওয়া উচিত।'
    ],
    keyTips: [
      'দুপুরের কড়া রোদে সেচ দেওয়া পরিহার করুন।',
      'গাছের শিকড় অঞ্চলের গভীরতা অনুযায়ী সেচের পরিমাণ নির্ধারণ করুন।',
      'ডিজিটাল সয়েল ময়েশ্চার মিটার ব্যবহার করে নিখুঁত আর্দ্রতা মাপুন।'
    ],
    relatedSlugs: ['drip-irrigation-benefits', 'soil-testing-guide']
  },
  {
    id: 'blog-2',
    slug: 'drip-irrigation-benefits',
    title: 'কম পানিতে বেশি ফলন: ড্রিপ সেচ কেন বর্তমান কৃষির ভবিষ্যৎ?',
    category: 'Technology',
    date: '২৮ এপ্রিল, ২০২৬',
    readTime: '৫ মিনিট',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    author: { name: 'ইঞ্জি. তারেকুল ইসলাম', designation: 'ফার্ম অটোমেশন লিড, AYT Agro' },
    summary: 'প্রচলিত প্লাড ইরিগেশনের তুলনায় ড্রিপ সেচে ৫০% পানি ও ৮০% সার সাশ্রয় হয়। আধুনিক বাণিজ্যিক বাগানের জন্য এটি অপরিহার্য।',
    content: [
      'ড্রিপ সেচ প্রযুক্তিতে পাইপলাইনের সাহায্যে প্রতিটি গাছের গোড়ায় সরাসরি ফোঁটায় ফোঁটায় পানি ও তরল সার পৌঁছানো হয়। এর ফলে জমির অনাবশ্যক অংশে পানি অপচয় হয় না এবং আগাছার জন্ম হতে পারে না।',
      'ফার্ট্রিগেশন সুবিধা: ড্রিপ ব্যবস্থার সাথে ভেন্টুরি বা ফার্টিলাইজার ট্যাংক যুক্ত করে পানির সাথে সুনির্দিষ্ট মাত্রায় দ্রবণীয় সার প্রয়োগ করা যায়। গাছ দ্রুত খাদ্য গ্রহণ করতে পারে।',
      'অর্থনৈতিক লাভ: প্রচলিত পদ্ধতিতে যেখানে ৩ বিঘা সেচ দিতে ৫ ঘণ্টা পাম্প চালাতে হয়, ড্রিপ সিস্টেমে ১ এইচপি পাম্প দিয়ে মাত্র ১ ঘণ্টায় পুরো জমিতে নিখুঁত সেচ সম্পন্ন হয়।'
    ],
    keyTips: [
      'ফলবাগান ও গ্রিনহাউসে ড্রিপ সেচ ইনস্টল করলে প্রথম বছরেই বিনিয়োগ উঠে আসে।',
      'ডিস্ক ফিল্টার নিয়মিত পরিষ্কার রাখলে ড্রিপার জ্যাম হয় না।'
    ],
    relatedSlugs: ['when-to-irrigate-crops', 'solar-pump-advantages']
  },
  {
    id: 'blog-3',
    slug: 'machinery-rental-vs-buying',
    title: 'কৃষি যন্ত্রপাতি: কেনা লাভজনক নাকি ভাড়ায় ব্যবহার?',
    category: 'Machinery',
    date: '১০ এপ্রিল, ২০২৬',
    readTime: '৩ মিনিট',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    author: { name: 'মো. সাজ্জাদ হোসেন', designation: 'রেন্টাল অপারেশনস ম্যানেজার' },
    summary: 'দামী মেশিন কিনে ফেলে না রেখে অন-ডিমান্ড ভাড়ায় ব্যবহার করলে কৃষকের বিশাল মূলধন সাশ্রয় হয় এবং রক্ষণাবেক্ষণের খরচ বাঁচে।',
    content: [
      'একটি পাওয়ার টিলার বা রিপার মেশিনের দাম দেড় থেকে আড়াই লাখ টাকা। বছরে এই মেশিন মাত্র ১৫-২০ দিন জমিতে ব্যবহৃত হয়, বাকি সময় অলস পড়ে থাকে। অলস পড়ে থাকলে ব্যাটারি ও ইঞ্জিন নষ্ট হওয়ার ঝুঁকি থাকে।',
      'ভাড়ার সুবিধা: AYT Agro-এর মতো প্ল্যাটফর্ম থেকে শুধু কাজের দিনে সার্ভিসিং করা রানিং মেশিন ভাড়া নিলে বড় পুঁজি আটকে থাকে না। কোনো মেকানিক্যাল সমস্যা হলেও সম্পূর্ণ দায়িত্ব সার্ভিস প্রোভাইডারের।'
    ],
    keyTips: [
      'বছরে ৩০ দিনের কম ব্যবহার হলে মেশিন কেনার চেয়ে ভাড়া নেওয়া অনেক বেশি সাশ্রয়ী।',
      'ভাড়া নেওয়ার সময় মেশিনের কন্ডিশন ও অপারেটর সুবিধা দেখে নিন।'
    ],
    relatedSlugs: ['when-to-irrigate-crops', 'soil-testing-guide']
  },
  {
    id: 'blog-4',
    slug: 'soil-testing-guide',
    title: 'মাটি পরীক্ষা কেন করবেন? অতিরিক্ত সারের ক্ষতিকর প্রভাব ও সমাধান',
    category: 'Agriculture Tips',
    date: '২২ মার্চ, ২০২৬',
    readTime: '৪ মিনিট',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80',
    author: { name: 'ড. মোস্তাফিজুর রহমান', designation: 'সয়েল সায়েন্টিস্ট ও কনসালট্যান্ট' },
    summary: 'অনুমানের উপর ভিত্তি করে অতিরিক্ত ইউরিয়া বা ডিএপি দিলে মাটির উর্বরতা কমে যায়। মাটি পরীক্ষার মাধ্যমে সঠিক অনুপাতে সার প্রয়োগের নিয়ম।',
    content: [
      'অতিরিক্ত রাসায়নিক সার প্রয়োগের ফলে মাটিতে উপকারী অণুজীবের সংখ্যা ধ্বংস হয় এবং মাটি অতিরিক্ত অম্লীয় বা ক্ষারীয় হয়ে যায়। ফলশ্রুতিতে গাছ প্রয়োজনীয় অনুপুষ্টি যেমন জিংক, বোরন ও ম্যাগনেসিয়াম শোষণ করতে পারে না।',
      'মাটি পরীক্ষার উপকারিতা: প্রতি ৩ বছর পর পর জমির মাটি পরীক্ষা করলে জমিতে কোন উপাদানের ঘাটতি আছে তা স্পষ্ট জানা যায়। এতে ২৫-৩০% সারের খরচ সরাসরি বেঁচে যায় এবং ফলনের গুণগত মান অক্ষুণ্ণ থাকে।'
    ],
    keyTips: [
      'ফসল তোলার পর এবং নতুন ফসল লাগানোর অন্তত ১৫ দিন আগে মাটির নমুনা সংগ্রহ করুন।',
      'জৈব সারের সাথে সুষম রাসায়নিক সারের সমন্বয় রাখুন।'
    ],
    relatedSlugs: ['when-to-irrigate-crops', 'drip-irrigation-benefits']
  },
  {
    id: 'blog-5',
    slug: 'solar-pump-advantages',
    title: 'সোলার সেচ পাম্প: বিদ্যুৎ ও ডিজেল খরচ শূন্য করার বাস্তব প্রযুক্তি',
    category: 'Technology',
    date: '০৫ মার্চ, ২০২৬',
    readTime: '৪ মিনিট',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    author: { name: 'ইঞ্জি. কামরুল হাসান', designation: 'রিনিউয়েবল এনার্জি স্পেশালিস্ট' },
    summary: 'দিন দিন ডিজেলের মূল্য বৃদ্ধি এবং লোডশেডিংয়ের প্রেক্ষাপটে সোলার সেচ পাম্প কৃষকের আজীবন জ্বালানি সাশ্রয়ের বিশ্বস্ত উপায়।',
    content: [
      'সোলার সেচ ব্যবস্থায় মোনো-পার্ক হাই-এফিসিয়েন্সি প্যানেলের সাথে স্মার্ট ভিএফডি কন্ট্রোলার যুক্ত থাকে। সকালের মৃদু রোদেও পাম্প স্বয়ংক্রিয়ভাবে চালু হয় এবং সারাদিন প্রয়োজনীয় প্রেশারে মাঠে পানি সরবরাহ করে।',
      'পরিবেশবান্ধব ও জিরো মেইনটেন্যান্স: কোনো তেল, মবিল, ইঞ্জিন শব্দ বা ধোঁয়া থাকে না। শুধু মাসে একবার প্যানেলের ধুলোবালি ধুয়ে নিলেই ২৫ বছর পর্যন্ত নিরবচ্ছিন্ন বিদ্যুৎ সেবা পাওয়া যায়।'
    ],
    keyTips: [
      'সোলার প্যানেলের মুখ সবসময় দক্ষিণ দিকে নির্দিষ্ট কোণে স্থাপন করতে হবে।',
      'ড্রিপ বা স্প্রিংকলার সেচের সাথে সোলার পাম্প যুক্ত করলে কার্যকারিতা সর্বোচ্চ হয়।'
    ],
    relatedSlugs: ['drip-irrigation-benefits', 'when-to-irrigate-crops']
  },
  {
    id: 'blog-6',
    slug: 'waterlogged-land-recovery',
    title: 'জলাবদ্ধ জমি দ্রুত শুকাবেন কীভাবে? বন্যা পরবর্তী মাঠ ব্যবস্থাপনা',
    category: 'Farm Engineering',
    date: '১৮ ফেব্রুয়ারি, ২০২৬',
    readTime: '৪ মিনিট',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
    author: { name: 'কৃষি প্রকৌশলী মো. জাহিদ হাসান', designation: 'ড্রেনেজ স্পেশালিস্ট' },
    summary: 'বন্যা বা অতিবৃষ্টির পর জমিতে দ্রুত বাতাস চলাচল ফেরাতে এবং শিকড় পচা রোগ রুখতে কার্যকর পদক্ষেপ।',
    content: [
      'জমি থেকে পানি নেমে যাওয়ার সাথে সাথে উপরের পলি মাটির কারণে একটি শক্ত আস্তরণ (Hard Crust) তৈরি হয় যা মাটির ভেতরে অক্সিজেন প্রবেশে বাধা দেয়।',
      'করণীয়: পানি পাম্প করে নামানোর পর জমি কিছুটা শুকিয়ে এলেই মিনি টিলার বা হ্যান্ড উইডার দিয়ে উপরের শক্ত মাটির আস্তরণ ভেঙে আলগা করে দিতে হবে। এতে শিকড়ে দ্রুত বাতাস পৌঁছায় এবং নতুন শিকড় গজায়।'
    ],
    keyTips: [
      'জরুরি ভিত্তিতে নিষ্কাশন পাম্প দিয়ে পানি বের করুন।',
      'পানি নামার পর ছত্রাকনাশক ও অনুখাদ্য স্প্রে করে গাছকে প্রাণবন্ত রাখুন।'
    ],
    relatedSlugs: ['when-to-irrigate-crops', 'machinery-rental-vs-buying']
  }
];

// -------------------------------------------------------------
// 7. CROP GUIDES (Farmer Knowledge Center)
// -------------------------------------------------------------
export const CROP_GUIDES: CropGuide[] = [
  {
    id: 'cg-rice',
    name: 'ধান চাষ গাইড',
    nameEn: 'Rice Crop Management Guide',
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    season: 'আউশ (মার্চ-আগস্ট), আমন (জুন-ডিসেম্বর), বোরো (নভেম্বর-মে)',
    soilType: 'দোআঁশ ও এঁটেল-দোআঁশ মাটি যেখানে পানি ধরে রাখার ক্ষমতা ভালো।',
    landPreparation: '৩-৪ বার আড়াআড়ি মই ও চাষ দিয়ে জমি ভালো করে কাদা করতে হবে।',
    waterRequirement: 'গাছের বৃদ্ধি ও থোড় আসার সময়ে জমিতে ২-৩ ইঞ্চি পানি ধরে রাখতে হবে।',
    basicCare: ['চারা রোপণের ১৫-২০ দিন পর প্রথম নিড়ানি ও ইউরিয়া উপরিপ্রয়োগ।', 'ব্লাস্ট ও মাজরা পোকা নিয়মিত পর্যবেক্ষণ।'],
    commonProblems: ['মাজরা পোকা', 'ব্লাস্ট রোগ', 'খোলপচা'],
    harvesting: 'শীষের ৮০% ধান সোনালী রঙ ধারণ করলে রিপার দিয়ে কাটতে হবে।'
  },
  {
    id: 'cg-vegetables',
    name: 'টমেটো ও বেগুন সবজি গাইড',
    nameEn: 'Tomato & Brinjal Production Guide',
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80',
    season: 'শীতকালীন (সেপ্টেম্বর-ফেব্রুয়ারি) ও গ্রীষ্মকালীন (মার্চ-জুলাই)',
    soilType: 'জৈব পদার্থ সমৃদ্ধ হালকা দোআঁশ মাটি, pH ৬.০ - ৭.০।',
    landPreparation: 'গভীর চাষ দিয়ে মাটি ঝুরঝুরে করে ১ মিটার চওড়া উঁচু বেড তৈরি করতে হবে।',
    waterRequirement: 'ড্রিপ সেচের মাধ্যমে নিয়মিত কিন্তু পরিমিত সেচ প্রয়োজন। গোড়ায় পানি জমতে দেওয়া যাবে না।',
    basicCare: ['গাছে খুঁটি দেওয়া (ট্রেসিং)', 'শাখা ছাঁটাই (Pruning)', 'মালচিং পেপার ব্যবহার।'],
    commonProblems: ['ঢলে পড়া রোগ (Bacterial Wilt)', 'ফল ও ডগা ছিদ্রকারী পোকা'],
    harvesting: 'ফলের কাঙ্ক্ষিত আকার ও রঙ এলে সকালে সংগ্রহ করুন।'
  },
  {
    id: 'cg-maize',
    name: 'ভুট্টা চাষ গাইড',
    nameEn: 'High Yield Maize Production Guide',
    category: 'Maize',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    season: 'রবি মৌসুম (অক্টোবর-ডিসেম্বর) ও খরিপ (ফেব্রুয়ারি-মার্চ)',
    soilType: 'উঁচু ও মাঝারি উঁচু সুনিষ্কাশিত বেলে-দোআঁশ মাটি।',
    landPreparation: 'সিড ড্রিল দিয়ে সারিতে নির্দিষ্ট দূরত্বে বীজ রোপণ।',
    waterRequirement: 'চারা অবস্থা, ফুল ফোটা এবং দানা গঠনের সময় ৩-৪টি গুরুত্বপূর্ণ সেচ দিতে হবে।',
    basicCare: ['গাছের গোড়ায় মাটি তুলে দেওয়া', 'ফল আর্মিওয়ার্ম পর্যবেক্ষণ।'],
    commonProblems: ['ফল আর্মিওয়ার্ম', 'পাতা পোড়া রোগ'],
    harvesting: 'মোচার খোসা শুকিয়ে খড়ের রঙ হলে হার্ভেস্ট করুন।'
  },
  {
    id: 'cg-fruit-guava-dragon',
    name: 'ড্রাগন ও পেয়ারা বাগান গাইড',
    nameEn: 'Dragon Fruit & Guava Orchard Management',
    category: 'Fruit',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    season: 'বছরের যেকোনো সময়ে রোপণ উপযোগী (মে-সেপ্টেম্বর সর্বোত্তম)',
    soilType: 'উঁচু জমি যেখানে পানি জমে না, বেলে-দোআঁশ মাটি।',
    landPreparation: 'আরসিসি পিলার ও টায়ার সাপোর্ট কাঠামো স্থাপন, সারি থেকে সারির দূরত্ব ৮-১০ ফুট।',
    waterRequirement: 'ড্রিপ সেচের মাধ্যমে সপ্তাহে ২-৩ দিন নিয়মিত সেচ।',
    basicCare: ['নিয়মিত ক্যানোপি প্রুনিং', 'বর্ষায় ড্রেনেজ সচল রাখা', 'জৈব সার প্রয়োগ।'],
    commonProblems: ['কান্ডের ক্যাঙ্কার রোগ', 'মিলিবাগ'],
    harvesting: 'ফল পূর্ণ রঙে পৌঁছানোর ৪-৫ দিনের মধ্যে সংগ্রহ।'
  }
];

// -------------------------------------------------------------
// 8. FAQS DATA (Comprehensive 10 Questions)
// -------------------------------------------------------------
export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'যন্ত্রপাতি ভাড়া',
    question: 'কৃষি যন্ত্রপাতি কীভাবে ভাড়া নেব?',
    answer: 'আমাদের ওয়েবসাইট বা হোয়াটসঅ্যাপে আপনার প্রয়োজনীয় মেশিন ও তারিখ নির্বাচন করে বুকিং রিকোয়েস্ট পাঠান। আমাদের হাব থেকে আপনার সাথে যোগাযোগ করে মেশিন ও অপারেটর আপনার জমিতে পৌঁছে দেওয়া হবে।'
  },
  {
    id: 'faq-2',
    category: 'যন্ত্রপাতি ভাড়া',
    question: 'যন্ত্রপাতির সাথে কি চালক/অপারেটর পাওয়া যায়?',
    answer: 'হ্যাঁ, পাওয়ার টিলার, রিপার ও বড় পাম্পের জন্য আমাদের প্রশিক্ষিত দক্ষ ড্রাইভার/অপারেটর সুবিধা রয়েছে। আপনি চাইলে নিজেও মেশিন চালাতে পারেন।'
  },
  {
    id: 'faq-3',
    category: 'সেচ সেবা',
    question: 'আপনারা কি ড্রিপ ও স্প্রিংকলার সেচ ইনস্টল করে দেন?',
    answer: 'হ্যাঁ, আমাদের অভিজ্ঞ এগ্রো-ইঞ্জিনিয়াররা সরাসরি আপনার জমিতে গিয়ে সার্ভে করে ড্রিপ ও স্প্রিংকলার পাইপলাইনের সম্পূর্ণ ডিজাইন, মালামাল সরবরাহ এবং ইনস্টলেশন ও কৃষক ট্রেনিং সম্পন্ন করে দেন।'
  },
  {
    id: 'faq-4',
    category: 'সার্ভিস এরিয়া',
    question: 'আপনারা কি প্রত্যন্ত গ্রামাঞ্চলেও সেবা প্রদান করেন?',
    answer: 'হ্যাঁ, আমাদের বগুড়া, যশোর, ঢাকা ও রংপুর রিজিওনাল হাবের মাধ্যমে সারাদেশের যেকোনো উপজেলার প্রত্যন্ত ইউনিয়নে আমাদের সেবা ও যন্ত্রপাতি ডেলিভারি প্রদান করা হয়।'
  },
  {
    id: 'faq-5',
    category: 'পরামর্শ ও পরিদর্শন',
    question: 'জমিতে গিয়ে কি বিশেষজ্ঞ পরামর্শ দেওয়া হয়?',
    answer: 'হ্যাঁ, নতুন খামার প্রতিষ্ঠা বা সমস্যাগ্রস্ত জমির ক্ষেত্রে আমাদের কৃষিবিদ ও ইঞ্জিনিয়াররা ফিল্ড ভিজিট করে মাটি ও পানি পরীক্ষা এবং মাস্টারপ্ল্যান কনসালটেশন দেন।'
  },
  {
    id: 'faq-6',
    category: 'কোটেশন ও মূল্য',
    question: 'কোটেশন কীভাবে পাব?',
    answer: 'আমাদের "Get a Quote" বাটনে ক্লিক করে আপনার জমির সাইজ ও সেবার ধরন দিলে তাৎক্ষণিক প্রাথমিক হিসাব পাবেন এবং হোয়াটসঅ্যাপের মাধ্যমে বিস্তারিত অফিসিয়াল প্রজেক্ট কোটেশন পাঠানো হবে।'
  },
  {
    id: 'faq-7',
    category: 'যন্ত্রপাতি বিক্রয়',
    question: 'ভাড়ার পাশাপাশি কি যন্ত্রপাতি কেনা সম্ভব?',
    answer: 'হ্যাঁ, আমাদের "Products" সেকশনে পাওয়ার স্প্রেয়ার, ড্রিপ কিট, সোলার পাম্প, পাইপ ও কৃষি সরঞ্জাম ওয়ারেন্টি ও ফ্রি হোম ডেলিভারি সুবিধায় কেনা যায়।'
  },
  {
    id: 'faq-8',
    category: 'বুকিং প্রক্রিয়া',
    question: 'বুকিং করার পর কী ঘটে?',
    answer: 'বুকিং সাবমিট করলে একটি ট্র্যাকিং Booking ID তৈরি হয়। আমাদের কাস্টমার সাপোর্ট টিম ১৫-৩০ মিনিটের মধ্যে কল করে শিডিউল ও ডেলিভারির সময় কনফার্ম করে।'
  },
  {
    id: 'faq-9',
    category: 'পেমেন্ট মেথড',
    question: 'পেমেন্ট কীভাবে করা যায়?',
    answer: 'বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার এবং মাঠ পর্যায়ে মেশিন বুঝে পেয়ে ক্যাশ অন ডেলিভারি (COD) পেমেন্ট করা যায়।'
  },
  {
    id: 'faq-10',
    category: 'ফার্ম ইঞ্জিনিয়ারিং',
    question: 'আপনারা কি সম্পূর্ণ খামারের মাস্টারপ্ল্যান তৈরি করতে পারেন?',
    answer: 'হ্যাঁ, জমির টপোগ্রাফিক সার্ভে, ড্রেনেজ নিকাশ, রাস্তা, সেচ পাইপলাইন, পোল্ট্রি/ডেইরি শেড এবং ফলের বাগান জোনিং সহ পূর্ণাঙ্গ ২ডি/৩ডি মাস্টারপ্ল্যান তৈরি ও বাস্তবায়ন করি।'
  }
];

// -------------------------------------------------------------
// 9. TESTIMONIALS DATA (Authentic Bangladeshi Farmers - strictly male/neutral portraits)
// -------------------------------------------------------------
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'মো. রফিকুল ইসলাম',
    location: 'শিবগঞ্জ, বগুড়া',
    crop: 'পেঁপে ও মাল্টা বাগান (৮ বিঘা)',
    comment: 'AYT Agro-এর ড্রিপ ইরিগেশন নেওয়ার পর আমার সময় ও পানি দুটোরই সাশ্রয় হয়েছে। আগে যেখানে ৩ জন শ্রমিক লাগতো, এখন একা একটি সুইচ অন করলেই পুরো বাগানে সঠিক পরিমাণে পানি ও সার চলে যায়। ফলনও অনেক ভালো হয়েছে।',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    verified: true
  },
  {
    id: 2,
    name: 'হাজী মো. মোজাফফর হোসেন',
    location: 'মনিরামপুর, যশোর',
    crop: 'ধান ও ড্রাগন ফ্রুট (১৫ বিঘা)',
    comment: 'মৌসুমের সময় পাওয়ার টিলার ও স্প্রেয়ার ভাড়া পাওয়া অনেক কঠিন হয়ে যেত। AYT Agro থেকে মাত্র এক কলেই সময়মতো ফ্রেশ মেশিন মাঠে হাজির হয়েছে। কোনো ঝামেলা নেই, নির্ধারিত ভাড়ায় দুর্দান্ত সার্ভিস।',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    verified: true
  },
  {
    id: 3,
    name: 'ফারুক আহমেদ',
    location: 'মুক্তাগাছা, ময়মনসিংহ',
    crop: 'সবজি ও নার্সারি প্রোজেক্ট',
    comment: 'মাটি পরীক্ষা করে সার পরামর্শ নেওয়ার পর সারের পেছনে আমার খরচ প্রায় ৩০% কমেছে। তাদের টেকনিক্যাল ইঞ্জিনিয়ার টিম অত্যন্ত আন্তরিক ও দক্ষ। বাংলাদেশের কৃষিতে এরকম সার্ভিস সত্যিই দারুণ।',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    verified: true
  }
];

// -------------------------------------------------------------
// 10. STATISTICS DATA (With placeholder demo metrics)
// -------------------------------------------------------------
export const STATISTICS_DATA = [
  { value: 500, suffix: '+', label: 'কৃষক সেবা সম্পন্ন', desc: 'সফলভাবে আধুনিক কৃষি সেবা গ্রহণ করেছেন' },
  { value: 100, suffix: '+', label: 'আধুনিক যন্ত্রপাতি', desc: 'মাঠ পর্যায়ে ব্যবহারের জন্য প্রস্তুত ইকুইপমেন্ট' },
  { value: 25, suffix: '+', label: 'কৃষি ইঞ্জিনিয়ারিং সমাধান', desc: 'কাস্টমাইজড আধুনিক ফার্ম ও সেচ প্যাকেজ' },
  { value: 24, suffix: '/7', label: 'কাস্টমার ও মাঠ সাপোর্ট', desc: 'জরুরি প্রয়োজনে সার্বক্ষণিক কৃষি বিশেষজ্ঞ সহায়তা' }
];

// -------------------------------------------------------------
// 11. CAREERS DATA (Job Openings)
// -------------------------------------------------------------
export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'ফিল্ড এগ্রোনোমিস্ট (Field Agronomist)',
    department: 'এগ্রিকালচারাল সার্ভিসেস',
    location: 'বগুড়া / যশোর',
    type: 'Full-time',
    experience: '২-৩ বছরের মাঠ পর্যায়ের অভিজ্ঞতা',
    salary: 'আলোচনা সাপেক্ষে + টিএ/ডিএ',
    deadline: '১৫ সেপ্টেম্বর, ২০২৬',
    description: 'কৃষকদের মাঠে গিয়ে মাটির স্বাস্থ্য পরীক্ষা, ফসলের রোগবালাই নির্ণয় ও আধুনিক সেচ প্রযুক্তি বাস্তবায়নে পরামর্শ দেওয়া।',
    requirements: [
      'কৃষি বিজ্ঞানে স্নাতক (B.Sc in Agriculture)',
      'ড্রিপ ও স্প্রিংকলার সেচ ব্যবস্থা সম্পর্কে সম্যক ধারণা',
      'মোটরসাইকেল চালানোর দক্ষতা ও বৈধ লাইসেন্স'
    ]
  },
  {
    id: 'job-2',
    title: 'ফার্ম ইঞ্জিনিয়ারিং স্পেশালিস্ট (Agricultural Engineer)',
    department: 'ইঞ্জিনিয়ারিং ও প্রজেক্টস',
    location: 'ঢাকা হেড অফিস / ফিল্ড ভিজিট',
    type: 'Full-time',
    experience: '৩-৫ বছরের অভিজ্ঞতা',
    salary: 'আলোচনা সাপেক্ষে',
    deadline: '২০ সেপ্টেম্বর, ২০২৬',
    description: 'খামারের ৩ডি লেআউট ড্রয়িং, পাইপলাইন হাইড্রোলিক্স ডিজাইন ও সোলার সেচ প্রকল্প পরিকল্পনা।',
    requirements: [
      'বিএসসি ইন এগ্রিকালচারাল / ওয়াটার রিসোর্স ইঞ্জিনিয়ারিং',
      'AutoCAD ও হাইড্রোলিক সিমুলেশনে দক্ষতা',
      'ফিল্ড ইনস্টলেশন ও প্রজেক্ট ম্যানেজমেন্টের পূর্ব অভিজ্ঞতা'
    ]
  },
  {
    id: 'job-3',
    title: 'কৃষি যন্ত্রপাতি টেকনিশিয়ান (Machinery Technician)',
    department: 'রেন্টাল ও মেইনটেন্যান্স',
    location: 'বগুড়া হাব / যশোর হাব',
    type: 'Full-time',
    experience: '২+ বছরের প্র্যাকটিক্যাল মেকানিক অভিজ্ঞতা',
    salary: '৳ ১৮,০০০ - ৳ ২৫,০০০ + ইনসেন্টিভ',
    deadline: '৩০ সেপ্টেম্বর, ২০২৬',
    description: 'পাওয়ার টিলার, ডিজেল পাম্প, স্প্রেয়ার ও ব্রাশ কাটারের অন-ফিল্ড সার্ভিসিং ও ট্রাবলশুটিং।',
    requirements: [
      'ভোকেশনাল / অটোমোবাইল ডিপ্লোমা অথবা সমমানের বাস্তব অভিজ্ঞতা',
      'ডিজেল ও পেট্রল ইঞ্জিনের নিখুঁত ওভারহোলিং জানা',
      'মাঠে গিয়ে দ্রুত যন্ত্রপাতি সারাই করার মানসিকতা'
    ]
  }
];

// -------------------------------------------------------------
// 12. TEAM MEMBERS (Realistic Professional Team - male portraits/neutral)
// -------------------------------------------------------------
export const TEAM_MEMBERS = [
  {
    name: 'মো. আয়াতুল্লাহ আল হাসান',
    designation: 'প্রতিষ্ঠাতা ও প্রধান নির্বাহী কর্মকর্তা (CEO)',
    expertise: 'এগ্রো-টেক পলিসি ও বিজনেস স্ট্র্যাটেজি',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'বাংলাদেশের কৃষিকে প্রযুক্তিবান্ধব ও টেকসই করতে AYT Agro-এর স্বপ্নদ্রষ্টা।'
  },
  {
    name: 'ইঞ্জি. মো. ফাহিম শাহরিয়ার',
    designation: 'প্রধান প্রকৌশলী (Lead Agro Engineer)',
    expertise: 'স্মার্ট সেচ, পাইপলাইন হাইড্রোলিক্স ও ড্রেনেজ সিস্টেম',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'মাঠ পর্যায়ের ১০০+ ড্রিপ ও সোলার সেচ প্রকল্পের সফল ডিজাইনার।'
  },
  {
    name: 'ড. মোস্তাফিজুর রহমান',
    designation: 'প্রধান কৃষি উপদেষ্টা ও মৃত্তিকা বিজ্ঞানী',
    expertise: 'মাটির উর্বরতা, সার ব্যবস্থাপনা ও টেকসই ফসল সুরক্ষা',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: '২৫ বছরেরও বেশি সময় ধরে মাঠের কৃষক ও গবেষণাগারে সক্রিয়।'
  },
  {
    name: 'মো. শফিকুল ইসলাম',
    designation: 'অপারেশনস ও ফিল্ড সার্ভিস ডিরেক্টর',
    expertise: 'মেশিনারি রেন্টাল লজিস্টিকস ও টেকনিশিয়ান নেটওয়ার্ক',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'জেলা হাবগুলোর মাধ্যমে মাঠ পর্যায়ে সেবা পৌঁছে দেওয়ার সমন্বয়ক।'
  }
];

// Aliases for component convenience
export const FEATURED_PRODUCTS = PRODUCTS_DATA;
export const FAQS = FAQ_DATA;
export const FAQS_DATA = FAQ_DATA;
export const BLOG_POSTS_DATA = BLOG_POSTS;

export const QUICK_SERVICE_STRIP = [
  { id: '1', title: 'স্মার্ট সেচ ইনস্টলেশন', subtitle: 'ড্রিপ ও স্প্রিংকলার', icon: 'Droplets', slug: 'smart-irrigation' },
  { id: '2', title: 'মেশিনারি রেন্টাল', subtitle: 'টিলার, হারভেস্টার, পাম্প', icon: 'Tractor', slug: 'power-tiller-12hp' },
  { id: '3', title: 'মাটি ও পানি পরীক্ষা', subtitle: 'ল্যাব রিপোর্ট ও সার কার্ড', icon: 'FlaskConical', slug: 'soil-testing-fertilizer' },
  { id: '4', title: 'সোলার এগ্রিকালচার', subtitle: 'সোলার পাম্প ও ড্রেনেজ', icon: 'SunMedium', slug: 'solar-agriculture' },
];

export const TRUST_PILLARS = [
  { title: 'অভিজ্ঞ কৃষি প্রকৌশলী', desc: 'বিএইউ ও বুয়েটের অভিজ্ঞ ইঞ্জিনিয়ারদের সরাসরি তত্ত্বাবধান' },
  { title: 'অরিজিনাল যন্ত্রপাতি ও খুচরা যন্ত্রাংশ', desc: 'পরীক্ষিত কোয়ালিটি ও পূর্ণাঙ্গ ওয়ারেন্টি নিশ্চয়তা' },
  { title: 'দ্রুত ফিল্ড সাপোর্ট', desc: 'জেলা হাব থেকে অন-স্পট সার্ভিস ও টেকনিক্যাল ব্যাকআপ' },
  { title: 'ন্যায্য ও স্বচ্ছ মূল্যতালিকা', desc: 'কোনো গোপন চার্জ নেই, সর্বোচ্চ কৃষক স্বার্থরক্ষা' },
];

export const HOW_IT_WORKS_STEPS = [
  { step: '০১', title: 'সেবা বা যন্ত্রপাতি নির্বাচন', desc: 'আপনার খামারের প্রয়োজন অনুযায়ী ওয়েবসাইট বা কল করে সেবা সিলেক্ট করুন।' },
  { step: '০২', title: 'বুকিং ও পরামর্শ', desc: 'আমাদের এগ্রো কনসালট্যান্ট আপনার সাইট বিস্তারিত বুঝে কোটেশন চূড়ান্ত করবেন।' },
  { step: '০৩', title: 'মাঠ পর্যায়ে বাস্তবায়ন', desc: 'নির্ধারিত দিনে টেকনিশিয়ান বা যন্ত্রপাতি সরাসরি আপনার খামারে পৌঁছে যাবে।' },
  { step: '০৪', title: 'ফলাফল ও সার্বক্ষণিক সহায়তা', desc: 'সফল ইনস্টলেশন পরবর্তী নিয়মিত ফলোআপ ও হেল্পলাইন সেবা।' },
];

export const WHY_CHOOSE_US = [
  { title: 'প্রকৌশলভিত্তিক সমাধান', desc: 'শুধু মেশিন বিক্রি নয়, জমির ভূসংস্থান অনুযায়ী বৈজ্ঞানিক নকশা।' },
  { title: 'খরচ সাশ্রয়ী প্যাকেজ', desc: 'ভারী ক্রয়ের বিকল্পে সহজ রেন্টাল ও সাশ্রয়ী সার্ভিসিং।' },
  { title: 'মাঠের বাস্তবিক অভিজ্ঞতা', desc: 'বাংলাদেশের ৬৪ জেলার মাটি, আবহাওয়া ও ফসলের গভীর জ্ঞান।' },
  { title: '১০০% কৃষক সন্তুষ্টি', desc: 'নির্ধারিত সময়ে সর্বোচ্চ মানের কাজের দীর্ঘস্থায়ী নিশ্চয়তা।' },
];

