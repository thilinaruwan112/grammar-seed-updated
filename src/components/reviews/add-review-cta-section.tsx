
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
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
    title: 'Have a story to share?',
    description: 'Your feedback helps us grow and inspires other students.',
    buttonText: 'Add Your Review',
  },
  si: {
    title: 'බෙදා ගැනීමට කතාවක් තිබේද?',
    description: 'ඔබගේ ප්‍රතිපෝෂණය අපට වර්ධනය වීමට සහ අනෙකුත් සිසුන් දිරිමත් කිරීමට උපකාරී වේ.',
    buttonText: 'ඔබේ සමාලෝචනය එක් කරන්න',
  },
};

export default function AddReviewCtaSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

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
          {t.title}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
          {t.description}
        </p>
        <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/reviews/add">
              <PlusCircle className="mr-2 h-5 w-5" />
              {t.buttonText}
            </Link>
          </Button>
      </div>
    </motion.section>
  );
}
