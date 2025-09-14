'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../language-provider';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const translations = {
  en: {
    title: "Meet Your English Guide",
    description: "Passionate about helping every Sri Lankan student master English.",
  },
  si: {
    title: "ඔබේ ඉංග්‍රීසි මාර්ගෝපදේශකයා හමුවන්න",
    description: "සෑම ශ්‍රී ලාංකික සිසුවෙකුටම ඉංග්‍රීසි ප්‍රගුණ කිරීමට උපකාර කිරීමට දැඩි කැමැත්තෙන්.",
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  return (
    <motion.section 
      className="relative h-[60vh] w-full flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Image
        src="https://content-provider.payshia.com/grammar-seed/grammer-seed-hero-optimized.webp"
        alt="Sri Lankan students in a classroom"
        fill
        className="object-cover"
        priority
        data-ai-hint="students classroom"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          {t.description}
        </p>
      </div>
    </motion.section>
  );
}
