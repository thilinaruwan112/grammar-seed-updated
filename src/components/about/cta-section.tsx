'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '../language-provider';

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

const translations = {
  en: {
    title: 'Interested in learning more or joining a class?',
    description: 'Take the first step towards mastering English with personalized guidance.',
    viewClasses: 'View Class Details',
    contactUs: 'Contact Us',
  },
  si: {
    title: 'වැඩිදුර ඉගෙනීමට හෝ පන්තියකට සම්බන්ධ වීමට කැමතිද?',
    description: 'පුද්ගලීකරණය කළ මග පෙන්වීම සමඟ ඉංග්‍රීසි ප්‍රගුණ කිරීමේ පළමු පියවර ගන්න.',
    viewClasses: 'පන්ති විස්තර බලන්න',
    contactUs: 'අපව අමතන්න',
  }
};


export default function CtaSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

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
          {t.title}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/classes">{t.viewClasses}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">{t.contactUs}</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
