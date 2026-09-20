import React from 'react';
import PageContainer from '../components/layout/PageContainer';

// Section Imports
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactInfoCardsSection from '../components/contact/ContactInfoCardsSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import GoogleMapSection from '../components/contact/GoogleMapSection';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const ContactPage = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventManagementCompany',
    name: 'Commite Events',
    url: 'https://committeevents.com',
    logo: 'https://committeevents.com/assets/logo.png',
    telephone: '+91 92197 51766',
    email: 'vishesh@committeevents.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    ]
  };

  return (
    <PageContainer
      title="Contact Us | Commite Events Lucknow Event Management"
      description="Get in touch with Commite Events in Lucknow, UP. Contact us for corporate events, college fests, royal weddings, and staffing inquiries."
      additionalSchemas={[localBusinessSchema]}
    >
      {/* 1. Hero */}
      <ContactHeroSection />

      {/* 2. Contact Information Cards */}
      <ContactInfoCardsSection />

      {/* 3. Direct Contact Form */}
      <ContactFormSection />

      {/* 4. Google Map */}
      <GoogleMapSection />

      {/* 5. Final CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default ContactPage;
