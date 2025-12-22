'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Sprout,
  Award,
  Calendar,
} from 'lucide-react';

const updates = [
  {
    title: 'New Rose Varieties: Introducing our 2025 Collection',
    category: 'New Arrivals',
    date: 'November 2024',
    icon: Sprout,
  },
  {
    title: 'Lamiflora Receives Fairtrade Gold Certification',
    category: 'Certification',
    date: 'October 2024',
    icon: Award,
  },
  {
    title: 'Harvest Season Update: Record Yields Across All Farms',
    category: 'Farm Update',
    date: 'September 2024',
    icon: Calendar,
  },
];

export default function FarmUpdates() {
  return (
    <section className="py-20 bg-forest text-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-peach font-semibold tracking-wider uppercase text-sm">
              Farm updates
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mt-3">
              The latest from our fields
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <div
              key={update.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient - flower field aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose/40 via-peach/30 to-forest-600">
                {/* Decorative flower elements */}
                <svg
                  viewBox="0 0 300 400"
                  className="absolute inset-0 w-full h-full opacity-30"
                >
                  {/* Flower field silhouettes */}
                  <g
                    className="animate-sway"
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    <line
                      x1="80"
                      y1="400"
                      x2="80"
                      y2="280"
                      stroke="#1B4D3E"
                      strokeWidth="3"
                    />
                    <circle
                      cx="80"
                      cy="260"
                      r="20"
                      fill="#C41E3A"
                      opacity="0.6"
                    />
                  </g>
                  <g
                    className="animate-sway"
                    style={{
                      transformOrigin: 'bottom center',
                      animationDelay: '0.5s',
                    }}
                  >
                    <line
                      x1="150"
                      y1="400"
                      x2="150"
                      y2="250"
                      stroke="#1B4D3E"
                      strokeWidth="3"
                    />
                    <circle
                      cx="150"
                      cy="230"
                      r="25"
                      fill="#FFAA8A"
                      opacity="0.7"
                    />
                  </g>
                  <g
                    className="animate-sway"
                    style={{
                      transformOrigin: 'bottom center',
                      animationDelay: '1s',
                    }}
                  >
                    <line
                      x1="220"
                      y1="400"
                      x2="220"
                      y2="290"
                      stroke="#1B4D3E"
                      strokeWidth="3"
                    />
                    <circle
                      cx="220"
                      cy="270"
                      r="18"
                      fill="#9B7BB8"
                      opacity="0.6"
                    />
                  </g>
                  {/* Ground/grass */}
                  <path
                    d="M0,380 Q75,360 150,380 T300,380 L300,400 L0,400 Z"
                    fill="#2D8B68"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 h-80 flex flex-col justify-end">
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <update.icon className="w-5 h-5 text-black" />
                </div>

                <span className="text-peach text-xs font-semibold tracking-wider uppercase mb-2">
                  {update.category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-black mb-3 group-hover:text-peach transition-colors leading-tight">
                  {update.title}
                </h3>
                <span className="text-black/60 text-sm">{update.date}</span>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
