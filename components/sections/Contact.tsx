'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with flower field imagery */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-rose/70" />
        {/* Flower field pattern overlay */}
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          {/* Flower field rows */}
          {[...Array(8)].map((_, row) => (
            <g key={row}>
              {[...Array(12)].map((_, col) => {
                const x = col * 100 + (row % 2) * 50;
                const y = 400 + row * 25;
                const colors = ['#C41E3A', '#FFAA8A', '#9B7BB8', '#E24563'];
                const color = colors[(row + col) % colors.length];
                const seedValue = (row * 12 + col) % 10;
                const stemOffset = (seedValue * 3) % 20;
                const circleRadius = 8 + seedValue * 0.6;
                return (
                  <g key={`${row}-${col}`}>
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y - 30 - stemOffset}
                      stroke="#2D8B68"
                      strokeWidth="2"
                    />
                    <circle
                      cx={x}
                      cy={y - 35 - stemOffset}
                      r={circleRadius}
                      fill={color}
                      opacity="0.6"
                    />
                  </g>
                );
              })}
            </g>
          ))}
          {/* Sun/light rays */}
          <circle cx="1000" cy="100" r="80" fill="#D4A84B" opacity="0.3" />
          <circle cx="1000" cy="100" r="120" fill="#D4A84B" opacity="0.1" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-black">
            <span className="text-peach font-semibold tracking-wider uppercase text-sm">
              Get in touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mt-3 mb-6">
              Let's grow together
            </h2>
            <p className="text-black/80 mb-8 leading-relaxed max-w-lg">
              Whether you're a florist, retailer, event planner, or simply love
              flowers, we'd love to hear from you. Our team is ready to help you
              find the perfect blooms for any occasion.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-peach" />
                </div>
                <div>
                  <p className="text-black/60 text-sm">Call us</p>
                  <p className="text-black font-medium">+254 (0) 722 123 456</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-peach" />
                </div>
                <div>
                  <p className="text-black/60 text-sm">Email us</p>
                  <p className="text-black font-medium">info@lamiflora.co.ke</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-peach" />
                </div>
                <div>
                  <p className="text-black/60 text-sm">Visit our farm</p>
                  <p className="text-black font-medium">Nyandarua, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-strong">
            <h3 className="font-heading text-2xl font-bold text-forest mb-2">
              Request a Quote
            </h3>
            <p className="text-gray-600 mb-6">
              Tell us about your flower needs and we'll get back to you within
              24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <Input type="email" placeholder="Email address" />
              <Input placeholder="Company / Business name" />
              <select className="flex h-12 w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-300 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose">
                <option value="">Select inquiry type</option>
                <option value="wholesale">Wholesale Order</option>
                <option value="retail">Retail Partnership</option>
                <option value="events">Event Flowers</option>
                <option value="tour">Farm Tour</option>
                <option value="other">Other</option>
              </select>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-rose focus:ring-rose"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to receive communications from Lamiflora. You can
                  unsubscribe at any time.
                </label>
              </div>

              <Button variant="rose" className="w-full group">
                Send Inquiry
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
