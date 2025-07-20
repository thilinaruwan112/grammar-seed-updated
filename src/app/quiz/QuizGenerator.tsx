'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Sparkles, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateQuizAction } from './actions';
import type { Quiz } from '@/types';
import QuizDisplay from '@/components/quiz/QuizDisplay';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  gradeLevel: z.string().nonempty('Please select a grade level.'),
  learningObjectives: z.string().min(10, {
    message: 'Please describe the learning objectives (at least 10 characters).',
  }),
  numberOfQuestions: z.coerce
    .number()
    .min(1, 'Must be at least 1 question.')
    .max(20, 'Cannot exceed 20 questions.'),
});

type QuizFormValues = z.infer<typeof formSchema>;

export default function QuizGenerator() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gradeLevel: '8',
      learningObjectives: 'Practice using past, present, and future tenses.',
      numberOfQuestions: 5,
    },
  });

  async function onSubmit(values: QuizFormValues) {
    setIsLoading(true);
    setQuiz(null);

    const result = await generateQuizAction({
      gradeLevel: parseInt(values.gradeLevel, 10),
      learningObjectives: values.learningObjectives,
      numberOfQuestions: values.numberOfQuestions,
    });

    setIsLoading(false);

    if (result.success && result.quiz) {
      setQuiz(result.quiz);
      toast({
        title: 'Quiz Generated!',
        description: 'Your new quiz is ready below.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: result.error || 'There was a problem generating your quiz.',
      });
    }
  }

  return (
    <div>
      <Card>
        <CardContent className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[6, 7, 8, 9, 10, 11].map((grade) => (
                            <SelectItem key={grade} value={String(grade)}>
                              Grade {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="numberOfQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Questions (1-20)</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="learningObjectives"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Learning Objectives</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Identify nouns and verbs, use correct punctuation, practice with prepositions..."
                        className="resize-y min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe what you want the quiz to test.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Quiz
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <div className="text-center mt-12">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-lg text-muted-foreground">Generating your quiz... This may take a moment.</p>
         </div>
      )}

      {quiz && (
        <div className="mt-12">
          <QuizDisplay quiz={quiz} key={Date.now()} />
        </div>
      )}
    </div>
  );
}
