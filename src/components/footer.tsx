import Link from 'next/link';
import { Facebook, Youtube, Instagram, Phone, Mail, FileText } from 'lucide-react';

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
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

const classLinks = [
    { href: '#', label: 'Grade 6-8' },
    { href: '#', label: 'Grade 9-10' },
    { href: '#', label: 'Grade 11' },
    { href: '#', label: 'Trial Classes' },
];

const contactInfo = [
  { icon: Phone, text: '+94 77 123 4567', href: 'tel:+94771234567' },
  { icon: Phone, text: '+94 77 123 4567', href: 'tel:+94771234567' },
  { icon: Mail, text: 'info@grammarseed.lk', href: 'mailto:info@grammarseed.lk' },
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
              Excellence in English Education for Sri Lankan Students
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
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href={item.href} className="text-base text-muted-foreground hover:text-foreground">{item.text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Grammar Seed. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Powered by <a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Payshia Software Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
