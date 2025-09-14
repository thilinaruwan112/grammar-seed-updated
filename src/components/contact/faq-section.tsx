'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '../language-provider';


const translations = {
  en: {
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How can I join a class?',
        answer: "Simply contact us via WhatsApp or phone, and we'll guide you through the registration process.",
      },
      {
        question: 'Can I do a trial lesson?',
        answer: 'Yes! We offer trial lessons for new students to experience our teaching methods.',
      },
      {
        question: 'What are the payment options?',
        answer: 'We accept bank transfers, cash payments, and mobile payment options for your convenience.',
      },
    ]
  },
  si: {
    title: 'නිතර අසන ප්‍රශ්න',
    faqs: [
      {
        question: 'මම පන්තියකට සම්බන්ධ වන්නේ කෙසේද?',
        answer: 'WhatsApp හෝ දුරකථනය හරහා අපව සම්බන්ධ කරගන්න, අපි ලියාපදිංචි වීමේ ක්‍රියාවලිය හරහා ඔබට මග පෙන්වන්නෙමු.',
      },
      {
        question: 'මට අත්හදා බැලීමේ පාඩමක් කළ හැකිද?',
        answer: 'ඔව්! නව සිසුන්ට අපගේ ඉගැන්වීමේ ක්‍රම අත්විඳීමට අපි අත්හදා බැලීමේ පාඩම් පිරිනමන්නෙමු.',
      },
      {
        question: 'ගෙවීම් විකල්ප මොනවාද?',
        answer: 'ඔබේ පහසුව සඳහා අපි බැංකු මාරු කිරීම්, මුදල් ගෙවීම්, සහ ජංගම ගෙවීම් විකල්ප පිළිගනිමු.',
      },
    ]
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

export default function FaqSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <motion.section
      className="py-24 bg-gray-50 dark:bg-neutral-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            {t.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 shadow-sm data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
