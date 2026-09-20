import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Lightbulb, Compass, Calendar, Users, Layers, Trophy, Rocket } from 'lucide-react';

export const OurJourneySection = () => {
  const steps = [
    { step: '01', title: 'The Initial Idea', desc: 'Conceived in Lucknow to bring enterprise organization to university fests and corporate meets.', icon: Lightbulb },
    { step: '02', title: 'Strategic Planning', desc: 'Formulated ground safety protocols, vendor contracts, and acoustic staging standards.', icon: Compass },
    { step: '03', title: 'First Major Event', desc: 'Successfully executed a 5,000+ student college fest in Lucknow with zero crowd incidents.', icon: Calendar },
    { step: '04', title: 'Building The Core Team', desc: 'Recruited top operations heads, technical directors, and Parikshit Events volunteer leads.', icon: Users },
    { step: '05', title: 'Launching Business Units', desc: 'Formalized Parikshit Events, Crewlytics, and Wedding & Gifting Agency under one roof.', icon: Layers },
    { step: '06', title: '500+ Successful Events', desc: 'Crossed the milestone of 500+ managed events across UP with 100+ corporate clients.', icon: Trophy },
    { step: '07', title: 'National Expansion', desc: 'Paving the way for pan-India operations, tech integration, and international expos.', icon: Rocket }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Evolution Blueprint"
          title="Our Journey"
          subtitle="From a grassroots vision in Lucknow to North India's premier enterprise event management company."
        />

        <Grid columns={4} gap="normal">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <PremiumCard
                key={s.step}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[var(--accent-primary)]">
                      {s.step}
                    </span>
                    <div className="p-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)] group-hover:rotate-6 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {s.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] mt-auto text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Phase Step {s.step}
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default OurJourneySection;
