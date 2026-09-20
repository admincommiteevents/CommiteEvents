import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { ShieldCheck, Target, Lightbulb, Clock, DollarSign, Layers, Cpu, Heart } from 'lucide-react';

export const WhyChooseUsAboutSection = () => {
  const points = [
    { title: 'Experienced Leadership', desc: 'Over 5+ years of combined ground experience led by Vishesh Pandey & Shivam Singh.', icon: ShieldCheck },
    { title: 'Professional Execution', desc: 'Military-grade timeline enforcement, safety barricading, and line-array staging.', icon: Target },
    { title: 'Creative Concepts', desc: 'Custom 3D stage rendering, lighting design plots, and immersive soundscapes.', icon: Lightbulb },
    { title: 'Reliable 24×7 Support', desc: 'Dedicated crisis management team and on-site project directors.', icon: Clock },
    { title: 'Transparent Packages', desc: 'Honest itemized estimates with milestone billing and zero hidden surcharges.', icon: DollarSign },
    { title: 'End-to-End Control', desc: 'Managing strategy, ground crew, AV tech, catering, and post-event media.', icon: Layers },
    { title: 'Technology Driven', desc: 'QR code check-in desks, real-time crew dispatching, and licensed drone streams.', icon: Cpu },
    { title: 'Customer Focused', desc: 'Prioritizing your peace of mind and brand prestige above everything else.', icon: Heart }
  ];

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Competitive Edge"
          title="Why Choose Commite Events"
          subtitle="Delivering flawless live events with creative vision, transparent billing, and relentless ground control."
        />

        <Grid columns={4} gap="normal">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <PremiumCard
                key={p.title}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {p.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)]">
                  {p.desc}
                </p>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhyChooseUsAboutSection;
