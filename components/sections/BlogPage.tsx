'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, User, Search, TrendingUp } from 'lucide-react';

const allPosts = [
  {
    title: 'Color, Commerce & Collaboration: Lamiflora at IFTEX 2025',
    excerpt: 'Discover how sustainable farming practices are revolutionizing the industry and creating a better future for our planet.',
    category: 'Sustainability',
    author: 'Lamiflora Team',
    date: 'June 7, 2025',
    readTime: '8 min read',
    image: '/images/flowers/alstromeria-purple.jpg',
    featured: true,
  },
  {
    title: 'From Farm to Table: Our Quality Promise',
    excerpt: 'Learn about our commitment to delivering the freshest produce directly from our farms to your table.',
    category: 'Quality',
    author: 'Lamiflora Team',
    date: 'March 12, 2025',
    readTime: '6 min read',
    image: '/images/flowers/craspedia.jpg',
    featured: true,
  },
  {
    title: 'Seasonal Eating: Why It Matters',
    excerpt: 'Explore the benefits of eating seasonally and how it can improve your health while supporting local farmers.',
    category: 'Health',
    author: 'Lamiflora Team',
    date: 'March 5, 2024',
    readTime: '6 min read',
    image: '/images/flowers/hypericum.jpg',
    featured: true,
  },
  {
    title: 'From Kenyan Soil to Global Tables: A Day on Lamiflora Farms',
    excerpt: 'Nestled in the fertile highlands of Kenya\'s Rift Valley and the Western regions, Lamiflora\'s vibrant tropical produce begins.',
    category: 'Sustainability',
    author: 'Lamiflora Team',
    date: 'February 20, 2024',
    readTime: '7 min read',
    image: '/images/flowers/eucalyptus.jpg',
    featured: false,
  },
  {
    title: 'Growing Your Own Herb Garden',
    excerpt: 'A beginner\'s guide to starting your own herb garden with tips and tricks from our experienced farmers.',
    category: 'Gardening',
    author: 'Lamiflora Team',
    date: 'January 20, 2025',
    readTime: '5 min read',
    image: '/images/flowers/bupleurum.jpg',
    featured: false,
  },
];

const categories = [
  { name: 'Sustainability', count: 2 },
  { name: 'Quality', count: 1 },
  { name: 'Health', count: 1 },
  { name: 'Products', count: 0 },
  { name: 'Gardening', count: 1 },
];

const popularTags = [
  'Sustainability', 'Organic', 'Health', 'Fresh', 'Quality',
  'Green', 'Premium', 'Seasonal', 'Export',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const trendingPosts = allPosts.filter(p => p.featured).slice(0, 3);
  const filteredPosts = selectedCategory
    ? allPosts.filter(p => p.category === selectedCategory)
    : allPosts;

  return (
    <>
      {/* Blog Hero */}
      <section className="relative py-20 bg-gradient-to-br from-forest via-forest to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-15" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Sustainable Agriculture
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover the latest trends in sustainable agriculture and farming innovation
          </p>
        </div>
      </section>

      {/* Trending Posts Carousel */}
      <section className="py-12 bg-white dark:bg-gray-950 -mt-8 relative z-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 -mt-16">
            {trendingPosts.map((post) => (
              <article key={post.title} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 bg-forest text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                    {post.category}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-3 text-white/80 text-xs mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-forest mb-2 line-clamp-2 group-hover:text-forest-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Articles */}
            <div className="lg:col-span-2">
              {/* Trending Now */}
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-5 h-5 text-forest" />
                <h2 className="font-heading text-2xl font-bold text-forest">Latest Articles</h2>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article key={post.title} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="relative md:col-span-2 h-48 md:h-auto overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-3 left-3 bg-forest text-white px-2.5 py-1 rounded-md text-xs font-semibold">
                          {post.category}
                        </div>
                      </div>
                      <div className="md:col-span-3 p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs mb-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-forest mb-2 group-hover:text-forest-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center">
                            <User className="w-3.5 h-3.5 text-forest" />
                          </div>
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside className="space-y-8">
              {/* About */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-forest">Lamiflora Team</h4>
                    <p className="text-gray-500 text-xs">Writers</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  At Lamiflora, we&apos;re passionate about delivering fresh,
                  quality produce while building sustainable farming practices for Africa.
                </p>
              </div>

              {/* Recent Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                <h4 className="font-heading font-bold text-forest mb-4">Recent Posts</h4>
                <div className="space-y-4">
                  {allPosts.slice(0, 4).map((post) => (
                    <div key={post.title} className="flex gap-3 group cursor-pointer">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-forest line-clamp-2 group-hover:text-forest-500 transition-colors leading-snug">
                          {post.title}
                        </h5>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                <h4 className="font-heading font-bold text-forest mb-4">Categories</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${
                        selectedCategory === null ? 'bg-forest/10 text-forest font-semibold' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>All</span>
                      <span className="text-xs text-gray-400">{allPosts.length}</span>
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.name ? 'bg-forest/10 text-forest font-semibold' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs text-gray-400">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                <h4 className="font-heading font-bold text-forest mb-4">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-forest/10 dark:hover:bg-forest/20 hover:text-forest dark:hover:text-green-400 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-forest rounded-xl p-6 text-white">
                <h4 className="font-heading font-bold mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-white/70 text-sm mb-4">Get the best posts delivered straight to your inbox.</p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50 mb-3"
                />
                <button className="w-full bg-rose hover:bg-rose-500 text-white font-medium py-2.5 rounded-md transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
