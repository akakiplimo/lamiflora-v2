import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import HomeFeaturedProducts from '@/components/sections/HomeFeaturedProducts';
import HomeBlogPreview from '@/components/sections/HomeBlogPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeFeaturedProducts />
      <About />
      <Services />
      <Stats />
      <HomeBlogPreview />
    </>
  );
}
