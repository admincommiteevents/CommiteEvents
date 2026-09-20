import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

export const BusinessUnitsHeroSection = () => {
  const handleScrollToUnits = (e) => {
    if (e) e.preventDefault();
    const targetElement = document.getElementById('units-grid');
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section background="primary" className="min-h-[80vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 overflow-hidden select-none">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[170px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
              <span className="text-overline text-xs tracking-widest">Multi-Brand Enterprise Ecosystem</span>
            </div>

            <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Our Specialized <span className="text-gradient underline decoration-[var(--accent-primary)] decoration-4 underline-offset-8">Business Units</span>
            </h1>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Three specialized divisions working together under Commite Events to deliver world-class event ground management, enterprise staffing, and bespoke luxury wedding planning. Each unit operates with unmatched precision and domain expertise, ensuring a flawless execution tailored to its specific niche. By integrating these specialized workflows, we provide a robust, unified ecosystem that empowers our clients to scale their events effortlessly and achieve extraordinary results. From conceptualization to the final applause, our dedicated professionals collaborate seamlessly across divisions to maintain the highest standards of quality. We are committed to pushing creative boundaries and delivering immersive, memorable experiences that resonate with your audience and elevate your brand.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="#units-grid" onClick={handleScrollToUnits} variant="primary" size="large" icon={ArrowRight}>
                Explore Units
              </Button>
              <Button href="/contact" variant="secondary" size="large">
                Book Consultation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
            <ChromeObject3D variant="sphere" size={230} />
            <div className="mt-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)]">
              Synergistic Event Execution Architecture
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default BusinessUnitsHeroSection;
