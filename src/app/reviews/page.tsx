
import AllTestimonialsSection from '@/components/reviews/all-testimonials-section';
import HeroSection from '@/components/reviews/hero-section';
import SuccessStoriesSection from '@/components/reviews/success-stories-section';
import VideoTestimonialsSection from '@/components/reviews/video-testimonials-section';
import AddReviewCtaSection from '@/components/reviews/add-review-cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Reviews | Grammar Seed',
  description: 'Read real success stories and testimonials from students and parents who have experienced transformative results with our English classes.',
};

export default function ReviewsPage() {
  return (
    <>
      <HeroSection />
      <SuccessStoriesSection />
      <VideoTestimonialsSection />
      <AllTestimonialsSection />
      <AddReviewCtaSection />
    </>
  );
}
