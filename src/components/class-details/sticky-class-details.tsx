
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Monitor, Video, Copy, Tag, CalendarDays } from 'lucide-react';
import Link from 'next/link';

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
    schedule?: string;
    format?: string;
    recordings?: string;
    studyPack?: string;
    grade?: string | number;
  };
};

export default function StickyClassDetails({ details }: StickyClassDetailsProps) {
  if (!details) {
    return null;
  }

  const { fullTitle, fee, schedule, format, recordings, studyPack } = details;

  return (
    <Card className="shadow-lg rounded-xl">
      <CardHeader className="pb-4">
        {fullTitle && <h3 className="font-headline text-xl font-bold text-center">{fullTitle}</h3>}
      </CardHeader>
      <CardContent className="space-y-6">
        {fee && (
          <div className="text-center pb-4 border-b">
            <p className="text-3xl font-bold text-primary">{fee.split(' ')[0]}</p>
            <p className="text-muted-foreground">Per Month</p>
          </div>
        )}
        <div className="space-y-4">
          {schedule && <DetailItem icon={Clock} label="Schedule" value={schedule} />}
          {format && <DetailItem icon={Monitor} label="Mode" value={format} />}
          {recordings && <DetailItem icon={Video} label="Recordings" value={recordings} />}
          {studyPack && <DetailItem icon={Copy} label="Monthly Study Pack" value={studyPack} />}
        </div>
        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/register">Enroll Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
