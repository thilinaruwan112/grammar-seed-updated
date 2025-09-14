import ContactFormSection from '@/components/contact/contact-form-section';
import CtaSection from '@/components/contact/cta-section';
import FaqSection from '@/components/contact/faq-section';
import HeroSection from '@/components/contact/hero-section';
import SocialSection from '@/components/contact/social-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Grammar Seed',
  description: 'Get in touch with Grammar Seed. Contact us for class details, registration, or any questions you may have about our English programs.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <FaqSection />
      <SocialSection />
      <CtaSection />
    </>
  );
}
