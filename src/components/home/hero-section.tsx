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
    subtitle: 'From Grade 6 to O/L',
    title: 'Master English with Confidence',
    description: 'Trusted English classes tailored for Sri Lankan students.',
    joinButton: 'Join a Class',
    scheduleButton: 'See Class Schedule',
  },
  si: {
    subtitle: '6 ශ්‍රේණියේ සිට අ.පො.ස. (සා/පෙළ) දක්වා',
    title: 'විශ්වාසයෙන් ඉංග්‍රීසි ප්‍රගුණ කරන්න',
    description: 'ශ්‍රී ලාංකික සිසුන් සඳහාම සැකසූ විශ්වාසනීය ඉංග්‍රීසි පන්ති.',
    joinButton: 'පන්තියට සම්බන්ධ වන්න',
    scheduleButton: 'පන්ති කාලසටහන බලන්න',
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <motion.section 
      className="relative h-screen w-full"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Image
        src="https://content-provider.payshia.com/grammar-seed/grammer-seed-hero-optimized.webp"
        alt="Sri Lankan students studying"
        fill
        className="object-cover"
        data-ai-hint="students classroom"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center text-white">
        <p className="text-lg font-medium md:text-xl">{t.subtitle}</p>
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          {t.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#">{t.joinButton}</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#">{t.scheduleButton}</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
