'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How can I join a class?',
    answer:
      "Simply contact us via WhatsApp or phone, and we'll guide you through the registration process.",
  },
  {
    question: 'Can I do a trial lesson?',
    answer:
      'Yes! We offer trial lessons for new students to experience our teaching methods.',
  },
  {
    question: 'What are the payment options?',
    answer:
      'We accept bank transfers, cash payments, and mobile payment options for your convenience.',
  },
];

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
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
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
