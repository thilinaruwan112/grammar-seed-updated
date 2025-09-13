import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import ClassesSection from '@/components/home/classes-section';
import WhyChooseUsSection from '@/components/home/why-choose-us-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import NewsSection from '@/components/home/news-section';
import CtaSection from '@/components/home/cta-section';
import TeachingApproachSection from '@/components/home/teaching-approach-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeachingApproachSection />
      <ClassesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsSection />
      <CtaSection />
    </>
  );
}
