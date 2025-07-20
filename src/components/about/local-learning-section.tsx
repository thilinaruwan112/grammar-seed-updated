'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  isFilled?: boolean;
}[] = [
    {
        icon: MapPin,
        title: 'Sri Lankan Syllabus Focused',
        description: 'Every lesson aligns perfectly with the local curriculum and exam requirements.',
        bgColor: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
        icon: Heart,
        title: 'Culturally Relatable Examples',
        description: 'Learn English through examples that resonate with Sri Lankan culture and daily life.',
        bgColor: 'bg-green-100 dark:bg-green-900/30',
        iconColor: 'text-green-600 dark:text-green-400',
        isFilled: true,
    }
];

export default function LocalLearningSection() {
  return (
    <motion.section
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Rooted in Local Learning
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Understanding our culture, enhancing your English
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-12">
            {features.map((feature, index) => (
                <motion.div key={index} className="flex items-start gap-6" variants={itemVariants}>
                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center shrink-0 mt-1", feature.bgColor)}>
                        <feature.icon className={cn("w-8 h-8", feature.iconColor)} {...(feature.isFilled && { fill: "currentColor" })} />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-bold mb-2 text-foreground">
                            {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                            {feature.description}
                        </p>
                    </div>
                </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Students in a classroom"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-xl"
              data-ai-hint="students classroom"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
