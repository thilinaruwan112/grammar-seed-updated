import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const practiceQuizzes = [
  { title: 'Tense Identification', description: 'Identify the correct tense in each sentence. 10 questions.' },
  { title: 'Punctuation Challenge', description: 'Place commas, semicolons, and periods correctly. 15 questions.' },
  { title: 'Sentence Structure Quiz', description: 'Differentiate between simple, compound, and complex sentences. 12 questions.' },
  { title: 'Noun and Verb Agreement', description: 'Match subjects with the correct verb form. 20 questions.' },
];

export default function PracticePage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">Practice Exercises</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          Put your knowledge to the test. These interactive quizzes will help reinforce what you've learned.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {practiceQuizzes.map((quiz) => (
          <Card key={quiz.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">{quiz.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{quiz.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#">Start Quiz</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
