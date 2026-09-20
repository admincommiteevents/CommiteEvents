import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ShieldCheck, Target, Lightbulb, Users, UserCheck, DollarSign, Layers, Clock, Cpu, MessageSquare, Star, Zap } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const reasons = [
    { title: 'Experienced Leadership', desc: 'Led by Vishesh Pandey, Shivam Singh, Ratnesh, and Gracee Bisht.', icon: ShieldCheck },
    { title: 'Professional Planning', desc: 'Military-grade budgeting, timeline management, and safety protocols.', icon: Target },
    { title: 'Creative Concepts', desc: 'Custom stage fabrications, light shows, and immersive setups.', icon: Lightbulb },
    { title: 'Dedicated Volunteers', desc: 'Parikshit Events deploys 300+ trained student & professional volunteers.', icon: Users },
    { title: 'Skilled Event Crew', desc: 'Crewlytics vetted anchors, promoters, and registration desk staff.', icon: UserCheck },
    { title: 'Transparent Pricing', desc: 'Honest milestone billing with zero hidden costs or surprise surcharges.', icon: DollarSign },
    { title: 'End-to-End Control', desc: 'From initial strategy to post-event clean-up and aftermovies.', icon: Layers },
    { title: '24×7 Ground Support', desc: 'Dedicated crisis team and continuous on-site leadership presence.', icon: Clock },
    { title: 'State-of-the-Art Gear', desc: 'JBL/L-Acoustics audio, P2.5 LED walls, DMX lighting, and licensed drones.', icon: Cpu },
    { title: 'Clear Communication', desc: 'Direct client updates via dedicated project managers.', icon: MessageSquare },
    { title: '100% Satisfaction', desc: 'Over 500+ successful events delivered across Uttar Pradesh.', icon: Star },
    { title: 'Timely Execution', desc: 'Strict timeline enforcement for VIP keynotes, concerts, and rituals.', icon: Zap }
  ];

  return (
    <section className="section-padding grid-background relative">
      <div className="container-custom">
        <SectionHeader
          overline="Operational Superiority"
          title="Why Choose Commite Events"
          subtitle="Delivering memorable experiences with precision, creativity, and professionalism for corporate, university, and private clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <Card
                key={r.title}
                hoverEffect
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {r.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)] leading-relaxed">
                  {r.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
