import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Experience Wrappers
import LoadingScreen from './components/common/LoadingScreen';

import SmoothScroll from './components/common/SmoothScroll';
import FloatingActions from './components/common/FloatingActions';
import { initAnalytics } from './utils/analytics';

// Pages Import
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import BusinessUnitsPage from './pages/BusinessUnitsPage';
import BusinessUnitDetailPage from './pages/BusinessUnitDetailPage';
import GalleryPage from './pages/GalleryPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ClientsPage from './pages/ClientsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import CareerPage from './pages/CareerPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import GetQuotePage from './pages/GetQuotePage';
import NotFoundPage from './pages/NotFoundPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  const handleLoadingComplete = React.useCallback(() => {
    setLoadingFinished(true);
  }, []);

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      {/* Premium Single-Pass Loading Experience */}
      <LoadingScreen onComplete={handleLoadingComplete} />


      {/* Lenis Smooth Scroll Engine */}
      <SmoothScroll>
        <Router>
          {/* Floating Desktop & Mobile Action Triggers */}
          <FloatingActions />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/business-units" element={<BusinessUnitsPage />} />
            <Route path="/business-units/:slug" element={<BusinessUnitDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:category" element={<GalleryPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<PortfolioDetailPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-quote" element={<GetQuotePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </SmoothScroll>
    </>
  );
}

export default App;
