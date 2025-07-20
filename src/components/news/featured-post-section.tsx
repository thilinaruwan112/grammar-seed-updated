'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

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

export default function FeaturedPostSection() {
  return (
    <motion.section
      className="py-12 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground rounded-2xl shadow-lg border-0">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-white text-primary hover:bg-white/90">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Featured
                  </Badge>
                  <p className="text-sm text-primary-foreground/80">June 28, 2025</p>
                </div>
                <h2 className="text-3xl font-bold font-headline mb-3">
                  New Grade 11 Class Starts - July 10th
                </h2>
                <p className="max-w-3xl text-primary-foreground/90">
                  Join our comprehensive Grade 11 English program designed specifically for O/L preparation. Limited seats available with personalized attention and proven teaching methods.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="#">Read More</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
