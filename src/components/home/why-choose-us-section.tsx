'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserCheck, BookOpen, FileText, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../language-provider';

const whyChooseUsData = {
  en: {
    title: 'Why Choose Our Classes',
    features: [
      { icon: UserCheck, title: 'Experienced Teacher', description: '2+ years teaching experience' },
      { icon: BookOpen, title: 'Syllabus-Aligned', description: 'Following official curriculum' },
      { icon: FileText, title: 'Paper Practices', description: 'Extensive exam preparation' },
      { icon: Laptop, title: 'Flexible Learning', description: 'Online | Zoom | YouTube' },
    ]
  },
  si: {
    title: 'ඇයි අපේ පන්ති තෝරාගත යුත්තේ',
    features: [
      { icon: UserCheck, title: 'පළපුරුදු ගුරුවරයා', description: 'වසර 2+ ඉගැන්වීමේ පළපුරුද්ද' },
      { icon: BookOpen, title: 'විෂය නිර්දේශයට අනුකූලයි', description: 'නිල විෂය නිර්දේශය අනුගමනය කිරීම' },
      { icon: FileText, title: 'ප්‍රශ්න පත්‍ර පුහුණුව', description: 'පුළුල් විභාග සූදානම' },
      { icon: Laptop, title: 'නම්‍යශීලී ඉගෙනීම', description: 'මාර්ගගත | Zoom | YouTube' },
    ]
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
    const t = whyChooseUsData[language] || whyChooseUsData.en;

    return (
        <motion.section
            className="py-16 bg-primary text-primary-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-12">
                    {t.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.features.map((item, index) => (
                        <Card key={index} className="p-8 text-center flex flex-col items-center shadow-lg rounded-2xl bg-primary border-primary-foreground/20">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                                <item.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-primary-foreground/80 font-light">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
