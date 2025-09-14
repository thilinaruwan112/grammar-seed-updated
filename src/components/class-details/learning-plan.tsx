
'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '../language-provider';

type LearningPlan = {
    term: string;
    welcome: string;
    details: string;
}

type LearningPlanProps = {
    plans: LearningPlan[];
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

const translations = {
    en: {
        title: 'Syllabus Coverage Plan',
        description: 'Our comprehensive syllabus is structured across three terms to ensure a complete understanding of the curriculum and thorough preparation for exams.',
    },
    si: {
        title: 'විෂය නිර්දේශ ආවරණ සැලැස්ම',
        description: 'අපගේ විස්තීරණ විෂය නිර්දේශය, විෂය මාලාව පිළිබඳ පූර්ණ අවබෝධයක් සහ විභාග සඳහා საფუძვლიක සූදානමක් සහතික කිරීම සඳහා වාර තුනක් පුරා ව්‍යුහගත කර ඇත.',
    }
}

export default function LearningPlan({ plans }: LearningPlanProps) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const defaultOpenItems = plans.map((_, index) => `item-${index}`);
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        <Accordion type="multiple" defaultValue={defaultOpenItems} className="w-full space-y-4">
          {plans.map((plan, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 shadow-sm data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-xl font-bold font-headline text-left hover:no-underline">
                {plan.term}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                <p className='font-semibold text-foreground mb-2'>{plan.welcome}</p>
                <p>{plan.details}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </motion.section>
  );
}
