'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-forest text-white text-sm font-medium px-6 py-2 rounded-md mb-6">
            Contact Us
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Have questions about our products or services? We&apos;d love to hear from you. Our team is ready to
            assist you with any inquiries.
          </p>
        </div>

        {/* Map + Form Row */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left: Map + Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-soft h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7!2d36.8!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTgnMDAuMCJTIDM2wrA0OCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lamiflora Location"
              />
            </div>

            {/* Contact Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
              <h3 className="font-heading text-lg font-bold text-forest mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">Address</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Nyandarua, Kenya</p>
                    <a href="#" className="text-forest text-sm font-medium hover:underline">Get directions</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm"><a href="tel:+254722667154">+254 722 667 154</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">Email</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">info@lamiflora.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">Business Hours</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-forest text-sm mb-3">Connect With Us</p>
                <div className="flex gap-3">
                  <a href="https://facebook.com/lamiflora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-forest/10 transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="https://instagram.com/lamiflora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-forest/10 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="https://wa.me/254722667154" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-forest/10 transition-colors" aria-label="WhatsApp">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft h-full">
              <h3 className="font-heading text-2xl font-bold text-forest mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone (Optional)</label>
                    <Input placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                    <Input placeholder="Message subject" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="flex w-full rounded-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-100 px-4 py-3 text-sm transition-all duration-300 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest resize-none"
                  />
                </div>

                <Button className="bg-forest hover:bg-forest-600 text-white group">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Our dedicated team is passionate about delivering quality products to your table and providing
            exceptional service to all our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: 'Farm Director',
              role: 'Director',
              quote: '"At Lamiflora, I grow more than crops — I grow community."',
              image: '/images/promise.jpeg',
            },
            {
              name: 'Operations Manager',
              role: 'Operations',
              quote: '"Dedication to quality, transparency, and long-term sustainability."',
              image: '/images/offer.jpeg',
            },
          ].map((member) => (
            <div key={member.name} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-forest/10">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest">{member.name}</h3>
              <p className="text-forest/70 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic">{member.quote}</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="mailto:info@lamiflora.co.ke" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-forest/10 transition-colors">
                  <Mail className="w-4 h-4 text-gray-600" />
                </a>
                <a href="tel:+254722667154" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-forest/10 transition-colors">
                  <Phone className="w-4 h-4 text-gray-600" />
                </a>
                <a href="https://wa.me/254722667154" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-forest/10 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
