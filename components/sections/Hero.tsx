'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flower2, Truck, Calendar } from 'lucide-react';

const actionCards = [
  {
    icon: Flower2,
    label: 'EXPLORE VARIETIES',
    title: 'Browse our blooms',
    description:
      'Discover our extensive collection of premium roses, lilies, carnations, and exotic flowers grown with care.',
    buttonText: 'View flower catalog',
    buttonVariant: 'outline' as const,
  },
  {
    icon: Truck,
    label: 'WHOLESALE ORDERS',
    title: 'Bulk purchasing',
    description:
      'Partner with us for consistent, high-quality flower supplies. Competitive pricing for florists and retailers.',
    buttonText: 'Wholesale inquiry',
    buttonVariant: 'outline' as const,
  },
  {
    icon: Calendar,
    label: 'VISIT OUR FARM',
    title: 'Book a farm tour',
    description:
      'Experience the beauty of our flower fields firsthand. Schedule a guided tour of our sustainable farm.',
    buttonText: 'Schedule visit',
    buttonVariant: 'outline' as const,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-Screen Main Headline Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-background.png)',
          }}
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            Cultivating beauty since 1995
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mt-3 mb-4">
            Say it with Flowers
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-lg">
            At Lamiflora, we cultivate the finest flowers using sustainable
            farming practices. From our fields to your arrangements, every bloom
            represents our commitment to quality, freshness, and environmental
            responsibility.
          </p>
          <Button variant="rose">Explore Our Collection</Button>
        </div>
      </div>

      {/* Action Cards & Additional Content */}
      <div className="container-custom py-16">
        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {actionCards.map((card, index) => (
            <div
              key={card.title}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in border border-rose-100/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <card.icon className="w-5 h-5 text-rose" />
                <span className="text-xs font-semibold text-rose tracking-wider uppercase">
                  {card.label}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-forest mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <Button variant={card.buttonVariant} size="sm" className="group">
                {card.buttonText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Our Promise Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-rose">
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-forest mb-4">
                Our promise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every flower that leaves our farm meets the highest standards of
                quality. We hand-select each stem, ensuring only the freshest,
                most vibrant blooms reach our customers. Our cold chain
                logistics guarantee your flowers arrive in perfect condition.
              </p>
            </div>
          </div>

          {/* What We Offer Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-forest">
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-forest mb-4">
                What we offer
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Over 50 varieties of premium cut flowers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Year-round availability with consistent supply
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Sustainable and eco-friendly farming practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Direct farm-to-customer delivery worldwide
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
