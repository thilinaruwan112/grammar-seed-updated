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
    value: '92%',
    label: 'A Pass Rate',
    color: 'text-green-500',
  },
  {
    value: '500+',
    label: 'Students Taught',
    color: 'text-blue-600',
  },
  {
    value: '8',
    label: 'Years Experience',
    color: 'text-yellow-500',
  },
];

export default function StudentAchievementsSection() {
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
            Student Achievements
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
                <CardContent className="p-8 flex flex-col justify-center items-center h-full">
                  <p className={cn('text-5xl font-bold', stat.color)}>{stat.value}</p>
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
