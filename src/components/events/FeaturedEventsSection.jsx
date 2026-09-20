import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const FeaturedEventsSection = ({ featuredEvents }) => {
  if (!featuredEvents || featuredEvents.length === 0) return null;

  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Flagship Portfolio"
          title="Featured Event Categories"
          subtitle="Explore our highest-demand event management verticals executed across Uttar Pradesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((evt) => (
            <Card
              key={evt.slug}
              hoverEffect
              accentBorder
              className="group overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 !"
            >
              <div>
                {/* Event Hero Cover Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={evt.heroImage}
                    alt={evt.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--accent-primary)] !text-white shadow-md z-10">
                    {evt.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-tight">
                    {evt.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)] text-xs line-clamp-2">
                    {evt.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[var(--border-subtle)]">
                    {evt.eventHighlights.slice(0, 3).map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Link
                  to={`/events/${evt.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform hover:underline"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Button href="/contact" variant="secondary" size="small">
                  Book Event
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
