'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, ChevronLeft, ChevronRight, Ruler } from 'lucide-react';

const flowers = [
  {
    name: 'Ruscus',
    scientificName: 'Ruscus aculeatus',
    description:
      'Elegant dark green foliage with long-lasting qualities, perfect for adding texture and structure to arrangements.',
    image: '/images/flowers/ruscus.jpg',
    sizes: ['42cm', '52cm', '62cm'],
    category: 'Foliage',
    color: '#2D5A27',
  },
  {
    name: 'Eryngium',
    scientificName: 'Eryngium planum',
    description:
      'Striking thistle-like blooms with a metallic blue hue, adding unique texture and visual interest.',
    image: '/images/flowers/eryngium.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Thistle',
    color: '#4A6FA5',
  },
  {
    name: 'Bupleurum',
    scientificName: 'Bupleurum griffithii',
    description:
      'Delicate chartreuse-green flowers that add lightness and movement to floral designs.',
    image: '/images/flowers/bupleurum.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#8DB255',
  },
  {
    name: 'Craspedia',
    scientificName: 'Craspedia globosa',
    description:
      'Cheerful golden-yellow drumstick flowers that bring sunny warmth and modern appeal.',
    image: '/images/flowers/craspedia.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Accent',
    color: '#E8B923',
  },
  {
    name: 'Ammi-Visnaga',
    scientificName: 'Ammi visnaga',
    description:
      'Elegant white lace-like umbels creating an airy, romantic quality in arrangements.',
    image: '/images/flowers/ammi-visnaga.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#F5F5DC',
  },
  {
    name: 'Ammi-Mujus',
    scientificName: 'Ammi mujus',
    description:
      'Elegant white lace-like umbels creating an airy, romantic quality in arrangements.',
    image: '/images/flowers/ammi-mujus.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#F5F5DC',
  },
  {
    name: 'Roses',
    scientificName: 'Rosa',
    description:
      'Classic and timeless blooms available in a wide range of colors, symbolizing love and beauty.',
    image: '/images/flowers/roses.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#E24563',
  },
  {
    name: 'Arabicum Sundersia',
    scientificName: 'Arabicum Sundersia',
    description:
      'Elegant white lace-like umbels creating an airy, romantic quality in arrangements.',
    image: '/images/flowers/arabicum-sundersia.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Filler',
    color: '#E0E4CC',
  },
  {
    name: 'Eucalyptus',
    scientificName: 'Eucalyptus cinerea',
    description:
      'Aromatic silver-green foliage with beautiful round leaves, a favorite for modern and rustic designs.',
    image: '/images/flowers/eucalyptus.jpg',
    sizes: ['42cm', '52cm', '62cm'],
    category: 'Foliage',
    color: '#7BA089',
  },
  {
    name: 'Alstroemeria White',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-white.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFFEF0',
  },
  {
    name: 'Alstroemeria Purple',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-purple.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#9B7BB8',
  },
  {
    name: 'Alstroemeria Yellow',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-yellow.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#F2D16B',
  },
  {
    name: 'Alstroemeria Orange',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-orange.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#E85D75',
  },
  {
    name: 'Alstroemeria Red',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-red.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#C41E3A',
  },
  {
    name: 'Alstroemeria Cerise',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-cerise.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#E24563',
  },
  {
    name: 'Alstroemeria Pink',
    scientificName: 'Alstroemeria aurea',
    description:
      'Vibrant, long-lasting blooms with striking patterns, available in a stunning array of colors.',
    image: '/images/flowers/alstromeria-pink.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFAA8A',
  },
  {
    name: 'Agapanthus',
    scientificName: 'Agapanthus africanus',
    description:
      'Majestic spherical blooms in shades of blue and white, creating dramatic focal points.',
    image: '/images/flowers/agapanthus-white.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFFEF0',
  },
  {
    name: 'Agapanthus Blue',
    scientificName: 'Agapanthus africanus',
    description:
      'Majestic spherical blooms in shades of blue and white, creating dramatic focal points.',
    image: '/images/flowers/agapanthus-blue.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#6B7FD7',
  },
  {
    name: 'Scabiosa',
    scientificName: 'Scabiosa caucasica',
    description:
      'Delicate pincushion flowers with soft, romantic appeal in lovely pastels and deep tones.',
    image: '/images/flowers/scabiosa.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#9B7BB8',
  },
  {
    name: 'Scabiosa Red',
    scientificName: 'Scabiosa caucasica',
    description:
      'Delicate pincushion flowers with soft, romantic appeal in lovely pastels and deep tones.',
    image: '/images/flowers/scabiosa-red.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#C41E3A',
  },
  {
    name: 'Ornithogalum',
    scientificName: 'Ornithogalum thyrsoides',
    description:
      'Elegant star-shaped white flowers that open progressively, offering exceptional vase life.',
    image: '/images/flowers/ornis.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Cut Flower',
    color: '#FFFEF0',
  },
  {
    name: 'Hypericum',
    scientificName: 'Hypericum androsaemum',
    description:
      'Bright berries in shades of red, pink, and green that add texture and color contrast.',
    image: '/images/flowers/hypericum.jpg',
    sizes: ['42cm', '52cm', '62cm', '72cm'],
    category: 'Accent',
    color: '#E24563',
  },
];

