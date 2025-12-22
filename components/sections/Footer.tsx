'use client';

import React from 'react';
import Link from 'next/link';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  flowers: {
    title: 'Our Flowers',
    links: [
      { label: 'Roses', href: '/flowers/roses' },
      { label: 'Lilies', href: '/flowers/lilies' },
      { label: 'Carnations', href: '/flowers/carnations' },
      { label: 'Chrysanthemums', href: '/flowers/chrysanthemums' },
      { label: 'Exotic Varieties', href: '/flowers/exotic' },
      { label: 'Seasonal Blooms', href: '/flowers/seasonal' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Farms', href: '/farms' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Wholesale Orders', href: '/wholesale' },
      { label: 'Retail Partners', href: '/retail' },
      { label: 'Event Flowers', href: '/events' },
      { label: 'Custom Growing', href: '/custom' },
      { label: 'Farm Tours', href: '/tours' },
      { label: 'Shipping Info', href: '/shipping' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Flower Care Tips', href: '/care-tips' },
      { label: 'Blog', href: '/blog' },
      { label: 'News & Press', href: '/news' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Quality Standards', href: '/quality' },
      { label: 'Download Catalog', href: '/catalog' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/lamiflora', label: 'Facebook' },
  {
    icon: Instagram,
    href: 'https://instagram.com/lamiflora',
    label: 'Instagram',
  },
  { icon: Twitter, href: 'https://twitter.com/lamiflora', label: 'Twitter' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/lamiflora',
    label: 'LinkedIn',
  },
  { icon: Youtube, href: 'https://youtube.com/lamiflora', label: 'YouTube' },
];

const certifications = [
  'Fairtrade Certified',
  'MPS-ABC',
  'GlobalG.A.P.',
  'Rainforest Alliance',
];

export default function Footer() {
  return (
    <footer className="bg-forest text-black">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    fill="#000"
                    fillOpacity="0.1"
                  />
                  <ellipse cx="24" cy="14" rx="5" ry="8" fill="#C41E3A" />
                  <ellipse
                    cx="24"
                    cy="14"
                    rx="5"
                    ry="8"
                    fill="#C41E3A"
                    transform="rotate(72 24 24)"
                  />
                  <ellipse
                    cx="24"
                    cy="14"
                    rx="5"
                    ry="8"
                    fill="#C41E3A"
                    transform="rotate(144 24 24)"
                  />
                  <ellipse
                    cx="24"
                    cy="14"
                    rx="5"
                    ry="8"
                    fill="#C41E3A"
                    transform="rotate(216 24 24)"
                  />
                  <ellipse
                    cx="24"
                    cy="14"
                    rx="5"
                    ry="8"
                    fill="#C41E3A"
                    transform="rotate(288 24 24)"
                  />
                  <circle cx="24" cy="24" r="5" fill="#D4A84B" />
                  <circle cx="24" cy="24" r="3" fill="#FFAA8A" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-black leading-tight">
                  LAMIFLORA
                </span>
                <span className="text-xs text-black/60 tracking-widest uppercase">
                  Limited
                </span>
              </div>
            </Link>

            <p className="text-black/70 mb-6 leading-relaxed">
              Premium flower farm cultivating beauty and sustainability since
              1995. From our fields in Kenya to destinations worldwide, we
              deliver excellence in every bloom.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-black/70">
                <MapPin className="w-4 h-4 text-peach flex-shrink-0" />
                <span className="text-sm">Naivasha, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-black/70">
                <Phone className="w-4 h-4 text-peach flex-shrink-0" />
                <span className="text-sm">+254 (0) 722 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-black/70">
                <Mail className="w-4 h-4 text-peach flex-shrink-0" />
                <span className="text-sm">info@lamiflora.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-black mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-black/70 hover:text-peach transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-black/60 text-sm">Certifications:</span>
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1 bg-white/10 rounded-full text-xs text-black/80"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/60 text-sm">
              © {new Date().getFullYear()} Lamiflora Limited. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-black/60 hover:text-peach transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-black/60 hover:text-peach transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-black/60 hover:text-peach transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-2 text-black/60 text-sm">
              <span>🇰🇪</span>
              <span>Proudly Kenyan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
