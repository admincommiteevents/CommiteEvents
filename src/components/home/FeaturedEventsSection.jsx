import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import Badge from '../common/Badge';
import { PrimaryButton } from '../common/Button';
import { eventsData } from '../../data/eventsData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedEventsSection = () => {
  // Show top 6 featured categories on homepage
  const featuredCategories = eventsData.slice(0, 6);

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Specialized Domains"
          title="Events We Organize"
          subtitle="Professional event management solutions for every occasion — from multi-day university fests to corporate summits and stadium concerts."
        />

        <Grid columns={3} gap="large" className="mb-16">
          {featuredCategories.map((evt) => (
            <PremiumCard
              key={evt.slug}
              accentBorder
              className="group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <Badge variant="primary" dot={false}>{evt.category}</Badge>
                  <Sparkles className="w-4 h-4 text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {evt.title}
                </h3>
                <p className="text-xs font-mono text-[var(--accent-primary)] mb-4">{evt.tagline}</p>
                <p className="body-small text-[var(--text-secondary)] mb-6 leading-relaxed line-clamp-3">
                  {evt.summary}
                </p>
              </div>

              <Link
                to={`/events/${evt.slug}`}
                className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] pt-5 border-t border-[var(--border-subtle)] group-hover:translate-x-1 transition-transform mt-auto"
              >
                <span>Explore Domain</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </PremiumCard>
          ))}
        </Grid>

        <div className="text-center">
          <PrimaryButton href="/events" size="large" icon={ArrowRight}>
            View All 22 Event Categories
          </PrimaryButton>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedEventsSection;
