import React from 'react';
import Button from '../../components/common/Button';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import SectionHeader from '../common/SectionHeader';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const ServicesFinalCTASection = () => {
  return (
    <Section background="dark" borderTop={true} className="select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-primary)] opacity-30 rounded-full blur-[180px] pointer-events-none" />

      <Container className="relative z-10 text-center flex flex-col items-center">
        <div className="mb-6">
          <ChromeObject3D variant="sphere" size={130} />
        </div>

        <SectionHeader
          overline="Enterprise Service Booking"
          title={<>Ready To Organize Your <span className="text-gradient">Next Event?</span></>}
          subtitle="Contact Commite Events today for customized quotes, technical rider planning, and ground operation support in Lucknow & North India."
          lightText={true}
          className="mb-10"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/contact" size="large" icon={ArrowRight}>
            Book Your Event
          </PrimaryButton>

          <Button href="tel:+919219751766" variant="outline-white">Call Operations</Button>

          <Button href="https://wa.me/919219751766" variant="outline-white">WhatsApp</Button>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesFinalCTASection;
