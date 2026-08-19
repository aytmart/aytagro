import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, X } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const CareersPage: React.FC = () => {
  const { addToast } = useApp();
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [experienceYears, setExperienceYears] = useState('২-৩ বছর');
  const [note, setNote] = useState('');

  const jobs = [
    {
      id: 'j-1',
      title: 'ফিল্ড এগ্রিকালচারাল ইঞ্জিনিয়ার (Field Hydraulic Engineer)',
      location: 'বগুড়া / রংপুর / নাটোর',
      type: 'Full-time',
      experience: '২-৪ বছর',
      deadline: '১৫ মে, ২০২৬',
      desc: 'স্মার্ট সেচ, পাইপলাইন ইনস্টলেশন, কন্ট্যুর ড্রেনেজ এবং সোলার সাবমারসিবল পাম্প প্রজেক্টের ফিল্ড বাস্তবায়নের দায়িত্বে থাকবেন।'
    },
    {
      id: 'j-2',
      title: 'মাঠ পর্যায়ের কৃষিবিদ ও ক্রপ কনসালট্যান্ট (Agronomist)',
      location: 'দিনাজপুর / যশোর',
      type: 'Full-time',
      experience: '১-৩ বছর',
      deadline: '২০ মে, ২০২৬',
      desc: 'কৃষকদের মাটি পরীক্ষা, সার প্রাক্কলন এবং রোগবালাই দমনে বৈজ্ঞানিক পরামর্শ ও ফিল্ড ভিজিট পরিচালনা করবেন।'
    },
    {
      id: 'j-3',
      title: 'ভারী কৃষি যন্ত্রপাতি টেকনিশিয়ান (Machinery Technician)',
      location: 'বগুড়া সেন্ট্রাল হাব',
      type: 'Full-time',
      experience: '৩+ বছর',
      deadline: '৩০ মে, ২০২৬',
      desc: 'পাওয়ার টিলার, কম্বাইন হারভেস্টার ও সোলার ট্রলি পাম্পের রক্ষণাবেক্ষণ ও দ্রুত ফিল্ড সার্ভিস প্রদান।'
    },
    {
      id: 'j-4',
      title: 'ডিস্ট্রিক্ট হাব কোঅর্ডিনেটর (Hub Logistics Manager)',
      location: 'ময়মনসিংহ হাব',
      type: 'Full-time',
      experience: '২+ বছর',
      deadline: '২৫ মে, ২০২৬',
      desc: 'হাবের মেশিনারি রেন্টাল শিডিউলিং, বুকিং হ্যান্ডলিং এবং গ্রাহক রিলেশনশিপ রক্ষা করা।'
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = 
      `🌾 AYT Agro ক্যারিয়ার ও চাকুরির আবেদন:\n\n` +
      `📌 পদবী: ${selectedJob.title}\n` +
      `👤 আবেদনকারীর নাম: ${applicantName}\n` +
      `📞 মোবাইল: ${applicantPhone}\n` +
      `⏳ অভিজ্ঞতা: ${experienceYears}\n` +
      `📝 অতিরিক্ত বিবরণ: ${note || 'নেই'}`;

    window.open(generateWhatsAppLink(text), '_blank');
    addToast('success', 'আবেদন সফলভাবে সম্পন্ন হয়েছে!');
    setSelectedJob(null);
    setApplicantName('');
    setApplicantPhone('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero */}
      <div className="bg-[#0A2E16] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Careers at AYT Agro</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            আমাদের টিমে যুক্ত হোন
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-light leading-relaxed">
            বাংলাদেশের কৃষিকে আধুনিকায়নের এই অগ্রযাত্রায় আমরা খুঁজছি নিবেদিতপ্রাণ ইঞ্জিনিয়ার, কৃষিবিদ ও মাঠ পর্যায়ের কর্মীদের।
          </p>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#0F4A24] text-xs font-bold font-english">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                    অভিজ্ঞতা: {job.experience}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {job.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {job.desc}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1E7E34]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#1E7E34]" />
                    আবেদনের শেষ তারিখ: {job.deadline}
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-3 rounded-2xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>আবেদন করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-[#1E7E34] uppercase tracking-wider">আবেদন ফর্ম</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">{selectedJob.title}</h3>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">আপনার পূর্ণ নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="নাম লিখুন"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">মোবাইল নম্বর *</label>
                <input
                  type="tel"
                  required
                  placeholder="017XXXXXXXX"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">কাজের অভিজ্ঞতা</label>
                <select
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-hidden focus:border-[#1E7E34]"
                >
                  <option value="ফ্রেশ গ্র্যাজুয়েট / শিক্ষানবিস">ফ্রেশ গ্র্যাজুয়েট / শিক্ষানবিস</option>
                  <option value="১-২ বছর">১-২ বছর</option>
                  <option value="৩-৫ বছর">৩-৫ বছর</option>
                  <option value="৫+ বছর">৫+ বছর</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">সংক্ষিপ্ত পরিচয় ও শিক্ষাগত যোগ্যতা</label>
                <textarea
                  rows={3}
                  placeholder="আপনার ডিগ্রি, বিশ্ববিদ্যালয় ও প্রাসঙ্গিক স্কিল..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1E7E34]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1E7E34] hover:bg-[#155D27] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>আবেদন পত্র জমা দিন (Submit)</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
