'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Heart, Leaf, Globe, Eye, Target, Star, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-cream">
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
                A vertically integrated grower and consolidator of premium flowers
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in growing summer flowers, with our farms located
                in Central Kenya at the foot of the Aberdare Ranges and another
                unit in the Mt Kenya region. These regions offer ideal climates
                for cultivating a wide range of flowers with our main varieties
                being Eryngium, Craspedia, Ammi Visnaga, Bupleurum Graffiti,
                Alstroemeria, and Eucalyptus (E. Parviflora, Cinerea/Silver
                Dollar, and Baby Blue).
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We also specialize in dried cut flowers. In addition to our own
                production, we have strong partnerships with leading flower farms,
                enabling us to source and supply our customers with premium
                flowers that we don&apos;t grow ourselves according to their needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  className="group"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right Content - Vision, Mission & Values */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft space-y-6">
              {/* Vision */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-forest mb-1">Our Vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be a globally recognized supplier of premium fresh-cut
                    flowers known for quality, reliability, and exceptional
                    customer service.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-forest mb-1">Our Mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To consistently produce and export high-quality flowers while
                    supporting sustainable agriculture, empowering growers, and
                    delivering value to our customers worldwide.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-heading font-bold text-forest mb-3">Core Values</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span className="text-xs text-gray-600"><span className="font-semibold">Quality</span> — Excellence from farm to client</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose flex-shrink-0" />
                    <span className="text-xs text-gray-600"><span className="font-semibold">Integrity</span> — Transparent practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-forest flex-shrink-0" />
                    <span className="text-xs text-gray-600"><span className="font-semibold">Sustainability</span> — Responsible farming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span className="text-xs text-gray-600"><span className="font-semibold">Innovation</span> — Modern methods</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Users className="w-4 h-4 text-lavender flex-shrink-0" />
                    <span className="text-xs text-gray-600"><span className="font-semibold">Customer Focus</span> — Tailored solutions and dependable service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
