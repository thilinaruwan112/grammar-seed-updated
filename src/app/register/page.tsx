
'use client';

import RegistrationForm from '@/components/auth/registration-form';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';

const translations = {
  en: {
    title: 'Student Registration',
    description: 'Create your account to get started. It only takes a few minutes.',
  },
  si: {
    title: 'ශිෂ්‍ය ලියාපදිංචිය',
    description: 'ආරම්භ කිරීමට ඔබගේ ගිණුම සාදන්න. එයට ගත වන්නේ මිනිත්තු කිහිපයක් පමණි.',
  },
};

// This page uses client-side rendering, so we cannot export metadata directly.
// We can set the title in a useEffect hook, but for now we rely on the layout's default title.
// For better SEO, this page could be made a Server Component with a Client Component inside.

export default function RegisterPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">{t.title}</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          {t.description}
        </p>
      </div>
      <Card className="mx-auto max-w-4xl">
        <RegistrationForm />
      </Card>
    </div>
  );
}
