
'use client';
import { notFound } from 'next/navigation';
import { classDetailsData } from '@/lib/class-data';

import ClassHero from '@/components/class-details/class-hero';
import ClassCta from '@/components/class-details/class-cta';
import LearningPlan from '@/components/class-details/learning-plan';
import StickyClassDetails from '@/components/class-details/sticky-class-details';
import MonthlyLearningPlan from '@/components/class-details/monthly-learning-plan';
import ClassDescription from '@/components/class-details/class-description';
import { useLanguage } from '@/components/language-provider';
import type { Metadata } from 'next';

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
  const { language } = useLanguage();
  const classDetails = classDetailsData[language]?.[grade];

  if (!classDetails) {
    notFound();
  }

  return (
    <>
      <ClassHero grade={classDetails.grade} title={classDetails.title} />
      <div className="relative">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <main className="w-full lg:w-2/3">
              {classDetails.description && !classDetails.monthlyPlan && <ClassDescription description={classDetails.description} />}
              {classDetails.learningPlan && <LearningPlan plans={classDetails.learningPlan} />}
              {classDetails.monthlyPlan && <MonthlyLearningPlan title="Monthly Learning Plan" description={classDetails.description} plans={classDetails.monthlyPlan} />}
            </main>
            <aside className="w-full lg:w-1/3 lg:sticky top-24 self-start mt-12 lg:mt-0">
              <StickyClassDetails details={classDetails} />
            </aside>
          </div>
        </div>
      </div>
      <ClassCta />
    </>
  );
}
