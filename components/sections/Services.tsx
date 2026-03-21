'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flower, Package, Truck, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Flower,
    title: 'Premium Fresh-Cut Flowers',
    description:
      'We grow world-class summer flowers on our farms in Central Kenya, including Eryngium, Craspedia, Ammi Visnaga, Bupleurum, Alstroemeria, and Eucalyptus varieties.',
    buttonText: 'Our Varieties',
    color: 'text-rose',
    bgColor: 'bg-rose/10',
  },
  {
    icon: Package,
    title: 'High Grade Dried Flowers',
    description:
      'We specialize in expertly dried floral products including Craspedia and ornamental grasses, preserved to maintain their beauty and quality.',
    buttonText: 'View Dried Flowers',
    color: 'text-forest',
    bgColor: 'bg-forest/10',
  },
  {
    icon: Sparkles,
    title: 'Custom Bouquets & Floral Mixes',
    description:
      'We add value by creating customized bouquets, mixed flower packs, and special-order floral arrangements tailored to your specific needs.',
    buttonText: 'Custom Orders',
    color: 'text-lavender',
    bgColor: 'bg-lavender/10',
  },
  {
    icon: Truck,
    title: 'Global Wholesale Export',
    description:
      'As wholesale exporters, we serve markets across Africa, the UK, Europe, Australia, Singapore, and the Middle East with reliable supply year round.',
    buttonText: 'Export Inquiry',
    color: 'text-gold-600',
    bgColor: 'bg-gold/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            From our farm to your world
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mt-3">
            What We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-cream rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with decorative floral elements */}
              <div className="relative mb-6 inline-block">
                {/* Decorative petals around icon */}
                <div
                  className={`w-20 h-20 rounded-full ${service.bgColor} flex items-center justify-center mx-auto relative`}
                >
                  <service.icon className={`w-10 h-10 ${service.color}`} />
                </div>
                {/* Small petal decorations */}
                <svg
                  viewBox="0 0 80 80"
                  className="absolute -top-2 -left-2 w-24 h-24 pointer-events-none"
                >
                  <ellipse
                    cx="15"
                    cy="40"
                    rx="6"
                    ry="10"
                    fill="#C41E3A"
                    opacity="0.2"
                    transform="rotate(-30 15 40)"
                  />
                  <ellipse
                    cx="65"
                    cy="40"
                    rx="6"
                    ry="10"
                    fill="#C41E3A"
                    opacity="0.2"
                    transform="rotate(30 65 40)"
                  />
                  <ellipse
                    cx="40"
                    cy="10"
                    rx="5"
                    ry="8"
                    fill="#FFAA8A"
                    opacity="0.3"
                  />
                </svg>
              </div>

              <h3 className="font-heading text-lg font-semibold text-forest mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <Button variant="outline" size="sm" className="group">
                {service.buttonText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
