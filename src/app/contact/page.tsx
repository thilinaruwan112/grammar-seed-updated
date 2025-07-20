import ContactFormSection from '@/components/contact/contact-form-section';
import CtaSection from '@/components/contact/cta-section';
import FaqSection from '@/components/contact/faq-section';
import HeroSection from '@/components/contact/hero-section';
import SocialSection from '@/components/contact/social-section';

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
