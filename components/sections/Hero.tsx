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
        {/* Vibrant Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50" />
          <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-100/60 via-transparent to-emerald-50/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(244,63,94,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(168,85,247,0.12)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_rgba(251,191,36,0.1)_0%,transparent_40%)]" />
        </div>

        {/* Floating Flower Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left flower */}
          <div className="absolute -top-4 -left-8 w-48 h-48 md:w-64 md:h-64 opacity-30 animate-[float_8s_ease-in-out_infinite]">
            <Image src="/images/flowers/roses.jpg" alt="" fill className="object-cover rounded-full" />
          </div>
          {/* Top-right flower */}
          <div className="absolute top-16 -right-6 w-40 h-40 md:w-56 md:h-56 opacity-25 animate-[float_10s_ease-in-out_infinite_1s]">
            <Image src="/images/flowers/craspedia.jpg" alt="" fill className="object-cover rounded-full" />
          </div>
          {/* Bottom-left flower */}
          <div className="absolute bottom-24 -left-4 w-36 h-36 md:w-48 md:h-48 opacity-25 animate-[float_9s_ease-in-out_infinite_2s]">
            <Image src="/images/flowers/alstromeria-purple.jpg" alt="" fill className="object-cover rounded-full" />
          </div>
          {/* Bottom-right flower */}
          <div className="absolute bottom-8 right-8 w-44 h-44 md:w-60 md:h-60 opacity-20 animate-[float_11s_ease-in-out_infinite_0.5s]">
            <Image src="/images/flowers/eryngium.jpg" alt="" fill className="object-cover rounded-full" />
          </div>
          {/* Center-left accent */}
          <div className="absolute top-1/3 left-[8%] w-28 h-28 md:w-36 md:h-36 opacity-20 animate-[float_7s_ease-in-out_infinite_3s]">
            <Image src="/images/flowers/alstromeria-pink.jpg" alt="" fill className="object-cover rounded-full" />
          </div>
          {/* Center-right accent */}
          <div className="absolute top-1/2 right-[6%] w-32 h-32 md:w-40 md:h-40 opacity-20 animate-[float_8.5s_ease-in-out_infinite_1.5s]">
            <Image src="/images/flowers/hypericum.jpg" alt="" fill className="object-cover rounded-full" />
          </div>
        </div>

        {/* Animated Petal Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[15%] w-5 h-5 bg-rose-300/40 rounded-full animate-[petal_6s_ease-in-out_infinite]" />
          <div className="absolute top-[25%] right-[20%] w-3 h-3 bg-pink-400/30 rounded-full animate-[petal_8s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[60%] left-[25%] w-4 h-4 bg-amber-300/40 rounded-full animate-[petal_7s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[70%] right-[30%] w-3 h-3 bg-fuchsia-300/30 rounded-full animate-[petal_9s_ease-in-out_infinite_0.5s]" />
          <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-purple-300/30 rounded-full animate-[petal_7.5s_ease-in-out_infinite_3s]" />
          <div className="absolute top-[80%] left-[50%] w-3 h-3 bg-rose-200/40 rounded-full animate-[petal_6.5s_ease-in-out_infinite_1.5s]" />
          <div className="absolute top-[10%] left-[45%] w-2 h-2 bg-pink-300/50 rounded-full animate-[petal_5s_ease-in-out_infinite_2.5s]" />
          <div className="absolute top-[50%] right-[15%] w-3 h-3 bg-amber-400/30 rounded-full animate-[petal_8.5s_ease-in-out_infinite_4s]" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-white/70 backdrop-blur-sm text-rose-600 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full border border-rose-200/50 animate-[fadeInUp_0.8s_ease-out]">
            Premium fresh cut flowers from Kenya
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mt-5 mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Home of Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Fresh Cut Flowers
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            LAMIFLORA LIMITED produces world-class fresh-cut flowers, expertly
            dried floral products, and customized bouquets for clients across the
            globe. A vertically integrated grower and consolidator specializing
            in premium fresh cut flowers, high grade dried flowers, and creative
            custom bouquets and floral mixes.
          </p>
          <div className="animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            <Button onClick={navigateToCollection} variant="rose" className="shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 transition-shadow duration-300 text-base px-8 py-3">
              Explore Our Collection
            </Button>
          </div>
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
