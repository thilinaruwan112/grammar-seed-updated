import {
  Award,
  BookOpen,
  CheckCircle,
  PenSquare,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ContactForm from '@/components/home/ContactForm';

const gradeLevels = [
  { grade: 6, description: 'Building foundational grammar skills.' },
  { grade: 7, description: 'Expanding sentence structure and vocabulary.' },
  { grade: 8, description: 'Mastering complex sentences and tenses.' },
  { grade: 9, description: 'Advanced grammar for effective writing.' },
  { grade: 10, description: 'Preparing for O/L examination success.' },
  { grade: 11, description: 'Perfecting grammar for future studies.' },
];

const qualifications = [
  {
    icon: Award,
    title: 'B.A. in English (Special)',
    description: 'University of Colombo',
  },
  {
    icon: CheckCircle,
    title: 'Certified English Language Teacher',
    description: 'National Institute of Education, Sri Lanka',
  },
  {
    icon: BookOpen,
    title: '10+ Years of Teaching Experience',
    description: 'Specializing in grades 6-11, Sri Lankan curriculum.',
  },
];

const testimonials = [
  {
    name: 'Nimali P.',
    grade: 'Grade 11',
    text: "The grammar lessons were so clear and helpful. I finally understood tenses properly and my writing has improved so much. I got an 'A' for English!",
  },
  {
    name: 'Kasun J.',
    grade: 'Grade 9',
    text: 'I used to find grammar boring, but the classes are very interactive. The quiz generator is fun and helps me practice what I learned.',
  },
  {
    name: 'Fathima S.',
    grade: 'Grade 10',
    text: 'An excellent teacher who is very patient and explains everything well. My confidence in speaking and writing English has grown a lot.',
  },
  {
    name: 'Dhanuka R.',
    grade: 'Grade 11',
    text: 'Thanks to these classes, I was fully prepared for my O/L exams. The focused lessons and resources were exactly what I needed.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-card w-full py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 text-center md:grid-cols-2 md:text-left">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              Grammar Seed
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Nurturing English grammar skills for students in Sri Lanka (Grade
              6-11). Let's grow your knowledge and confidence together.
            </p>
            <Button asChild size="lg">
              <Link href="/quiz">
                <Sparkles className="mr-2" />
                Try the AI Quiz Generator
              </Link>
            </Button>
          </div>
          <div className="relative h-64 w-full md:h-96">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Teacher helping students"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              data-ai-hint="teacher student"
            />
          </div>
        </div>
      </section>

      <section id="grades" className="w-full py-16 md:py-24">
        <div className="container mx-auto space-y-10 px-4">
          <div className="text-center space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              Classes for Every Grade
            </h2>
            <p className="text-muted-foreground">
              Tailored lessons to meet the Sri Lankan curriculum for each grade
              level.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gradeLevels.map(({ grade, description }) => (
              <Card key={grade}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PenSquare className="text-primary" /> Grade {grade}
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="qualifications" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto space-y-10 px-4">
          <div className="text-center space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              My Qualifications
            </h2>
            <p className="text-muted-foreground">
              Dedicated to providing the highest quality English education.
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            {qualifications.map((q, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-4">
                  <q.icon className="mt-1 h-8 w-8 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">{q.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {q.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 md:py-24">
        <div className="container mx-auto space-y-10 px-4">
          <div className="text-center space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              What My Students Say
            </h2>
            <p className="text-muted-foreground">
              Success stories from past students.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between h-full">
                      <CardContent className="pt-6">
                        <Users className="mb-4 h-8 w-8 text-accent" />
                        <p className="italic">"{testimonial.text}"</p>
                      </CardContent>
                      <CardHeader>
                        <CardTitle className="text-base">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.grade}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section id="contact" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto space-y-10 px-4">
          <div className="text-center space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Have questions? Want to enroll? Send me a message!
            </p>
          </div>
          <Card className="mx-auto max-w-xl p-6 md:p-8">
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  );
}
