import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import ClassesSection from '@/components/home/classes-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import NewsSection from '@/components/home/news-section';
import CtaSection from '@/components/home/cta-section';
import TeachingApproachSection from '@/components/home/teaching-approach-section';
import StatsSection from '@/components/home/stats-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeachingApproachSection />
      <StatsSection />
      <ClassesSection />
      <TestimonialsSection />
      <NewsSection />
      <CtaSection />
    </>
  );
}
