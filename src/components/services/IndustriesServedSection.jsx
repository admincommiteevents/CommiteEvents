import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Building2, GraduationCap, Landmark, HeartPulse, HeartHandshake, Rocket, Sparkles, Gem, Hotel, Cpu, ShoppingBag, Music } from 'lucide-react';

export const IndustriesServedSection = () => {
  const industries = [
    { name: 'Corporate Enterprises', desc: 'Annual meets, shareholder galas, and tech summits.', icon: Building2 },
    { name: 'Educational Institutions', desc: 'State universities, IIT/IIM alumni fests, and engineering colleges.', icon: GraduationCap },
    { name: 'Government & Public Sector', desc: 'State summits, tourism expos, and official cultural inaugurations.', icon: Landmark },
    { name: 'Healthcare & Pharma', desc: 'Medical conventions, doctor summits, and diagnostic launches.', icon: HeartPulse },
    { name: 'NGOs & Foundations', desc: 'Charity galas, awareness marathons, and social drives.', icon: HeartHandshake },
    { name: 'Startups & Incubators', desc: 'Demo days, pitch nights, and product launches.', icon: Rocket },
    { name: 'National Brands', desc: 'Mall activations, experiential roadshows, and consumer sampling.', icon: Sparkles },
    { name: 'Luxury Wedding Hosts', desc: 'Destination royal weddings and bespoke mandap celebrations.', icon: Gem },
    { name: 'Hospitality & Resorts', desc: 'Luxury resort inaugurations and culinary festivals.', icon: Hotel },
    { name: 'Technology & Gaming', desc: 'Hackathons, gaming expos, and developer keynotes.', icon: Cpu },
    { name: 'Retail & Fashion', desc: 'Fashion shows, store inaugurations, and shopping festival setups.', icon: ShoppingBag },
    { name: 'Entertainment & Media', desc: 'Concert tours, stand-up comedy shows, and movie promotions.', icon: Music }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Sector Expertise"
          title="Industries We Serve"
          subtitle="Providing specialized event infrastructure and ground control across diverse market sectors."
        />

        <Grid columns={4} gap="normal">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <PremiumCard
                key={ind.name}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1  flex flex-col justify-between"
                paddingSize="none"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="body-small text-[var(--text-secondary)] text-xs">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] mt-auto text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Enterprise Sector
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default IndustriesServedSection;
