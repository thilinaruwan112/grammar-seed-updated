'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "“My English grade improved from C to A+ in just one semester! The personalized teaching approach made all the difference.”",
    name: 'Sarah K.',
    role: 'Grade 9 Student',
    program: 'Cambridge English Exam Prep',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student portrait',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/30',
    textColor: 'text-indigo-500',
  },
  {
    quote: '“Our son gained incredible confidence in public speaking and writing. His presentation skills are now exceptional!”',
    name: 'Mr. & Mrs. Chen',
    role: 'Parents of Grade 8 Student',
    program: 'Public Speaking & Writing',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'parents portrait',
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    textColor: 'text-green-600',
  },
  {
    quote: '“Achieved Band 8.0 in IELTS! The structured approach and practice materials were incredibly effective.”',
    name: 'Michael R.',
    role: 'Grade 11 Student',
    program: 'IELTS Preparation',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student happy',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
    textColor: 'text-yellow-600',
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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SuccessStoriesSection() {
  return (
    <motion.section
      className="py-24 bg-gray-50 dark:bg-neutral-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Our Top Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            These remarkable achievements showcase the transformative power of dedicated English learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={cn('h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-0', testimonial.bgColor)}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                      data-ai-hint={testimonial.avatarHint}
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold font-headline text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className={cn('text-sm font-medium text-primary')}>{testimonial.program}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
