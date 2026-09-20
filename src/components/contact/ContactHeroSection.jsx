import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const ContactHeroSection = () => {
  return (
    <Section background="primary" className="min-h-[80vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 overflow-hidden select-none">
      {/* Background Ambient Spotlight Filter */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[170px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Taglines */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="outline" dot={true}>
              Connect With Commite Events
            </Badge>

            <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Let's Build Something <span className="text-gradient underline decoration-[var(--accent-primary)] decoration-4 underline-offset-8">Extraordinary</span> Together
            </h1>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Whether you're planning a corporate conference, college fest, royal wedding, sports tournament or star concert, Commite Events is here to deliver flawless execution.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <PrimaryButton href="tel:+919219751766" size="large" icon={Phone}>
                Call Operations
              </PrimaryButton>
              <SecondaryButton href="https://wa.me/919219751766" size="large" icon={MessageSquare}>
                WhatsApp
              </SecondaryButton>
              <SecondaryButton href="/get-quote" size="large" icon={ArrowRight}>
                Get Free Quote
              </SecondaryButton>
            </div>

            {/* Quick Service Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">24/7 Desk</div>
                <div className="text-xs text-[var(--text-muted)]">Operations Support</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">Fast Response</div>
                <div className="text-xs text-[var(--text-muted)]">Instant Quotes</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">Pan-India</div>
                <div className="text-xs text-[var(--text-muted)]">Execution Reach</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Sphere Geometry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            <ChromeObject3D variant="sphere" size={240} />
            <div className="mt-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)]">
              24/7 Operations Desk • Lucknow Head Office
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default ContactHeroSection;
