import AllPostsSection from '@/components/news/all-posts-section';
import FeaturedPostSection from '@/components/news/featured-post-section';
import HeroSection from '@/components/news/hero-section';
import StayUpdatedSection from '@/components/news/stay-updated-section';

export default function NewsPage() {
  return (
    <>
      <HeroSection />
      <FeaturedPostSection />
      <AllPostsSection />
      <StayUpdatedSection />
    </>
  );
}
