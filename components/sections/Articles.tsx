'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    title:
      'How to extend the vase life of your cut flowers: Expert tips from our growers',
    category: 'Care Tips',
    readTime: '4 min read',
    date: 'Nov 15, 2024',
  },
  {
    title:
      'Sustainable floriculture: Our commitment to eco-friendly farming practices',
    category: 'Sustainability',
    readTime: '6 min read',
    date: 'Nov 10, 2024',
  },
  {
    title: 'Wedding flower trends 2025: What brides are choosing this season',
    category: 'Trends',
    readTime: '5 min read',
    date: 'Nov 5, 2024',
  },
];

export default function Articles() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            From the garden journal
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest max-w-2xl">
              Tips, trends, and stories from our flower experts
            </h2>
            <Button variant="outline" className="group w-fit">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group bg-cream rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-forest/60 via-sage/40 to-rose/30">
                  {/* Decorative floral pattern */}
                  <svg
                    viewBox="0 0 200 150"
                    className="absolute inset-0 w-full h-full opacity-40"
                  >
                    {index === 0 && (
                      <>
                        {/* Vase with flowers */}
                        <rect
                          x="70"
                          y="90"
                          width="60"
                          height="50"
                          rx="5"
                          fill="#fff"
                          opacity="0.6"
                        />
                        <ellipse
                          cx="100"
                          cy="90"
                          rx="35"
                          ry="10"
                          fill="#fff"
                          opacity="0.4"
                        />
                        <g transform="translate(100, 60)">
                          <line
                            x1="0"
                            y1="30"
                            x2="0"
                            y2="0"
                            stroke="#1B4D3E"
                            strokeWidth="2"
                          />
                          <circle r="12" fill="#C41E3A" opacity="0.7" />
                        </g>
                        <g transform="translate(80, 55)">
                          <line
                            x1="0"
                            y1="35"
                            x2="0"
                            y2="0"
                            stroke="#1B4D3E"
                            strokeWidth="2"
                          />
                          <circle r="10" fill="#FFAA8A" opacity="0.7" />
                        </g>
                        <g transform="translate(120, 50)">
                          <line
                            x1="0"
                            y1="40"
                            x2="0"
                            y2="0"
                            stroke="#1B4D3E"
                            strokeWidth="2"
                          />
                          <circle r="8" fill="#9B7BB8" opacity="0.7" />
                        </g>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        {/* Leaf pattern for sustainability */}
                        <path
                          d="M50,100 Q70,50 100,80 Q80,90 50,100"
                          fill="#1B4D3E"
                          opacity="0.5"
                        />
                        <path
                          d="M100,110 Q130,60 160,90 Q130,95 100,110"
                          fill="#2D8B68"
                          opacity="0.4"
                        />
                        <path
                          d="M70,120 Q90,80 110,100 Q90,105 70,120"
                          fill="#47AF87"
                          opacity="0.3"
                        />
                        <circle
                          cx="130"
                          cy="50"
                          r="20"
                          fill="#D4A84B"
                          opacity="0.4"
                        />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        {/* Wedding bouquet silhouette */}
                        <g transform="translate(100, 80)">
                          <ellipse rx="50" ry="40" fill="#fff" opacity="0.3" />
                          <circle
                            cx="-20"
                            cy="-20"
                            r="15"
                            fill="#C41E3A"
                            opacity="0.5"
                          />
                          <circle
                            cx="15"
                            cy="-25"
                            r="18"
                            fill="#FFAA8A"
                            opacity="0.5"
                          />
                          <circle
                            cx="0"
                            cy="0"
                            r="12"
                            fill="#fff"
                            opacity="0.4"
                          />
                          <circle
                            cx="-25"
                            cy="5"
                            r="14"
                            fill="#9B7BB8"
                            opacity="0.4"
                          />
                          <circle
                            cx="25"
                            cy="0"
                            r="16"
                            fill="#C41E3A"
                            opacity="0.4"
                          />
                        </g>
                        <path
                          d="M85,120 L100,150 L115,120"
                          fill="#1B4D3E"
                          opacity="0.5"
                        />
                      </>
                    )}
                  </svg>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-rose px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-black">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-forest mb-3 group-hover:text-rose transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn -ml-2 mt-4 text-rose hover:text-forest"
                >
                  Read Article
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
