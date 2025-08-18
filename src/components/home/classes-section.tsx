'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '../language-provider';

const classesData = {
  en: [
    { grade: 'Grade 6', description: 'Build a strong foundation in grammar, writing, and reading.', color: 'primary' as const },
    { grade: 'Grade 7', description: 'Master grammar rules, essay writing, and comprehension skills.', color: 'secondary' as const },
    { grade: 'Grade 8', description: 'Learn advanced grammar, creative writing, and literature.', color: 'primary' as const },
    { grade: 'Grade 9', description: 'Prepare for your O/L exams with focused language skills.', color: 'secondary' as const },
    { grade: 'Grade 10', description: 'Intensive O/L focus with exam techniques and analysis.', color: 'primary' as const },
    { grade: 'Grade 11', description: 'Final O/L preparation with mock exams and intensive practice.', color: 'secondary' as const },
  ],
  si: [
    { grade: '6 ශ්‍රේණිය', description: 'ව්‍යාකරණ, ලිවීම සහ කියවීමේ ශක්තිමත් පදනමක් ගොඩනඟා ගන්න.', color: 'primary' as const },
    { grade: '7 ශ්‍රේණිය', description: 'ව්‍යාකරණ නීති, රචනා ලිවීම සහ අවබෝධතා කුසලතා ප්‍රගුණ කරන්න.', color: 'secondary' as const },
    { grade: '8 ශ්‍රේණිය', description: 'උසස් ව්‍යාකරණ, නිර්මාණාත්මක ලිවීම සහ සාහිත්‍යය ඉගෙන ගන්න.', color: 'primary' as const },
    { grade: '9 ශ්‍රේණිය', description: 'ඔබේ සා/පෙළ විභාගය සඳහා භාෂා කුසලතා කෙරෙහි අවධානය යොමු කරන්න.', color: 'secondary' as const },
    { grade: '10 ශ්‍රේණිය', description: 'විභාග ತಂತ್ರ සහ විශ්ලේෂණය සමඟ දැඩි සා/පෙළ අවධානය.', color: 'primary' as const },
    { grade: '11 ශ්‍රේණිය', description: 'ආදර්ශ විභාග සහ දැඩි පුහුණුව සමඟ අවසන් සා/පෙළ සූදානම.', color: 'secondary' as const },
  ],
};

const translations = {
  en: {
    title: 'Classes for Grades 6-11',
    subtitle: 'Choose the perfect class for your grade level',
    buttonText: 'Get Started',
  },
  si: {
    title: '6-11 ශ්‍රේණි සඳහා පන්ති',
    subtitle: 'ඔබේ ශ්‍රේණියට ගැලපෙනම පන්තිය තෝරාගන්න',
    buttonText: 'ආරම්භ කරන්න',
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

export default function ClassesSection() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;
    const currentClassesData = classesData[language] || classesData.en;

    return (
        <motion.section
            className="py-16 bg-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-2 text-foreground">{t.title}</h2>
                <p className="text-muted-foreground mb-12 max-w-lg mx-auto">{t.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentClassesData.map((item) => {
                        return (
                            <Card key={item.grade} className="bg-card text-card-foreground p-8 flex flex-col items-start text-left shadow-lg rounded-2xl h-full">
                                <CardContent className="p-0 flex flex-col items-start h-full">
                                    <h3 className="font-headline text-3xl font-bold mb-4">{item.grade}</h3>
                                    <p className="text-card-foreground/80 mb-6 flex-grow">
                                        {item.description}
                                    </p>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant={'accent'}
                                        className='mt-auto'
                                    >
                                        <Link href="#">{t.buttonText}</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
