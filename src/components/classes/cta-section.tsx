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
      className="py-20 text-white"
      style={{
        background:
          'linear-gradient(to right, hsl(217, 71%, 53%), hsl(158, 41%, 49%))',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">
          Ready to build your English skills?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-200">
          Join thousands of successful students
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-green-400 text-green-900 hover:bg-green-500 font-semibold"
          >
            <Link href="#">Book a Trial</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 font-semibold"
          >
            <Link href="#">Contact Teacher</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
