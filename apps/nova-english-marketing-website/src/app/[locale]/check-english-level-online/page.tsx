import HeroSection from '@/features/AssessmentWelcomeView/ui/HeroSection.component';
import ImportanceSection from '@/features/AssessmentWelcomeView/ui/ImportanceSection.component';

export default function CheckEnglishLevelPage() {
  return (
    <div className="md:px-10 2xl:px-[13vw]">
      <HeroSection />
      <ImportanceSection />
    </div>
  );
}
