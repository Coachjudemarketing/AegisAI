import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LearningProgressTracker from "@/components/LearningProgressTracker";
import FeaturesSection from "@/components/FeaturesSection";
import AvatarsSection from "@/components/AvatarsSection";
import CurriculumSection from "@/components/CurriculumSection";
import ComplianceSection from "@/components/ComplianceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LearningProgressTracker />
        <CurriculumSection />
        <AvatarsSection />
        <FeaturesSection />
        <ComplianceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
