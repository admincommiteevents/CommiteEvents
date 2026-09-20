import React from 'react';
import PageContainer from '../components/layout/PageContainer';

// Section Imports
import AboutHeroSection from '../components/about/AboutHeroSection';
import CompanyIntroSection from '../components/about/CompanyIntroSection';
import OurStorySection from '../components/about/OurStorySection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import CoreValuesSection from '../components/about/CoreValuesSection';
import LeadershipSection from '../components/about/LeadershipSection';
import OurJourneySection from '../components/about/OurJourneySection';
import AboutBusinessUnitsSection from '../components/about/AboutBusinessUnitsSection';
import AboutMilestonesSection from '../components/about/AboutMilestonesSection';
import WhyChooseUsAboutSection from '../components/about/WhyChooseUsAboutSection';
import TeamGridSection from '../components/about/TeamGridSection';
import CultureGallerySection from '../components/about/CultureGallerySection';
import FutureGoalsSection from '../components/about/FutureGoalsSection';
import AboutFinalCTASection from '../components/about/AboutFinalCTASection';

export const AboutPage = () => {
  return (
    <PageContainer
      title="About Commite Events | Premium Event Management Company in Lucknow"
      description="Learn about Commite Events, our founders Vishesh Pandey & Shivam Singh, our core values, our business units (Parikshit Events & Crewlytics), and our mission to lead event management in India."
    >
      {/* 1. Hero Section */}
      <AboutHeroSection />

      {/* 2. Company Introduction */}
      <CompanyIntroSection />

      {/* 3. Our Story */}
      <OurStorySection />

      {/* 4. Mission & Vision */}
      <MissionVisionSection />

      {/* 5. Core Values */}
      <CoreValuesSection />

      {/* 6. Founder & Leadership */}
      <LeadershipSection />

      {/* 7. Our Journey Timeline */}
      <OurJourneySection />

      {/* 8. Business Units */}
      <AboutBusinessUnitsSection />

      {/* 9. Milestones & Achievements */}
      <AboutMilestonesSection />

      {/* 10. Why Choose Commite Events */}
      <WhyChooseUsAboutSection />

      {/* 11. Meet The Team (Commented out) */}
      {/* <TeamGridSection /> */}

      {/* 12. Our Culture & Life */}
      <CultureGallerySection />

      {/* 13. Future Goals */}
      <FutureGoalsSection />

      {/* 14. Final CTA */}
      <AboutFinalCTASection />
    </PageContainer>
  );
};

export default AboutPage;
