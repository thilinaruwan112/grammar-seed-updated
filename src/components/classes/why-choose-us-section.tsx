'use client';

import { motion } from 'framer-motion';
import { UserCheck, BookOpen, FileText, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: UserCheck,
    title: 'Experienced Teacher',
    description: '15+ years teaching experience',
  },
  {
    icon: BookOpen,
    title: 'Syllabus-Aligned',
    description: 'Following official curriculum',
  },
  {
    icon: FileText,
    title: 'Past Paper Practice',
    description: 'Extensive exam preparation',
  },
  {
    icon: Laptop,
    title: 'Flexible Learning',
    description: 'Online & in-person options',
  },
];

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
          Why Choose Our Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <feature.icon className="h-12 w-12 mb-6" />
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
