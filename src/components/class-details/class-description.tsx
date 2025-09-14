'use client';

import { motion } from 'framer-motion';

type ClassDescriptionProps = {
  description: string;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function ClassDescription({ description }: ClassDescriptionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            About This Class
          </h2>
        </div>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>{description}</p>
        </div>
    </motion.section>
  );
}
