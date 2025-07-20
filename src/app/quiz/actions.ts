'use server';

import { z } from 'zod';
import {
  generateGrammarQuiz,
  type GenerateGrammarQuizInput,
} from '@/ai/flows/grammar-quiz-generator';
import { QuizSchema } from '@/types';

export async function generateQuizAction(input: GenerateGrammarQuizInput) {
  try {
    const validatedInput = z
      .object({
        gradeLevel: z.coerce.number().min(6).max(11),
        learningObjectives: z.string().min(5),
        numberOfQuestions: z.coerce.number().min(1).max(20),
      })
      .safeParse(input);

    if (!validatedInput.success) {
      return { success: false, error: 'Invalid input.' };
    }

    const result = await generateGrammarQuiz(validatedInput.data);
    
    if (!result || !result.quiz) {
        throw new Error("AI response was empty.");
    }

    const quizData = JSON.parse(result.quiz);
    const parsedQuiz = QuizSchema.parse(quizData);

    return { success: true, quiz: parsedQuiz };
  } catch (error) {
    console.error('Error generating quiz:', error);
    let errorMessage = 'Failed to generate quiz due to an unexpected error.';
    if (error instanceof z.ZodError) {
        errorMessage = 'The AI returned data in an unexpected format. Please try again.';
    } else if (error instanceof SyntaxError) {
        errorMessage = 'The AI response was not valid JSON. Please try again.';
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}
