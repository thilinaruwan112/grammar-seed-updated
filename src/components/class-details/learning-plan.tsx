
'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

export default function LearningPlan({ plans }: LearningPlanProps) {
  return (
    <motion.section
      className="py-16 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Syllabus Coverage Plan
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
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
      </div>
    </motion.section>
  );
}
