
'use client';

import Image from 'next/image';
import { Star, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export default function TeacherProfileSection() {
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
            Who's Behind Grammar Seed?
          </h2>
          <div className="mt-4 w-24 h-1 bg-secondary-foreground mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Mr. Saman Silva"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl"
                data-ai-hint="teacher portrait"
              />
              <div className="absolute inset-0 rounded-full ring-8 ring-white/10" />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold font-headline text-foreground mb-2">
              Mr. Saman Silva
            </h3>
            <div className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6">
              B.A. in English Literature | TESL Certified
            </div>
            
            <p className="text-lg text-muted-foreground mb-4">
              Over 10 years of helping students from Grade 6 to 11 succeed in English
            </p>
            <p className="text-muted-foreground mb-8">
              Teaching isn't just my profession—it's my passion. I believe every student has the potential to excel in English, and I'm here to unlock that potential. Having grown up in Sri Lanka, I understand the unique challenges our students face, and I've developed methods that make English both accessible and enjoyable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-foreground">
              <div className="flex items-center gap-2 font-medium">
                <Star className="h-5 w-5 text-secondary-foreground" fill="currentColor" />
                <span>500+ Students Taught</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <GraduationCap className="h-5 w-5 text-secondary-foreground" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
