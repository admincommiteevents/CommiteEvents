import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from '../../seo/SEOHead';
import SchemaGenerator from '../../seo/SchemaGenerator';

export const Layout = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  additionalSchemas = []
}) => {
  // Default to 80px until dynamic measurement completes
  const [navHeight, setNavHeight] = useState(80);

  const handleHeightChange = useCallback((height) => {
    if (height && height > 0) {
      setNavHeight(height);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[var(--accent-subtle)] selection:text-[var(--accent-primary)]">
      {/* SEO Head & Schemas */}
      {title && <SEOHead title={title} description={description} keywords={keywords} canonicalUrl={canonicalUrl} />}
      {additionalSchemas && additionalSchemas.length > 0 && <SchemaGenerator additionalSchemas={additionalSchemas} />}

      {/* Global Fixed Navigation Bar */}
      <Navbar onHeightChange={handleHeightChange} />

      {/* 
        Global Main Container: 
        Automatically offset by dynamic navbar height on all screen sizes.
        Every page begins cleanly below the navbar.
      */}
      <main
        className="flex-grow flex flex-col w-full relative z-10"
        // style={{ paddingTop: `${navHeight}px` }}
        style={{ paddingTop: 0 }}
      >
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
