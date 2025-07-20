'use server';

/**
 * @fileOverview Generates grammar quizzes based on grade level and learning objectives.
 *
 * - generateGrammarQuiz - A function that generates a grammar quiz.
 * - GenerateGrammarQuizInput - The input type for the generateGrammarQuiz function.
 * - GenerateGrammarQuizOutput - The return type for the generateGrammarQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateGrammarQuizInputSchema = z.object({
  gradeLevel: z
    .number()
    .min(6)
    .max(11)
    .describe('The grade level for the quiz (6-11).'),
  learningObjectives: z
    .string()
    .describe('Specific learning objectives for the grammar quiz.'),
  numberOfQuestions: z
    .number()
    .min(1)
    .max(20)
    .default(10)
    .describe('The number of questions to generate for the quiz.'),
});
export type GenerateGrammarQuizInput = z.infer<typeof GenerateGrammarQuizInputSchema>;

const GenerateGrammarQuizOutputSchema = z.object({
  quiz: z.string().describe('The generated grammar quiz in JSON format.'),
});
export type GenerateGrammarQuizOutput = z.infer<typeof GenerateGrammarQuizOutputSchema>;

export async function generateGrammarQuiz(input: GenerateGrammarQuizInput): Promise<GenerateGrammarQuizOutput> {
  return generateGrammarQuizFlow(input);
}

const generateGrammarQuizPrompt = ai.definePrompt({
  name: 'generateGrammarQuizPrompt',
  input: {schema: GenerateGrammarQuizInputSchema},
  output: {schema: GenerateGrammarQuizOutputSchema},
  prompt: `You are an expert English teacher specializing in grades 6-11.

  Generate a grammar quiz for grade level {{gradeLevel}} with the following learning objectives: {{learningObjectives}}.
  The quiz should have {{numberOfQuestions}} questions.

  The quiz should be returned in JSON format with the following structure:
  {
    "quizTitle": "Title of the Quiz",
    "gradeLevel": {{gradeLevel}},
    "learningObjectives": "{{learningObjectives}}",
    "questions": [
      {
        "questionNumber": 1,
        "questionText": "The question text",
        "answerChoices": ["Choice A", "Choice B", "Choice C", "Choice D"],
        "correctAnswer": "Choice A"
      },
      {
        "questionNumber": 2,
        "questionText": "The question text",
        "answerChoices": ["Choice A", "Choice B", "Choice C", "Choice D"],
        "correctAnswer": "Choice B"
      }
    ]
  }
  `,
});

const generateGrammarQuizFlow = ai.defineFlow(
  {
    name: 'generateGrammarQuizFlow',
    inputSchema: GenerateGrammarQuizInputSchema,
    outputSchema: GenerateGrammarQuizOutputSchema,
  },
  async input => {
    const {output} = await generateGrammarQuizPrompt(input);
    return output!;
  }
);
