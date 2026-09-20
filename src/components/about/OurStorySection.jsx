import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Compass, Lightbulb, Shield, Sparkles, TrendingUp } from 'lucide-react';

export const OurStorySection = () => {
  const storyMilestones = [
    {
      year: '2021',
      title: 'The Spark & Genesis',
      desc: 'Founded in Lucknow after identifying severe gaps in university event management — unorganized volunteer teams, delayed stage setups, and poor crowd safety.',
      icon: Lightbulb
    },
    {
      year: '2022',
      title: 'Parikshit Events Launch',
      desc: 'Formed Parikshit Events to recruit and train over 300+ university students in ground discipline, VIP security escorting, and registration desk management.',
      icon: Shield
    },
    {
      year: '2023',
      title: 'Crewlytics Workforce Expansion',
      desc: 'Created Crewlytics to provide corporate clients with vetted temporary staffing, bilingual anchors, brand promoters, and campus hiring solutions.',
      icon: Sparkles
    },
    {
      year: '2024–2026',
      title: 'Enterprise Dominance',
      desc: 'Expanded into luxury wedding management, sports leagues, stadium concerts, and corporate summits across Lucknow and North India.',
      icon: TrendingUp
    }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Origin & Growth"
          title="Our Story"
          subtitle="How a passion for disciplined execution transformed into one of Lucknow's most trusted event management companies."
        />

        <Grid columns={4} gap="normal">
          {storyMilestones.map((item) => {
            const Icon = item.icon;
            return (
              <PremiumCard
                key={item.year}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[var(--accent-primary)]">
                      {item.year}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] mt-auto text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Commite Events Legacy
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default OurStorySection;
