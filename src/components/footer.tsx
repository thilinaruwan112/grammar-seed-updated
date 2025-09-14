
'use client';

import Link from 'next/link';
import { Facebook, Youtube, Instagram, Phone, Mail, FileText, MapPin } from 'lucide-react';
import { useLanguage } from './language-provider';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
];

const translations = {
  en: {
    brandDescription: 'Excellence in English Education for Sri Lankan Students.',
    quickLinks: 'Quick Links',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/classes', label: 'Classes' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/contact', label: 'Contact' },
    ],
    classes: 'Classes',
    classLinks: [
      { href: '/classes/grade-9', label: 'Grade 9' },
      { href: '/classes/grade-10', label: 'Grade 10' },
      { href: '/classes/grade-11', label: 'Grade 11' },
      { href: '/classes/revision-english', label: 'English Revision' },
      { href: '/classes/revision-essay', label: 'Essay Revision' },
    ],
    contact: 'Contact',
    contactInfo: [
      { icon: Phone, text: '+94 70 787 92 92 (WhatsApp)', href: 'https://wa.me/94707879292' },
      { icon: Phone, text: '+94 71 451 90 84 (Call)', href: 'tel:+94714519084' },
      { icon: Mail, text: 'grammarseedcollege@gmail.com', href: 'mailto:grammarseedcollege@gmail.com' },
      { icon: MapPin, text: 'No. 50/1, Dharmapala Mawatha, Pelmadulla.', href: 'https://www.google.com/maps/search/?api=1&query=No.+50/1,+Dharmapala+Mawatha,+Pelmadulla.' },
    ],
    copyright: 'All rights reserved.',
    poweredBy: 'Powered by',
  },
  si: {
    brandDescription: 'ශ්‍රී ලාංකික සිසුන් සඳහා ඉංග්‍රීසි අධ්‍යාපනයේ විශිෂ්ටත්වය.',
    quickLinks: 'ඉක්මන් සබැඳි',
    links: [
      { href: '/', label: 'මුල් පිටුව' },
      { href: '/about', label: 'පිළිබඳව' },
      { href: '/classes', label: 'පන්ති' },
      { href: '/reviews', label: 'සමාලෝචන' },
      { href: '/contact', label: 'සම්බන්ධ වන්න' },
    ],
    classes: 'පන්ති',
    classLinks: [
        { href: '/classes/grade-9', label: '9 ශ්‍රේණිය' },
        { href: '/classes/grade-10', label: '10 ශ්‍රేණිය' },
        { href: '/classes/grade-11', label: '11 ශ්‍රේණිය' },
        { href: '/classes/revision-english', label: 'ඉංග්‍රීසි පුනරීක්ෂණ' },
        { href: '/classes/revision-essay', label: 'රචනා පුනරීක්ෂණ' },
    ],
    contact: 'සම්බන්ධ වන්න',
    contactInfo: [
      { icon: Phone, text: '+94 70 787 92 92 (WhatsApp)', href: 'https://wa.me/94707879292' },
      { icon: Phone, text: '+94 71 451 90 84 (ඇමතුම්)', href: 'tel:+94714519084' },
      { icon: Mail, text: 'grammarseedcollege@gmail.com', href: 'mailto:grammarseedcollege@gmail.com' },
      { icon: MapPin, text: 'නො. 50/1, ධර්මපාල මාවත, පැල්මඩුල්ල.', href: 'https://www.google.com/maps/search/?api=1&query=No.+50/1,+Dharmapala+Mawatha,+Pelmadulla.' },
    ],
    copyright: 'සියලුම හිමිකම් ඇවිරිණි.',
    poweredBy: 'බලගන්වන්නේ',
  }
}


export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;


  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4 col-span-2 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-foreground">Grammar Seed</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.brandDescription}
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground" aria-label={link.label}>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">{t.quickLinks}</h3>
            <ul className="mt-4 space-y-3">
              {t.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Classes */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">{t.classes}</h3>
            <ul className="mt-4 space-y-3">
              {t.classLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">{t.contact}</h3>
            <ul className="mt-4 space-y-4">
              {t.contactInfo.map((item, index) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith('http');
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <a href={item.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="text-base text-muted-foreground hover:text-foreground">{item.text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Grammar Seed. {t.copyright}</p>
          <p className="text-sm text-muted-foreground order-1 sm:order-2">
            {t.poweredBy} <a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Payshia Software Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
