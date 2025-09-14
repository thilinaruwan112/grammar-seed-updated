
import AddReviewForm from '@/components/reviews/add-review-form';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

function AddReviewHero() {
  return (
    <motion.section 
      className="relative h-[50vh] w-full flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Image
        src="https://content-provider.payshia.com/grammar-seed/grammer-seed-hero-optimized.webp"
        alt="Share your experience"
        fill
        className="object-cover"
        priority
        data-ai-hint="students classroom"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          Submit Your Review
        </h1>
        <p className="max-w-[600px] mx-auto text-lg text-neutral-200 md:text-xl">
          We'd love to hear about your experience. Share your story with us!
        </p>
      </div>
    </motion.section>
  );
}


export default function AddReviewPage() {
  return (
    <>
      <AddReviewHero />
      <div className="container mx-auto py-16">
        <Card className="mx-auto max-w-2xl">
          <AddReviewForm />
        </Card>
      </div>
    </>
  );
}
