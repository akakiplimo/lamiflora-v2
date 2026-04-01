'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Ruler, ShoppingBag } from 'lucide-react';

const flowers = [
  {
    name: 'Ruscus',
    scientificName: 'Ruscus aculeatus',
    description: 'Elegant dark green foliage with long-lasting qualities, perfect for adding texture and structure to arrangements.',
    image: '/images/flowers/ruscus.jpg',
    sizes: ['42cm', '52cm', '62cm'],
    category: 'Foliage',
    color: '#2D5A27',
  },
  {
    name: 'Eryngium',
    scientificName: 'Eryngium planum',
    description: 'Striking thistle-like blooms with a metallic blue hue, adding unique texture and visual interest.',
    image: '/images/flowers/eryngium.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Thistle',
    color: '#4A6FA5',
  },
  {
    name: 'Bupleurum',
    scientificName: 'Bupleurum griffithii',
    description: 'Delicate chartreuse-green flowers that add lightness and movement to floral designs.',
    image: '/images/flowers/bupleurum.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#8DB255',
  },
  {
    name: 'Craspedia',
    scientificName: 'Craspedia globosa',
    description: 'Cheerful golden-yellow drumstick flowers that bring sunny warmth and modern appeal.',
    image: '/images/flowers/craspedia.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Accent',
    color: '#E8B923',
  },
  {
    name: 'Ammi-Visnaga',
    scientificName: 'Ammi visnaga',
    description: 'Elegant white lace-like umbels creating an airy, romantic quality in arrangements.',
    image: '/images/flowers/ammi-visnaga.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#F5F5DC',
  },
  {
    name: 'Ammi-Mujus',
    scientificName: 'Ammi mujus',
    description: 'Elegant white lace-like umbels creating an airy, romantic quality in arrangements.',
    image: '/images/flowers/ammi-mujus.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#F5F5DC',
  },
  {
    name: 'Arabicum Sundersia',
    scientificName: 'Arabicum Sundersia',
    description: 'Elegant white lace-like umbels creating an airy, romantic quality in arrangements.',
    image: '/images/flowers/arabicum-sundersia.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#E0E4CC',
  },
  {
    name: 'Eucalyptus',
    scientificName: 'Eucalyptus cinerea',
    description: 'Aromatic silver-green foliage with beautiful round leaves, a favorite for modern and rustic designs.',
    image: '/images/flowers/eucalyptus.jpg',
    sizes: ['42cm', '52cm', '62cm'],
    category: 'Foliage',
    color: '#7BA089',
  },
  {
    name: 'Alstroemeria White',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-white.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFFEF0',
  },
  {
    name: 'Alstroemeria Purple',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-purple.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#9B7BB8',
  },
  {
    name: 'Alstroemeria Yellow',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-yellow.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#F2D16B',
  },
  {
    name: 'Alstroemeria Orange',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-orange.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#E85D75',
  },
  {
    name: 'Alstroemeria Red',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-red.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#C41E3A',
  },
  {
    name: 'Alstroemeria Cerise',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-cerise.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#E24563',
  },
  {
    name: 'Alstroemeria Pink',
    scientificName: 'Alstroemeria aurea',
    description: 'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-pink.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFAA8A',
  },
  {
    name: 'Agapanthus',
    scientificName: 'Agapanthus africanus',
    description: 'Majestic spherical blooms in shades of blue and white, creating dramatic focal points.',
    image: '/images/flowers/agapanthus-white.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFFEF0',
  },
  {
    name: 'Agapanthus Blue',
    scientificName: 'Agapanthus africanus',
    description: 'Majestic spherical blooms in shades of blue and white, creating dramatic focal points.',
    image: '/images/flowers/agapanthus-blue.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#6B7FD7',
  },
  {
    name: 'Scabiosa',
    scientificName: 'Scabiosa caucasica',
    description: 'Delicate pincushion flowers with soft, romantic appeal in lovely pastels and deep tones.',
    image: '/images/flowers/scabiosa.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#9B7BB8',
  },
  {
    name: 'Scabiosa Red',
    scientificName: 'Scabiosa caucasica',
    description: 'Delicate pincushion flowers with soft, romantic appeal in lovely pastels and deep tones.',
    image: '/images/flowers/scabiosa-red.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#C41E3A',
  },
  {
    name: 'Ornithogalum',
    scientificName: 'Ornithogalum thyrsoides',
    description: 'Elegant star-shaped white flowers that open progressively, offering exceptional vase life.',
    image: '/images/flowers/ornis.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFFEF0',
  },
  {
    name: 'Hypericum',
    scientificName: 'Hypericum androsaemum',
    description: 'Bright berries in shades of red, pink, and green that add texture and color contrast.',
    image: '/images/flowers/hypericum.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Accent',
    color: '#E24563',
  },
  {
    name: 'Dried Craspedia',
    scientificName: 'Craspedia globosa',
    description: 'Expertly dried golden drumstick flowers that retain their vibrant color and shape for long-lasting floral displays.',
    image: '/images/flowers/craspedia.jpg',
    sizes: ['42cm', '52cm', '62cm'],
    category: 'Dried Flower',
    color: '#D4A84B',
  },
  {
    name: 'Dried Grasses',
    scientificName: 'Various species',
    description: 'A curated selection of ornamental grasses, carefully dried to preserve their natural beauty and texture.',
    image: '/images/flowers/craspedia-potted.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Dried Flower',
    color: '#C4A87B',
  },
];

