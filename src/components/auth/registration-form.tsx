'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ArrowLeft, ArrowRight, UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const formSchema = z
  .object({
    // Step 1: Account
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: z.string(),

    // Step 2: Personal
    fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
    dateOfBirth: z.date({ required_error: 'Date of birth is required.' }),
    grade: z.string({ required_error: 'Please select a grade.' }),

    // Step 3: Contact
    address: z.string().min(10, { message: 'Address must be at least 10 characters.' }),
    mobile: z.string().min(10, { message: 'Please enter a valid mobile number.' }),

    // Step 4: Parent/Guardian
    parentName: z.string().min(3, { message: 'Parent/Guardian name must be at least 3 characters.' }),
    parentMobile: z.string().min(10, { message: 'Please enter a valid mobile number.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormValues = z.infer<typeof formSchema>;

const stepFields: (keyof FormValues)[][] = [
    ['email', 'password', 'confirmPassword'],
    ['fullName', 'dateOfBirth', 'grade'],
    ['address', 'mobile'],
    ['parentName', 'parentMobile'],
];

const stepTitles = [
    'Account Information',
    'Personal Details',
    'Contact Information',
    "Parent/Guardian's Details",
];

export default function RegistrationForm() {
  const [step, setStep] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      address: '',
      mobile: '',
      parentName: '',
      parentMobile: '',
    },
    mode: 'onChange',
  });

  const nextStep = async () => {
    const fields = stepFields[step];
    const isValid = await form.trigger(fields as (keyof FormValues)[]);
    
    if (isValid) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    setStep((s) => s - 1);
  };

  function onSubmit(values: FormValues) {
    console.log(values);
    alert('Registration successful! Check your browser console for the form data.');
    // Here you would typically handle the form submission, e.g., send to a backend.
  }
  
  const totalSteps = stepFields.length;

  return (
    <>
      <CardHeader>
        <Progress value={((step + 1) / totalSteps) * 100} className="w-full mb-4" />
        <CardTitle className="font-headline text-2xl">{stepTitles[step]}</CardTitle>
        <CardDescription>Step {step + 1} of {totalSteps}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className={cn('space-y-6', step !== 0 && 'hidden')}>
              <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input placeholder="student@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
              <FormField control={form.control} name="password" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl><Input type="password" placeholder="********" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
              <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl><Input type="password" placeholder="********" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
            </div>

            <div className={cn('space-y-6', step !== 1 && 'hidden')}>
               <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
              <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date('1990-01-01')} initialFocus /></PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )} />
               <FormField control={form.control} name="grade" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select Your Grade" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {[...Array(6)].map((_, i) => <SelectItem key={i + 6} value={`grade-${i + 6}`}>Grade {i + 6}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
            
            <div className={cn('space-y-6', step !== 2 && 'hidden')}>
              <FormField control={form.control} name="address" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl><Input placeholder="123, Main Street, Colombo" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
              <FormField control={form.control} name="mobile" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student's Mobile Number</FormLabel>
                    <FormControl><Input placeholder="+94 77 123 4567" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
            </div>

            <div className={cn('space-y-6', step !== 3 && 'hidden')}>
              <FormField control={form.control} name="parentName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Full Name</FormLabel>
                    <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
              <FormField control={form.control} name="parentMobile" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Mobile Number</FormLabel>
                    <FormControl><Input placeholder="+94 77 123 4567" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
              )} />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
            {step > 0 && <Button onClick={prevStep} variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>}
            {/* Spacer to push the next/submit button to the right */}
            <div className="ml-auto" /> 
            {step < totalSteps - 1 && <Button onClick={nextStep} type="button">Next <ArrowRight className="ml-2 h-4 w-4" /></Button>}
            {step === totalSteps - 1 && <Button onClick={form.handleSubmit(onSubmit)} type="submit">Register <UserPlus className="ml-2 h-4 w-4" /></Button>}
      </CardFooter>
    </>
  );
}
