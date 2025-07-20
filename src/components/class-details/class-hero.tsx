'use client';

import { motion } from 'framer-motion';

type ClassHeroProps = {
  grade: number;
  title: string;
};

export default function ClassHero({ grade, title }: ClassHeroProps) {
  return (
    <motion.section
      className="py-20 bg-primary text-primary-foreground"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
          Grade {grade} - {title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
          Detailed information about the Grade {grade} English class.
        </p>
      </div>
    </motion.section>
  );
}
