import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { PhoneCall, Compass, DollarSign, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const EventProcessSection = () => {
  const steps = [
    { step: '01', title: 'Requirement Discussion', desc: 'Initial discovery call to understand event scale, venue, dates, and audience count.', icon: PhoneCall },
    { step: '02', title: 'Planning & Design', desc: 'Site inspection, crowd safety planning, 3D stage plots, and technical rider alignment.', icon: Compass },
    { step: '03', title: 'Budget Finalization', desc: 'Transparent itemized quotation with milestone billing, zero surcharges, and contract signing.', icon: DollarSign },
    { step: '04', title: 'Ground Execution', desc: 'Deploying Parikshit Events volunteers, Crewlytics staff, sound line arrays, LED walls, and bouncers.', icon: Zap },
    { step: '05', title: 'Real-Time Management', desc: 'Senior show runners oversee stage cues, VIP protocols, audio alignment, and safety corridors.', icon: ShieldCheck },
    { step: '06', title: 'Successful Completion', desc: 'Flawless show delivery, zero safety breaches, crowd dispersal, and 4K media handover.', icon: CheckCircle2 }
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Systematic Operations"
          title="Working Process"
          subtitle="Our 6-step event management blueprint that guarantees zero operational delays and 100% peace of mind."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.step}
                hoverEffect
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between "
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

                <div className="pt-4 border-t border-[var(--border-subtle)] mt-4 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Process Step {s.step}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventProcessSection;
