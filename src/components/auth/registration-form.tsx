'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { classDetailsData } from '@/lib/class-data';
import { Checkbox } from '../ui/checkbox';
import { cn } from '@/lib/utils';

const formSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: z.string(),
    mobile: z.string().min(10, { message: 'Please enter a valid mobile number.' }),
    selectedClasses: z.array(z.string()).refine(value => value.some(item => item), {
      message: 'You have to select at least one class.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormValues = z.infer<typeof formSchema>;

const classOptions = Object.keys(classDetailsData)
  .filter(key => key.startsWith('grade-') || key.startsWith('revision-'))
  .map(key => ({
    id: key,
    label: classDetailsData[key].fullTitle || `${classDetailsData[key].title} - Grade ${classDetailsData[key].grade}`,
  }));


export default function RegistrationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
      selectedClasses: [],
    },
    mode: 'onChange',
  });


  function onSubmit(values: FormValues) {
    console.log(values);
    alert('Registration successful! Check your browser console for the form data.');
    // Here you would typically handle the form submission, e.g., send to a backend.
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Create Your Account</CardTitle>
        <CardDescription>Join our classes in just a few steps.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input placeholder="student@example.com" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl><Input placeholder="+94 77 123 4567" {...field} /></FormControl>
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
             <FormField
              control={form.control}
              name="selectedClasses"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Select Classes</FormLabel>
                    <CardDescription>You can choose one or more classes to enroll in.</CardDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {classOptions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="selectedClasses"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal w-full cursor-pointer">
                                <Card className={cn("transition-all", field.value?.includes(item.id) && "border-primary")}>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold">{item.label}</h3>
                                    </CardContent>
                                </Card>
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0 pt-6 flex justify-end">
                <Button onClick={form.handleSubmit(onSubmit)} type="submit" size="lg">Register <UserPlus className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
