
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import AppWrapper from '@/components/app-wrapper';
import { LanguageProvider } from '@/components/language-provider';
import WhatsAppButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Grammar Seed | Master English Grammar for O/L Exams',
  description: 'Top-quality English grammar and writing classes for Sri Lankan students in Grades 9, 10, and 11. Achieve 90+ marks with proven methods for O/L exam success.',
  keywords: [
    'English grammar', 
    'Sri Lanka', 
    'O/L English', 
    'English classes', 
    'Shehan Jayawardhana', 
    'Grammar Seed', 
    'online English classes', 
    'essay writing', 
    'grammar lessons',
    'Grade 9 English',
    'Grade 10 English',
    'Grade 11 English',
  ],
  openGraph: {
    title: 'Grammar Seed | Master English Grammar for O/L Exams',
    description: 'Top-quality English grammar and writing classes for Sri Lankan students in Grades 9, 10, and 11. Achieve 90+ marks with proven methods for O/L exam success.',
    images: [
      {
        url: 'https://content-provider.payshia.com/grammar-seed/square-optimized.webp',
        width: 400,
        height: 400,
        alt: 'Grammar Seed Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grammar Seed | Master English Grammar for O/L Exams',
    description: 'Top-quality English grammar and writing classes for Sri Lankan students in Grades 9, 10, and 11. Achieve 90+ marks with proven methods for O/L exam success.',
    images: ['https://content-provider.payshia.com/grammar-seed/square-optimized.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AppWrapper>
              <div className="relative flex min-h-dvh flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <WhatsAppButton />
              <Toaster />
            </AppWrapper>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
