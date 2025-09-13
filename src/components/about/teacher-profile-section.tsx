
'use client';

import Image from 'next/image';
import { Star, GraduationCap, Briefcase } from 'lucide-react';
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
            About your teacher
          </h2>
          <div className="mt-4 w-24 h-1 bg-secondary-foreground mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="https://content-provider.payshia.com/grammar-seed/square-optimized.webp"
                alt="Mr. Shehan Jayawardhana"
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
              Mr. Shehan Jayawardhana
            </h3>
            <div className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Founder & Lead Lecturer
            </div>
            
            <p className="text-lg text-muted-foreground mb-4">
              I specialize in teaching school English syllabuses for Grades 9 – 11, with a strong focus on grammar and writing. My goal is to help students build premium-level writing skills—especially in essay writing—by developing clear thinking and confident expression.
            </p>
            <p className="text-muted-foreground mb-8">
              At Grammar Seed College, we believe that strong grammar leads to strong minds. Every lesson is designed to guide students toward top exam results in English.
            </p>
            
            <div className="space-y-4 text-left">
                <h4 className="text-xl font-bold font-headline text-foreground mb-2">Experience & Qualifications</h4>
                <div className="flex items-center gap-4 text-foreground">
                    <Briefcase className="h-5 w-5 text-secondary-foreground" />
                    <span>2 years of experience in online education</span>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                    <GraduationCap className="h-5 w-5 text-secondary-foreground" />
                    <span>English Diploma holder, University of Sabaragamuwa, Sri Lanka</span>
                </div>
                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 text-foreground mt-4">
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
      </div>
    </motion.section>
  );
}
