import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { photoGalleryData, videoGalleryData } from '../data/galleryData';

// Section Imports
import GalleryHeroSection from '../components/gallery/GalleryHeroSection';
import GalleryFilterSection from '../components/gallery/GalleryFilterSection';
import PhotoGallerySection from '../components/gallery/PhotoGallerySection';
import VideoGallerySection from '../components/gallery/VideoGallerySection';
import EventHighlightsSliderSection from '../components/gallery/EventHighlightsSliderSection';
import BeforeAfterSliderSection from '../components/gallery/BeforeAfterSliderSection';
import BehindTheScenesSection from '../components/gallery/BehindTheScenesSection';
import InstagramFeedSection from '../components/gallery/InstagramFeedSection';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const GalleryPage = () => {
  const [selectedCat, setSelectedCat] = useState('All');

  // Filtered Photo Data
  const filteredPhotos = selectedCat === 'All'
    ? photoGalleryData
    : photoGalleryData.filter((p) => p.category.toLowerCase() === selectedCat.toLowerCase());

  return (
    <PageContainer
      title="Event Gallery & Photo Archive | Commite Events Lucknow"
      description="Explore unforgettable moments from college fests, corporate summits, star concerts, esports arenas, and royal weddings managed by Commite Events."
    >
      {/* 1. Hero */}
      <GalleryHeroSection />

      {/* 2. Filter Categories */}
      <GalleryFilterSection selectedCat={selectedCat} setSelectedCat={setSelectedCat} />

      {/* 3. Photo Gallery Masonry Grid & Fullscreen Lightbox */}
      <PhotoGallerySection photos={filteredPhotos} />

      {/* 4. Video Gallery */}
      <VideoGallerySection videos={videoGalleryData} />

      {/* 5. Event Highlights */}
      <EventHighlightsSliderSection />

      {/* 6. Before & After Interactive Slider */}
      <BeforeAfterSliderSection />

      {/* 7. Behind The Scenes */}
      <BehindTheScenesSection />

      {/* 8. Instagram Feed */}
      <InstagramFeedSection />

      {/* 9. Final CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default GalleryPage;
