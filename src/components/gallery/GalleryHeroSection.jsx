import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import { ArrowRight, Play } from 'lucide-react';

export const GalleryHeroSection = () => {
  return (
    <Section background="primary" className="min-h-[80vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 overflow-hidden select-none">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[170px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
              <span className="text-overline text-xs tracking-widest">Visual Archive • Unforgettable Moments</span>
            </div>

            <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Every Event Tells A <span className="text-gradient underline decoration-[var(--accent-primary)] decoration-4 underline-offset-8">Story</span>
            </h1>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Explore the visual journey of Commite Events across college fests, corporate summits, star concerts, esports LANs, and royal weddings in North India. Our gallery captures the raw emotion, scale, and meticulous detailing that goes into every production we manage. From breathtaking stage designs to high-energy audience interactions, these highlights showcase our commitment to excellence and our passion for bringing extraordinary visions to life.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4" style={{ marginTop: '30px' }}>
              <Button href="/portfolio" variant="primary" size="large" icon={ArrowRight}>
                Explore Portfolio
              </Button>
              <Button href="#video-gallery" variant="secondary" size="large" icon={Play}>
                Watch Highlights
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
            <ChromeObject3D variant="sphere" size={230} />
            <div className="mt-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)]">
              4K Production Photography & Cinematography
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default GalleryHeroSection;
