'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function StayUpdatedSection() {
  return (
    <motion.section
      className="py-24"
      style={{
        background: 'linear-gradient(to right, hsl(220, 80%, 70%), hsl(150, 60%, 60%))',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl rounded-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-headline text-foreground">
                Stay Updated
              </h2>
              <p className="mt-2 text-muted-foreground">
                Want updates sent to your WhatsApp or Email?
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" />
              <Input placeholder="Mobile Number" type="tel" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade-6">Grade 6</SelectItem>
                  <SelectItem value="grade-7">Grade 7</SelectItem>
                  <SelectItem value="grade-8">Grade 8</SelectItem>
                  <SelectItem value="grade-9">Grade 9</SelectItem>
                  <SelectItem value="grade-10">Grade 10</SelectItem>
                  <SelectItem value="grade-11">Grade 11</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Email Address" type="email" />
              <div className="md:col-span-2 text-center mt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe Now
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
