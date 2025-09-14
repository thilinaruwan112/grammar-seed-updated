'use client';

import { Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../language-provider';

// WhatsApp icon as an SVG component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-white"
    {...props}
  >
     <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.1-.6s.2-.2.4-.4c.1-.1.2-.2.2-.3.1-.1 0-.3-.1-.4-.1-.1-.6-1.5-.8-2.1s-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-1 1.7-.2.9 0 1.8.2 2.1.2.3.8 1.6 2.4 3.2.8.8 1.4 1.1 2 1.3.4.1.9.1 1.2.1.4-.1.8-.4.9-.8.1-.4.1-.8 0-.9-.1-.1-.2-.2-.4-.3zM12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook', bgColor: 'bg-blue-600' },
  { icon: WhatsAppIcon, href: 'https://wa.me/94707879292', label: 'WhatsApp', bgColor: 'bg-green-500' },
  { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube', bgColor: 'bg-red-600' },
];

const translations = {
    en: {
        title: 'Follow Grammar Seed for updates and tips!',
    },
    si: {
        title: 'යාවත්කාලීන කිරීම් සහ උපදෙස් සඳහා ග්‍රැමර් සීඩ් අනුගමනය කරන්න!',
    }
}

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

export default function SocialSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <motion.section
      className="py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-headline text-foreground mb-6">
            {t.title}
          </h2>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${link.bgColor} hover:opacity-90 transition-opacity`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
