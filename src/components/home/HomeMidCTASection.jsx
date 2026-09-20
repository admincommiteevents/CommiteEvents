import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import { ArrowRight, Phone } from 'lucide-react';

export const HomeMidCTASection = () => {
  return (
    <Section background="primary" borderTop={true}>
      {/* Background Red Ambient Glow */}
      <div className="ambient-glow-background top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="text-center flex flex-col items-center">
        <SectionHeader
          overline="Start Your Project Today"
          title={<>Let's Create Something <span className="text-gradient">Extraordinary</span> Together</>}
          subtitle="Whether you are planning a corporate summit, college fest, stadium concert, or luxury wedding in Lucknow or North India, our team is ready to deliver perfection."
          className="mb-10"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/contact" size="large" icon={ArrowRight}>
            Book Your Event
          </PrimaryButton>

          <SecondaryButton href="/contact#consultation" size="large">
            Get Free Consultation
          </SecondaryButton>

          <SecondaryButton href="tel:+91 92197 51766" size="large" icon={Phone} iconPosition="left">
            Call Now
          </SecondaryButton>
        </div>
      </Container>
    </Section>
  );
};

export default HomeMidCTASection;
