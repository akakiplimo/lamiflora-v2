'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '30+', label: 'Flower varieties cultivated' },
  { value: '50', label: 'Hectares of farmland', suffix: '+' },
  { value: '10', label: 'Years of excellence', suffix: '+' },
  { value: '10', label: 'Countries served worldwide', suffix: '+' },
  { value: '1M', label: 'Stems shipped monthly', suffix: '+' },
];

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const hasM = value.includes('M');
    const hasPlus = value.includes('+');
    const cleanValue = value.replace(/[^0-9.]/g, '');
    const numericValue = parseFloat(cleanValue);
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * easeOut;

      if (hasM) {
        setDisplayValue(current.toFixed(1) + 'M');
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (hasM) {
          setDisplayValue(numericValue + 'M' + (hasPlus ? '+' : suffix));
        } else {
          setDisplayValue(numericValue.toString() + (hasPlus ? '+' : suffix));
        }
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, suffix]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-forest dark:text-emerald-400">
      {displayValue}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-cream dark:bg-gray-900">
      <div className="container-custom">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-forest font-semibold text-sm tracking-wider uppercase">
              Lamiflora by the numbers
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
