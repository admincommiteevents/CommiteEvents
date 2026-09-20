import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead = ({
  title = 'Commite Events | Premium Event Management Company Lucknow',
  description = "Lucknow's premier event management company specializing in corporate events, college fests, weddings, live shows, exhibitions, and staffing solutions.",
  keywords = 'Commite Events, Event Management Lucknow, Corporate Events, Parikshit Events, Crewlytics, Wedding Planner Lucknow, Vishesh Pandey, Shivam Singh',
  canonicalUrl = 'https://committeevents.com',
  ogImage = 'https://committeevents.com/og-image.jpg',
  ogType = 'website'
}) => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content="Commite Events" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Location Tags for Lucknow, UP */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8467;80.9462" />
      <meta name="ICBM" content="26.8467, 80.9462" />
    </Helmet>
  );
};

export default SEOHead;
