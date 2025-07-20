'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { grammarCheck, type GrammarCheckOutput } from '@/ai/flows/grammar-checker';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2, CheckCircle, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  text: z.string().min(10, 'Please enter at least 10 characters.').max(2000, 'Text cannot exceed 2000 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function GrammarCheckerForm() {
  const [result, setResult] = useState<GrammarCheckOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const output = await grammarCheck(values);
      setResult(output);
    } catch (e) {
      setError('An error occurred while checking the grammar. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Text to check</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your text here... For example: 'He go to the store and buyed some milk.'"
                        className="resize-none h-48"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Check Grammar
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center">
                <CheckCircle className="mr-2 h-6 w-6 text-green-600" />
                Corrected Text
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{result.correctedText}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              {result.suggestions.length > 0 ? (
                <ul className="space-y-2 list-disc pl-5">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-muted-foreground">{suggestion}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specific suggestions. The text looks good!</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
