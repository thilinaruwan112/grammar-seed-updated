'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { UserCheck, BookOpen, FileText, Laptop } from 'lucide-react';
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
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      staggerChildren: 0.15,
      ease: "easeOut"
    } 
  }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
}

export default function WhyChooseUsSection() {
    const { language } = useLanguage();
    const t = whyChooseUsData[language] || whyChooseUsData.en;

    return (
        <motion.section
            className="py-24 bg-primary text-primary-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-16">
                    {t.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.features.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="bg-primary border-primary-foreground/20 text-center p-6 rounded-2xl h-full shadow-lg hover:shadow-primary-foreground/20 transition-shadow duration-300">
                                <CardContent className="p-0 flex flex-col items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10 mb-4">
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-primary-foreground/80">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
