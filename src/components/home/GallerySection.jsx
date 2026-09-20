import React, { useState } from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    'All',
    'College Fest',
    'Corporate Events',
    'Concerts',
    'Wedding',
    'Sports',
    'Technical Fest',
    'Comedy Shows'
  ];

  const galleryItems = [
    { id: 1, category: 'College Fest', title: 'University Youth Fest Concert', location: 'Lucknow', height: 'h-80', gradient: 'from-red-900/60 via-slate-900/80 to-black' },
    { id: 2, category: 'Corporate Events', title: 'North India Leadership Summit', location: 'Gomti Nagar', height: 'h-64', gradient: 'from-blue-900/60 via-slate-900/80 to-black' },
    { id: 3, category: 'Concerts', title: 'Live Star Night Concert', location: 'Indira Gandhi Pratishthan', height: 'h-96', gradient: 'from-purple-900/60 via-slate-900/80 to-black' },
    { id: 4, category: 'Wedding', title: 'Royal Mandap & Floral Fabrication', location: 'Lucknow Estate', height: 'h-72', gradient: 'from-amber-900/60 via-slate-900/80 to-black' },
    { id: 5, category: 'Sports', title: 'City Marathon & Ground Security', location: 'Hazratganj', height: 'h-64', gradient: 'from-emerald-900/60 via-slate-900/80 to-black' },
    { id: 6, category: 'Technical Fest', title: 'National Robo-Wars Arena', location: 'AKTU Campus', height: 'h-80', gradient: 'from-cyan-900/60 via-slate-900/80 to-black' },
    { id: 7, category: 'Comedy Shows', title: 'Celebrity Stand-Up Tour', location: 'Lucknow Auditorium', height: 'h-72', gradient: 'from-rose-900/60 via-slate-900/80 to-black' },
    { id: 8, category: 'College Fest', title: 'Inter-College Dance Battle', location: 'University Ground', height: 'h-96', gradient: 'from-orange-900/60 via-slate-900/80 to-black' }
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Visual Archive"
          title="Event Gallery"
          subtitle="Every event tells a story. Explore our unforgettable moments across concerts, summits, college fests, and luxury weddings."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer
                ${activeCategory === cat
                  ? 'bg-[var(--accent-primary)] !text-white shadow-md shadow-[var(--accent-glow)]'
                  : 'bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)]'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className={`
                break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group border border-[var(--border-subtle)]
                hover:border-[var(--accent-primary)] transition-all duration-500 shadow-md ${item.height}
              `}
            >
              {/* Styled Gradient Background Visual */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} transition-transform duration-700 group-hover:scale-110 flex items-center justify-center`}>
                <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-white/10 text-white backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-overline text-[10px] text-[var(--accent-primary)] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-sm font-bold uppercase text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/20 relative flex flex-col justify-end p-8 bg-slate-950">
            <div className={`absolute inset-0 bg-gradient-to-tr ${filteredItems[selectedImageIndex]?.gradient}`} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                <span>{filteredItems[selectedImageIndex]?.category}</span>
                <span>{selectedImageIndex + 1} / {filteredItems.length}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white mb-1">
                {filteredItems[selectedImageIndex]?.title}
              </h3>
              <p className="text-sm text-slate-300">{filteredItems[selectedImageIndex]?.location}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default GallerySection;
