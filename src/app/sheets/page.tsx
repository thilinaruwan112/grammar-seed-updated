import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloadable Grammar Sheets | Grammar Seed',
  description: 'Download our handy PDF grammar reference sheets for offline study. Topics include verb tenses, punctuation, sentence structure, and more.',
};

const grammarSheets = [
  { title: 'Complete Guide to Verb Tenses', format: 'PDF', size: '2.3 MB' },
  { title: 'Punctuation Rules at a Glance', format: 'PDF', size: '1.1 MB' },
  { title: 'Sentence Diagramming Basics', format: 'PDF', size: '3.5 MB' },
  { title: 'Commonly Confused Words', format: 'PDF', size: '850 KB' },
];

export default function SheetsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">Downloadable Grammar Sheets</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          Download our handy grammar reference sheets. Perfect for offline study and quick reviews.
        </p>
      </div>
      <div className="grid gap-6">
        {grammarSheets.map((sheet) => (
          <Card key={sheet.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-headline text-lg font-semibold">{sheet.title}</h3>
                <p className="text-sm text-muted-foreground">{sheet.format} &bull; {sheet.size}</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/sheets" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
