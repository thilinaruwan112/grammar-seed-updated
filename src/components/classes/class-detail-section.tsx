'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText, Calendar, Clock, Users, IndianRupee } from 'lucide-react';

const topics = [
  'Advanced Grammar & Syntax',
  'Essay Writing Techniques',
  'Literature Analysis',
  'Reading Comprehension',
  'Past Paper Practice',
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function ClassDetailSection() {
  return (
    <motion.section
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg rounded-2xl bg-muted">
            <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold font-headline text-center mb-10 text-foreground">
                Grade 10 - O/L Mastery (Sample Detail)
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-6 text-foreground">
                    <BookText className="mr-3 h-6 w-6 text-primary" />
                    Topics Covered
                  </h3>
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary">
                    {topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center text-xl font-semibold mb-6 text-foreground">
                    <Calendar className="mr-3 h-6 w-6 text-primary" />
                    Schedule & Details
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center">
                      <Clock className="mr-4 h-5 w-5 text-primary flex-shrink-0" />
                      <span>Saturdays & Sundays, 2-4 PM</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-4 h-5 w-5 text-primary flex-shrink-0" />
                      <span>Max 15 students per batch</span>
                    </li>
                    <li className="flex items-center">
                      <IndianRupee className="mr-4 h-5 w-5 text-primary flex-shrink-0" />
                      <span>Rs. 8,000/month</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                  Join This Class
                </Button>
              </div>
            </CardContent>
          </Card>
      </div>
    </motion.section>
  );
}
