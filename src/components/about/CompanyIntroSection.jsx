import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Building2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const CompanyIntroSection = () => {
  const points = [
    'Enterprise Event Management in Lucknow & North India',
    'Specialized Divisions for Ground Control, Staffing & Weddings',
    'Proven Track Record with Universities & Government Bodies',
    'Turnkey Production, Stage Fabrications & Sound Acoustics'
  ];

  return (
    <Section background="secondary" borderTop={true} paddingSize="none" className="pt-8 lg:pt-12 pb-24 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              overline="Corporate Identity"
              title="Who We Are"
              subtitle="Commite Events is a premier event management company based in Lucknow, Uttar Pradesh."
            />

            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              We specialize in planning, organizing, and executing high-stakes events across educational institutions, corporate enterprises, national brands, and private clientele. Whether it's a multi-day university festival hosting 15,000 students, a C-suite corporate summit, or an extravagant wedding celebration, we deliver perfection.
            </p>

            <div className="space-y-3 pt-2">
              {points.map((pt) => (
                <div key={pt} className="flex items-center gap-3 text-sm text-[var(--text-primary)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <PremiumCard accentBorder className="flex flex-col">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-1">Lucknow Office</h3>
                  <p className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">Gomti Nagar, Lucknow, UP</p>
                </div>
              </div>

              <p className="body-regular text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-6 mb-6">
                Operating with a network of over 300+ trained volunteers and temporary staffing heads, Commite Events has established itself as the go-to partner for ground control, workforce logistics, stage productions, and brand activations across Uttar Pradesh.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-auto border-t border-[var(--border-subtle)] pt-6">
                <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex flex-col justify-center items-center text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-1">100%</div>
                  <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">Execution<br/>Accuracy</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex flex-col justify-center items-center text-center">
                  <div className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-1">24×7</div>
                  <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">Ground<br/>Support</div>
                </div>
              </div>
            </PremiumCard>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default CompanyIntroSection;
