
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

type MonthlyPlan = {
    month: string;
    details: string[];
}

type MonthlyLearningPlanProps = {
    title: string;
    description: string;
    plans: MonthlyPlan[];
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function MonthlyLearningPlan({ title, description, plans }: MonthlyLearningPlanProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl text-center">{plan.month}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {plan.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
    </motion.section>
  );
}
