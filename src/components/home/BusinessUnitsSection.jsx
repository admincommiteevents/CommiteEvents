import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import Badge from '../common/Badge';
import { SecondaryButton } from '../common/Button';
import { businessUnits } from '../../data/businessUnitsData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Users, HeartHandshake } from 'lucide-react';

export const BusinessUnitsSection = () => {
  const getUnitIcon = (id) => {
    switch (id) {
      case 'parikshit-events': return Shield;
      case 'crewlytics': return Users;
      case 'wedding-gifting-agency':
      case 'wedding-and-gifting': return HeartHandshake;
      default: return Shield;
    }
  };

  return (
    <Section background="primary">
      <Container>
        <SectionHeader
          overline="Specialized Architecture"
          title="Our Business Units"
          subtitle="Specialized divisions working together under Commite Events to deliver ground execution, staffing, and luxury wedding management."
        />

        {/* 3-Card Grid */}
        <Grid columns={3} gap="normal" className="mb-16">
          {businessUnits.map((unit) => {
            const Icon = getUnitIcon(unit.id);
            const servicesArray = unit.servicesList || unit.expertise || [];
            return (
              <PremiumCard
                key={unit.id}
                accentBorder
                className="group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="primary" dot={false}>Enterprise Unit</Badge>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent-primary)] mb-4">{unit.tagline}</p>
                  <p className="body-small text-[var(--text-secondary)] mb-6 leading-relaxed">{unit.description}</p>

                  {/* Highlights List */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold uppercase text-[var(--text-primary)] tracking-wider">
                      Core Operations
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {servicesArray.slice(0, 6).map((svc) => (
                        <div key={svc} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                          <span className="truncate">{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[var(--border-subtle)] space-y-4">
                  {/* Leadership Badge */}
                  <div className="text-xs font-mono text-[var(--text-muted)] flex items-center justify-between">
                    <span>Leadership:</span>
                    <span className="text-[var(--text-primary)] font-semibold">
                      {unit.founder ? `${unit.founder} & ${unit.coFounder || unit.lead}` : unit.lead}
                    </span>
                  </div>

                  <Link
                    to={`/business-units/${unit.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Business Unit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </PremiumCard>
            );
          })}
        </Grid>

        <div className="text-center">
          <SecondaryButton href="/business-units" size="large" icon={ArrowRight}>
            Explore All Business Units
          </SecondaryButton>
        </div>
      </Container>
    </Section>
  );
};

export default BusinessUnitsSection;
