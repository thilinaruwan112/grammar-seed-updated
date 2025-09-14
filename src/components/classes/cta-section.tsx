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
    title: 'Ready to build your English skills?',
    subtitle: 'Join thousands of successful students',
    trialButton: 'Book a Trial',
    contactButton: 'Contact Teacher',
  },
  si: {
    title: 'ඔබේ ඉංග්‍රීසි කුසලතා ගොඩනගා ගැනීමට සූදානම්ද?',
    subtitle: 'දහස් ගණනක් සාර්ථක සිසුන් හා එක්වන්න',
    trialButton: 'අත්හදා බැලීමේ පන්තියක් වෙන්කරවා ගන්න',
    contactButton: 'ගුරුවරයා අමතන්න',
  }
}

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
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/register">{t.trialButton}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">{t.contactButton}</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
