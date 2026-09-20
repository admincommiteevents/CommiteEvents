import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import { businessUnits } from '../data/businessUnitsData';

// Section Imports
import BusinessUnitsHeroSection from '../components/businessUnits/BusinessUnitsHeroSection';
import BusinessUnitsIntroSection from '../components/businessUnits/BusinessUnitsIntroSection';
import BusinessUnitsGridSection from '../components/businessUnits/BusinessUnitsGridSection';
import WhyThreeUnitsSection from '../components/businessUnits/WhyThreeUnitsSection';
import WorkingTogetherSection from '../components/businessUnits/WorkingTogetherSection';
import BusinessUnitsComparisonSection from '../components/businessUnits/BusinessUnitsComparisonSection';
import BusinessUnitsFAQSection from '../components/businessUnits/BusinessUnitsFAQSection';
import BusinessUnitsFinalCTASection from '../components/businessUnits/BusinessUnitsFinalCTASection';

export const BusinessUnitsPage = () => {
  return (
    <PageContainer
      title="Specialized Business Units | Parikshit Events, Crewlytics & Wedding Agency"
      description="Discover Commite Events' 3 specialized divisions: Parikshit Events (Ground Ops & Volunteers), Crewlytics (Staffing & Hiring), and Wedding & Gifting Agency (Luxury Weddings & Hampers)."
    >
      {/* 1. Hero */}
      <BusinessUnitsHeroSection />

      {/* 2. Introduction */}
      <BusinessUnitsIntroSection />

      {/* 3. Business Units Interactive Grid */}
      <BusinessUnitsGridSection units={businessUnits} />

      {/* 4. Why Three Business Units */}
      <WhyThreeUnitsSection />

      {/* 5. Working Together Blueprint */}
      <WorkingTogetherSection />

      {/* 6. Comparison Matrix */}
      <BusinessUnitsComparisonSection />

      {/* 7. FAQs */}
      <BusinessUnitsFAQSection />

      {/* 8. Final Conversion CTA */}
      <BusinessUnitsFinalCTASection />
    </PageContainer>
  );
};

export default BusinessUnitsPage;
