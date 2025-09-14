'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../language-provider';

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

const translations = {
  en: {
    title: 'About This Class',
  },
  si: {
    title: 'මෙම පන්තිය ගැන',
  }
}

export default function ClassDescription({ description }: ClassDescriptionProps) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  return (
    <motion.section
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            {t.title}
          </h2>
        </div>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            {description}
        </p>
    </motion.section>
  );
}
