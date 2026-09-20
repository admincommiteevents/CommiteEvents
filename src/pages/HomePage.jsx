import React from 'react';
import PageContainer from '../components/layout/PageContainer';

// Prompt 3.1 Section
import HeroSection from '../components/home/HeroSection';

// Prompt 3.2 Sections
import TrustedBySection from '../components/home/TrustedBySection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';
import ServicesSection from '../components/home/ServicesSection';
import BusinessUnitsSection from '../components/home/BusinessUnitsSection';
import FeaturedEventsSection from '../components/home/FeaturedEventsSection';
import StatisticsSection from '../components/home/StatisticsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import HomeMidCTASection from '../components/home/HomeMidCTASection';

// Prompt 3.3 Sections
import GallerySection from '../components/home/GallerySection';
import PreviousEventsSection from '../components/home/PreviousEventsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ClientsMarqueeSection from '../components/home/ClientsMarqueeSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTASection from '../components/home/FinalCTASection';
import ContactPreviewSection from '../components/home/ContactPreviewSection';

export const HomePage = () => {
  return (
    <PageContainer
      title="Commite Events | Best Event Management Company in Lucknow"
      description="Commite Events is Lucknow's premier enterprise event management company specializing in corporate conferences, college fests, luxury weddings, sports meets, and volunteer staffing across Uttar Pradesh."
    >
      {/* 1. Hero Section (Prompt 3.1) */}
      <HeroSection />

      {/* 2. Trusted By Marquee (Prompt 3.2) */}
      <TrustedBySection />

      {/* 3. About Commite Events (Prompt 3.2) */}
      <AboutPreviewSection />

      {/* 4. Our Services (Prompt 3.2) */}
      <ServicesSection />

      {/* 5. Our Business Units (Prompt 3.2) */}
      <BusinessUnitsSection />

      {/* 6. Featured Event Categories (Prompt 3.2) */}
      <FeaturedEventsSection />

      {/* 7. Statistics & Impact Metrics (Prompt 3.2) */}
      <StatisticsSection />

      {/* 8. Why Choose Commite Events (Prompt 3.2) */}
      <WhyChooseUsSection />

      {/* 9. How We Work (Our Process Timeline) (Prompt 3.2) */}
      <HowWeWorkSection />

      {/* 10. Mid-Page Conversion CTA (Prompt 3.2) */}
      <HomeMidCTASection />

      {/* 11. Event Gallery (Prompt 3.3) - Commented Out */}
      {/* <GallerySection /> */}

      {/* 12. Featured Case Studies (Prompt 3.3) */}
      <PreviousEventsSection />

      {/* 13. Client Testimonials (Prompt 3.3) */}
      <TestimonialsSection />

      {/* 14. Clients & Partners Marquee (Prompt 3.3) */}
      <ClientsMarqueeSection />

      {/* 15. FAQ Section (Prompt 3.3) */}
      <FAQSection />

      {/* 16. Final Dark Cinematic CTA (Prompt 3.3) */}
      <FinalCTASection />

      {/* 17. Contact Preview & Map (Prompt 3.3) */}
      <ContactPreviewSection />
    </PageContainer>
  );
};

export default HomePage;
