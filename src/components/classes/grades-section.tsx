'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

const gradesData = [
  {
    grade: 6,
    title: 'Foundation Grammar',
    description: 'Basic grammar, simple tenses, vocabulary building, and reading comprehension.',
    format: 'Online/Physical',
    duration: '2 hrs/week',
    colorClasses: 'bg-primary text-primary-foreground',
    buttonClasses: 'bg-primary hover:bg-primary/90 text-primary-foreground',
  },
  {
    grade: 7,
    title: 'Grammar Plus',
    description: 'Advanced grammar, essay writing, comprehension, and vocabulary expansion.',
    format: 'Hybrid',
    duration: '2.5 hrs/week',
    colorClasses: 'bg-secondary text-secondary-foreground',
    buttonClasses: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
  },
  {
    grade: 8,
    title: 'Language Skills',
    description: 'Complex grammar, creative writing, literature basics, and speaking skills.',
    format: 'Online/Physical',
    duration: '3 hrs/week',
    colorClasses: 'bg-primary text-primary-foreground',
    buttonClasses: 'bg-primary hover:bg-primary/90 text-primary-foreground',
  },
  {
    grade: 9,
    title: 'O/L Prep',
    description: 'O/L focused grammar, essay techniques, literature analysis, past papers.',
    format: 'Hybrid',
    duration: '3.5 hrs/week',
    colorClasses: 'bg-secondary text-secondary-foreground',
    buttonClasses: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
  },
  {
    grade: 10,
    title: 'O/L Mastery',
    description: 'Intensive O/L preparation, advanced writing, literature, exam strategies.',
    format: 'Online/Physical',
    duration: '4 hrs/week',
    colorClasses: 'bg-primary text-primary-foreground',
    buttonClasses: 'bg-primary hover:bg-primary/90 text-primary-foreground',
  },
  {
    grade: 11,
    title: 'A/L Foundation',
    description: 'A/L English preparation, advanced literature, critical analysis, research skills.',
    format: 'Hybrid',
    duration: '4 hrs/week',
    colorClasses: 'bg-secondary text-secondary-foreground',
    buttonClasses: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GradesSection() {
  return (
    <motion.section
      className="py-24 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Choose Your Grade
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gradesData.map((grade) => (
            <motion.div key={grade.grade} variants={itemVariants}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-card">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold", grade.colorClasses)}>
                      {grade.grade}
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold text-foreground">
                        Grade {grade.grade} - {grade.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {grade.description}
                  </p>
                  
                  <div className="space-y-2 text-muted-foreground text-sm mb-6">
                      <div className="flex items-center gap-2">
                          <Monitor className="w-4 h-4 text-primary" />
                          <span>{grade.format}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{grade.duration}</span>
                      </div>
                  </div>

                  <Button asChild className={cn('w-full mt-auto', grade.buttonClasses)}>
                    <Link href={`/classes/${grade.grade}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
