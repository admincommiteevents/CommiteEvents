import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import { ArrowRight, Sparkles, Trophy, Calendar } from 'lucide-react';

export const EventsHeroSection = () => {
  return (
    <Section background="primary" className="min-h-[80vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 overflow-hidden select-none">
      {/* Background Glow Filter */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-glow)] rounded-full blur-[170px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Taglines */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
              <span className="text-overline text-xs tracking-widest">Events We Organize • Lucknow & North India</span>
            </div>

            <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Unforgettable Live <span className="text-gradient underline decoration-[var(--accent-primary)] decoration-4 underline-offset-8">Experiences</span>
            </h1>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              From multi-day college festivals and high-profile corporate conferences to opulent royal weddings, massive stadium concerts, competitive sports leagues, and cutting-edge technical hackathons — Commite Events delivers flawless ground control and unparalleled production value. Our experienced team works tirelessly behind the scenes to orchestrate every detail, ensuring seamless execution, dynamic audience engagement, and an unforgettable atmosphere. We specialize in transforming bold concepts into breathtaking live realities that leave a lasting impact on every attendee. By leveraging state-of-the-art technology and innovative design, we provide comprehensive end-to-end event management solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="large" icon={ArrowRight}>
                Book Your Event
              </Button>
              <Button href="#categories" variant="secondary" size="large">
                Explore Categories
              </Button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">500+</div>
                <div className="text-xs text-[var(--text-muted)]">Events Executed</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">27+</div>
                <div className="text-xs text-[var(--text-muted)]">Event Categories</div>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[var(--text-primary)]">50,000+</div>
                <div className="text-xs text-[var(--text-muted)]">Audience Managed</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Geometry */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative">
            <ChromeObject3D variant="sphere" size={240} />
            <div className="mt-6 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-secondary)]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)]">
              Turnkey Production & Ground Management
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default EventsHeroSection;
