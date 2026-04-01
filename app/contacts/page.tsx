import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Lamiflora Limited',
  description:
    'Get in touch with Lamiflora Limited. Visit our farm, call us, or send a message. We\'d love to hear from you.',
};

export default function ContactsPage() {
  return <Contact />;
}
