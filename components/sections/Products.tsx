'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const products = [
  {
    title: 'Premium Roses',
    subtitle: 'Kenya Highland Collection',
    category: 'Roses',
    description:
      'Our signature roses are grown at high altitude for exceptional color depth and extended vase life. Available in 40+ stunning varieties.',
    colors: ['#C41E3A', '#E24563', '#FFAA8A'],
    badge: 'Best Seller',
  },
  {
    title: 'Exotic Lilies',
    subtitle: 'Oriental & Asiatic Varieties',
    category: 'Lilies',
    description:
      'Fragrant and elegant, our lilies bring sophisticated beauty to any arrangement. Perfect for special occasions.',
    colors: ['#FFFFFF', '#FFAA8A', '#9B7BB8'],
    badge: 'Popular',
  },
  {
    title: 'Garden Carnations',
    subtitle: 'Spray & Standard',
    category: 'Carnations',
    description:
      'Long-lasting and versatile, our carnations come in a rainbow of colors. Ideal for both retail and event floristry.',
    colors: ['#C41E3A', '#9B7BB8', '#FFAA8A'],
    badge: 'New Colors',
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="mb-12">
          <span className="text-rose font-semibold tracking-wider uppercase text-sm">
            Our flower collection
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest max-w-2xl">
              Cultivating nature's finest blooms
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                {/* Gradient background representing flowers */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${product.colors[0]}90 0%, ${product.colors[1]}70 50%, ${product.colors[2]}50 100%)`,
                  }}
                />

                {/* Decorative flower shapes */}
                <svg
                  viewBox="0 0 300 200"
                  className="absolute inset-0 w-full h-full"
                >
                  {product.category === 'Roses' && (
                    <>
                      {/* Rose shapes */}
                      <g transform="translate(150, 100)">
                        <ellipse rx="40" ry="50" fill="#fff" opacity="0.3" />
                        <ellipse
                          rx="35"
                          ry="45"
                          fill="#fff"
                          opacity="0.2"
                          transform="rotate(30)"
                        />
                        <ellipse
                          rx="30"
                          ry="40"
                          fill="#fff"
                          opacity="0.25"
                          transform="rotate(60)"
                        />
                        <ellipse
                          rx="25"
                          ry="35"
                          fill="#fff"
                          opacity="0.2"
                          transform="rotate(90)"
                        />
                        <circle r="12" fill="#D4A84B" opacity="0.6" />
                      </g>
                      <g transform="translate(80, 70)">
                        <ellipse rx="25" ry="35" fill="#fff" opacity="0.2" />
                        <ellipse
                          rx="20"
                          ry="28"
                          fill="#fff"
                          opacity="0.15"
                          transform="rotate(45)"
                        />
                      </g>
                      <g transform="translate(230, 130)">
                        <ellipse rx="20" ry="28" fill="#fff" opacity="0.2" />
                        <ellipse
                          rx="15"
                          ry="22"
                          fill="#fff"
                          opacity="0.15"
                          transform="rotate(-30)"
                        />
                      </g>
                    </>
                  )}
                  {product.category === 'Lilies' && (
                    <>
                      {/* Lily shapes - star-like petals */}
                      <g transform="translate(150, 100)">
                        <ellipse
                          cx="0"
                          cy="-40"
                          rx="15"
                          ry="45"
                          fill="#fff"
                          opacity="0.3"
                        />
                        <ellipse
                          cx="0"
                          cy="-40"
                          rx="15"
                          ry="45"
                          fill="#fff"
                          opacity="0.3"
                          transform="rotate(60)"
                        />
                        <ellipse
                          cx="0"
                          cy="-40"
                          rx="15"
                          ry="45"
                          fill="#fff"
                          opacity="0.3"
                          transform="rotate(120)"
                        />
                        <ellipse
                          cx="0"
                          cy="-40"
                          rx="15"
                          ry="45"
                          fill="#fff"
                          opacity="0.3"
                          transform="rotate(180)"
                        />
                        <ellipse
                          cx="0"
                          cy="-40"
                          rx="15"
                          ry="45"
                          fill="#fff"
                          opacity="0.3"
                          transform="rotate(240)"
                        />
                        <ellipse
                          cx="0"
                          cy="-40"
                          rx="15"
                          ry="45"
                          fill="#fff"
                          opacity="0.3"
                          transform="rotate(300)"
                        />
                        <circle r="15" fill="#D4A84B" opacity="0.5" />
                      </g>
                    </>
                  )}
                  {product.category === 'Carnations' && (
                    <>
                      {/* Carnation shapes - ruffled petals */}
                      <g transform="translate(150, 100)">
                        {[...Array(12)].map((_, i) => (
                          <ellipse
                            key={i}
                            rx="25"
                            ry="15"
                            fill="#fff"
                            opacity="0.2"
                            transform={`rotate(${i * 30}) translate(0, -25)`}
                          />
                        ))}
                        <circle r="20" fill="#fff" opacity="0.3" />
                      </g>
                      <g transform="translate(70, 60)">
                        {[...Array(8)].map((_, i) => (
                          <ellipse
                            key={i}
                            rx="15"
                            ry="10"
                            fill="#fff"
                            opacity="0.15"
                            transform={`rotate(${i * 45}) translate(0, -15)`}
                          />
                        ))}
                      </g>
                    </>
                  )}
                  {/* Leaves at bottom */}
                  <path
                    d="M0,200 Q50,150 100,180 Q70,170 50,200 Z"
                    fill="#1B4D3E"
                    opacity="0.4"
                  />
                  <path
                    d="M250,200 Q200,160 180,190 Q210,175 240,200 Z"
                    fill="#1B4D3E"
                    opacity="0.3"
                  />
                </svg>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-forest">
                    {product.category}
                  </span>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-rose text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-xs font-semibold">{product.badge}</span>
                </div>

                {/* Color swatches */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-rose text-sm font-medium">
                  {product.subtitle}
                </span>
                <h3 className="font-heading text-xl font-semibold text-forest mb-2 mt-1 group-hover:text-rose transition-colors leading-tight">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn -ml-2 text-rose hover:text-forest"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="group">
            Browse All Varieties
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
