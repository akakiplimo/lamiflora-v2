'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/images/lamiflora-logo.png';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Farm Tours',
    href: '#inquiries',
    hasDropdown: false,
  },
  {
    label: 'Our Flowers',
    href: '#products',
    hasDropdown: false,
  },
  {
    label: 'About Us',
    href: '#about',
    hasDropdown: false,
  },
  {
    label: 'Our Services',
    href: '#services',
    hasDropdown: false,
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '254722667154';
    const message = encodeURIComponent(
      'Hi Lamiflora, I would like to request a quote for flowers.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInquiryClick = () => {
    const phoneNumber = '254722667154';
    const message = encodeURIComponent(
      'Hi Lamiflora, I would like to inquire about wholesale orders.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-blue text-black text-center py-2 text-sm font-medium">
        <span>🌸 Fresh blooms delivered worldwide – </span>
        <Link
          href="#"
          onClick={handleInquiryClick}
          className="underline hover:no-underline"
        >
          Wholesale Inquiries Welcome
        </Link>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-soft py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              {/* Lamiflora Logo - Flower design */}
              <Image src={logo} width={50} height={50} alt="Lamiflora Logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-forest leading-tight">
                LAMIFLORA
              </span>
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                Kenyan Flower Farm
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="nav-link flex items-center gap-1 py-2"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="rose" size="sm" onClick={handleWhatsAppClick}>
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-forest" />
            ) : (
              <Menu className="w-6 h-6 text-forest" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 w-full bg-white shadow-medium transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 border-b border-gray-100 text-forest font-medium hover:text-blue-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              variant="rose"
              className="mt-4 w-full"
            >
              Request Quote
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