const categories = [
  'All',
  'Cut Flower',
  'Foliage',
  'Filler',
  'Accent',
  'Thistle',
  'Dried Flower',
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFlower, setSelectedFlower] = useState<(typeof flowers)[0] | null>(null);

  const filteredFlowers =
    selectedCategory === 'All'
      ? flowers
      : flowers.filter((f) => f.category === selectedCategory);

  const closeLightbox = () => setSelectedFlower(null);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredFlowers.findIndex((f) => f.name === selectedFlower?.name);
    let newIndex: number;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredFlowers.length - 1;
    } else {
      newIndex = currentIndex < filteredFlowers.length - 1 ? currentIndex + 1 : 0;
    }
    setSelectedFlower(filteredFlowers[newIndex]);
  };

  const handleInquiry = (flowerName: string) => {
    const phoneNumber = '254722667154';
    const message = encodeURIComponent(
      `Hi Lamiflora, I would like to inquire about ${flowerName}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-forest via-forest to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-15" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold !text-white mb-3">
            All Products
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Browse our complete collection of premium fresh-cut flowers, dried flowers, foliage, and more.
          </p>
        </div>
      </section>

      {/* Products Grid with Sidebar */}
      <section className="py-12 bg-cream dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Category Filter */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-forest mb-4">Categories</h3>
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-forest text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-forest/5 dark:hover:bg-forest/20'
                        }`}
                      >
                        {category}
                        <span className={`float-right text-xs ${selectedCategory === category ? 'text-white/70' : 'text-gray-400'}`}>
                          {category === 'All' ? flowers.length : flowers.filter(f => f.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Range */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-forest mb-4">Size Range</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>42cm - 72cm</p>
                  <p className="text-xs text-gray-400">All stems measured from base to tip</p>
                </div>
              </div>
            </aside>

            {/* Main Grid */}
            <div className="lg:col-span-3">
              {/* Top filter bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing <span className="font-semibold text-forest">{filteredFlowers.length}</span> products
                </p>
                <div className="flex flex-wrap gap-2 lg:hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-forest text-white'
                          : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {filteredFlowers.map((flower, index) => (
              <div
                key={flower.name}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div
                  className="relative aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setSelectedFlower(flower)}
                >
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-forest/90 text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                    {flower.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-forest mb-1">
                    {flower.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {flower.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleInquiry(flower.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-600 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Quote
                  </button>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedFlower && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[500px]">
              <Image
                src={selectedFlower.image}
                alt={selectedFlower.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <span className="text-forest text-xs font-semibold tracking-wider uppercase bg-forest/10 px-3 py-1 rounded-full">
                {selectedFlower.category}
              </span>
              <h3 className="font-heading text-3xl font-bold text-forest mt-3">
                {selectedFlower.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-4">{selectedFlower.scientificName}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {selectedFlower.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler className="w-5 h-5 text-forest" />
                  <span className="font-semibold text-forest">Available Sizes</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {selectedFlower.sizes.map((size, idx) => (
                    <div
                      key={size}
                      className="flex items-center justify-between p-3 bg-cream rounded-lg border border-forest/10"
                    >
                      <span className="font-medium text-forest">{size}</span>
                      <span className="text-sm text-gray-500">
                        {idx === 0 ? 'Short' : idx === selectedFlower.sizes.length - 1 ? 'Extra Long' : idx === 1 ? 'Medium' : 'Long'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleInquiry(selectedFlower.name)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Request Quote
                </button>
                <Button variant="outline" className="flex-1 border-forest text-forest">
                  View Specs
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
