import CtaSection from '@/components/classes/cta-section';
import ClassesSection from '@/components/home/classes-section';
import HeroSection from '@/components/classes/hero-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Classes | Grammar Seed',
  description: 'Explore our English classes for Grades 9, 10, and 11, including theory, paper classes, and rapid revision programs for O/L exam success.',
};

export default function ClassesPage() {
  return (
    <>
      <HeroSection />
      <ClassesSection />
      <CtaSection />
    </>
  );
}
