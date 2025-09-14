
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  role: z.string({ required_error: 'Please select your role.' }),
  rating: z.number().min(1, { message: 'Please provide a rating.' }).max(5),
  review: z.string().min(10, { message: 'Review must be at least 10 characters.' }).max(500, { message: 'Review cannot exceed 500 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const StarRatingInput = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <button
                        type="button"
                        key={ratingValue}
                        onClick={() => onChange(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                        className="cursor-pointer"
                    >
                        <Star
                            className={cn(
                                "h-8 w-8 transition-colors",
                                ratingValue <= (hover || value) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            )}
                        />
                    </button>
                )
            })}
        </div>
    )
}

export default function AddReviewForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      role: undefined,
      rating: 0,
      review: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    alert('Thank you for your review! Check your browser console for the form data.');
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Your Feedback</CardTitle>
        <CardDescription>All fields are required</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
              <FormField control={form.control} name="role" render={({ field }) => (
                  <FormItem>
                    <FormLabel>I am a...</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select Your Role" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>

            <FormField control={form.control} name="rating" render={({ field }) => (
                <FormItem>
                    <FormLabel>Overall Rating</FormLabel>
                    <FormControl>
                        <StarRatingInput value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

             <FormField control={form.control} name="review" render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your experience with us..."
                      className="resize-none h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

             <CardFooter className="px-0 pt-6 flex justify-end">
                <Button type="submit">
                    Submit Review <Send className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
