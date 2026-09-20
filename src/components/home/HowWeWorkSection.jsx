import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { MessageSquare, Compass, DollarSign, Users, Zap, CheckCircle2 } from 'lucide-react';

export const HowWeWorkSection = () => {
  const steps = [
    { step: '01', title: 'Requirement Discussion', desc: 'Understanding your event goals, target audience, venue expectations, and key dates.', icon: MessageSquare },
    { step: '02', title: 'Planning & Strategy', desc: 'Crafting master blueprints, 3D stage concepts, lighting plots, and security protocols.', icon: Compass },
    { step: '03', title: 'Budget Finalization', desc: 'Transparent cost breakdown, milestone payment terms, and vendor contracting.', icon: DollarSign },
    { step: '04', title: 'Team Allocation', desc: 'Deploying Parikshit Events ground crew, Crewlytics staffing, and technical heads.', icon: Users },
    { step: '05', title: 'Execution', desc: 'Real-time show running, sound/LED setup, VIP hospitality, and crowd control.', icon: Zap },
    { step: '06', title: 'Successful Event Delivery', desc: 'Post-event debriefing, inventory teardown, analytics, and photo/video handovers.', icon: CheckCircle2 }
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Systematic Methodology"
          title="Our Process"
          subtitle="A proven, 6-step operational timeline that guarantees stress-free event planning and zero-incident execution."
        />

        {/* Timeline Grid (6 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.step}
                hoverEffect
                accentBorder
                className="relative group transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-bold text-[var(--accent-primary)] opacity-80 group-hover:opacity-100">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] group-hover:rotate-6 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {s.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)]">
                  {s.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
