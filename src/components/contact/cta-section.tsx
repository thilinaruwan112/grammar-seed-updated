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
        title: 'Ready to join a class or ask a question?',
        viewClasses: 'View Class Details',
        chatNow: 'Chat Now',
    },
    si: {
        title: 'පන්තියකට සම්බන්ධ වීමට හෝ ප්‍රශ්නයක් ඇසීමට සූදානම්ද?',
        viewClasses: 'පන්ති විස්තර බලන්න',
        chatNow: 'දැන් චැට් කරන්න',
    }
}

export default function CtaSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <motion.section
      className="py-20 text-white"
      style={{
        background:
          'linear-gradient(to right, hsl(220, 80%, 70%), hsl(150, 60%, 60%))',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline mb-8">
          {t.title}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/classes">{t.viewClasses}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <Link href="https://wa.me/94707879292" target="_blank">{t.chatNow}</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
