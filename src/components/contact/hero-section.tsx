'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const contactMethods = [
    {
        icon: Phone,
        title: 'Phone / WhatsApp',
        details: 'Call or Message: +94 7XX XXX XXX',
        buttonText: 'Message on WhatsApp',
        buttonLink: '#',
        iconBg: 'bg-green-100 dark:bg-green-900/30',
        iconColor: 'text-green-600 dark:text-green-400',
        buttonClass: 'bg-green-500 hover:bg-green-600 text-white'
    },
    {
        icon: Mail,
        title: 'Email',
        details: 'grammarsheet@gmail.com',
        buttonText: 'Send Email',
        buttonLink: 'mailto:grammarsheet@gmail.com',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
        buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
        icon: MapPin,
        title: 'Location',
        details: 'No. 123, Kandy Road, Gampaha',
        map: true,
        iconBg: 'bg-orange-100 dark:bg-orange-900/30',
        iconColor: 'text-orange-600 dark:text-orange-400',
    }
]

export default function HeroSection() {
  return (
    <motion.section 
      className="relative w-full"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
        <div className="relative h-[60vh] min-h-[500px] w-full flex items-end justify-center">
            <Image
                src="https://placehold.co/1920x1080.png"
                alt="Group of teachers and staff"
                fill
                className="object-cover"
                priority
                data-ai-hint="teachers staff"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-20 text-center text-white px-4 pb-40">
                <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
                    Get in Touch
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-neutral-200 md:text-xl">
                    We'd love to hear from you. Contact us for class details, questions, or registration.
                </p>
            </div>
        </div>
      
        <div className="relative z-10 -mt-32 pb-24">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <motion.div key={index} variants={cardVariants}>
                                <Card className="text-center h-full shadow-2xl rounded-2xl bg-card">
                                    <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                                        <div className="flex flex-col items-center">
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${method.iconBg} mb-4`}>
                                                <Icon className={`w-8 h-8 ${method.iconColor}`} />
                                            </div>
                                            <h3 className="font-headline text-xl font-bold mb-2 text-foreground">{method.title}</h3>
                                            <p className="text-muted-foreground mb-4">{method.details}</p>
                                        </div>
                                        {method.buttonText && (
                                            <Button asChild className={method.buttonClass}>
                                                <Link href={method.buttonLink}>{method.buttonText}</Link>
                                            </Button>
                                        )}
                                        {method.map && (
                                            <div className="w-full h-24 mt-4 rounded-lg overflow-hidden">
                                                 <Image
                                                    src="https://placehold.co/400x200.png"
                                                    alt="Map location"
                                                    width={400}
                                                    height={200}
                                                    className="object-cover w-full h-full"
                                                    data-ai-hint="map location"
                                                />
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    </motion.section>
  );
}
