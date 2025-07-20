'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
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

const stats = [
  {
    value: '500+',
    label: 'Students Taught',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-700 dark:text-green-400 font-bold',
  },
  {
    value: '95%',
    label: 'Success Rate',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-700 dark:text-blue-400 font-bold',
  },
  {
    value: '10+',
    label: 'Years Experience',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    textColor: 'text-yellow-700 dark:text-yellow-400 font-bold',
  },
];

export default function StatsSection() {
  return (
    <motion.section
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Why Grammar Seed Works
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={cn('text-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full', stat.bgColor)}>
                <CardContent className="p-8 flex flex-col justify-center items-center h-full">
                  <p className={cn('text-5xl', stat.textColor)}>{stat.value}</p>
                  <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
