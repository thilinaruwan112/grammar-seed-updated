import CtaSection from '@/components/about/cta-section';
import HeroSection from '@/components/about/hero-section';
import LocalLearningSection from '@/components/about/local-learning-section';
import StatsSection from '@/components/about/stats-section';
import TeacherProfileSection from '@/components/about/teacher-profile-section';
import TeachingApproachSection from '@/components/about/teaching-approach-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Grammar Seed',
  description: 'Learn about Mr. Shehan Jayawardhana, the founder of Grammar Seed, and his passion for helping Sri Lankan students master English with proven teaching methods.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <TeacherProfileSection />
      <TeachingApproachSection />
      <StatsSection />
      <LocalLearningSection />
      <CtaSection />
    </>
  );
}
