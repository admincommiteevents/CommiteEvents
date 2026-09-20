import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { ShieldCheck, Lightbulb, Cpu, Award, Users, Eye, Heart, UserCheck } from 'lucide-react';

export const CoreValuesSection = () => {
  const values = [
    { title: 'Integrity', desc: 'Uncompromising honesty and ethical standards in all contracts, pricing, and vendor relations.', icon: ShieldCheck },
    { title: 'Creativity', desc: 'Designing custom stage visual themes, interactive light setups, and immersive guest experiences.', icon: Lightbulb },
    { title: 'Innovation', desc: 'Integrating digital check-ins, automated crew dispatch, and drone acoustics control.', icon: Cpu },
    { title: 'Professionalism', desc: 'Strict timeline enforcement, uniform dress codes, and crisis protocols for ground staff.', icon: Award },
    { title: 'Teamwork', desc: 'Seamless coordination between Commite Events, Parikshit Events, and Crewlytics teams.', icon: Users },
    { title: 'Transparency', desc: 'Clear milestone billing, zero surprise surcharges, and direct client dashboard updates.', icon: Eye },
    { title: 'Commitment', desc: 'Delivering on every promise, regardless of event scale or weather complications.', icon: Heart },
    { title: 'Customer First', desc: 'Prioritizing our client’s peace of mind, guest comfort, and brand reputation above all.', icon: UserCheck }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Guiding Principles"
          title="Our Core Values"
          subtitle="The foundational pillars that govern every decision, event design, and ground deployment."
        />

        <Grid columns={4} gap="normal">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <PremiumCard
                key={v.title}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {v.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)]">
                  {v.desc}
                </p>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default CoreValuesSection;
