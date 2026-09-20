import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';
import { portfolioProjects } from '../../data/portfolioData';

export const EventHighlightsSliderSection = () => {
  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Flagship Moments"
          title="Event Highlights"
          subtitle="Explore key statistics and summaries from our premier executions across Uttar Pradesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.slice(0, 2).map((item) => (
            <Card
              key={item.id}
              hoverEffect
              accentBorder
              className=" flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--accent-primary)] !text-white">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    {item.year}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{item.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{item.audience}</span>
                </div>

                <p className="body-small text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase text-[var(--accent-primary)] hover:underline"
                >
                  <span>View Case Study</span>
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

export default EventHighlightsSliderSection;
