import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { GraduationCap, Building, ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';

export const ClientsMarqueeSection = () => {
  const clients = [
    { name: 'Dr. A.P.J. Abdul Kalam Technical University', type: 'University', icon: GraduationCap },
    { name: 'Lucknow University', type: 'University', icon: GraduationCap },
    { name: 'Babu Banarasi Das Group', type: 'Institution', icon: Building },
    { name: 'Amity University Campus', type: 'University', icon: GraduationCap },
    { name: 'UP Tourism Department', type: 'Government', icon: ShieldCheck },
    { name: 'FMCG Corporate Brands', type: 'Corporate', icon: Award },
    { name: 'North India NGO Forum', type: 'NGO', icon: HeartHandshake },
    { name: 'Tech Incubator Lucknow', type: 'Startup Hub', icon: Sparkles }
  ];

  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] overflow-hidden select-none">
      <div className="container-custom mb-10 text-center">
        <SectionHeader
          overline="Corporate & Campus Network"
          title="Our Trusted Clients"
          subtitle="Collaborating with prominent universities, corporate brands, and government departments."
          center
        />
      </div>

      <div className="relative w-full flex overflow-hidden mask-gradient">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {marqueeList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all duration-300 group cursor-pointer shrink-0"
              >
                <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[var(--accent-primary)] uppercase px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  {item.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarqueeSection;
