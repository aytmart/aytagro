import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let bg = 'bg-gray-900 text-white';
        let Icon = Info;
        
        if (toast.type === 'success') {
          bg = 'bg-[#0F4A24] text-white border-l-4 border-[#80ED99]';
          Icon = CheckCircle2;
        } else if (toast.type === 'error') {
          bg = 'bg-red-800 text-white border-l-4 border-red-400';
          Icon = AlertCircle;
        } else if (toast.type === 'warning') {
          bg = 'bg-amber-800 text-white border-l-4 border-amber-300';
          Icon = AlertTriangle;
        }

        return (
          <div
            key={toast.id}
            className={`${bg} p-3.5 rounded-2xl shadow-xl flex items-center justify-between gap-3 text-xs font-semibold pointer-events-auto animate-in slide-in-from-top-3 duration-200`}
          >
            <div className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 flex-shrink-0 text-emerald-300" />
              <span className="leading-snug">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 text-white/70 hover:text-white rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
