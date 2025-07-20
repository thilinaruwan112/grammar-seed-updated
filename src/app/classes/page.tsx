import ClassDetailSection from '@/components/classes/class-detail-section';
import CtaSection from '@/components/classes/cta-section';
import GradesSection from '@/components/classes/grades-section';
import HeroSection from '@/components/classes/hero-section';
import StudentAchievementsSection from '@/components/classes/student-achievements-section';
import WhyChooseUsSection from '@/components/classes/why-choose-us-section';

export default function ClassesPage() {
  return (
    <>
      <HeroSection />
      <GradesSection />
      <ClassDetailSection />
      <WhyChooseUsSection />
      <StudentAchievementsSection />
      <CtaSection />
    </>
  );
}
