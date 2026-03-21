'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flower2, Truck, Calendar, CheckCircle2, Snowflake, DollarSign, Package, Clock, Scissors, Handshake, Globe } from 'lucide-react';

const actionCards = [
  {
    icon: Flower2,
    label: 'EXPLORE FRESH FLOWERS',
    title: 'Explore Fresh Flowers',
    description:
      'Discover our collection of premium fresh-cut flowers including Eryngium, Craspedia, Alstroemeria, Eucalyptus, and more.',
    buttonText: 'View flower catalog',
    buttonVariant: 'outline' as const,
    buttonAction: () => {
      window.location.href = '#products';
    },
  },
  {
    icon: Truck,
    label: 'EXPORT CATALOGUE',
    title: 'View Export Catalogue',
    description:
      'As wholesale exporters, we serve markets across Africa, the UK, Europe, Australia, Singapore, and the Middle East.',
    buttonText: 'Download catalogue',
    buttonVariant: 'outline' as const,
    buttonAction: () => {
      const phoneNumber = '254722667154';
      const message = encodeURIComponent(
        'Hi Lamiflora, I would like to request your export catalogue.'
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    },
  },
  {
    icon: Calendar,
    label: 'CUSTOM BOUQUETS',
    title: 'Customize Your Bouquet',
    description:
      'We create customized bouquets, mixed flower packs, and special-order floral arrangements tailored to your needs.',
    buttonText: 'Request custom order',
    buttonVariant: 'outline' as const,
    buttonAction: () => {
      const phoneNumber = '254722667154';
      const message = encodeURIComponent(
        'Hi Lamiflora, I would like to customize a bouquet order.'
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
            Premium fresh cut flowers from Kenya
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mt-3 mb-4">
            Home of Premium Fresh Cut Flowers
          </h2>
          <p className="text-blue-900 max-w-2xl mx-auto mb-8 text-lg">
            LAMIFLORA LIMITED produces world-class fresh-cut flowers, expertly
            dried floral products, and customized bouquets for clients across the
            globe. A vertically integrated grower and consolidator specializing
            in premium fresh cut flowers, high grade dried flowers, and creative
            custom bouquets and floral mixes.
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

        {/* Why Choose Us & What We Offer */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Why Choose Us */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="relative h-48">
              <Image
                src="/images/promise.jpeg"
                alt="Lamiflora Farm - Quality Promise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-white">
                Why Choose Us
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-[18px] h-[18px] text-green-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Reliable supply all year round</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Snowflake className="w-[18px] h-[18px] text-blue-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Strict post-harvest and cold-chain management</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-[18px] h-[18px] text-amber-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Competitive pricing</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Package className="w-[18px] h-[18px] text-purple-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Custom packaging options</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-rose-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-[18px] h-[18px] text-rose-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Timely global delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="relative h-48">
              <Image
                src="/images/offer.jpeg"
                alt="Lamiflora Farm - Flower Varieties"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-white">
                What We Offer
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-rose-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Flower2 className="w-[18px] h-[18px] text-rose-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Premium fresh-cut flowers and dried floral products</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Scissors className="w-[18px] h-[18px] text-green-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Customized bouquets, mixed flower packs, and special-order arrangements</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-[18px] h-[18px] text-purple-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Strong grower partnerships for sourcing flowers we don&apos;t grow</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-[18px] h-[18px] text-blue-700" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Exports to Africa, UK, Europe, Australia, Singapore, and the Middle East</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
