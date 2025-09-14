
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UserPlus } from 'lucide-react';

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
import { useLanguage } from '../language-provider';

const createFormSchema = (t: any) => z
  .object({
    email: z.string().email({ message: t.validation.email }),
    password: z.string().min(8, { message: t.validation.password_min }),
    confirmPassword: z.string(),
    mobile: z.string().min(10, { message: t.validation.mobile_min }),
    selectedClasses: z.array(z.string()).refine(value => value.some(item => item), {
      message: t.validation.class_required,
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: t.validation.password_match,
    path: ['confirmPassword'],
  });

type FormValues = z.infer<ReturnType<typeof createFormSchema>>;

const translations = {
  en: {
    title: 'Create Your Account',
    description: 'Join our classes in just a few steps.',
    labels: {
      email: 'Email',
      contactNumber: 'Contact Number',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      selectClasses: 'Select Classes',
      classDescription: 'You can choose one or more classes to enroll in.',
      register: 'Register',
    },
    placeholders: {
      email: 'student@example.com',
      contactNumber: '+94 77 123 4567',
      password: '********',
    },
    validation: {
      email: 'Please enter a valid email.',
      password_min: 'Password must be at least 8 characters.',
      password_match: "Passwords don't match",
      mobile_min: 'Please enter a valid mobile number.',
      class_required: 'You have to select at least one class.',
    },
  },
  si: {
    title: 'ඔබගේ ගිණුම සාදන්න',
    description: 'පියවර කිහිපයකින් අපගේ පන්ති වලට සම්බන්ධ වන්න.',
    labels: {
      email: 'විද්‍යුත් තැපෑල',
      contactNumber: 'සම්බන්ධතා අංකය',
      password: 'මුරපදය',
      confirmPassword: 'මුරපදය තහවුරු කරන්න',
      selectClasses: 'පන්ති තෝරන්න',
      classDescription: 'ඔබට ඇතුළත් වීමට පන්ති එකක් හෝ කිහිපයක් තෝරා ගත හැකිය.',
      register: 'ලියාපදිංචි වන්න',
    },
    placeholders: {
      email: 'student@example.com',
      contactNumber: '+94 77 123 4567',
      password: '********',
    },
    validation: {
      email: 'කරුණාකර වලංගු විද්‍යුත් තැපෑලක් ඇතුළත් කරන්න.',
      password_min: 'මුරපදය අවම වශයෙන් අක්ෂර 8 ක් විය යුතුය.',
      password_match: 'මුරපද නොගැලපේ',
      mobile_min: 'කරුණාකර වලංගු ජංගම දුරකථන අංකයක් ඇතුළත් කරන්න.',
      class_required: 'ඔබ අවම වශයෙන් එක් පන්තියක්වත් තෝරා ගත යුතුය.',
    },
  },
};


export default function RegistrationForm() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const currentClassData = classDetailsData[language] || classDetailsData.en;

  const classOptions = Object.keys(currentClassData)
    .filter(key => key.startsWith('grade-') || key.startsWith('revision-'))
    .map(key => ({
      id: key,
      label: currentClassData[key].fullTitle || `${currentClassData[key].title} - Grade ${currentClassData[key].grade}`,
    }));

  const formSchema = createFormSchema(t);

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
        <CardTitle className="font-headline text-2xl">{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t.labels.email}</FormLabel>
                        <FormControl><Input placeholder={t.placeholders.email} {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t.labels.contactNumber}</FormLabel>
                        <FormControl><Input placeholder={t.placeholders.contactNumber} {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t.labels.password}</FormLabel>
                        <FormControl><Input type="password" placeholder={t.placeholders.password} {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t.labels.confirmPassword}</FormLabel>
                        <FormControl><Input type="password" placeholder={t.placeholders.password} {...field} /></FormControl>
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
                    <FormLabel className="text-base">{t.labels.selectClasses}</FormLabel>
                    <CardDescription>{t.labels.classDescription}</CardDescription>
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
                <Button onClick={form.handleSubmit(onSubmit)} type="submit" size="lg">{t.labels.register} <UserPlus className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
