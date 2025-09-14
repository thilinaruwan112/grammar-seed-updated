
'use client';

import Link from 'next/link';
import { Menu, FileText, UserPlus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { useLanguage } from './language-provider';
import { LanguageToggle } from './language-switcher';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { classDetailsData } from '@/lib/class-data';


const navLinksData = {
  en: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/classes', label: 'Classes' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/contact', label: 'Contact' },
    ],
    register: 'Register',
  },
  si: {
    links: [
      { href: '/', label: 'මුල් පිටුව' },
      { href: '/about', label: 'පිළිබඳව' },
      { href: '/classes', label: 'පන්ති' },
      { href: '/reviews', label: 'සමාලෝචන' },
      { href: '/contact', label: 'සම්බන්ධ වන්න' },
    ],
    register: 'ලියාපදිංචි වන්න',
  },
};

const mobileNavContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function NavLink({ href, label, children }: { href: string, label: string, children?: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'relative transition-colors hover:text-primary',
        isActive ? 'text-primary font-semibold' : 'text-foreground/60'
      )}
    >
      <span className="flex items-center gap-1">
        {label}
        {children}
      </span>
      {isActive && (
        <motion.div
          className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary"
          layoutId="underline"
          initial={false}
        />
      )}
    </Link>
  );
}


function ClassesDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const currentClassData = classDetailsData[language] || classDetailsData.en;
  
  const theoryClasses = Object.keys(currentClassData)
    .filter(key => key.startsWith('grade-'))
    .map(key => ({
      href: `/classes/${key}`,
      label: language === 'si' ? `${currentClassData[key].grade} ශ්‍රේණිය` : `Grade ${currentClassData[key].grade}`
    }));

  const revisionClasses = Object.keys(currentClassData)
    .filter(key => key.startsWith('revision-'))
    .map(key => ({
      href: `/classes/${key}`,
      label: currentClassData[key].title
    }));
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <NavLink href="/classes" label="Classes">
            <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
          </NavLink>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-auto" 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
        align="start"
      >
        <motion.div
            className="grid grid-cols-2 gap-4 p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            <DropdownMenuGroup>
                <DropdownMenuLabel className="font-semibold text-foreground">Theory Classes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {theoryClasses.map(({ href, label }) => (
                    <DropdownMenuItem key={href} asChild className="cursor-pointer">
                    <Link href={href} className="text-muted-foreground">{label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>
            <DropdownMenuGroup>
                <DropdownMenuLabel className="font-semibold text-foreground">Revision Classes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {revisionClasses.map(({ href, label }) => (
                    <DropdownMenuItem key={href} asChild className="cursor-pointer">
                    <Link href={href} className="text-muted-foreground">{label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const { links: navLinks, register: tRegister } = navLinksData[language] || navLinksData.en;
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Grammar Seed</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => {
            if (href === '/classes') {
              return <ClassesDropdownMenu key={label} />;
            }
            return <NavLink key={label} href={href} label={label} />;
          })}
        </nav>

        <div className="flex-1 flex items-center justify-end space-x-2">
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/register">{tRegister}</Link>
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
            <SheetContent side="right" className="w-[85vw] max-w-xs">
              <div className="flex flex-col h-full p-4">
                <div className="flex-grow">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 mb-8"
                    onClick={() => setOpen(false)}
                  >
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Grammar Seed</span>
                  </Link>
                  <motion.nav
                    className="flex flex-col space-y-1"
                    initial="hidden"
                    animate={open ? 'visible' : 'hidden'}
                    variants={mobileNavContainerVariants}
                  >
                    {navLinks.map(({ href, label }) => (
                       <motion.div key={label} variants={mobileNavItemVariants}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'block rounded-md px-4 py-3 text-lg font-medium transition-colors',
                            pathname === href
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground hover:bg-muted'
                          )}
                        >
                          {label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>
                <div className="border-t pt-6">
                  <Button asChild className="w-full">
                    <Link href="/register" onClick={() => setOpen(false)}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      {tRegister}
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
