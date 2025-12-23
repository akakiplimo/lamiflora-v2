import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Products from '@/components/sections/Products';
import FarmUpdates from '@/components/sections/FarmUpdates';
import Articles from '@/components/sections/Articles';
import News from '@/components/sections/News';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Services />
      <Stats />
      {/* <FarmUpdates />
      <Articles />
      <News /> */}
      <Contact />
      <Footer />
    </main>
  );
}
