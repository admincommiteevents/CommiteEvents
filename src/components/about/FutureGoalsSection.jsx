import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Rocket, Cpu, Layers, Globe, HeartHandshake } from 'lucide-react';

export const FutureGoalsSection = () => {
  const goals = [
    { title: 'Pan-India Expansion', desc: 'Establishing operational hubs in Delhi NCR, Mumbai, Bangalore, and Chandigarh by 2027.', icon: Globe },
    { title: 'AI & Tech Integration', desc: 'Deploying real-time crew dispatch apps, RFID attendee check-ins, and crowd density heatmaps.', icon: Cpu },
    { title: 'New Business Units', desc: 'Launching specialized sub-brands for sports leagues, esports arenas, and celebrity booking.', icon: Layers },
    { title: 'Global Collaborations', desc: 'Partnering with international event production agencies for cross-border expos and summits.', icon: Rocket },
    { title: 'Youth Empowerment', desc: 'Scaling Parikshit Events to train over 1,000+ student leaders annually with certified credentials.', icon: HeartHandshake }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="The Horizon"
          title="Looking Ahead"
          subtitle="Our roadmap for technological innovation, national expansion, and industry leadership."
        />

        <Grid columns={5} gap="normal">
          {goals.map((g) => {
            const Icon = g.icon;
            return (
              <PremiumCard
                key={g.title}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-4 group-hover:rotate-6 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {g.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)]">
                    {g.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] mt-auto text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  Roadmap 2026–2028
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default FutureGoalsSection;
