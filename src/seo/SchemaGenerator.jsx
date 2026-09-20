import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaGenerator = ({ additionalSchemas = [] }) => {
  // 1. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Commite Events',
    url: 'https://committeevents.com',
    logo: 'https://committeevents.com/logo-white.svg',
    description: 'Premier event management company in Lucknow specializing in self-organized, corporate, college, wedding, and government events.',
    founders: [
      {
        '@type': 'Person',
        name: 'Vishesh Pandey',
        jobTitle: 'Founder'
      },
      {
        '@type': 'Person',
        name: 'Shivam Singh',
        jobTitle: 'Co-Founder'
      }
    ],
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'Parikshit Events',
        description: 'Volunteer & Ground Operations Management'
      },
      {
        '@type': 'Organization',
        name: 'Crewlytics',
        description: 'Temporary Staffing & Campus Hiring Agency'
      },
      {
        '@type': 'Organization',
        name: 'Wedding & Gifting Agency',
        description: 'Luxury Wedding Planning & Gifting Management'
      }
    ]
  };

  // 2. LocalBusiness Schema for Lucknow, Uttar Pradesh
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'Commite Events',
    image: 'https://committeevents.com/og-image.jpg',
    '@id': 'https://committeevents.com',
    url: 'https://committeevents.com',
    telephone: '+91 92197 51766',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gomti Nagar',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8467,
      longitude: 80.9462
    },
    areaServed: [
      'Lucknow',
      'Uttar Pradesh',
      'India'
    ]
  };

  const schemasToRender = [
    organizationSchema,
    localBusinessSchema,
    ...additionalSchemas
  ];

  return (
    <Helmet>
      {schemasToRender.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SchemaGenerator;
