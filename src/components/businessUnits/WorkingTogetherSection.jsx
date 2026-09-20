import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ShieldCheck, Users, Gift } from 'lucide-react';

export const WorkingTogetherSection = () => {
  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom max-w-4xl mx-auto">
        <SectionHeader
          overline="Divisional Synergy"
          title="Working Together as One Entity"
          subtitle="How our 3 divisions combine for mega-scale festivals, corporate expos, and royal weddings."
        />

        {/* Workflow Diagram Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card hoverEffect accentBorder className="p-6 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[var(--accent-primary)] mx-auto" />
            <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)]">
              Step 1: Ground Control
            </h4>
            <p className="body-small text-[var(--text-muted)] text-xs leading-relaxed">
              Parikshit Events secures the venue, positions DFMD gates, and sets up badging.
            </p>
          </Card>

          <Card hoverEffect accentBorder className="p-6 space-y-3">
            <Users className="w-8 h-8 text-[var(--accent-primary)] mx-auto" />
            <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)]">
              Step 2: Staffing Deployment
            </h4>
            <p className="body-small text-[var(--text-muted)] text-xs leading-relaxed">
              Crewlytics places anchors, hostesses, promoters, and registration desk staff.
            </p>
          </Card>

          <Card hoverEffect accentBorder className="p-6 space-y-3">
            <Gift className="w-8 h-8 text-[var(--accent-primary)] mx-auto" />
            <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)]">
              Step 3: Hospitality & Decor
            </h4>
            <p className="body-small text-[var(--text-muted)] text-xs leading-relaxed">
              Wedding & Gifting Agency manages VIP lounges, thematic decor, and hampers.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkingTogetherSection;
