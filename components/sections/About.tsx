'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Heart, Leaf, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 overflow-hidden bg-cream">
      <div className="container-custom">
        <div className="relative bg-gradient-to-r from-white via-rose-50/30 to-white rounded-2xl overflow-hidden">
          {/* Decorative Flower Bouquet Visual */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <radialGradient id="bouquetGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFAA8A" />
                  <stop offset="50%" stopColor="#C41E3A" />
                  <stop offset="100%" stopColor="#1B4D3E" />
                </radialGradient>
              </defs>
              {/* Multiple flowers arrangement */}
              {/* Rose 1 */}
              <g transform="translate(200, 150)">
                <ellipse rx="30" ry="40" fill="#C41E3A" opacity="0.8" />
                <ellipse
                  rx="25"
                  ry="35"
                  fill="#E24563"
                  opacity="0.6"
                  transform="rotate(30)"
                />
                <ellipse
                  rx="20"
                  ry="30"
                  fill="#FFAA8A"
                  opacity="0.7"
                  transform="rotate(60)"
                />
                <circle r="10" fill="#D4A84B" />
              </g>
              {/* Rose 2 */}
              <g transform="translate(280, 200)">
                <ellipse rx="25" ry="35" fill="#9B7BB8" opacity="0.7" />
                <ellipse
                  rx="20"
                  ry="30"
                  fill="#C4A8D8"
                  opacity="0.6"
                  transform="rotate(45)"
                />
                <circle r="8" fill="#D4A84B" />
              </g>
              {/* Rose 3 */}
              <g transform="translate(150, 220)">
                <ellipse rx="28" ry="38" fill="#FFAA8A" opacity="0.8" />
                <ellipse
                  rx="22"
                  ry="32"
                  fill="#FFD4C4"
                  opacity="0.6"
                  transform="rotate(-30)"
                />
                <circle r="9" fill="#D4A84B" />
              </g>
              {/* Leaves */}
              <path
                d="M200,280 Q180,320 200,380 Q220,320 200,280"
                fill="#1B4D3E"
                opacity="0.6"
              />
              <path
                d="M170,260 Q140,290 160,340 Q180,290 170,260"
                fill="#2D8B68"
                opacity="0.5"
              />
              <path
                d="M240,270 Q270,300 250,350 Q230,300 240,270"
                fill="#236B50"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12">
            {/* Left Content */}
            <div>
              <span className="text-rose font-semibold tracking-wider uppercase text-sm">
                Who we are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mt-3 mb-6">
                A leading flower farm committed to excellence and sustainability
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nestled in the highlands with perfect growing conditions,
                Lamiflora has been cultivating premium flowers for nearly three
                decades. Our farms span over 500 hectares of carefully managed
                land where nature and innovation work hand in hand.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We combine traditional horticultural expertise with modern
                sustainable practices to produce flowers that are not only
                beautiful but also environmentally responsible. Every bloom
                tells a story of dedication, care, and respect for our planet.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" className="group">
                  Our Story
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right Content - Quote Box */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-rose" />
                </div>
                <div>
                  <p className="text-forest italic text-lg leading-relaxed font-accent">
                    "We believe that every flower we grow carries a piece of our
                    heart. Our mission is to bring joy and beauty to homes
                    around the world while nurturing the land that makes it all
                    possible."
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    — The Lamiflora Family
                  </p>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-forest/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-forest" />
                  </div>
                  <span className="text-xs text-gray-600">Global Export</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-forest/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-forest" />
                  </div>
                  <span className="text-xs text-gray-600">Certified</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-forest/10 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-forest" />
                  </div>
                  <span className="text-xs text-gray-600">Sustainable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
