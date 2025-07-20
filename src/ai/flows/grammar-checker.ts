// src/ai/flows/grammar-checker.ts
'use server';
/**
 * @fileOverview Grammar checker flow.
 *
 * - grammarCheck - A function that handles the grammar check process.
 * - GrammarCheckInput - The input type for the grammarCheck function.
 * - GrammarCheckOutput - The return type for the grammarCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GrammarCheckInputSchema = z.object({
  text: z.string().describe('The text to check for grammar and style.'),
});
export type GrammarCheckInput = z.infer<typeof GrammarCheckInputSchema>;

const GrammarCheckOutputSchema = z.object({
  correctedText: z.string().describe('The corrected text with grammar and style improvements.'),
  suggestions: z.array(z.string()).describe('A list of suggestions for improving the text.'),
});
export type GrammarCheckOutput = z.infer<typeof GrammarCheckOutputSchema>;

export async function grammarCheck(input: GrammarCheckInput): Promise<GrammarCheckOutput> {
  return grammarCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'grammarCheckPrompt',
  input: {schema: GrammarCheckInputSchema},
  output: {schema: GrammarCheckOutputSchema},
  prompt: `You are an expert grammar and style checker. You will receive a text and you will return a corrected text with grammar and style improvements, and a list of suggestions for improving the text.

Text: {{{text}}}`,
});

const grammarCheckFlow = ai.defineFlow(
  {
    name: 'grammarCheckFlow',
    inputSchema: GrammarCheckInputSchema,
    outputSchema: GrammarCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
