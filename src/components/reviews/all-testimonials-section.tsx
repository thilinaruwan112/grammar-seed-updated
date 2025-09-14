'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Kamal Silva',
    role: 'Grade 10 Student',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student portrait',
    rating: 5,
    quote: "“The grammar lessons are so well structured. I finally understand tenses and sentence construction properly.”",
  },
  {
    name: 'Mrs. Perera',
    role: 'Parent',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'parent portrait',
    rating: 5,
    quote: "“My daughter's confidence in English improved dramatically. The teacher is very patient and understanding.”",
  },
  {
    name: 'Sandun Fernando',
    role: 'Grade 9 Student',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student portrait',
    rating: 4,
    quote: '“Online classes are convenient and interactive. The worksheets help me practice at home effectively.”',
  },
  {
    name: 'Amaya Wickrama',
    role: 'Grade 8 Student',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student portrait',
    rating: 5,
    quote: '“Sir makes learning fun with examples from our daily life. Grammar is no longer boring for me!”',
  },
  {
    name: 'Mr. Rajapaksha',
    role: 'Parent',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'parent portrait',
    rating: 5,
    quote: "“Excellent value for money. My son's school marks improved significantly after joining Grammar Sheet.”",
  },
  {
    name: 'Tharushi Mendis',
    role: 'Grade 11 Student',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student portrait',
    rating: 5,
    quote: '“The essay writing techniques taught here helped me excel in my A/L English literature exam.”',
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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-5 w-5',
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          )}
        />
      ))}
    </div>
  );
};

export default function AllTestimonialsSection() {
  return (
    <motion.section
      className="py-24 bg-gray-50 dark:bg-neutral-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            All Testimonials
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Browse through all the wonderful feedback from our students and parents
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Select defaultValue="all-grades">
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="All Grade Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-grades">All Grade Levels</SelectItem>
              <SelectItem value="grade-6">Grade 6</SelectItem>
              <SelectItem value="grade-7">Grade 7</SelectItem>
              <SelectItem value="grade-8">Grade 8</SelectItem>
              <SelectItem value="grade-9">Grade 9</SelectItem>
              <SelectItem value="grade-10">Grade 10</SelectItem>
              <SelectItem value="grade-11">Grade 11</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-types">
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="All Class Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Class Types</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="physical">Physical</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Sort by Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Sort by Newest</SelectItem>
              <SelectItem value="oldest">Sort by Oldest</SelectItem>
              <SelectItem value="highest-rating">Highest Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-card">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="font-semibold font-headline text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p className="text-muted-foreground my-4 flex-grow">{testimonial.quote}</p>
                  <Link href="#" className="text-sm font-semibold text-primary hover:underline mt-auto">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-16">
            <nav className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="default" size="icon">1</Button>
                <Button variant="outline" size="icon">2</Button>
                 <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </nav>
        </div>
      </div>
    </motion.section>
  );
}
