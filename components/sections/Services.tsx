'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Package, Sparkles, Truck } from 'lucide-react';

export default function Services() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '254722667154';
    const message = encodeURIComponent(
      'Hi Lamiflora, I would like to request your export catalogue.',
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Dark Green Background with Floral Overlay */}
      <div className="absolute inset-0 bg-[#0f2e23]" />
      <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-10" />

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 !text-white">
            We Ship Worldwide
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Lamiflora ships products to over 10 countries. Premium flowers and
            specialty products to Europe and the Middle East, maintaining
            freshness and quality with our cold-chain logistics.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-950 px-8 group"
          >
            Request Catalogue
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: Package,
              title: 'Premium Fresh-Cut Flowers',
              description:
                'World-class summer flowers from our farms in Central Kenya.',
            },
            {
              icon: Sparkles,
              title: 'Dried Floral Products',
              description:
                'Expertly dried flowers preserved for long-lasting beauty.',
            },
            {
              icon: Globe,
              title: 'Custom Bouquets & Mixes',
              description:
                'Tailored arrangements and mixed packs for every need.',
            },
            {
              icon: Truck,
              title: 'Global Export',
              description:
                'Reliable supply to Africa, UK, Europe, Australia & Middle East.',
            },
          ].map((service, index) => (
            <div
              key={service.title}
              className="bg-forest-800 rounded-xl p-6 text-center text-white hover:bg-forest-700 transition-all duration-300 border border-white/15 shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-600/30 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-emerald-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold !text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
