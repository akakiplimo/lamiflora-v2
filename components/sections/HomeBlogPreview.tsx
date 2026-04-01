'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    title: 'Growing Your Own Herb Garden',
    excerpt:
      "A beginner's guide to starting your own herb garden with tips and tricks from our experienced farmers.",
    category: 'Sustainability',
    author: 'Lamiflora Team',
    date: 'January 20, 2025',
    readTime: '5 min read',
    image: '/images/flowers/eucalyptus.jpg',
  },
  {
    title: 'Color, Commerce & Collaboration: Lamiflora at IFTEX 2025',
    excerpt:
      'Discover how sustainable farming practices are revolutionizing the industry.',
    category: 'Quality',
    author: 'Lamiflora Team',
    date: 'June 7, 2025',
    readTime: '8 min read',
    image: '/images/flowers/alstromeria-purple.jpg',
  },
  {
    title: 'From Farm to Table: Our Quality Promise',
    excerpt:
      'Learn about our commitment to delivering the freshest produce directly from our farms.',
    category: 'Quality',
    author: 'Lamiflora Team',
    date: 'March 12, 2025',
    readTime: '6 min read',
    image: '/images/flowers/craspedia.jpg',
  },
];

export default function HomeBlogPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
            From Our Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Discover farming tips, sustainability insights, and the latest news
            from Lamiflora farms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-forest text-white px-3 py-1 rounded-md text-xs font-semibold">
                  {post.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white/90 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-forest mb-2 group-hover:text-forest-500 transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-forest" />
                  </div>
                  <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-forest text-forest hover:bg-green-950 hover:text-white group"
            >
              Read More Articles
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
