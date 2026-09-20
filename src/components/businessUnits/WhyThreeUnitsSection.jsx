import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { Target, Users2, Award, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export const WhyThreeUnitsSection = () => {
  const points = [
    { title: 'Extreme Specialization', desc: 'Each unit focuses exclusively on its domain, eliminating generalist errors.', icon: Target },
    { title: 'Dedicated Taskforce Teams', desc: 'No cross-allocation confusion; every team member has domain expertise.', icon: Users2 },
    { title: 'Superior Deliverable Quality', desc: 'Customized SOPs and quality benchmarks for weddings, ground ops, and staffing.', icon: Award },
    { title: 'Professional Management', desc: 'Led by domain-specific co-founders and executive directors.', icon: ShieldCheck },
    { title: 'Faster Rapid Execution', desc: 'Parallel workflow execution reduces setup turnarounds by 40%.', icon: Zap },
    { title: 'Scalable Operations Grid', desc: 'Seamlessly scale from 10 volunteers to 150+ staff across state boundaries.', icon: TrendingUp }
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Strategic Architecture"
          title="Why Three Business Units?"
          subtitle="How specialized divisional focus eliminates friction and raises event execution standards across North India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.title}
                hoverEffect
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1 "
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {p.title}
                </h3>

                <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
                  {p.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyThreeUnitsSection;
