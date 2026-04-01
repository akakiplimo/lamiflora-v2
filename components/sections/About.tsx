'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Target, Star, Heart, Leaf, Globe, Truck, Shield } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Welcome Section with Video */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
              Welcome to Lamiflora
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto">
              Experience our sustainable farming practices and premium quality produce in this short
              introduction to what makes Lamiflora special.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-strong bg-gray-900 group cursor-pointer">
              <img
                src="/images/promise.jpeg"
                alt="Welcome to Lamiflora Farms"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-forest ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading text-xl font-bold">Welcome to Lamiflora Farms</p>
                <p className="text-white/70 text-sm mt-1">Watch our story — from Kenyan highlands to the world</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Click the video above to watch a behind-the-scenes look at our farms in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Lamiflora */}
      <section id="about" className="py-20 bg-cream dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
              Why Choose Lamiflora?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
              Well, the answer is amazingly simple: we offer the best produce of the highest quality at highly competitive prices.
            </p>
          </div>

          {/* Mission / Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-bold text-forest">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To build a long-term relationship with our customers and provide quality
                flowers through sustainable farming and ethical business practices.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose" />
                </div>
                <h3 className="font-heading text-xl font-bold text-forest">Our Core Values</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Integrity, customer focus, and respect. We engage together with partners in
                the interest of sustainable and ethical business practices.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-lavender/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-lavender" />
                </div>
                <h3 className="font-heading text-xl font-bold text-forest">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be a partner of choice in providing quality fresh fruits and vegetables and
                herbs across local and international markets.
              </p>
            </div>

            {/* Our Forte */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-forest">Our Forte</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Strong grower partnerships, Quality, and Timely delivery. Industry
                knowledge. Excellent Customer Service.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center bg-forest hover:bg-forest-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Lamiflora - Story Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="/images/offer.jpeg"
                  alt="Lamiflora Farm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <span className="text-forest font-semibold tracking-wider uppercase text-sm">
                About Lamiflora
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mt-3 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Lamiflora Limited was founded with a simple mission: to bring the finest flowers
                from Kenya&apos;s highlands to the world.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                We specialize in growing summer flowers on our farms in Central Kenya at the foot
                of the Aberdare Ranges and another unit in the Mt Kenya region. These regions
                offer ideal climates for cultivating a wide range of flowers.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We practice sustainable growing practices that respect both nature and our
                communities. Whether you need a single variety or a container full of mixed
                flowers, we deliver with quality and care.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Leaf, label: 'Fresh Products', desc: 'Handpicked daily for maximum freshness and longevity' },
                  { icon: Truck, label: 'Local Delivery', desc: 'Delivery available for local customers' },
                  { icon: Globe, label: 'International Shipping', desc: 'We export to European and Middle Eastern markets' },
                  { icon: Shield, label: 'Grown with Love', desc: 'Sustainable and ethical farming practices' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-7 h-7 text-forest" />
                    </div>
                    <h4 className="font-semibold text-forest text-sm mb-1">{item.label}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
