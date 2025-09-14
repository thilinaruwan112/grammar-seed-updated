'use client';

import Link from 'next/link';
import { Menu, FileText, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { useLanguage } from './language-provider';
import { LanguageToggle } from './language-switcher';

const navLinksData = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/classes', label: 'Classes' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ],
  si: [
    { href: '/', label: 'මුල් පිටුව' },
    { href: '/about', label: 'පිළිබඳව' },
    { href: '/classes', label: 'පන්ති' },
    { href: '/reviews', label: 'සමාලෝචන' },
    { href: '/contact', label: 'සම්බන්ධ වන්න' },
  ]
};

const translations = {
  en: {
    register: 'Register',
  },
  si: {
    register: 'ලියාපදිංචි වන්න',
  },
};


export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const navLinks = navLinksData[language] || navLinksData.en;
  const t = translations[language] || translations.en;


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Grammar Seed</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {label}
              </Link>
            ))}
        </nav>
        
        <div className="flex-1 flex items-center justify-end space-x-2">
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/register">{t.register}</Link>
            </Button>
          </div>
          <LanguageToggle />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setOpen(false)}>
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Grammar Seed</span>
                  </Link>
                  <nav className="flex flex-col space-y-3">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'text-lg transition-colors hover:text-primary',
                          pathname === href ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="border-t pt-6">
                    <Button asChild className="w-full">
                        <Link href="/register" onClick={() => setOpen(false)}>
                            <UserPlus className="mr-2 h-4 w-4" />
                            {t.register}
                        </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
