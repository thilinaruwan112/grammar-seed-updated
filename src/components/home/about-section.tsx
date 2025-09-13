'use client';

import Image from 'next/image';
import { Star, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../language-provider';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const translations = {
  en: {
    sectionTitle: 'About your teacher',
    teacherName: 'Mr. Shehan Jayawardhana',
    teacherRole: 'Founder & Lead Lecturer',
    p1: 'I specialize in teaching school English syllabuses for Grades 9 – 11, with a strong focus on grammar and writing. My goal is to help students build premium-level writing skills—especially in essay writing—by developing clear thinking and confident expression.',
    p2: 'At Grammar Seed College, we believe that strong grammar leads to strong minds. Every lesson is designed to guide students toward top exam results in English.',
    qualificationsTitle: 'Experience & Qualifications',
    exp1: '2 years of experience in online education',
    exp2: 'English Diploma holder, University of Sabaragamuwa, Sri Lanka',
    stat1: '500+ Students Taught',
    stat2: '95% Success Rate',
  },
  si: {
    sectionTitle: 'ඔබේ ගුරුවරයා ගැන',
    teacherName: 'ශිහාන් ජයවර්ධන මහතා',
    teacherRole: 'ආරම්භක සහ ප්‍රධාන කථිකාචාර්ය',
    p1: 'මම 9 – 11 ශ්‍රේණි සඳහා පාසල් ඉංග්‍රීසි විෂය නිර්දේශ ඉගැන්වීමට විශේෂත්වයක් දක්වමි, ව්‍යාකරණ සහ ලිවීම කෙරෙහි දැඩි අවධානයක් යොමු කරමි. මගේ ඉලක්කය වන්නේ පැහැදිලි චින්තනය සහ විශ්වාසනීය ප්‍රකාශනය වර්ධනය කිරීම මගින් සිසුන්ට ඉහළ මට්ටමේ ලිවීමේ කුසලතා—විශේෂයෙන් රචනා ලිවීමේදී—ගොඩනැගීමට උපකාර කිරීමයි.',
    p2: 'ග්‍රැමර් සීඩ් විද්‍යාලයේදී, අපි විශ්වාස කරන්නේ ශක්තිමත් ව්‍යාකරණ ශක්තිමත් මනසකට මඟ පෙන්වන බවයි. සෑම පාඩමක්ම ඉංග්‍රීසි විභාග වලින් ඉහළම ප්‍රතිඵල ලබා ගැනීම සඳහා සිසුන්ට මග පෙන්වීම සඳහා නිර්මාණය කර ඇත.',
    qualificationsTitle: 'පළපුරුද්ද සහ සුදුසුකම්',
    exp1: 'මාර්ගගත අධ්‍යාපනයේ වසර 2ක පළපුරුද්ද',
    exp2: 'ඉංග්‍රීසි ඩිප්ලෝමාධාරී, සබරගමුව විශ්වවිද්‍යාලය, ශ්‍රී ලංකාව',
    stat1: '500+ සිසුන් උගන්වා ඇත',
    stat2: '95% සාර්ථකත්ව අනුපාතය',
  }
};


export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <motion.section 
      className="py-24 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-foreground">
            {t.sectionTitle}
          </h2>
          <div className="mt-4 w-24 h-1 bg-secondary-foreground mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="https://content-provider.payshia.com/grammar-seed/square-optimized.webp"
                alt={t.teacherName}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl"
                data-ai-hint="teacher portrait"
              />
              <div className="absolute inset-0 rounded-full ring-8 ring-white/10" />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold font-headline text-foreground mb-2">
              {t.teacherName}
            </h3>
            <div className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {t.teacherRole}
            </div>
            
            <p className="text-lg text-muted-foreground mb-4">
              {t.p1}
            </p>
            <p className="text-muted-foreground mb-8">
              {t.p2}
            </p>
            
            <div className="space-y-4 text-left">
                <h4 className="text-xl font-bold font-headline text-foreground mb-2">{t.qualificationsTitle}</h4>
                <div className="flex items-center gap-4 text-foreground">
                    <Briefcase className="h-5 w-5 text-secondary-foreground" />
                    <span>{t.exp1}</span>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                    <GraduationCap className="h-5 w-5 text-secondary-foreground" />
                    <span>{t.exp2}</span>
                </div>
                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 text-foreground mt-4">
                    <div className="flex items-center gap-2 font-medium">
                        <Star className="h-5 w-5 text-secondary-foreground" fill="currentColor" />
                        <span>{t.stat1}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                        <GraduationCap className="h-5 w-5 text-secondary-foreground" />
                        <span>{t.stat2}</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