const categories = [
  'All',
  'Cut Flower',
  'Foliage',
  'Filler',
  'Accent',
  'Thistle',
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFlower, setSelectedFlower] = useState<
    (typeof flowers)[0] | null
  >(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredFlowers =
    selectedCategory === 'All'
      ? flowers
      : flowers.filter((f) => f.category === selectedCategory);

  const openLightbox = (flower: (typeof flowers)[0], index: number) => {
    setSelectedFlower(flower);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedFlower(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredFlowers.findIndex(
      (f) => f.name === selectedFlower?.name
    );
    let newIndex: number;

    if (direction === 'prev') {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredFlowers.length - 1;
    } else {
      newIndex =
        currentIndex < filteredFlowers.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedFlower(filteredFlowers[newIndex]);
    setLightboxIndex(newIndex);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '254722667154';
    const message = encodeURIComponent(
      'Hi Lamiflora, I would like to inquire about the price of flowers.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            Our flower collection
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest max-w-2xl">
              Varieties from our farm
            </h2>
            <Button variant="outline" className="group w-fit">
              Download Full Catalog
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue text-blue-700 border border-blue-700 shadow-blue'
                  : 'bg-white text-forest hover:bg-rose/10 border border-gray-200 hover:cursor-pointer'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Flower Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredFlowers.map((flower, index) => (
            <div
              key={flower.name}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(flower, index)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-soft group-hover:shadow-strong transition-all duration-500">
                {/* Placeholder gradient - replace with actual image */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(145deg, ${flower.color}40 0%, ${flower.color}90 50%, ${flower.color}60 100%)`,
                  }}
                />

                {/* Decorative flower illustration */}
                <svg
                  viewBox="0 0 200 260"
                  className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 transition-opacity"
                >
                  {flower.category === 'Foliage' && (
                    <g transform="translate(100, 130)">
                      {/* Leaf shapes */}
                      <ellipse
                        rx="30"
                        ry="60"
                        fill="#fff"
                        opacity="0.4"
                        transform="rotate(-15)"
                      />
                      <ellipse
                        rx="25"
                        ry="55"
                        fill="#fff"
                        opacity="0.3"
                        transform="rotate(15)"
                      />
                      <ellipse
                        rx="20"
                        ry="50"
                        fill="#fff"
                        opacity="0.35"
                        transform="rotate(-5)"
                      />
                      <line
                        x1="0"
                        y1="60"
                        x2="0"
                        y2="130"
                        stroke="#1B4D3E"
                        strokeWidth="3"
                        opacity="0.4"
                      />
                    </g>
                  )}
                  {flower.category === 'Cut Flower' && (
                    <g transform="translate(100, 100)">
                      {/* Flower petals */}
                      {[...Array(6)].map((_, i) => (
                        <ellipse
                          key={i}
                          cx="0"
                          cy="-35"
                          rx="18"
                          ry="35"
                          fill="#fff"
                          opacity="0.4"
                          transform={`rotate(${i * 60})`}
                        />
                      ))}
                      <circle r="15" fill="#fff" opacity="0.5" />
                      <line
                        x1="0"
                        y1="35"
                        x2="0"
                        y2="130"
                        stroke="#1B4D3E"
                        strokeWidth="3"
                        opacity="0.4"
                      />
                    </g>
                  )}
                  {flower.category === 'Filler' && (
                    <g transform="translate(100, 80)">
                      {/* Small clustered flowers */}
                      {[...Array(12)].map((_, i) => (
                        <circle
                          key={i}
                          cx={((i % 4) - 1.5) * 25}
                          cy={Math.floor(i / 4) * 30}
                          r={8 + (i % 3) * 2}
                          fill="#fff"
                          opacity="0.4"
                        />
                      ))}
                      <line
                        x1="0"
                        y1="100"
                        x2="0"
                        y2="160"
                        stroke="#1B4D3E"
                        strokeWidth="2"
                        opacity="0.4"
                      />
                    </g>
                  )}
                  {flower.category === 'Accent' && (
                    <g transform="translate(100, 90)">
                      {/* Round accent flower */}
                      <circle r="40" fill="#fff" opacity="0.5" />
                      <circle r="30" fill="#fff" opacity="0.3" />
                      <line
                        x1="0"
                        y1="40"
                        x2="0"
                        y2="140"
                        stroke="#1B4D3E"
                        strokeWidth="3"
                        opacity="0.4"
                      />
                    </g>
                  )}
                  {flower.category === 'Thistle' && (
                    <g transform="translate(100, 80)">
                      {/* Thistle shape */}
                      <ellipse rx="25" ry="40" fill="#fff" opacity="0.4" />
                      {[...Array(8)].map((_, i) => (
                        <line
                          key={i}
                          x1="0"
                          y1="0"
                          x2={Math.cos((i * Math.PI) / 4) * 35}
                          y2={Math.sin((i * Math.PI) / 4) * 35 - 20}
                          stroke="#fff"
                          strokeWidth="2"
                          opacity="0.4"
                        />
                      ))}
                      <line
                        x1="0"
                        y1="40"
                        x2="0"
                        y2="150"
                        stroke="#1B4D3E"
                        strokeWidth="3"
                        opacity="0.4"
                      />
                    </g>
                  )}
                </svg>

                {/* Actual Image - uncomment when images are added */}
                <Image
                  src={flower.image}
                  alt={flower.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-semibold text-forest">
                    {flower.category}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/90 text-xs line-clamp-2">
                    {flower.description}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="font-heading text-lg font-semibold text-forest group-hover:text-rose transition-colors">
                  {flower.name}
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">
                  {flower.scientificName}
                </p>

                {/* Size Tags */}
                <div className="flex flex-wrap gap-1">
                  {flower.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-0.5 bg-forest/10 text-forest text-xs rounded-full"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            onClick={handleWhatsAppClick}
            variant="rose"
            className="group"
          >
            Request Price List
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedFlower && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Content */}
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:min-h-[500px]">
              <div
                className="absolute inset-0"
                style={{
                  background: `url(${selectedFlower.image}) center/cover no-repeat`,
                }}
              />
              {/* Decorative illustration */}
              <svg
                viewBox="0 0 300 400"
                className="absolute inset-0 w-full h-full opacity-60"
              >
                <g transform="translate(150, 200)">
                  {[...Array(8)].map((_, i) => (
                    <ellipse
                      key={i}
                      cx="0"
                      cy="-50"
                      rx="25"
                      ry="50"
                      fill="#fff"
                      opacity="0.4"
                      transform={`rotate(${i * 45})`}
                    />
                  ))}
                  <circle r="25" fill="#fff" opacity="0.5" />
                  <line
                    x1="0"
                    y1="50"
                    x2="0"
                    y2="180"
                    stroke="#1B4D3E"
                    strokeWidth="4"
                    opacity="0.4"
                  />
                </g>
              </svg>
              {/* Actual Image - uncomment when images are added */}
              {/* <Image
                src={selectedFlower.image}
                alt={selectedFlower.name}
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <span className="text-rose text-sm font-semibold tracking-wider uppercase">
                {selectedFlower.category}
              </span>
              <h3 className="font-heading text-3xl font-bold text-forest mt-2">
                {selectedFlower.name}
              </h3>
              <p className="text-gray-500 italic mb-4">
                {selectedFlower.scientificName}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedFlower.description}
              </p>

              {/* Available Sizes */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler className="w-5 h-5 text-forest" />
                  <span className="font-semibold text-forest">
                    Available Sizes
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {selectedFlower.sizes.map((size, idx) => (
                    <div
                      key={size}
                      className="flex items-center justify-between p-3 bg-cream rounded-lg border border-forest/10"
                    >
                      <span className="font-medium text-forest">{size}</span>
                      <span className="text-sm text-gray-500">
                        {idx === 0
                          ? 'Short'
                          : idx === selectedFlower.sizes.length - 1
                          ? 'Extra Long'
                          : idx === 1
                          ? 'Medium'
                          : 'Long'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="rose" className="flex-1">
                  Request Quote
                </Button>
                <Button variant="outline" className="flex-1">
                  View Specs
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
