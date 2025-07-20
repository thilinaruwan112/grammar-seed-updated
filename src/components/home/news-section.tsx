'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../language-provider';

const newsData = {
  en: [
    { title: 'New Batch Starting February 2024', description: 'Registration now open for Grades 6-11. Limited seats available.', date: 'Jan 15, 2024', image: 'https://images.unsplash.com/photo-1585979240843-7b6c1312ffe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjbGFzc3Jvb20lMjBub3RpY2UlMjBib2FyZHxlbnwwfHx8fDE3NTE4MDA3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'classroom notice board' },
    { title: 'O/L Exam Tips Released', description: 'Essential preparation strategies for the upcoming O/L examination.', date: 'Jan 10, 2024', image: 'https://images.unsplash.com/photo-1742549586702-c23994895082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxleGFtJTIwcHJlcGFyYXRpb24lMjBzdHVkZW50fGVufDB8fHx8MTc1MTgwMDc0OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'exam preparation student' },
    { title: 'Online Classes Now Available', description: 'Join from anywhere in Sri Lanka with our new online platform.', date: 'Jan 5, 2024', image: 'https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBjbGFzcyUyMHN0dWRlbnR8ZW58MHx8fHwxNzUxODAwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'online class student' },
  ],
  si: [
    { title: '2024 පෙබරවාරි මස නව කණ්ඩායම', description: '6-11 ශ්‍රේණි සඳහා ලියාපදිංචිය දැන් විවෘතයි. සීමිත ආසන සංඛ්‍යාවක් ඇත.', date: 'ජනවාරි 15, 2024', image: 'https://images.unsplash.com/photo-1585979240843-7b6c1312ffe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjbGFzc3Jvb20lMjBub3RpY2UlMjBib2FyZHxlbnwwfHx8fDE3NTE4MDA3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'classroom notice board' },
    { title: 'සා/පෙළ විභාග උපදෙස්', description: 'ඉදිරි සා/පෙළ විභාගය සඳහා අත්‍යවශ්‍ය සූදානම් වීමේ උපාය මාර්ග.', date: 'ජනවාරි 10, 2024', image: 'https://images.unsplash.com/photo-1742549586702-c23994895082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxleGFtJTIwcHJlcGFyYXRpb24lMjBzdHVkZW50fGVufDB8fHx8MTc1MTgwMDc0OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'exam preparation student' },
    { title: 'මාර්ගගත පන්ති දැන් තිබේ', description: 'අපගේ නව මාර්ගගත වේදිකාව සමඟ ශ්‍රී ලංකාවේ ඕනෑම තැනක සිට සම්බන්ධ වන්න.', date: 'ජනවාරි 5, 2024', image: 'https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBjbGFzcyUyMHN0dWRlbnR8ZW58MHx8fHwxNzUxODAwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'online class student' },
  ],
};

const translations = {
  en: {
    title: 'Latest News & Updates',
    buttonText: 'View All News',
  },
  si: {
    title: 'නවතම පුවත් සහ යාවත්කාලීන',
    buttonText: 'සියලුම පුවත් බලන්න',
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

export default function NewsSection() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;
    const currentNewsData = newsData[language] || newsData.en;

    return (
        <motion.section
            className="py-16 bg-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-12 text-foreground">
                    {t.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {currentNewsData.map((news, index) => (
                        <Card key={index} className="bg-card rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={news.imageHint}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-headline text-xl font-bold mb-2">{news.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{news.description}</p>
                                <p className="text-sm text-secondary-foreground font-medium">{news.date}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-12">
                    <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="#">{t.buttonText}</Link>
                    </Button>
                </div>
            </div>
        </motion.section>
    );
}
