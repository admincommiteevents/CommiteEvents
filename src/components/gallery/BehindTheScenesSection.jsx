import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { btsData } from '../../data/galleryData';
import { Camera, ShieldCheck, Cpu } from 'lucide-react';

export const BehindTheScenesSection = () => {
  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Documentary Archive"
          title="Behind The Scenes"
          subtitle="Unfiltered operational glimpses of acoustics tuning, volunteer control briefings, and structural stage assembly."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {btsData.map((item, idx) => (
            <Card
              key={idx}
              hoverEffect
              accentBorder
              className="group overflow-hidden !"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute top-3 left-3 p-2 rounded-lg bg-[var(--bg-secondary)]/90 backdrop-blur-md text-[var(--accent-primary)] border border-[var(--border-accent)]">
                  <Camera className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenesSection;
