import React from 'react';
import Button from '../../components/common/Button';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import SectionHeader from '../common/SectionHeader';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

export const AboutFinalCTASection = () => {
  return (
    <Section background="dark" borderTop={true} className="mb-12 lg:mb-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914] opacity-25 rounded-full blur-[180px] pointer-events-none" />

      <Container className="text-center flex flex-col items-center relative z-10">
        <div className="mb-6">
          <ChromeObject3D variant="sphere" size={130} />
        </div>

        <SectionHeader
          overline="Ready To Collaborate?"
          title={<>Let's Create Something <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent">Extraordinary</span> Together</>}
          subtitle="Partner with Lucknow's premier enterprise event management team. Vishesh Pandey, Shivam Singh, and our ground execution leads are ready to bring your vision to life."
          lightText={true}
          className="mb-10"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/contact" size="large" icon={ArrowRight}>
            Book Your Event
          </PrimaryButton>

          <Button variant="outline-white" href="/contact#consultation" size="large" icon={Calendar}>
            Schedule Meeting
          </Button>

          <Button href="tel:+919219751766" variant="outline-white">Call Operations</Button>
        </div>
      </Container>
    </Section>
  );
};

export default AboutFinalCTASection;
