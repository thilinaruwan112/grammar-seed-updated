'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function CtaSection() {
  return (
    <motion.section
      className="py-20 text-primary-foreground bg-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">
          Interested in learning more or joining a class?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
          Take the first step towards mastering English with personalized
          guidance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/classes">View Class Details</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
