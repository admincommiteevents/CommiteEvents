import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ShieldCheck, Users, Gift } from 'lucide-react';

export const BusinessUnitsIntroSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          overline="Enterprise Synergy"
          title="Specialization Meets Execution"
          subtitle="Why single-model event companies compromise quality, and how our multi-brand architecture delivers 100% precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card hoverEffect accentBorder className="p-6 space-y-3 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] mx-auto shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
              Parikshit Events
            </h3>
            <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
              Ground management, volunteer deployment, crowd security, and venue access control.
            </p>
          </Card>

          <Card hoverEffect accentBorder className="p-6 space-y-3 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] mx-auto shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
              Crewlytics
            </h3>
            <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
              Temporary staffing, brand promoters, anchors, hostesses, and campus hiring.
            </p>
          </Card>

          <Card hoverEffect accentBorder className="p-6 space-y-3 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] mx-auto shadow-sm">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
              Wedding & Gifting
            </h3>
            <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
              Royal wedding planning, thematic mandap decor, couple entries, and artisan return gifts.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessUnitsIntroSection;
