import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { Maximize2, X, ChevronLeft, ChevronRight, Share2, MapPin, Calendar } from 'lucide-react';

export const PhotoGallerySection = ({ photos }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Photo Archive"
          title="Event Photo Gallery"
          subtitle="Click any image to open our high-resolution full-screen lightbox viewer."
        />

        {/* 4 Cols Desktop, 2 Cols Tablet, 1 Col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, idx) => (
            <Card
              key={item.id}
              hoverEffect
              className="group overflow-hidden relative cursor-pointer h-72 ! select-none"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                loading="lazy"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Hover Dark Overlay & Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[var(--accent-primary)] !text-white shadow-md">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                <h4 className="font-heading text-sm font-bold uppercase truncate !text-white drop-shadow-md">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--accent-primary)]" />{item.location}</span>
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Fullscreen Viewer */}
        {currentPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 select-none animate-fadeIn"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4 z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[var(--accent-primary)]">
                  {currentPhoto.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {lightboxIndex + 1} / {photos.length}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-1 text-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main Image View */}
            <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl pointer-events-none"
              />

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="text-center text-white border-t border-white/10 pt-4 z-10">
              <h3 className="font-heading text-lg font-bold uppercase text-white">
                {currentPhoto.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {currentPhoto.location} • {currentPhoto.date}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallerySection;
