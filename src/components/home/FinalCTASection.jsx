import React from 'react';
import Button from '../../components/common/Button';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import SectionHeader from '../common/SectionHeader';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const FinalCTASection = () => {
  return (
    <Section background="secondary" borderTop={true}>
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[180px] pointer-events-none opacity-40" />

      <Container className="text-center flex flex-col items-center">
        <div className="mb-6">
          <ChromeObject3D variant="sphere" size={140} />
        </div>

        <SectionHeader
          overline="Enterprise Event Partner"
          title={<>Let's Create Something <span className="text-[var(--accent-primary)]">Extraordinary</span> Together</>}
          subtitle="From planning to execution, Commite Events is ready to turn your vision into reality with Lucknow's finest ground crew, production team, and staffing network."
          className="mb-10"
        />

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <PrimaryButton href="/contact" size="large" icon={ArrowRight}>
            Book Your Event
          </PrimaryButton>

          <SecondaryButton href="/contact#consultation" size="large">
            Get Free Consultation
          </SecondaryButton>

          <SecondaryButton href="tel:+91 92197 51766" size="large" icon={Phone} iconPosition="left">
            Call Now
          </SecondaryButton>

          <SecondaryButton href="https://wa.me/919219751766" size="large" icon={MessageSquare} iconPosition="left">
            WhatsApp
          </SecondaryButton>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCTASection;
