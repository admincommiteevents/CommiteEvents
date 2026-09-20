import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ShieldCheck, Users, Lightbulb, DollarSign, Cpu, Shield, Clock, MessageSquare } from 'lucide-react';

export const WhyChooseEventsSection = () => {
  const points = [
    { title: 'Professional Team', desc: 'Managed by Vishesh Pandey & Shivam Singh with over 5+ years of live execution excellence.', icon: ShieldCheck },
    { title: 'Experienced Ground Crew', desc: 'Senior show runners, sound engineers, light designers, and stage managers.', icon: Users },
    { title: 'Creative Concepts', desc: 'Custom 3D stage plots, laser light synchronization, and thematic mandap designs.', icon: Lightbulb },
    { title: 'Affordable Budget', desc: 'Transparent itemized estimates with milestone billing and zero hidden costs.', icon: DollarSign },
    { title: 'Latest Equipment', desc: 'High-pitch P2.5 LED walls, JBL concert line array sound towers, and 4K drones.', icon: Cpu },
    { title: 'Dedicated Volunteers', desc: '300+ disciplined Parikshit Events student leaders for crowd control and badging.', icon: Shield },
    { title: 'On-Time Delivery', desc: 'Strict venue setup deadlines guaranteed with zero show delay.', icon: Clock },
    { title: 'Transparent Communication', desc: '24/7 client hotline, daily shift briefings, and post-event media handovers.', icon: MessageSquare }
  ];

  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Execution Superiority"
          title="Why Choose Commite Events"
          subtitle="Delivering flawless live events with creative vision, transparent billing, and relentless ground control."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {p.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)] text-xs">
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

export default WhyChooseEventsSection;
