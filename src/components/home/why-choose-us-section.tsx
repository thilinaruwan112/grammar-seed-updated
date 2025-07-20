'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Users, LineChart, Heart, Laptop } from 'lucide-react';
import { useLanguage } from '../language-provider';

const whyChooseUsData = {
  en: [
    { icon: Users, title: 'Personalized Attention', description: 'Small class sizes ensure individual focus.', color: 'green' },
    { icon: LineChart, title: 'Proven Results', description: '95% of students improve their grades.', color: 'orange' },
    { icon: Heart, title: 'Friendly Teaching', description: 'Warm, encouraging learning environment.', color: 'muted', isFilled: true },
    { icon: Laptop, title: 'Flexible Classes', description: 'Both online and physical classes available.', color: 'green' },
  ],
  si: [
    { icon: Users, title: 'පෞද්ගලික අවධානය', description: 'කුඩා පන්ති කාමර නිසා තනි අවධානය.', color: 'green' },
    { icon: LineChart, title: 'ඔප්පු කළ ප්‍රතිඵල', description: '95% සිසුන්ගේ ලකුණු වැඩි දියුණු වේ.', color: 'orange' },
    { icon: Heart, title: 'මිත්‍රශීලී ඉගැන්වීම', description: 'උණුසුම්, දිරිගන්වන ඉගෙනුම් පරිසරයක්.', color: 'muted', isFilled: true },
    { icon: Laptop, title: 'නම්‍යශීලී පන්ති', description: 'මාර්ගගත සහ භෞතික පන්ති දෙකම ඇත.', color: 'green' },
  ],
};

const translations = {
  en: {
    title: 'Why Choose Grammar Seed?',
  },
  si: {
    title: 'ඇයි Grammar Seed තෝරාගත යුත්තේ?',
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

export default function WhyChooseUsSection() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;
    const currentWhyChooseUsData = whyChooseUsData[language] || whyChooseUsData.en;

    return (
        <motion.section
            className="py-16 bg-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-12 text-foreground">
                    {t.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentWhyChooseUsData.map((item, index) => (
                        <Card key={index} className="p-8 text-center flex flex-col items-center shadow-lg rounded-2xl bg-card">
                            <div className={cn(
                                "mb-4 flex h-16 w-16 items-center justify-center rounded-full",
                                item.color === 'green' && 'bg-accent',
                                item.color === 'orange' && 'bg-secondary',
                                item.color === 'muted' && 'bg-muted'
                            )}>
                                <item.icon
                                    className={cn(
                                        "h-8 w-8",
                                        item.color === 'green' && 'text-accent-foreground',
                                        item.color === 'orange' && 'text-secondary-foreground',
                                        item.color === 'muted' && 'text-primary'
                                    )}
                                    {...(item.isFilled && { fill: 'currentColor' })}
                                />
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
