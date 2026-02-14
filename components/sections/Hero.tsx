'use client';

import React from 'react';
import Image from 'next/image';
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
    buttonAction: () => {
      window.location.href = '#products';
    },
  },
  {
    icon: Truck,
    label: 'WHOLESALE ORDERS',
    title: 'Bulk purchasing',
    description:
      'Partner with us for consistent, high-quality flower supplies. Competitive pricing for florists and retailers.',
    buttonText: 'Wholesale inquiry',
    buttonVariant: 'outline' as const,
    buttonAction: () => {
      const phoneNumber = '254722667154';
      const message = encodeURIComponent(
        'Hi Lamiflora, I would like to inquire about wholesale orders.'
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    },
  },
  {
    icon: Calendar,
    label: 'VISIT OUR FARM',
    title: 'Book a farm tour',
    description:
      'Experience the beauty of our flower fields firsthand. Schedule a guided tour of our sustainable farm.',
    buttonText: 'Schedule visit',
    buttonVariant: 'outline' as const,
    buttonAction: () => {
      const phoneNumber = '254722667154';
      const message = encodeURIComponent(
        'Hi Lamiflora, I would like to schedule a visit to your farm.'
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    },
  },
];

export default function Hero() {
  const navigateToCollection = () => {
    window.location.href = '#products';
  };
  return (
    <section className="relative overflow-hidden">
      {/* Full-Screen Main Headline Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient: blue to green */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50" />

          {/* Accent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-yellow-100/30" />

          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047857' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            Cultivating beauty since 2019
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mt-3 mb-4">
            Say it with Flowers
          </h2>
          <p className="text-blue-900 max-w-2xl mx-auto mb-8 text-lg">
            At Lamiflora, we cultivate the finest flowers using sustainable
            farming practices. From our fields to your arrangements, every bloom
            represents our commitment to quality, freshness, and environmental
            responsibility.
          </p>
          <Button onClick={navigateToCollection} variant="rose">
            Explore Our Collection
          </Button>
        </div>
      </div>

      {/* Action Cards & Additional Content */}
      <div
        id="inquiries"
        className="container-custom py-16 bg-gradient-to-b from-yellow-50/30 to-white"
      >
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
              <Button
                onClick={card.buttonAction}
                variant={card.buttonVariant}
                size="sm"
                className="group"
              >
                {card.buttonText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Our Promise Card with Image */}
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-rose">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/promise.jpeg"
                alt="Lamiflora Farm - Quality Promise"
                fill
                className="object-cover"
              />
            </div>
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

          {/* What We Offer Card with Image */}
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-forest">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/offer.jpeg"
                alt="Lamiflora Farm - Flower Varieties"
                fill
                className="object-cover"
              />
            </div>
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
