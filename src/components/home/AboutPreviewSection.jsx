import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutPreviewSection = () => {
  const capabilities = [
    'Strategic Event Planning & Conceptualization',
    'Flawless On-Site Ground Execution & Operations',
    'Parikshit Events Volunteer & Crew Management',
    'Crewlytics Event Staffing & Hostess Placement',
    'Corporate Conferences, Summits & Galas',
    'College Fests, Concerts & Celebrity Nights',
    'Luxury Weddings, Decor & Gifting Curation',
    'Sports Leagues, E-Sports & Hackathons'
  ];

  return (
    <section className="section-padding grid-background relative overflow-hidden">
      <div className="ambient-glow-background top-1/2 left-0 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <SectionHeader
              overline="Who We Are"
              title="About Commite Events"
              subtitle="Commite Events is a professional event management company based in Lucknow that transforms ambitious ideas into flawless live realities."
              align="left"
              className="mb-6 lg:mb-8"
            />

            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              Based in Lucknow, Uttar Pradesh, we bridge the gap between creative vision and tactical execution. Our specialized enterprise units command ground control, volunteer forces, temporary staffing, stage fabrications, and royal wedding designs with military-grade precision.
            </p>

            {/* Concise Bullet Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 pb-4">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3 text-sm font-medium text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <Button href="/about" variant="primary" size="medium" icon={ArrowRight}>
                Know More
              </Button>
              <Button href="/services" variant="secondary" size="medium">
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Visual & Brand Logo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Card hoverEffect accentBorder className="w-full text-center relative overflow-hidden ">
              
              <div className="w-full flex flex-col items-center justify-center text-center">
                {/* Brand Logo in Circular Glass Orb */}
                <div className="relative group my-2 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[var(--accent-primary)]/15 blur-xl group-hover:bg-[var(--accent-primary)]/25 transition-all duration-500" />
                  <div className="relative w-36 h-36 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-medium)] flex items-center justify-center p-4 shadow-xl shadow-black/10 transition-transform duration-500 group-hover:scale-105 mx-auto">
                    <BrandLogo height={72} />
                  </div>
                </div>
                
                <div className="mt-6 space-y-2 text-center w-full flex flex-col items-center">
                  <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] text-center">
                    Precision Event Operations
                  </h3>
                  <p className="body-small text-[var(--text-secondary)] max-w-xs text-center mx-auto">
                    Event Management Company in Lucknow specializing in corporate summits, university fests, and luxury weddings.
                  </p>
                </div>
              </div>

              {/* Founder Badges */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] w-full flex items-center justify-around text-xs font-mono text-[var(--text-muted)]">
                <div>Vishesh Pandey <span className="text-[var(--accent-primary)] block text-[10px]">Founder</span></div>
                <div className="w-[1px] h-6 bg-[var(--border-subtle)]" />
                <div>Shivam Singh <span className="text-[var(--accent-primary)] block text-[10px]">Co-Founder</span></div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
