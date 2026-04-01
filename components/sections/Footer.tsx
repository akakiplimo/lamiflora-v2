'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/lamiflora-logo.png';
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronUp,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Flowers', href: '/flowers' },
  { label: 'Foliage', href: '/flowers?category=Foliage' },
  { label: 'Dried Flowers', href: '/flowers?category=Dried+Flower' },
  { label: 'Blog', href: '/blog' },
];

const customerService = [
  { label: 'Shipping Policy', href: '#', external: true },
  { label: 'Chatbot', href: '/contacts' },
  { label: 'Contact Us', href: '/contacts' },
];

const certifications = [
  { name: 'FPC Kenya', logo: '/images/certifications/fpc.webp' },
  { name: 'Sedex', logo: '/images/certifications/sedex.jpg' },
  { name: 'AFFA', logo: '/images/certifications/afa.png' },
  { name: 'GlobalG.A.P.', logo: '/images/certifications/globalgap.png' },
  { name: 'Kenya Flower Council', logo: '/images/certifications/kfc.jpg' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Join Our Newsletter
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Subscribe to receive updates on new products, special offers, and
            gardening tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 text-sm"
            />
            <button className="bg-forest hover:cursor-pointer hover:bg-green-600 text-white border font-medium px-6 py-3 rounded-md transition-colors text-sm flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#1a1f2e] text-white">
        {/* Scroll to top */}
        <div className="flex justify-end container-custom pt-4">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-forest hover:bg-forest-500 flex items-center justify-center transition-colors -mt-9 relative z-10 shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={logo}
                  width={130}
                  height={50}
                  alt="Lamiflora Logo"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Growing the finest flowers, herbs, and vegetables with
                dedication and care since 2015. From seed to flower, we bring
                nature&apos;s beauty to your doorstep.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/lamiflora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/lamiflora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/lamiflora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-5">
                Customer Service
              </h4>
              <ul className="space-y-2.5">
                {customerService.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Connected */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-5">
                Stay Connected
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for exclusive offers & floral tips!
              </p>
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50"
                />
                <button className="bg-forest hover:bg-forest-500 text-white px-3 py-2 rounded-md transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-white font-semibold text-sm">
                  Contact Information
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-forest-400 flex-shrink-0" />
                  <span>Nyandarua, Kenya</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-forest-400 flex-shrink-0" />
                  <a href="tel:+254722667154">+254 722 667 154</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-forest-400 flex-shrink-0" />
                  <span>info@lamiflora.co.ke</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-gray-500 text-sm">Certifications:</span>
              <div className="flex flex-wrap items-center gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="relative w-16 h-10"
                    title={cert.name}
                  >
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      fill
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-5">
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Lamiflora Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
