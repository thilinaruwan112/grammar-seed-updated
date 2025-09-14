
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Clock, Monitor, Video, Copy } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../language-provider';

type DetailItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

const DetailItem = ({ icon: Icon, label, value }: DetailItemProps) => (
  <div className="flex items-center">
    <Icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold text-foreground">{value}</p>
    </div>
  </div>
);

type StickyClassDetailsProps = {
  details: {
    fullTitle?: string;
    fee?: string;
    feePeriod?: string;
    schedule?: string;
    format?: string;
    recordings?: string;
    studyPack?: string;
    grade?: string | number;
  };
};

const translations = {
  en: {
    schedule: 'Schedule',
    mode: 'Mode',
    recordings: 'Recordings',
    studyPack: 'Monthly Study Pack',
    enrollNow: 'Enroll Now',
  },
  si: {
    schedule: 'කාලසටහන',
    mode: 'ක්‍රමය',
    recordings: 'පටිගත කිරීම්',
    studyPack: 'මාසික අධ්‍යයන කට්ටලය',
    enrollNow: 'ලියාපදිංචි වන්න',
  }
};


export default function StickyClassDetails({ details }: StickyClassDetailsProps) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  if (!details) {
    return null;
  }

  const { fullTitle, fee, feePeriod, schedule, format, recordings, studyPack } = details;

  return (
    <Card className="shadow-lg rounded-xl">
      <CardHeader className="pb-4">
        {fullTitle && <h3 className="font-headline text-xl font-bold text-center">{fullTitle}</h3>}
      </CardHeader>
      <CardContent className="space-y-6">
        {fee && (
          <div className="text-center pb-4 border-b">
            <p className="text-3xl font-bold text-primary">{fee}</p>
            <p className="text-muted-foreground">{feePeriod}</p>
          </div>
        )}
        <div className="space-y-4">
          {schedule && <DetailItem icon={Clock} label={t.schedule} value={schedule} />}
          {format && <DetailItem icon={Monitor} label={t.mode} value={format} />}
          {recordings && <DetailItem icon={Video} label={t.recordings} value={recordings} />}
          {studyPack && <DetailItem icon={Copy} label={t.studyPack} value={studyPack} />}
        </div>
        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/register">{t.enrollNow}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
