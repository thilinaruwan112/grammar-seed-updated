'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '../language-provider';
import { ArrowRight, BookOpen, Edit, Clock, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type ClassInfo = {
  grade: string | number;
  title: string;
  icon: LucideIcon;
  colorClasses: string;
  description?: string;
  details?: string[];
};

type ClassData = {
  en: ClassInfo[];
  si: ClassInfo[];
};

const classesData: ClassData = {
  en: [
    {
      grade: 9,
      title: 'Grade 9',
      icon: BookOpen,
      colorClasses: 'bg-primary text-primary-foreground',
      description: 'Start your Theory lessons here. Learn step by step and get better marks in your term test exams.',
      details: ['2 hrs/ Week', 'Online'],
    },
    {
      grade: 10,
      title: 'Grade 10',
      icon: BookOpen,
      colorClasses: 'bg-secondary text-secondary-foreground',
      description: 'Start your Theory lessons here. Learn step by step and get better marks in your term test exams.',
      details: ['2 hrs/ Week', 'Online'],
    },
    {
      grade: 11,
      title: 'Grade 11',
      icon: BookOpen,
      colorClasses: 'bg-primary text-primary-foreground',
      description: 'Start your Theory lessons here. Learn step by step and get better marks in your term test exams.',
      details: ['4 hrs/ Week', 'Online'],
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
  ],
  si: [
    {
      grade: 9,
      title: '9 ශ්‍රේණිය',
      icon: BookOpen,
      colorClasses: 'bg-primary text-primary-foreground',
      description: 'ඔබේ සිද්ධාන්ත පාඩම් මෙතැනින් ආරම්භ කරන්න. පියවරෙන් පියවර ඉගෙන ගෙන ඔබගේ වාර පරීක්ෂණ විභාග වලින් වඩා හොඳ ලකුණු ලබා ගන්න.',
      details: ['සතියට පැය 2', 'ඔන්ලයින්'],
    },
    {
      grade: 10,
      title: '10 ශ්‍රේණිය',
      icon: BookOpen,
      colorClasses: 'bg-secondary text-secondary-foreground',
      description: 'ඔබේ සිද්ධාන්ත පාඩම් මෙතැනින් ආරම්භ කරන්න. පියවරෙන් පියවර ඉගෙන ගෙන ඔබගේ වාර පරීක්ෂණ විභාග වලින් වඩා හොඳ ලකුණු ලබා ගන්න.',
      details: ['සතියට පැය 2', 'ඔන්ලයින්'],
    },
    {
      grade: 11,
      title: '11 ශ්‍රේණිය',
      icon: BookOpen,
      colorClasses: 'bg-primary text-primary-foreground',
      description: 'ඔබේ සිද්ධාන්ත පාඩම් මෙතැනින් ආරම්භ කරන්න. පියවරෙන් පියවර ඉගෙන ගෙන ඔබගේ වාර පරීක්ෂණ විභාග වලින් වඩා හොඳ ලකුණු ලබා ගන්න.',
      details: ['සතියට පැය 4', 'ඔන්ලයින්'],
    },
    {
      grade: 'revision-english',
      title: 'වේගවත් ඉංග්‍රීසි පුනරීක්ෂණය',
      icon: Edit,
      colorClasses: 'bg-accent text-accent-foreground',
    },
    {
      grade: 'revision-essay',
      title: 'වේගවත් රචනා පුනරීක්ෂණය',
      icon: Edit,
      colorClasses: 'bg-accent text-accent-foreground',
    },
  ],
};


const translations = {
  en: {
    title: 'Class details and schedules | Grade 9 – 11',
    subtitle: 'Pick your grade unlock your class',
    buttonText: 'More Details',
  },
  si: {
    title: 'පන්ති විස්තර සහ කාලසටහන් | 9 – 11 ශ්‍රේණිය',
    subtitle: 'ඔබේ ශ්‍රේණිය තෝරා ඔබේ පන්තියට පිවිසෙන්න',
    buttonText: 'වැඩි විස්තර',
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ClassesSection() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;
    const currentClassesData = classesData[language] || classesData.en;

    return (
        <motion.section
            className="py-24 bg-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold font-headline mb-4 text-foreground">{t.title}</h2>
                <p className="text-muted-foreground mb-12 max-w-lg mx-auto text-xl">{t.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {currentClassesData.map((item) => {
                         const Icon = item.icon;
                         return (
                        <motion.div key={item.title} variants={itemVariants}>
                          <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-card">
                            <CardContent className="p-8 flex flex-col items-center text-center flex-grow">
                               <div className={cn("w-16 h-16 rounded-full flex items-center justify-center shrink-0 mb-6", item.colorClasses)}>
                                  <Icon className="w-8 h-8" />
                                </div>
                              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                                {item.title}
                              </h3>
                              
                              {item.description && (
                                <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                              )}

                              {item.details && (
                                <div className="flex justify-center gap-4 mb-6 text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{item.details[0]}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Monitor className="h-4 w-4" />
                                    <span>{item.details[1]}</span>
                                  </div>
                                </div>
                              )}
                              
                              <Button asChild className='mt-auto w-full' variant={item.grade.toString().includes('revision') ? 'accent' : 'default'}>
                                <Link href={`/classes/${item.grade}`}>
                                  {t.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
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
