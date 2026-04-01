'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/images/lamiflora-logo.png';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  ShoppingBag,
  Sun,
  Moon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/ThemeProvider';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Flowers',
    href: '/flowers',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Fresh Cut Flowers', href: '/flowers?category=Cut+Flower' },
      { label: 'Dried Flowers', href: '/flowers?category=Dried+Flower' },
      { label: 'Foliage', href: '/flowers?category=Foliage' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Products',
    href: '/flowers',
    hasDropdown: true,
    dropdownItems: [
      { label: 'All Flowers', href: '/flowers' },
      { label: 'Fillers & Accents', href: '/flowers?category=Filler' },
    ],
  },
  { label: 'Contacts', href: '/contacts' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      'Hi Lamiflora, I would like to request a quote for flowers.',
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Status Banner */}
      <div className="bg-green-950 dark:bg-gray-950 text-white text-center py-2 text-sm font-medium tracking-wide">
        <span className="text-white/80 uppercase text-xs tracking-widest">
          Current Status:{' '}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            Accepting Enquiries
          </span>
        </span>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white dark:bg-gray-900 shadow-medium py-2'
            : 'bg-white dark:bg-gray-900 py-3',
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              width={140}
              height={55}
              alt="Lamiflora Logo"
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link flex items-center gap-1 px-4 py-2 text-[15px]"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div
                    className={cn(
                      'absolute top-full left-0 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-medium border border-gray-100 dark:border-gray-700 py-2 transition-all duration-200',
                      activeDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2',
                    )}
                  >
                    {item.dropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-forest/5 dark:hover:bg-forest/20 hover:text-forest dark:hover:text-green-400 transition-colors"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-forest dark:hover:text-green-400 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href="tel:+254722667154"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-forest dark:hover:text-green-400 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-forest dark:hover:text-green-400 transition-colors"
              aria-label="Request quote"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <div className="w-px h-5 bg-gray-200 dark:bg-gray-700" />
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-forest dark:hover:text-yellow-400 transition-colors"
              aria-label={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-forest dark:hover:text-yellow-400 transition-colors"
              aria-label={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-forest dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-forest dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-medium transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <nav className="container-custom py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 px-4 rounded-lg text-forest dark:text-gray-200 font-medium hover:bg-forest/5 dark:hover:bg-forest/20 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 px-4">
              <a
                href="tel:+254722667154"
                className="flex items-center gap-2 text-sm text-forest dark:text-green-400 font-medium"
              >
                <Phone className="w-4 h-4" />
                +254 722 667 154
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
