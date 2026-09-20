import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import { heroAssets } from '../../assets/images';
import { ArrowRight, Compass, ShieldCheck, Award } from 'lucide-react';

export const AboutHeroSection = () => {
  return (
    <Section background="primary" paddingSize="none" className="w-full min-h-[80vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16">
      {/* Ambient Hero Glow Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 scale-105"
          style={{ backgroundImage: `url(${heroAssets.main})` }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[160px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-[var(--bg-primary)]" />
      </div>

      <Container className="my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Tagline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge className="mb-6 shadow-sm">
              Enterprise Brand Identity • Lucknow
            </Badge>

            <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
              ABOUT COMMITE <span className="text-gradient underline decoration-[var(--accent-primary)] decoration-4 underline-offset-8">EVENTS</span>
            </h1>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Creating unforgettable experiences through creativity, innovation, and military-grade ground execution. From high-energy educational festivals and massive corporate summits to luxurious royal celebrations, our dedicated team ensures every detail is meticulously planned and flawlessly executed. We specialize in transforming ordinary venues into extraordinary immersive environments, pushing the boundaries of what's possible in live entertainment and production. With a relentless focus on quality, seamless logistics, and guest satisfaction, we turn your boldest visions into reality, consistently setting new benchmarks in the event management industry.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <PrimaryButton href="/services" size="large" icon={ArrowRight}>
                Explore Services
              </PrimaryButton>
              <SecondaryButton href="/contact" size="large">
                Contact Us
              </SecondaryButton>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">Lucknow HQ</div>
                <div className="text-xs text-[var(--text-muted)]">Operations Base</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">3 Divisions</div>
                <div className="text-xs text-[var(--text-muted)]">Specialized Units</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">500+ Events</div>
                <div className="text-xs text-[var(--text-muted)]">Proven Legacy</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Chrome Object Visual */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
            <ChromeObject3D variant="sphere" size={240} />
            <div className="mt-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)]">
              Leadership & Operational Precision
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default AboutHeroSection;
