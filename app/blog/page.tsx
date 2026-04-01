import type { Metadata } from 'next';
import BlogPage from '@/components/sections/BlogPage';

export const metadata: Metadata = {
  title: 'Blog | Lamiflora Limited',
  description:
    'Read the latest articles about sustainable farming, flower care tips, and news from Lamiflora farms.',
};

export default function Blog() {
  return <BlogPage />;
}
