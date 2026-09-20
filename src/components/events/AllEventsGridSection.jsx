import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, SearchX } from 'lucide-react';

export const AllEventsGridSection = ({ events }) => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Complete Portfolio"
          title="All Event Categories"
          subtitle="Explore our comprehensive directory of event execution capabilities for institutions, brands, and private hosts."
        />

        {events.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] max-w-md mx-auto space-y-4">
            <SearchX className="w-12 h-12 text-[var(--accent-primary)] mx-auto" />
            <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
              No Matching Events Found
            </h3>
            <p className="body-small text-[var(--text-secondary)]">
              Try searching with different keywords like 'Corporate', 'Wedding', 'Sports', or 'Hackathon'.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((evt) => (
              <Card
                key={evt.slug}
                hoverEffect
                accentBorder
                className="group flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 "
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[var(--border-accent)]">
                      {evt.category}
                    </span>
                    <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase">
                      SEO Optimized
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-2">
                    {evt.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)] text-xs mb-4 line-clamp-2">
                    {evt.shortDescription}
                  </p>

                  <div className="space-y-1 mb-4 pt-3 border-t border-[var(--border-subtle)]">
                    {evt.eventHighlights.slice(0, 2).map((h) => (
                      <div key={h} className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                        <CheckCircle2 className="w-3 h-3 text-[var(--accent-primary)] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    to={`/events/${evt.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-[var(--accent-primary)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Button href="/contact" variant="secondary" size="small">
                    Enquire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllEventsGridSection;
