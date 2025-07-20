'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type TeacherProfileProps = {
    teacher: {
        name: string;
        image: string;
        imageHint: string;
    }
}

export default function TeacherProfile({ teacher }: TeacherProfileProps) {
  return (
    <motion.section
      className="pb-16 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-lg rounded-2xl bg-muted">
          <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-8">
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
              data-ai-hint={teacher.imageHint}
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold font-headline text-foreground mb-2">Your Teacher</h3>
              <p className="text-xl text-primary font-semibold mb-2">{teacher.name}</p>
              <p className="text-muted-foreground">
                With over 10 years of experience, Mr. Silva is dedicated to helping students succeed with proven teaching methods tailored to the Sri Lankan curriculum.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
