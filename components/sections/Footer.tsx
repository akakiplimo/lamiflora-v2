'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/lamiflora-logo.png';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';

const footerLinks = {
  flowers: {
    title: 'Our Flowers',
    links: [
      { label: 'Eryngium', href: '#products' },
      { label: 'Craspedia', href: '#products' },
      { label: 'Alstroemeria', href: '#products' },
      { label: 'Eucalyptus', href: '#products' },
      { label: 'Bupleurum', href: '#products' },
      { label: 'Dried Flowers', href: '#products' },
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
      { label: 'Fresh Cut Flowers', href: '#services' },
      { label: 'Dried Flowers', href: '#services' },
      { label: 'Custom Bouquets', href: '#services' },
      { label: 'Wholesale Export', href: '#services' },
      { label: 'Mixed Flower Packs', href: '#services' },
      { label: 'Special Orders', href: '#services' },
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
  {
    icon: MessageCircle,
    href: 'https://wa.me/254722667154',
    label: 'WhatsApp',
  },
];

const certifications = [
  { name: 'FPC Kenya', logo: '/images/certifications/fpc.webp' },
  { name: 'Sedex', logo: '/images/certifications/sedex.jpg' },
  { name: 'AFFA', logo: '/images/certifications/afa.png' },
  { name: 'GlobalG.A.P.', logo: '/images/certifications/globalgap.png' },
  { name: 'Kenya Flower Council', logo: '/images/certifications/kfc.jpg' },
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
              <Image src={logo} width={120} height={50} alt="Lamiflora Logo" />
            </Link>

            <p className="text-black/70 mb-6 leading-relaxed">
              A vertically integrated grower and consolidator specializing in
              premium fresh cut flowers, high grade dried flowers, and creative
              custom bouquets and floral mixes. From our farms in Central Kenya
              to destinations worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-black/70">
                <MapPin className="w-4 h-4 text-peach flex-shrink-0" />
                <span className="text-sm">Nyandarua, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-black/70">
                <Phone className="w-4 h-4 text-peach flex-shrink-0" />
                <span className="text-sm">
                  <a href="tel:+254722667154">+254 722 667 154</a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-black/70">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="transition-transform duration-300"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.594z" />
                </svg>
                <span className="text-sm">
                  <a
                    href="https://wa.me/254722667154"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us on WhatsApp
                  </a>
                </span>
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
            <div className="flex flex-wrap items-center gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="relative w-20 lg:w-50 h-12 hover:opacity-100 transition-all"
                  title={cert.name}
                >
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
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
