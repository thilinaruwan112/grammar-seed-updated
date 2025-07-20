'use client';

import type { Quiz, QuizQuestion } from '@/types';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Check, X, Percent } from 'lucide-react';
import { Progress } from '../ui/progress';

type SelectedAnswers = { [key: number]: string };
type AnswerResults = { [key: number]: boolean };

export default function QuizDisplay({ quiz }: { quiz: Quiz }) {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [results, setResults] = useState<AnswerResults | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswerChange = (questionNumber: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionNumber]: answer,
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    const newResults: AnswerResults = {};

    quiz.questions.forEach((q) => {
      const isCorrect = selectedAnswers[q.questionNumber] === q.correctAnswer;
      newResults[q.questionNumber] = isCorrect;
      if (isCorrect) {
        correctCount++;
      }
    });

    setResults(newResults);
    const calculatedScore = (correctCount / quiz.questions.length) * 100;
    setScore(calculatedScore);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setResults(null);
    setScore(null);
  }

  const getResultColor = (questionNumber: number, choice: string) => {
    if (!results) return '';
    const isCorrect = quiz.questions.find(q => q.questionNumber === questionNumber)?.correctAnswer === choice;
    const isSelected = selectedAnswers[questionNumber] === choice;

    if(isCorrect) return 'text-green-600';
    if(isSelected && !isCorrect) return 'text-red-600 line-through';
    return '';
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">{quiz.quizTitle}</CardTitle>
        <CardDescription>
          Grade {quiz.gradeLevel} | {quiz.learningObjectives}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {quiz.questions.map((question) => (
          <Card key={question.questionNumber} className="p-6">
            <p className="font-semibold mb-4">
              {question.questionNumber}. {question.questionText}
            </p>
            <RadioGroup
              value={selectedAnswers[question.questionNumber]}
              onValueChange={(value) => handleAnswerChange(question.questionNumber, value)}
              disabled={!!results}
            >
              {question.answerChoices.map((choice, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={choice} id={`${question.questionNumber}-${index}`} />
                  <Label htmlFor={`${question.questionNumber}-${index}`} className={cn("text-base", results && getResultColor(question.questionNumber, choice))}>
                    {choice}
                  </Label>
                   {results && quiz.questions.find(q => q.questionNumber === question.questionNumber)?.correctAnswer === choice && <Check className="h-5 w-5 text-green-600" />}
                   {results && selectedAnswers[question.questionNumber] === choice && quiz.questions.find(q => q.questionNumber === question.questionNumber)?.correctAnswer !== choice && <X className="h-5 w-5 text-red-600" />}
                </div>
              ))}
            </RadioGroup>
          </Card>
        ))}
        {results && score !== null && (
            <Card className="bg-muted p-6 text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                    <Percent /> Your Score
                </CardTitle>
                <p className="text-4xl font-bold text-primary my-4">{score.toFixed(0)}%</p>
                <Progress value={score} className="w-full" />
                <p className="text-muted-foreground mt-2">{`You answered ${score/100 * quiz.questions.length} out of ${quiz.questions.length} questions correctly.`}</p>
            </Card>
        )}
      </CardContent>
      <CardFooter>
        {results ? (
            <Button onClick={resetQuiz} className="w-full">Try a new Quiz or Take this one again</Button>
        ) : (
            <Button onClick={handleSubmit} className="w-full" disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}>
            Check Answers
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
