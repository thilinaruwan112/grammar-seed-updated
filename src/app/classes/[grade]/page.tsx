
import { notFound } from 'next/navigation';
import { classDetailsData } from '@/lib/class-data';

import ClassHero from '@/components/class-details/class-hero';
import ClassInfo from '@/components/class-details/class-info';
import TeacherProfile from '@/components/class-details/teacher-profile';
import ClassCta from '@/components/class-details/class-cta';

type ClassDetailsPageProps = {
  params: {
    grade: string;
  };
};

export default function ClassDetailsPage({ params }: ClassDetailsPageProps) {
  const { grade } = params;
  const classDetails = classDetailsData[grade];

  if (!classDetails) {
    notFound();
  }

  return (
    <>
      <ClassHero grade={classDetails.grade} title={classDetails.title} />
      <ClassInfo details={classDetails} />
      <TeacherProfile teacher={classDetails.teacher} />
      <ClassCta />
    </>
  );
}
