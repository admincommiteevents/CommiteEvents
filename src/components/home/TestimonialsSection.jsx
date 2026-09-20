import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Commite Events executed our annual university fest with over 15,000 students. Parikshit Events' volunteer management team was disciplined, punctual, and kept crowd flow 100% stampede-proof.",
      name: "Dr. R. K. Sharma",
      role: "Dean of Student Welfare",
      org: "Lucknow Technical Campus",
      rating: 5
    },
    {
      id: 2,
      quote: "Crewlytics deployed 45 vetted brand promoters and anchors for our North India product launch within 24 hours. Flawless communication and corporate discipline.",
      name: "Ananya Saxena",
      role: "Regional Brand Manager",
      org: "National FMCG Enterprise",
      rating: 5
    },
    {
      id: 3,
      quote: "Our wedding decor and return gift hampers curated by Gracee Bisht's team were royal. The mandap design and hydraulic entry left all our guests spellbound.",
      name: "Vikas & Megha Agarwal",
      role: "Wedding Hosts",
      org: "Gomti Nagar Estate Lucknow",
      rating: 5
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Client Endorsements"
          title="What Our Clients Say"
          subtitle="Trusted by educational institutions, corporate enterprises, and high-profile wedding hosts across North India."
        />

        {/* Desktop Grid / Slider Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((item, idx) => (
            <Card
              key={item.id}
              hoverEffect
              accentBorder
              className={`
                flex flex-col justify-between transition-all duration-500
                ${idx === activeIdx ? 'border-[var(--accent-primary)] shadow-xl' : 'opacity-90'}
              `}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[var(--accent-primary)] opacity-30" />
                </div>

                <p className="body-small text-[var(--text-secondary)] italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] !text-white font-heading font-bold text-sm flex items-center justify-center">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-[var(--text-primary)]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[var(--accent-primary)]">
                    {item.role} • {item.org}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            {activeIdx + 1} / {testimonials.length}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
