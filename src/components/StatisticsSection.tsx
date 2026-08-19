import React, { useEffect, useState, useRef } from 'react';
import { STATISTICS_DATA } from '../data/mockData';

export const StatisticsSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0D3B1C] text-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STATISTICS_DATA.map((stat, idx) => (
            <div key={idx} id={`stat-item-${idx + 1}`} className="space-y-2 p-3">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#80ED99] font-english tracking-tight">
                <Counter target={stat.value} trigger={inView} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {stat.label}
              </h3>
              <p className="text-xs text-emerald-200/70 max-w-xs mx-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  trigger: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1600; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return <span>{count}</span>;
};
