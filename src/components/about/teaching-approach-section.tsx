'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Focus, PenLine, FileText, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const teachingMethods: {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}[] = [
  {
    icon: Focus,
    title: 'Focused Grammar Drills',
    description: 'Clear breakdown of essential grammar points with real examples that make sense to Sri Lankan students.',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: PenLine,
    title: 'Practical Writing Practice',
    description: 'Improve essays, comprehension, and structured answers with step-by-step guidance.',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: FileText,
    title: 'Past Paper Strategies',
    description: 'O/L and school paper preparation techniques that boost confidence and performance.',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: Users,
    title: 'Individual Attention',
    description: 'Each student receives guidance tailored to their specific needs and learning style.',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
];

export default function TeachingApproachSection() {
  return (
    <motion.section
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Our Teaching Approach
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Every lesson is designed with care, combining proven methods with personalized attention to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teachingMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className={cn('w-16 h-16 rounded-full flex items-center justify-center shrink-0', method.bgColor)}>
                    <method.icon className={cn('w-8 h-8', method.iconColor)} />
                  </div>
                  <h3 className="font-headline text-xl font-bold mt-6 mb-3 text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
