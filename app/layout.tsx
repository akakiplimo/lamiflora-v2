import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import ThemeProvider from '@/components/providers/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lamiflora Limited | Kenyan Flower Farm',
  description:
    'Lamiflora Limited is a leading flower farm cultivating premium roses, lilies, carnations and exotic flowers. Sustainable farming practices, worldwide delivery, and exceptional quality since 1995.',
  keywords:
    'flower farm, roses, lilies, carnations, cut flowers, wholesale flowers, Kenya flowers, sustainable floriculture, Lamiflora',
  authors: [
    {
      name: 'Lamiflora Limited',
    },
  ],
  openGraph: {
    title: 'Lamiflora Limited | Kenyan Flower Farm',
    description:
      'Kenyan flowers grown with passion. From our fields in Kenya to destinations worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lamiflora Limited',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lamiflora Limited | Kenyan Flower Farm',
    description:
      'Kenyan flowers grown with passion. From our fields in Kenya to destinations worldwide.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Lamiflora" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-foreground dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <WhatsAppButton />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
