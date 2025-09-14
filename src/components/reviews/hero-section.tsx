'use client';

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

export default function HeroSection() {
  return (
    <motion.section 
      className="relative h-[60vh] w-full flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Image
        src="https://content-provider.payshia.com/grammar-seed/grammer-seed-hero-optimized.webp"
        alt="Students at an event"
        fill
        className="object-cover"
        priority
        data-ai-hint="students crowd"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          Hear From Our Students
        </h1>
        <p className="max-w-3xl text-lg text-neutral-200 md:text-xl">
          Real success stories from Grade 6-11 students who have transformed their English skills and achieved their academic goals
        </p>
      </div>
    </motion.section>
  );
}
