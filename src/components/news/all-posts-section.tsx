'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Calendar,
  ArrowRightCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const filters = ['All', 'Notices', 'Tips', 'Events', 'Schedule'];

const posts = [
  {
    category: 'Exam Tips',
    title: '5 Essential Grammar Rules for O/L English',
    description:
      'Master these fundamental grammar concepts to excel in your O/L English examination. From subject-verb agreement to proper tense usage...',
    date: 'June 25, 2025',
    badgeVariant: 'secondary',
  },
  {
    category: 'Notice',
    title: 'Class Schedule Changes - Week of July 1st',
    description:
      'Important updates to our regular class schedule due to public holidays. All Grade 9 and 10 classes will be rescheduled...',
    date: 'June 22, 2025',
    badgeVariant: 'destructive',
  },
  {
    category: 'Events',
    title: 'Free Trial Classes Available This Week',
    description:
      'Experience our teaching methodology with free trial classes for new students. Available for all grades with limited slots...',
    date: 'June 20, 2025',
    badgeVariant: 'default',
  },
  {
    category: 'Tips',
    title: 'How to Improve Your Essay Writing Skills',
    description:
      'Learn effective techniques to structure your essays and improve your writing style for better marks in examinations...',
    date: 'June 18, 2025',
    badgeVariant: 'secondary',
  },
];

const quickTips = [
  'Use active voice in essays for clearer expression',
  'Review a grammar point each morning',
  'Practice past papers weekly for better preparation',
  'Read English newspapers to improve vocabulary',
];

const upcomingEvents = [
  {
    title: 'Trial Class',
    date: 'July 10',
    color: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-800 dark:text-blue-200',
  },
  {
    title: 'Term End Test',
    date: 'August 5',
    color: 'bg-orange-100 dark:bg-orange-900/30',
    textColor: 'text-orange-800 dark:text-orange-200',
  },
  {
    title: 'Holiday Break',
    date: 'Aug 15-22',
    color: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-800 dark:text-green-200',
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
    },
  },
};

export default function AllPostsSection() {
  return (
    <motion.section
      className="py-12 lg:py-24 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant={index === 0 ? 'default' : 'outline'}
              className={cn(
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background'
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={post.badgeVariant as any}>
                      {post.category}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {post.date}
                    </p>
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-3 text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <Link
                    href="#"
                    className="flex items-center font-semibold text-primary hover:underline"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <Card className="shadow-sm bg-card">
              <CardContent className="p-6">
                <h3 className="flex items-center text-lg font-bold font-headline mb-4">
                  <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                  Quick English Tips
                </h3>
                <ul className="space-y-3">
                  {quickTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm bg-card">
              <CardContent className="p-6">
                <h3 className="flex items-center text-lg font-bold font-headline mb-4">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Upcoming Events
                </h3>
                <ul className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className={cn(
                          'flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors',
                          event.color
                        )}
                      >
                        <div>
                          <p className="font-semibold text-foreground">
                            {event.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {event.date}
                          </p>
                        </div>
                        <ArrowRightCircle
                          className={cn('h-5 w-5', event.textColor)}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
