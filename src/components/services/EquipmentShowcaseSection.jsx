import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Tv, Volume2, Sun, Layers, Video, Camera, Zap, ShieldAlert, BadgeCheck } from 'lucide-react';

export const EquipmentShowcaseSection = () => {
  const equipment = [
    { title: 'High-Pitch LED Walls', desc: 'Outdoor & indoor P2.5 LED screens with multi-cam live mixers.', icon: Tv },
    { title: 'Line Array Sound Towers', desc: 'JBL & L-Acoustics concert sound systems with digital consoles.', icon: Volume2 },
    { title: 'DMX Concert Lighting', desc: 'Beam moving heads, wash lights, hazers, and laser FX units.', icon: Sun },
    { title: 'Aluminium Stage Trussing', desc: 'Weather-resistant heavy duty staging, ramps, and backdrops.', icon: Layers },
    { title: '4K Aerial Drones', desc: 'Licensed drone setups for crowd filming and live screen feeds.', icon: Video },
    { title: 'Cinema Gear Cameras', desc: 'Full-frame Sony FX6/A7SIII rigs for 4K video aftermovies.', icon: Camera },
    { title: 'Silent Power Generators', desc: 'Dual-backup silent diesel generators for continuous power.', icon: Zap },
    { title: 'Security Scanners & DFMD', desc: 'Door frame metal detectors, hand scanners, and CCTV towers.', icon: ShieldAlert },
    { title: 'Digital Badge Printers', desc: 'Thermal badge printers and high-speed QR ticket scanners.', icon: BadgeCheck }
  ];

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Production Inventory"
          title="Technology & Event Equipment"
          subtitle="Enterprise-grade hardware owned and operated by our technical production department."
        />

        <Grid columns={3} gap="normal">
          {equipment.map((eq) => {
            const Icon = eq.icon;
            return (
              <PremiumCard
                key={eq.title}
                accentBorder
                className="group transition-all duration-300 transform hover:-translate-y-1 "
                paddingSize="none"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {eq.title}
                </h3>
                <p className="body-small text-[var(--text-secondary)]">
                  {eq.desc}
                </p>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default EquipmentShowcaseSection;
