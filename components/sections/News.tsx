'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Calendar, Building2 } from 'lucide-react';

const newsItems = [
  {
    title: 'Lamiflora Expands Operations with New Greenhouse Facility',
    date: 'December 1, 2024',
    category: 'Expansion',
    icon: Building2,
  },
  {
    title:
      'Partnership Announcement: Exclusive Supply Agreement with European Retailers',
    date: 'November 20, 2024',
    category: 'Partnership',
    icon: Award,
  },
  {
    title:
      'Lamiflora Named Best Sustainable Flower Farm at Africa Agriculture Awards',
    date: 'November 10, 2024',
    category: 'Award',
    icon: Award,
  },
];

export default function News() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="mb-12">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            News & Press
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
              In the news
            </h2>
            <Button variant="outline" className="group w-fit">
              View All News
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-peach/40 via-rose/30 to-forest/40">
                  {/* News imagery placeholder */}
                  <svg
                    viewBox="0 0 300 200"
                    className="absolute inset-0 w-full h-full opacity-50"
                  >
                    {index === 0 && (
                      <>
                        {/* Greenhouse silhouette */}
                        <path
                          d="M50,180 L50,100 L150,50 L250,100 L250,180 Z"
                          fill="#fff"
                          opacity="0.4"
                        />
                        <path
                          d="M50,100 L150,50 L250,100"
                          fill="none"
                          stroke="#1B4D3E"
                          strokeWidth="3"
                          opacity="0.5"
                        />
                        <rect
                          x="80"
                          y="120"
                          width="40"
                          height="60"
                          fill="#1B4D3E"
                          opacity="0.2"
                        />
                        <rect
                          x="140"
                          y="110"
                          width="50"
                          height="70"
                          fill="#1B4D3E"
                          opacity="0.2"
                        />
                        <rect
                          x="210"
                          y="130"
                          width="30"
                          height="50"
                          fill="#1B4D3E"
                          opacity="0.2"
                        />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        {/* Handshake / partnership */}
                        <circle
                          cx="150"
                          cy="100"
                          r="60"
                          fill="#fff"
                          opacity="0.3"
                        />
                        <path
                          d="M100,100 Q120,80 150,100 Q180,120 200,100"
                          fill="none"
                          stroke="#1B4D3E"
                          strokeWidth="4"
                          opacity="0.5"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="15"
                          fill="#C41E3A"
                          opacity="0.4"
                        />
                        <circle
                          cx="200"
                          cy="100"
                          r="15"
                          fill="#C41E3A"
                          opacity="0.4"
                        />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        {/* Award trophy */}
                        <path
                          d="M130,150 L170,150 L165,100 L135,100 Z"
                          fill="#D4A84B"
                          opacity="0.6"
                        />
                        <ellipse
                          cx="150"
                          cy="100"
                          rx="40"
                          ry="25"
                          fill="#D4A84B"
                          opacity="0.5"
                        />
                        <ellipse
                          cx="150"
                          cy="85"
                          rx="30"
                          ry="35"
                          fill="#D4A84B"
                          opacity="0.4"
                        />
                        <rect
                          x="140"
                          y="150"
                          width="20"
                          height="20"
                          fill="#1B4D3E"
                          opacity="0.4"
                        />
                        <rect
                          x="125"
                          y="170"
                          width="50"
                          height="10"
                          fill="#1B4D3E"
                          opacity="0.3"
                        />
                      </>
                    )}
                  </svg>
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <item.icon className="w-3 h-3 text-forest" />
                  <span className="text-xs font-semibold text-forest">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-forest mb-3 group-hover:text-rose transition-colors leading-tight line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn -ml-2 mt-4 text-rose hover:text-forest"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
