import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { beforeAfterData } from '../../data/galleryData';

export const BeforeAfterSliderSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeItem, setActiveItem] = useState(beforeAfterData[0]);

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Venue Transformation"
          title="Before & After Production"
          subtitle="Drag the interactive slider to see how Commite Events converts raw grounds into luxury stages."
        />

        <div className="max-w-5xl mx-auto space-y-6 transform translate-x-4 sm:translate-x-10 md:translate-x-16">
          {/* Interactive Dual-Image Slider Card */}
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-medium)] select-none">
            {/* After Image (Background) */}
            <img
              src={activeItem.afterImage}
              alt={`${activeItem.title} - After`}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
            <span className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[var(--accent-primary)] !text-white z-10 shadow-lg pointer-events-none">
              AFTER PRODUCTION
            </span>

            {/* Before Image (Clipped overlay using clip-path) */}
            <img
              src={activeItem.beforeImage}
              alt={`${activeItem.title} - Before`}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            />
            <span
              className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-black/80 text-white z-20 border border-white/20 pointer-events-none transition-opacity duration-200"
              style={{ opacity: sliderPos > 15 ? 1 : 0 }}
            >
              BEFORE SETUP
            </span>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--accent-primary)] text-white border-2 border-white flex items-center justify-center shadow-xl text-xs font-bold">
                ↔
              </div>
            </div>

            {/* Drag Input Control Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Before and After Image Comparison Slider"
            />
          </div>

          {/* Transformation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {beforeAfterData.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setSliderPos(50);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-heading font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeItem.id === item.id
                    ? 'bg-[var(--accent-primary)] !text-white shadow-lg'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSliderSection;
