import React from 'react';
import { Search, X } from 'lucide-react';

export const EventsSearchFilterSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const categories = [
    'All',
    'Corporate',
    'College',
    'Wedding',
    'Sports',
    'Technical',
    'Entertainment',
    'Government',
    'NGO',
    'Gaming'
  ];

  return (
    <section id="categories" className="py-10 sm:py-14 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Live Search Input Bar - Centered with max-w-2xl & equal left/right margins */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              <Search className="w-5 h-5 text-[var(--accent-primary)]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events... (e.g. Corporate, Wedding, Concerts, Hackathons)"
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-glow)] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills - Centered with equal margins */}
          <div className="w-full max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 px-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] !text-white shadow-md shadow-[var(--accent-primary)]/25 border border-[var(--accent-primary)] scale-105'
                      : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSearchFilterSection;
