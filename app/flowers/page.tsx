import type { Metadata } from 'next';
import Products from '@/components/sections/Products';

export const metadata: Metadata = {
  title: 'Our Flowers | Lamiflora Limited',
  description:
    'Browse our complete collection of premium fresh-cut flowers, dried flowers, foliage, and more from Kenya.',
};

export default function FlowersPage() {
  return <Products />;
}
