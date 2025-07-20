import { Metadata } from 'next';
import QuizGenerator from './QuizGenerator';

export const metadata: Metadata = {
  title: 'AI Grammar Quiz Generator | Grammar Seed',
  description: 'Create custom grammar quizzes based on grade level and learning objectives.',
};

export default function QuizPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
          AI Grammar Quiz Generator
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Create a personalized grammar quiz in seconds. Just enter your requirements below.
        </p>
      </div>
      <QuizGenerator />
    </div>
  );
}
