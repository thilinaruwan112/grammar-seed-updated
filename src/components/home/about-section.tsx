'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../language-provider';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const translations = {
  en: {
    title: 'About Your Teacher',
    description: 'Mr. Shehan Jayawardhana specializes in teaching English for Grades 9-11, focusing on grammar and premium writing skills to help students achieve top exam results.',
    learnMore: 'Learn More',
  },
  si: {
    title: 'ඔබේ ගුරුවරයා ගැන',
    description: 'ශිහාන් ජයවර්ධන මහතා 9-11 ශ්‍රේණි සඳහා ඉංග්‍රීසි ඉගැන්වීමට විශේෂත්වයක් දක්වන අතර, ව්‍යාකරණ සහ උසස් ලිවීමේ කුසලතා කෙරෙහි අවධානය යොමු කරමින් සිසුන්ට ඉහළ විභාග ප්‍රතිඵල ලබා ගැනීමට උපකාර කරයි.',
    learnMore: 'වැඩිදුර ඉගෙන ගන්න',
  },
};

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <motion.section
      className="py-16 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="https://placehold.co/150x150.png"
              alt="Teacher"
              width={150}
              height={150}
              className="rounded-full object-cover"
              data-ai-hint="teacher portrait"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline mb-4 text-card-foreground">
              {t.title}
            </h2>
            <p className="text-card-foreground/80 mb-6 max-w-md">
              {t.description}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">{t.learnMore}</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
