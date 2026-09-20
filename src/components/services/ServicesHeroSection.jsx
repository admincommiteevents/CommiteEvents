import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export const ServicesHeroSection = () => {
  return (
    <Section background="primary" className="min-h-[80vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 overflow-hidden select-none">
      {/* Background Ambient Spotlight Filter */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[170px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Taglines */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="outline" dot={true}>
              Enterprise Service Portfolio • Lucknow
            </Badge>

            <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Complete Event <span className="text-gradient underline decoration-[var(--accent-primary)] decoration-4 underline-offset-8">Solutions</span>
            </h1>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              From strategic planning and conceptual design to rigorous ground execution, stage fabrications, immersive audio-visual setups, volunteer control, and specialized staffing — Commite Events provides an unparalleled 360-degree event management experience. Whether you are organizing massive corporate summits, high-energy university fests, opulent luxury weddings, or grand stadium concerts, our dedicated teams are equipped to handle every logistical challenge. We pride ourselves on delivering seamless, end-to-end solutions that elevate your brand and ensure every event is a resounding, spectacular success.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <PrimaryButton href="/contact" size="large" icon={ArrowRight}>
                Get Free Consultation
              </PrimaryButton>
              <SecondaryButton href="/contact#quote" size="large">
                Book Your Event
              </SecondaryButton>
            </div>

            {/* Quick Service Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">20 Verticals</div>
                <div className="text-xs text-[var(--text-muted)]">Turnkey Services</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">3 Divisions</div>
                <div className="text-xs text-[var(--text-muted)]">Specialized Staffing</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">100% On-Time</div>
                <div className="text-xs text-[var(--text-muted)]">Execution Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Sphere Geometry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            <ChromeObject3D variant="sphere" size={240} />
            <div className="mt-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)]">
              Precision Production Engineering
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default ServicesHeroSection;
