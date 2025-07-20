'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

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

const testimonials = [
  {
    title: "Emma's IGCSE Success Story",
    description: "Grade 10 student shares how she achieved an A* in IGCSE English Literature",
  },
  {
    title: "Parent Testimonial: James's Journey",
    description: "Parents discuss their son's remarkable improvement in creative writing skill",
  },
];

export default function VideoTestimonialsSection() {
  return (
    <motion.section
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            Watch Our Students Share Their Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See firsthand how our English programs have transformed students' academic journeys
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden bg-card">
                <div className="relative aspect-video bg-neutral-800 flex items-center justify-center cursor-pointer group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">{testimonial.title}</h3>
                  <p className="text-muted-foreground">{testimonial.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
