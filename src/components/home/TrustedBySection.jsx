import React from 'react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import { Building2, GraduationCap, ShieldCheck, HeartHandshake, Sparkles, Briefcase, Landmark, Radio, Zap } from 'lucide-react';

export const TrustedBySection = () => {
  // Row 1: Event Categories We Master
  const eventCategories = [
    { name: 'Corporate Summits & Conclaves', category: 'Enterprise Events', icon: Briefcase },
    { name: 'College & Youth Festivals', category: 'Campus Events', icon: GraduationCap },
    { name: 'Luxury Destination Weddings', category: 'Premium Planning', icon: HeartHandshake },
    { name: 'Live Concerts & Music Fests', category: 'Entertainment', icon: Radio },
    { name: 'E-Sports & Gaming Tournaments', category: 'Digital & Youth', icon: Zap },
    { name: 'Trade Shows & Exhibitions', category: 'B2B Expos', icon: Building2 },
    { name: 'VIP & Protocol Management', category: 'High-Security', icon: ShieldCheck },
    { name: 'Brand Activations & Launches', category: 'Marketing Events', icon: Sparkles }
  ];

  // Row 2: Operational Strengths & Capabilities
  const operationalStrengths = [
    { name: 'Pan-India Execution Reach', category: 'Logistics', icon: Landmark },
    { name: 'Vetted Security & Bouncers', category: 'Crowd Control', icon: ShieldCheck },
    { name: 'High-End Stage Fabrications', category: 'Production', icon: Building2 },
    { name: 'Celebrity & Artist Management', category: 'Talent Buying', icon: Sparkles },
    { name: 'Advanced Audio-Visual Tech', category: 'Technical Rider', icon: Radio },
    { name: '24/7 Operations Desk', category: 'Support', icon: Zap },
    { name: 'Crowd & Traffic Management', category: 'Ground Ops', icon: HeartHandshake },
    { name: 'Premium Venue Styling', category: 'Decor & Design', icon: Briefcase }
  ];

  const marqueeRow1 = [...eventCategories, ...eventCategories, ...eventCategories];
  const marqueeRow2 = [...operationalStrengths, ...operationalStrengths, ...operationalStrengths];

  return (
    <Section background="secondary" borderTop={true} borderBottom={true} className="w-full relative py-20 sm:py-24 lg:py-28" paddingSize="none">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none opacity-20" />

      <SectionHeader
        overline="Comprehensive Event Capabilities & Expertise"
        title={<>Mastering Every Scale of <span className="text-[var(--accent-primary)]">Live Events & Operations</span></>}
        subtitle="From massive college fests and corporate summits to luxury weddings and high-security protocol management."
        className="mb-12 sm:mb-16 z-10 relative"
      />

      {/* Dual Row Marquee Container with High Impact Larger Cards */}
      <div className="space-y-5 sm:space-y-6">
        {/* Row 1: Forward Marquee (Event Categories) */}
        <div className="relative w-full flex overflow-hidden mask-gradient py-2">
          <div className="flex gap-6 sm:gap-7 animate-marquee whitespace-nowrap">
            {marqueeRow1.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r1-${item.name}-${idx}`}
                  className="inline-flex items-center gap-4 px-6 sm:px-7 py-4 sm:py-4.5 rounded-2xl bg-[var(--bg-tertiary)]/95 backdrop-blur-md border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] hover:shadow-xl hover:shadow-[var(--accent-glow)]/20 transition-all duration-300 group cursor-pointer shrink-0"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center shrink-0 border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-primary)]" />
                  </div>
                  <div className="text-left flex flex-col justify-center">
                    <div className="font-heading text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mt-0.5 font-medium whitespace-nowrap">
                      {item.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Reverse Marquee (Operational Strengths) */}
        <div className="relative w-full flex overflow-hidden mask-gradient py-2">
          <div className="flex gap-6 sm:gap-7 animate-marquee-reverse whitespace-nowrap">
            {marqueeRow2.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r2-${item.name}-${idx}`}
                  className="inline-flex items-center gap-4 px-6 sm:px-7 py-4 sm:py-4.5 rounded-2xl bg-[var(--bg-tertiary)]/95 backdrop-blur-md border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] hover:shadow-xl hover:shadow-[var(--accent-glow)]/20 transition-all duration-300 group cursor-pointer shrink-0"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center shrink-0 border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-primary)]" />
                  </div>
                  <div className="text-left flex flex-col justify-center">
                    <div className="font-heading text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mt-0.5 font-medium whitespace-nowrap">
                      {item.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrustedBySection;
