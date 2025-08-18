'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from '../language-provider';

const testimonialsData = {
  en: [
    { name: 'Amaya Perera', role: 'Grade 10 Student', review: "“Teacher's explanations are so clear and easy to understand. My English grades improved significantly.”", avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUxODAwODA0fDA&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'student portrait' },
    { name: 'Sunil Fernando', role: 'Parent', review: '“Excellent teaching methods. My daughter loves attending classes and her confidence has grown tremendously.”', avatar: 'https://images.unsplash.com/photo-1638149224312-b9c209652be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwYXJlbnQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTE4MDA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'parent portrait' },
    { name: 'Kavya Silva', role: 'Grade 9 Student', review: '“The classes are fun and interactive. I am no longer afraid of English exams!”', avatar: 'https://images.unsplash.com/photo-1516013474378-d6498f0d1434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwaGFwcHl8ZW58MHx8fHwxNzUxODAwODA0fDA&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'student happy' },
    { name: 'Mr. Bandara', role: 'Parent', review: '“A very dedicated teacher who knows how to motivate students. Highly recommended for anyone looking to improve.”', avatar: 'https://images.unsplash.com/photo-1635709242228-6df4cbe9f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwYXJlbnQlMjBzbWlsaW5nfGVufDB8fHx8MTc1MTgwMDgwNHww&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'parent smiling' },
  ],
  si: [
    { name: 'අමායා පෙරේරා', role: '10 ශ්‍රේණියේ ශිෂ්‍යාව', review: "“ගුරුතුමාගේ පැහැදිලි කිරීම් ඉතා සරලයි. මගේ ඉංග්‍රීසි ලකුණු සැලකිය යුතු ලෙස වැඩි වුණා.”", avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUxODAwODA0fDA&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'student portrait' },
    { name: 'සුනිල් ප්‍රනාන්දු', role: 'දෙමාපිය', review: '“විශිෂ්ට ඉගැන්වීම් ක්‍රම. මගේ දුව පන්තිවලට සහභාගී වීමට කැමතියි, ඇගේ විශ්වාසය ගොඩක් වැඩිවෙලා.”', avatar: 'https://images.unsplash.com/photo-1638149224312-b9c209652be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwYXJlbnQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTE4MDA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'parent portrait' },
    { name: 'කාව්‍යා සිල්වා', role: '9 ශ්‍රේණියේ ශිෂ්‍යාව', review: '“පන්ති විනෝදජනකයි සහ අන්තර්ක්‍රියාකාරීයි. මම දැන් ඉංග්‍රීසි විභාගවලට බය නැහැ!”', avatar: 'https://images.unsplash.com/photo-1516013474378-d6498f0d1434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwaGFwcHl8ZW58MHx8fHwxNzUxODAwODA0fDA&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'student happy' },
    { name: 'බණ්ඩාර මහතා', role: 'දෙමාපිය', review: '“සිසුන් දිරිමත් කරන ආකාරය දන්නා ඉතා කැපවූ ගුරුවරයෙක්. දියුණු වීමට බලාපොරොත්තු වන ඕනෑම කෙනෙකුට බෙහෙවින් නිර්දේශ කරමි.”', avatar: 'https://images.unsplash.com/photo-1635709242228-6df4cbe9f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwYXJlbnQlMjBzbWlsaW5nfGVufDB8fHx8MTc1MTgwMDgwNHww&ixlib=rb-4.1.0&q=80&w=1080', avatarHint: 'parent smiling' },
  ],
};

const translations = {
  en: {
    title: 'What Students Say',
    buttonText: 'Read All Reviews',
  },
  si: {
    title: 'සිසුන් පවසන දේ',
    buttonText: 'සියලුම සමාලෝචන කියවන්න',
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

export default function TestimonialsSection() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;
    const currentTestimonials = testimonialsData[language] || testimonialsData.en;

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
    );
    
    return (
        <motion.section
            className="py-16 bg-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-12 text-foreground">
                    {t.title}
                </h2>
                <div className="max-w-4xl mx-auto">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {currentTestimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 p-4">
                                    <Card className="bg-card p-8 rounded-2xl shadow-lg text-left h-full flex flex-col">
                                        <div className="flex items-center mb-4">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full object-cover"
                                                data-ai-hint={testimonial.avatarHint}
                                            />
                                            <div className="ml-4">
                                                <h3 className="font-headline text-xl font-bold">{testimonial.name}</h3>
                                                <p className="text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-secondary" fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground flex-grow">{testimonial.review}</p>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="mt-12">
                    <Button asChild size="lg" variant="secondary" className="rounded-full">
                        <Link href="#">{t.buttonText}</Link>
                    </Button>
                </div>
            </div>
        </motion.section>
    );
}
