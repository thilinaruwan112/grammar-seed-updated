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
      ease: "easeOut"
    } 
  }
};

const translations = {
  en: {
    title: 'Have Questions? Get in Touch Today!',
    description: 'Ready to start your English learning journey? Contact us for more information.',
    buttonText: 'Contact Us',
  },
  si: {
    title: 'ප්‍රශ්න තිබේද? අදම සම්බන්ධ වන්න!',
    description: 'ඔබේ ඉංග්‍රීසි ඉගෙනීමේ ගමන ආරම්භ කිරීමට සූදානම්ද? වැඩි විස්තර සඳහා අප අමතන්න.',
    buttonText: 'අපව අමතන්න',
  },
};

export default function CtaSection() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    return (
        <motion.section
            className="py-20 text-white bg-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold font-headline mb-4 text-primary-foreground">
                    {t.title}
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
                    {t.description}
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold px-10 py-6 text-lg">
                    <Link href="/contact">{t.buttonText}</Link>
                </Button>
            </div>
        </motion.section>
    );
}
