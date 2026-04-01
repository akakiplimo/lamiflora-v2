'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/flowers/alstromeria-red.jpg',
    title: 'Premium Fresh\nCut Flowers',
    subtitle: 'Explore our natural collection',
  },
  {
    image: '/images/flowers/alstromeria-purple.jpg',
    title: 'Alstroemeria\nCollection',
    subtitle: 'Vibrant blooms in every color',
  },
  {
    image: '/images/flowers/eryngium.jpg',
    title: 'Exotic\nVarieties',
    subtitle: 'Unique flowers for every occasion',
  },
  {
    image: '/images/flowers/eucalyptus.jpg',
    title: 'Eucalyptus &\nGreens',
    subtitle: 'Fresh foliage shipped worldwide',
  },
  {
    image: '/images/flowers/craspedia.jpg',
    title: 'Dried Floral\nProducts',
    subtitle: 'Long-lasting natural beauty',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative h-[85vh] min-h-[500px] max-h-[750px] overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <div className="container-custom">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold !text-white mb-4 whitespace-pre-line leading-tight drop-shadow-lg transition-all duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto font-light tracking-wide">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap px-12">
            <Link
              href="/flowers"
              className="inline-flex items-center justify-center bg-forest hover:bg-green-600 text-white px-8 py-3 text-base rounded-sm font-medium transition-colors duration-300"
            >
              Shop Our Collection
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-green-600 hover:text-forest px-8 py-3 text-base rounded-sm font-medium transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all duration-300 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
