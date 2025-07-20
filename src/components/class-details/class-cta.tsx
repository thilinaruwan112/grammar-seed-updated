'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ClassCta() {
  return (
    <motion.section
      className="py-20 text-white"
      style={{
        background:
          'linear-gradient(to right, hsl(217, 71%, 53%), hsl(158, 41%, 49%))',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-headline mb-4">
          Ready to Join This Class?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-200">
          Contact us today to register or book a free trial lesson.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-secondary-foreground text-primary-foreground hover:bg-secondary-foreground/90"
          >
            <Link href="/contact">Register Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">Ask a Question</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
