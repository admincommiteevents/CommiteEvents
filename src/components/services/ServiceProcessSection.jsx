import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { PhoneCall, Search, Compass, DollarSign, Zap, CheckCircle2 } from 'lucide-react';

export const ServiceProcessSection = () => {
  const steps = [
    { step: '01', title: 'Consultation', desc: 'Initial discovery call to understand event scope, venue, dates, and audience expectations.', icon: PhoneCall },
    { step: '02', title: 'Requirement Analysis', desc: 'Detailed site inspection, crowd safety assessment, technical rider formulation, and staffing count.', icon: Search },
    { step: '03', title: 'Planning & Design', desc: 'Formulating 3D stage plots, acoustics map, volunteer shift rosters, and minute-by-minute timeline.', icon: Compass },
    { step: '04', title: 'Budget Finalization', desc: 'Transparent itemized quotation with milestone billing, zero surcharges, and contract signing.', icon: DollarSign },
    { step: '05', title: 'Ground Execution', desc: 'Deploying Parikshit Events volunteers, Crewlytics staff, sound arrays, LED walls, and bouncers.', icon: Zap },
    { step: '06', title: 'Successful Delivery', desc: 'Flawless live execution, VIP concierge, zero safety breaches, and post-event media handover.', icon: CheckCircle2 }
  ];

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Execution Architecture"
          title="Our Working Process"
          subtitle="A systematic 6-step workflow that ensures zero operational delays and 100% client peace of mind."
        />

        <Grid columns={3} gap="normal">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <PremiumCard
                key={s.step}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between "
                paddingSize="none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[var(--accent-primary)]">
                      {s.step}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {s.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] mt-auto text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Process Step {s.step}
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default ServiceProcessSection;
