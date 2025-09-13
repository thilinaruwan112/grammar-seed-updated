'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Focus, PenLine, FileText, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '../language-provider';

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

const teachingMethodsData = {
  en: {
    title: 'Our Teaching Approach',
    subtitle: 'Every lesson is designed with care, blending proven methods with personalized guidance to help you succeed in term test and O/L examinations.',
    methods: [
      {
        icon: Focus,
        title: 'FOCUSED GRAMMAR LESSONS',
        description: 'Step by step grammar lessons from beginner to advanced, with clear examples to help students excel in English.',
        bgColor: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
      },
      {
        icon: PenLine,
        title: 'PRACTICAL WRITING PRACTICE',
        description: 'Improve paragraphs, essays, charts, letters writing with step by step guided formats.',
        bgColor: 'bg-green-100 dark:bg-green-900/30',
        iconColor: 'text-green-600 dark:text-green-400',
      },
      {
        icon: FileText,
        title: 'PAPER PRACTICE & DISCUSSIONS',
        description: 'Practice papers for term tests and O/L exams with clear discussions and concise notes for easy learning.',
        bgColor: 'bg-orange-100 dark:bg-orange-900/30',
        iconColor: 'text-orange-600 dark:text-orange-400',
      },
      {
        icon: Users,
        title: 'INDIVIDUAL ATTENTION',
        description: 'Each student receives guidance tailored to their specific needs and learning style.',
        bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
      },
    ]
  },
  si: {
    title: 'අපගේ ඉගැන්වීමේ ක්‍රමවේදය',
    subtitle: 'සෑම පාඩමක්ම සැලකිල්ලෙන් නිර්මාණය කර ඇත, ඔප්පු කරන ලද ක්‍රම සහ පෞද්ගලික මග පෙන්වීමผสม කරමින්, වාර විභාග සහ සා/පෙළ විභාග වලින් සාර්ථක වීමට ඔබට උපකාරී වේ.',
    methods: [
      {
        icon: Focus,
        title: 'අවධානය යොමු කළ ව්‍යාකරණ පාඩම්',
        description: 'ආරම්භකයාගේ සිට උසස් දක්වා පියවරෙන් පියවර ව්‍යාකරණ පාඩම්, සිසුන්ට ඉංග්‍රීසියෙන් විශිෂ්ට වීමට උපකාර වන පැහැදිලි උදාහරණ සමඟ.',
        bgColor: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
      },
      {
        icon: PenLine,
        title: 'ප්‍රායෝගික ලිවීමේ පුහුණුව',
        description: 'පියවරෙන් පියවර මඟ පෙන්වන ආකෘති සමඟින් ඡේද, රචනා, ප්‍රස්තාර, ලිපි ලිවීම වැඩි දියුණු කරන්න.',
        bgColor: 'bg-green-100 dark:bg-green-900/30',
        iconColor: 'text-green-600 dark:text-green-400',
      },
      {
        icon: FileText,
        title: 'ප්‍රශ්න පත්‍ර පුහුණුව සහ සාකච්ඡා',
        description: 'වාර විභාග සහ සා/පෙළ විභාග සඳහා ප්‍රශ්න පත්‍ර, පැහැදිලි සාකච්ඡා සහ පහසුවෙන් ඉගෙනීම සඳහා සංක්ෂිප්ත සටහන් සමඟ.',
        bgColor: 'bg-orange-100 dark:bg-orange-900/30',
        iconColor: 'text-orange-600 dark:text-orange-400',
      },
      {
        icon: Users,
        title: 'තනි පුද්ගල අවධානය',
        description: 'සෑම සිසුවෙකුටම ඔවුන්ගේ විශේෂිත අවශ්‍යතා සහ ඉගෙනුම් විලාසයට ගැලපෙන මග පෙන්වීමක් ලැබේ.',
        bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
      },
    ]
  }
};


export default function TeachingApproachSection() {
  const { language } = useLanguage();
  const t = teachingMethodsData[language] || teachingMethodsData.en;

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
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {t.methods.map((method, index) => (
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
