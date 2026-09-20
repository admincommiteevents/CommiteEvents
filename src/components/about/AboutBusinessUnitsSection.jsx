import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import Badge from '../common/Badge';
import { SecondaryButton } from '../common/Button';
import { businessUnits } from '../../data/businessUnitsData';
import { ArrowRight, CheckCircle2, Shield, Users, HeartHandshake } from 'lucide-react';

export const AboutBusinessUnitsSection = () => {
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
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Specialized Ecosystem"
          title="Our Business Units"
          subtitle="Three dedicated divisions delivering ground operations, workforce staffing, and luxury weddings."
        />

        <Grid columns={3} gap="normal">
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
                    <Badge variant="primary" dot={false}>
                      Enterprise Unit
                    </Badge>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent-primary)] mb-4">{unit.tagline}</p>
                  <p className="body-small text-[var(--text-secondary)] mb-6">{unit.description}</p>

                  <div className="space-y-2 mb-6">
                    {servicesArray.slice(0, 5).map((svc) => (
                      <div key={svc} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] mt-auto">
                  <SecondaryButton
                    href={`/business-units/${unit.slug}`}
                    size="small"
                    className="w-full justify-center"
                    icon={ArrowRight}
                  >
                    Learn More
                  </SecondaryButton>
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutBusinessUnitsSection;
