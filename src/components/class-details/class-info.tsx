'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText, Calendar, Clock, Users, IndianRupee, Monitor } from 'lucide-react';

type ClassInfoProps = {
  details: {
    description: string;
    topics: string[];
    schedule: string;
    format: string;
    duration: string;
    studentsPerBatch: number;
    fee: string;
  };
};

export default function ClassInfo({ details }: ClassInfoProps) {
  return (
    <motion.section
      className="py-16 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg rounded-2xl bg-muted">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold font-headline text-foreground">
              Class Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <p className="text-center text-lg text-muted-foreground mb-10">{details.description}</p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-6 text-foreground">
                  <BookText className="mr-3 h-6 w-6 text-primary" />
                  Topics Covered
                </h3>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary">
                  {details.topics.map((topic, index) => (
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
                    <span>{details.schedule} ({details.duration})</span>
                  </li>
                  <li className="flex items-center">
                    <Monitor className="mr-4 h-5 w-5 text-primary flex-shrink-0" />
                    <span>{details.format}</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-4 h-5 w-5 text-primary flex-shrink-0" />
                    <span>Max {details.studentsPerBatch} students per batch</span>
                  </li>
                  <li className="flex items-center">
                    <IndianRupee className="mr-4 h-5 w-5 text-primary flex-shrink-0" />
                    <span>{details.fee}</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
