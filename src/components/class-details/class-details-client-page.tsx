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

type ClassDetailsClientPageProps = {
  grade: string;
};

export default function ClassDetailsClientPage({ grade }: ClassDetailsClientPageProps) {
  const { language } = useLanguage();
  const classDetails = classDetailsData[language]?.[grade];

  if (!classDetails) {
    // This should ideally not be hit if the parent page handles the notFound case,
    // but it's a good fallback.
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
