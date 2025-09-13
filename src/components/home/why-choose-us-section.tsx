'use client';

import { motion } from 'framer-motion';
import { UserCheck, BookOpen, FileText, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../language-provider';

const featuresData = {
  en: [
    {
      icon: UserCheck,
      title: 'Experienced Teacher',
      description: '2+ years teaching experience',
    },
    {
      icon: BookOpen,
      title: 'Syllabus-Aligned',
      description: 'Following official curriculum',
    },
    {
      icon: FileText,
      title: 'Paper Practices',
      description: 'Extensive exam preparation',
    },
    {
      icon: Laptop,
      title: 'Flexible Learning',
      description: 'Online | Zoom | YouTube',
    },
  ],
  si: [
    {
      icon: UserCheck,
      title: 'පළපුරුදු ගුරුවරයා',
      description: 'වසර 2+ ක ඉගැන්වීමේ පළපුරුද්ද',
    },
    {
      icon: BookOpen,
      title: 'විෂය නිර්දේශයට අනුකූලයි',
      description: 'නිල විෂය මාලාව අනුගමනය කිරීම',
    },
    {
      icon: FileText,
      title: 'ප්‍රශ්න පත්‍ර පුහුණුව',
      description: 'පුළුල් විභාග සූදානම',
    },
    {
      icon: Laptop,
      title: 'නම්‍යශීලී ඉගෙනීම',
      description: 'මාර්ගගත | සූම් | යූටියුබ්',
    },
  ],
};


const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUsSection() {
    const { language } = useLanguage();
    const features = featuresData[language] || featuresData.en;
    const t = {
        en: { title: 'Why Choose Our Classes' },
        si: { title: 'ඇයි අපේ පන්ති තෝරාගත යුත්තේ' }
    }[language] || { title: 'Why Choose Our Classes' };


  return (
    <motion.section
      className="py-24 bg-primary text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-headline mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <feature.icon className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-xl font-semibold font-headline mb-2">
                {feature.title}
              </h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
