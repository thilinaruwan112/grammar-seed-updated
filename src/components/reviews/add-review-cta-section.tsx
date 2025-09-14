
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

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

export default function AddReviewCtaSection() {
  return (
    <motion.section
      className="py-20 bg-primary text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">
          Have a story to share?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
          Your feedback helps us grow and inspires other students.
        </p>
        <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/reviews/add">
              <PlusCircle className="mr-2 h-5 w-5" />
              Add Your Review
            </Link>
          </Button>
      </div>
    </motion.section>
  );
}
