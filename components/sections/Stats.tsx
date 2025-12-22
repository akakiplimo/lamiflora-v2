'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '50+',
    label: 'Flower varieties cultivated',
    suffix: '',
  },
  {
    value: '500',
    label: 'Hectares of farmland',
    suffix: '+',
  },
  {
    value: '30',
    label: 'Years of excellence',
    suffix: '+',
  },
  {
    value: '40',
    label: 'Countries served worldwide',
    suffix: '+',
  },
  {
    value: '2M',
    label: 'Stems shipped monthly',
    suffix: '+',
  },
];

function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Handle special cases like "2M"
    const hasM = value.includes('M');
    const hasPlus = value.includes('+');
    const cleanValue = value.replace(/[^0-9.]/g, '');
    const numericValue = parseFloat(cleanValue);

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
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
        // Set final value
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
    <div ref={ref} className="stat-number text-forest">
      {displayValue}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative">
      {/* Background with flower field imagery */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/50 via-peach/30 to-forest/30">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Crect fill='%231B4D3E' width='1200' height='400'/%3E%3Ccircle cx='100' cy='200' r='30' fill='%23C41E3A' opacity='0.3'/%3E%3Ccircle cx='300' cy='150' r='25' fill='%23FFAA8A' opacity='0.4'/%3E%3Ccircle cx='500' cy='220' r='35' fill='%239B7BB8' opacity='0.3'/%3E%3Ccircle cx='700' cy='180' r='28' fill='%23C41E3A' opacity='0.4'/%3E%3Ccircle cx='900' cy='160' r='32' fill='%23FFAA8A' opacity='0.3'/%3E%3Ccircle cx='1100' cy='200' r='26' fill='%239B7BB8' opacity='0.4'/%3E%3Cpath d='M0,350 Q300,280 600,350 T1200,350 L1200,400 L0,400 Z' fill='%232D8B68' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative z-10 py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-rose font-semibold tracking-wider uppercase text-sm">
              Growing excellence,
              <br />
              <span className="text-forest">Delivering beauty</span>
            </span>
          </div>

          {/* Stats Grid - White background box */}
          <div className="bg-white rounded-2xl shadow-strong p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="text-rose font-semibold text-sm tracking-wider uppercase">
                Lamiflora by the numbers
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-gray-600 mt-2 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
