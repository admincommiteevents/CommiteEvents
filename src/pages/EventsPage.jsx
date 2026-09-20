import React, { useMemo } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { eventsData } from '../data/eventsData';

// Section Imports
import EventsHeroSection from '../components/events/EventsHeroSection';
import FeaturedEventsSection from '../components/events/FeaturedEventsSection';
import AllEventsGridSection from '../components/events/AllEventsGridSection';
import WhyChooseEventsSection from '../components/events/WhyChooseEventsSection';
import EventProcessSection from '../components/events/EventProcessSection';
import EventGalleryPreviewSection from '../components/events/EventGalleryPreviewSection';
import EventsFAQSection from '../components/events/EventsFAQSection';
import EventsFinalCTASection from '../components/events/EventsFinalCTASection';

export const EventsPage = () => {
  const featuredEvents = useMemo(() => {
    return eventsData.slice(0, 3);
  }, []);

  return (
    <PageContainer
      title="Events We Organize | College Fests, Corporate Summits, Concerts & Sports"
      description="Explore event management categories by Commite Events in Lucknow including college fests, corporate summits, star concerts, esports arenas, hackathons, and luxury weddings."
    >
      {/* 1. Hero Section */}
      <EventsHeroSection />

      {/* 2. Featured Flagship Events */}
      <FeaturedEventsSection featuredEvents={featuredEvents} />

      {/* 3. All Event Categories Directory */}
      <AllEventsGridSection events={eventsData} />

      {/* 5. Why Choose Commite Events */}
      <WhyChooseEventsSection />

      {/* 6. Our Working Process */}
      <EventProcessSection />

      {/* 7. Event Gallery Preview & Lightbox */}
      <EventGalleryPreviewSection />

      {/* 8. Frequently Asked Questions */}
      <EventsFAQSection />

      {/* 9. Final Conversion CTA */}
      <EventsFinalCTASection />
    </PageContainer>
  );
};

export default EventsPage;
