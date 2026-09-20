import React from 'react';
import PageContainer from '../components/layout/PageContainer';

// Section Imports
import ServicesHeroSection from '../components/services/ServicesHeroSection';
import ServiceCategoriesSection from '../components/services/ServiceCategoriesSection';
import MainServicesSection from '../components/services/MainServicesSection';
import AdditionalServicesSection from '../components/services/AdditionalServicesSection';
import WhyOurServicesSection from '../components/services/WhyOurServicesSection';
import ServiceProcessSection from '../components/services/ServiceProcessSection';
import IndustriesServedSection from '../components/services/IndustriesServedSection';
import EquipmentShowcaseSection from '../components/services/EquipmentShowcaseSection';
import ServicePackagesSection from '../components/services/ServicePackagesSection';
import ServicesFAQSection from '../components/services/ServicesFAQSection';
import ServicesFinalCTASection from '../components/services/ServicesFinalCTASection';

export const ServicesPage = () => {
  return (
    <PageContainer
      title="Complete Event Management Solutions & Services | Commite Events Lucknow"
      description="Explore enterprise event services by Commite Events in Lucknow including corporate meets, college fests, sports leagues, star concerts, weddings, volunteer staffing, line array audio, and LED wall setups."
    >
      {/* 1. Hero Section */}
      <ServicesHeroSection />

      {/* 2. Service Categories */}
      <ServiceCategoriesSection />

      {/* 3. Main Featured Services Grid */}
      <MainServicesSection />

      {/* 4. Additional Specialized Services Grid */}
      <AdditionalServicesSection />

      {/* 5. Why Choose Our Services */}
      <WhyOurServicesSection />

      {/* 6. Our Working Process */}
      <ServiceProcessSection />

      {/* 7. Industries We Serve */}
      <IndustriesServedSection />

      {/* 8. Technology & Equipment */}
      <EquipmentShowcaseSection />

      {/* 9. Packages Overview */}
      <ServicePackagesSection />

      {/* 10. Frequently Asked Questions */}
      <ServicesFAQSection />

      {/* 11. Final Conversion CTA */}
      <ServicesFinalCTASection />
    </PageContainer>
  );
};

export default ServicesPage;
