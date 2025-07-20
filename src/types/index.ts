import { z } from 'zod';

export const QuizQuestionSchema = z.object({
  questionNumber: z.number(),
  questionText: z.string(),
  answerChoices: z.array(z.string()),
  correctAnswer: z.string(),
});

export const QuizSchema = z.object({
  quizTitle: z.string(),
  gradeLevel: z.number(),
  learningObjectives: z.string(),
  questions: z.array(QuizQuestionSchema),
});

export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;
export type Quiz = z.infer<typeof QuizSchema>;
