import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const MissionVisionSection = () => {
  const missionItems = [
    'Deliver exceptional turnkey event experiences with 100% precision.',
    'Create memorable, high-energy moments for attendees and clients.',
    'Provide unified solutions spanning ground ops, staffing, decor, and audio-visuals.',
    'Build enduring, trust-based partnerships with universities and brands.',
    'Support creative innovation and modern event technologies.'
  ];

  const visionItems = [
    'Become India’s most trusted and organized event management company.',
    'Expand operations nationally across key metro and tier-2 business hubs.',
    'Deliver world-class concert, corporate, and wedding experiences.',
    'Build cutting-edge tech solutions for real-time crowd and crew tracking.',
    'Empower student volunteers with career leadership opportunities.'
  ];

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Purpose & Future"
          title="Mission & Vision"
          subtitle="Guided by clarity of purpose and driven by an unwavering commitment to set the benchmark for event management in India."
        />

        <Grid columns={2} gap="large">
          {/* Mission Card */}
          <PremiumCard accentBorder className=" space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-overline text-[10px] text-[var(--accent-primary)] block">Strategic Goal</span>
                <h3 className="font-heading text-2xl font-bold uppercase text-[var(--text-primary)]">Our Mission</h3>
              </div>
            </div>

            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              To transform event management into a disciplined science where creativity meets military-grade operational control, giving clients total peace of mind.
            </p>

            <ul className="space-y-3 pt-2">
              {missionItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PremiumCard>

          {/* Vision Card */}
          <PremiumCard accentBorder className=" space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-overline text-[10px] text-[var(--accent-primary)] block">Future Horizon</span>
                <h3 className="font-heading text-2xl font-bold uppercase text-[var(--text-primary)]">Our Vision</h3>
              </div>
            </div>

            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              To establish Commite Events as India's benchmark brand for enterprise event execution, workforce deployment, and luxury wedding management.
            </p>

            <ul className="space-y-3 pt-2">
              {visionItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PremiumCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default MissionVisionSection;
