import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lamiflora Limited | Premium Flower Farm',
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
    title: 'Lamiflora Limited | Premium Flower Farm',
    description:
      'Premium flowers grown with passion. From our fields in Kenya to destinations worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lamiflora Limited',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lamiflora Limited | Premium Flower Farm',
    description:
      'Premium flowers grown with passion. From our fields in Kenya to destinations worldwide.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
