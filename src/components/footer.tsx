

import Link from 'next/link';
import { Facebook, Youtube, Instagram, Phone, Mail, FileText, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

const classLinks = [
    { href: '/classes/grade-9', label: 'Grade 9' },
    { href: '/classes/grade-10', label: 'Grade 10' },
    { href: '/classes/grade-11', label: 'Grade 11' },
    { href: '/classes/revision-english', label: 'English Revision' },
    { href: '/classes/revision-essay', label: 'Essay Revision' },
];

const contactInfo = [
  { icon: Phone, text: '+94 70 787 92 92 (WhatsApp)', href: 'https://wa.me/94707879292' },
  { icon: Phone, text: '+94 71 451 90 84 (Call)', href: 'tel:+94714519084' },
  { icon: Mail, text: 'grammarseedcollege@gmail.com', href: 'mailto:grammarseedcollege@gmail.com' },
  { icon: MapPin, text: 'No. 50/1, Dharmapala Mawatha, Pelmadulla.', href: 'https://www.google.com/maps/search/?api=1&query=No.+50/1,+Dharmapala+Mawatha,+Pelmadulla.' },
];


export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-foreground">Grammar Seed</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Excellence in English Education for Sri Lankan Students.
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
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
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
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Classes</h3>
            <ul className="mt-4 space-y-3">
              {classLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact</h3>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((item, index) => {
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

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Grammar Seed. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Powered by <a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Payshia Software Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
