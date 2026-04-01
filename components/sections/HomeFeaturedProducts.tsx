'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const featuredFlowers = [
  {
    name: 'Eryngium',
    image: '/images/flowers/eryngium.jpg',
    category: 'Thistle',
  },
  {
    name: 'Craspedia',
    image: '/images/flowers/craspedia.jpg',
    category: 'Accent',
  },
  {
    name: 'Eucalyptus',
    image: '/images/flowers/eucalyptus.jpg',
    category: 'Foliage',
  },
  {
    name: 'Alstroemeria Purple',
    image: '/images/flowers/alstromeria-purple.jpg',
    category: 'Cut Flower',
  },
];

const customerFavorites = [
  {
    name: 'Ruscus',
    image: '/images/flowers/ruscus.jpg',
    category: 'Foliage',
  },
  {
    name: 'Hypericum',
    image: '/images/flowers/hypericum.jpg',
    category: 'Accent',
  },
  {
    name: 'Alstroemeria White',
    image: '/images/flowers/alstromeria-white.jpg',
    category: 'Cut Flower',
  },
];

export default function HomeFeaturedProducts() {
  const handleInquiry = (flowerName: string) => {
    const phoneNumber = '254722667154';
    const message = encodeURIComponent(
      `Hi Lamiflora, I would like to inquire about ${flowerName}.`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
              Discover our handpicked selection of seasonal favorites, expertly
              curated for their beauty and freshness.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredFlowers.map((flower) => (
              <div key={flower.name} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-heading text-lg font-semibold text-forest">
                    {flower.name}
                  </h3>
                  <button
                    onClick={() => handleInquiry(flower.name)}
                    className="mt-2 inline-flex items-center gap-2 bg-forest hover:bg-forest-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors w-full justify-center"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/flowers">
              <Button
                variant="outline"
                className="border-forest text-forest hover:bg-green-950 hover:text-white group"
              >
                View All Products
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Favorites */}
      <section className="py-20 bg-cream dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
              Customer Favorites
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
              Our best products sourced from the highlands of Kenya, expertly
              curated for their beauty and freshness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerFavorites.map((flower) => (
              <div key={flower.name} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft">
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-forest/90 text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                    {flower.category}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-heading text-xl font-semibold text-forest">
                    {flower.name}
                  </h3>
                  <button
                    onClick={() => handleInquiry(flower.name)}
                    className="mt-3 inline-flex items-center gap-2 bg-forest hover:bg-forest-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/flowers">
              <Button
                variant="outline"
                className="border-forest text-forest hover:bg-green-950 hover:text-white"
              >
                Shop All Bestsellers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
