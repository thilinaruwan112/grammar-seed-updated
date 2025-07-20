import { Book, AppWindow, FileText } from 'lucide-react';
import { Metadata } from 'next';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Student Resources | Grammar Seed',
  description: 'A curated list of books, apps, and guides to help you master English grammar.',
};

const resources = [
  {
    type: 'Book',
    title: 'High School English Grammar and Composition by Wren & Martin',
    description:
      'A classic, comprehensive guide covering all aspects of English grammar. Highly recommended for all grade levels.',
    icon: Book,
  },
  {
    type: 'App',
    title: 'Duolingo',
    description:
      'A fun, gamified app to practice grammar, vocabulary, and pronunciation. Great for daily practice.',
    icon: AppWindow,
  },
  {
    type: 'Study Guide',
    title: 'Official O/L English Past Papers',
    description:
      'The best way to prepare for your exams. Practice with real questions from previous years to understand the format.',
    icon: FileText,
  },
  {
    type: 'Book',
    title: 'Oxford English Dictionary',
    description:
      'An essential tool for any serious student. Improve your vocabulary and understanding of word usage.',
    icon: Book,
  },
  {
    type: 'App',
    title: 'Grammarly Keyboard',
    description:
      'Get real-time feedback on your writing on your phone. Helps you correct grammar and spelling mistakes as you type.',
    icon: AppWindow,
  },
  {
    type: 'Study Guide',
    title: 'BBC Learning English',
    description:
      'A fantastic website with free videos, articles, and quizzes on a wide range of grammar topics.',
    icon: FileText,
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
          Student Resources
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A curated list of tools to help you on your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <resource.icon className="h-6 w-6 text-accent" />
                <span className="font-semibold text-muted-foreground">{resource.type}</span>
              </div>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardDescription className="px-6 pb-6 text-base">
              {resource.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
