import { notFound } from 'next/navigation';
import { classDetailsData } from '@/lib/class-data';
import type { Metadata } from 'next';
import ClassDetailsClientPage from '@/components/class-details/class-details-client-page';

type ClassDetailsPageProps = {
  params: {
    grade: string;
  };
};

export async function generateMetadata({ params }: ClassDetailsPageProps): Promise<Metadata> {
  const { grade } = params;
  const classDetails = classDetailsData.en?.[grade];

  if (!classDetails) {
    return {
      title: 'Class Not Found | Grammar Seed',
      description: 'The requested class details could not be found.',
    };
  }

  const title = `${classDetails.fullTitle || `Grade ${classDetails.grade} - ${classDetails.title}`} | Grammar Seed`;
  const description = classDetails.description.split('.')[0] + '.';

  return {
    title,
    description,
  };
}

export default function ClassDetailsPage({ params }: ClassDetailsPageProps) {
  const { grade } = params;
  const classDetails = classDetailsData.en?.[grade] || classDetailsData.si?.[grade];

  if (!classDetails) {
    notFound();
  }

  return <ClassDetailsClientPage grade={grade} />;
}
