import React from 'react';
import { galleryCategories } from '../../data/galleryData';

export const GalleryFilterSection = ({ selectedCat, setSelectedCat }) => {
  return (
    <section className="py-8 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] !text-white shadow-lg shadow-[var(--accent-primary)]/20 border border-[var(--accent-primary)]'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilterSection;
