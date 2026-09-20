import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { ShieldCheck, Target, DollarSign, Lightbulb, Layers, Users, Cpu, Clock, PhoneCall } from 'lucide-react';

export const WhyOurServicesSection = () => {
  const points = [
    { title: 'Experienced Team', desc: 'Over 5+ years of combined ground experience led by Vishesh Pandey & Shivam Singh.', icon: ShieldCheck },
    { title: 'Professional Execution', desc: 'Military-grade timeline enforcement, safety barricading, and line-array staging.', icon: Target },
    { title: 'Affordable Pricing', desc: 'Transparent itemized estimates with milestone billing and zero hidden surcharges.', icon: DollarSign },
    { title: 'Creative Planning', desc: 'Custom 3D stage rendering, lighting design plots, and immersive soundscapes.', icon: Lightbulb },
    { title: 'End-to-End Management', desc: 'Managing strategy, ground crew, AV tech, catering, and post-event media.', icon: Layers },
    { title: 'Dedicated Volunteers', desc: '300+ uniformed Parikshit Events student leaders for disciplined crowd guidance.', icon: Users },
    { title: 'Latest Equipment', desc: 'High-pitch P2.5 LED walls, JBL line array sound towers, and 4K aerial drones.', icon: Cpu },
    { title: 'On-Time Delivery', desc: 'Strict venue setup deadlines guaranteed with zero show delay.', icon: Clock },
    { title: '24×7 On-Ground Support', desc: 'Dedicated crisis management team and on-site project directors.', icon: PhoneCall }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Operational Superiority"
          title="Why Our Services Stand Out"
          subtitle="Delivering flawless live events with creative vision, transparent billing, and relentless ground control."
        />

        <Grid columns={3} gap="normal">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <PremiumCard
                key={p.title}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1 "
                paddingSize="none"
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

export default WhyOurServicesSection;
