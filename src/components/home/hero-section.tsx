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
      ease: 'easeOut',
    },
  },
};

const translations = {
  en: {
    subtitle: 'PLANTING GRAMMAR | GROWING MINDS',
    title: 'Master grammar from grade 6 to 11 students',
    description: 'Grow smarter, write better and score higher in examinations',
    scheduleButton: 'See class schedules',
    loginButton: 'Student Login',
  },
  si: {
    subtitle: 'ව්‍යාකරණ රෝපණය | මනස වර්ධනය',
    title: '6 සිට 11 ශ්‍රේණිය දක්වා සිසුන් සඳහා ව්‍යාකරණ ප්‍රගුණ කරන්න',
    description: 'වඩාත් බුද්ධිමත් වන්න, වඩා හොඳින් ලියන්න සහ විභාග වලින් ඉහළ ලකුණු ලබා ගන්න',
    scheduleButton: 'පන්ති කාලසටහන් බලන්න',
    loginButton: 'ශිෂ්‍ය පිවිසුම',
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
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 flex h-full flex-col items-start justify-center space-y-6 px-4 md:px-12 text-left text-white max-w-2xl">
        <p className="text-lg font-medium md:text-xl">{t.subtitle}</p>
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          {t.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/classes">{t.scheduleButton}</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/register">{t.loginButton}</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
