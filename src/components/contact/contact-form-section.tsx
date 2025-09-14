'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { motion } from 'framer-motion';
import { useLanguage } from '../language-provider';

const createFormSchema = (t: any) => z.object({
  name: z.string().min(2, { message: t.validation.name_min }),
  grade: z.string({ required_error: t.validation.grade_required }),
  mobile: z.string().min(10, { message: t.validation.mobile_min }),
  email: z.string().email({ message: t.validation.email_invalid }).optional().or(z.literal('')),
  message: z.string().min(10, { message: t.validation.message_min }),
});


const translations = {
    en: {
        title: "Send Us a Message",
        subtitle: "Fill out the form below and we'll get back to you soon",
        labels: {
            name: "Name",
            grade: "Grade",
            selectGrade: "Select Grade",
            mobile: "Mobile Number",
            email: "Email (Optional)",
            message: "Message",
            message_placeholder: "Type your message here...",
            submit: "Submit Message",
            grades: [
                { value: "grade-6", label: "Grade 6" },
                { value: "grade-7", label: "Grade 7" },
                { value: "grade-8", label: "Grade 8" },
                { value: "grade-9", label: "Grade 9" },
                { value: "grade-10", label: "Grade 10" },
                { value: "grade-11", label: "Grade 11" },
            ]
        },
        validation: {
            name_min: "Name must be at least 2 characters.",
            grade_required: "Please select a grade.",
            mobile_min: "Please enter a valid mobile number.",
            email_invalid: "Please enter a valid email.",
            message_min: "Message must be at least 10 characters.",
        }
    },
    si: {
        title: "අපට පණිවිඩයක් එවන්න",
        subtitle: "පහත පෝරමය පුරවන්න, අපි ඉක්මනින් ඔබ හා සම්බන්ධ වන්නෙමු",
        labels: {
            name: "නම",
            grade: "ශ්‍රේණිය",
            selectGrade: "ශ්‍රේණිය තෝරන්න",
            mobile: "දුරකථන අංකය",
            email: "විද්‍යුත් තැපෑල (අත්‍යවශ්‍ය නොවේ)",
            message: "පණිවිඩය",
            message_placeholder: "ඔබගේ පණිවිඩය මෙහි ටයිප් කරන්න...",
            submit: "පණිවිඩය යවන්න",
            grades: [
                { value: "grade-6", label: "6 ශ්‍රේණිය" },
                { value: "grade-7", label: "7 ශ්‍රේණිය" },
                { value: "grade-8", label: "8 ශ්‍රේණිය" },
                { value: "grade-9", label: "9 ශ්‍රේණිය" },
                { value: "grade-10", label: "10 ශ්‍රේණිය" },
                { value: "grade-11", label: "11 ශ්‍රේණිය" },
            ]
        },
        validation: {
            name_min: "නම අවම වශයෙන් අක්ෂර 2ක් විය යුතුය.",
            grade_required: "කරුණාකර ශ්‍රේණියක් තෝරන්න.",
            mobile_min: "කරුණාකර වලංගු දුරකථන අංකයක් ඇතුළත් කරන්න.",
            email_invalid: "කරුණාකර වලංගු විද්‍යුත් තැපෑලක් ඇතුළත් කරන්න.",
            message_min: "පණිවිඩය අවම වශයෙන් අක්ෂර 10ක් විය යුතුය.",
        }
    }
}

export default function ContactFormSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  const formSchema = createFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically handle the form submission, e.g., send an email or save to a database.
  }

  return (
    <motion.section 
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.labels.name}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.labels.grade}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t.labels.selectGrade} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {t.labels.grades.map(grade => (
                            <SelectItem key={grade.value} value={grade.value}>{grade.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.labels.mobile}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.labels.email}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.labels.message}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t.labels.message_placeholder}
                      className="resize-none h-40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t.labels.submit}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.section>
  );
}
