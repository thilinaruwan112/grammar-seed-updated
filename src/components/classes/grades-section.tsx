'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, Edit, Clock, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';
import { classDetailsData } from '@/lib/class-data';

const gradesData = [
  {
    grade: 'grade-9',
    title: 'Grade 9',
    icon: BookOpen,
    colorClasses: 'bg-primary text-primary-foreground',
  },
  {
    grade: 'grade-10',
    title: 'Grade 10',
    icon: BookOpen,
    colorClasses: 'bg-secondary text-secondary-foreground',
  },
  {
    grade: 'grade-11',
    title: 'Grade 11',
    icon: BookOpen,
    colorClasses: 'bg-primary text-primary-foreground',
  },
  {
    grade: 'revision-english',
    title: 'Rapid English Revision',
    icon: Edit,
    colorClasses: 'bg-accent text-accent-foreground',
  },
  {
    grade: 'revision-essay',
    title: 'Rapid Essay Revision',
    icon: Edit,
    colorClasses: 'bg-accent text-accent-foreground',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gradesData.map((item) => {
             const Icon = item.icon;
             const details = classDetailsData[item.grade];
             return (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center flex-grow">
                   <div className={cn("w-16 h-16 rounded-full flex items-center justify-center shrink-0 mb-6", item.colorClasses)}>
                      <Icon className="w-8 h-8" />
                    </div>
                  <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                    {details.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow text-sm">{details.description.split('.')[0] + '.'}</p>
                  
                  {details.schedule && (
                    <div className="flex justify-center gap-4 mb-6 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{details.schedule.split('\n')[0]}</span>
                      </div>
                    </div>
                  )}

                  <Button asChild className='mt-auto w-full' variant={item.grade.toString().includes('revision') ? 'accent' : 'default'}>
                    <Link href={`/classes/${item.grade}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
             )
          })}
        </div>
      </div>
    </motion.section>
  );
}
