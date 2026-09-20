import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import {
  Shield, Users, Compass, BadgeCheck, Sparkles, Megaphone, Camera, Video, VideoOff,
  Tv, Layers, Sun, Volume2, Star, Mic, ShieldAlert, UserPlus, FileCheck, Ticket,
  Radio, Utensils, Award, Car, Home, Printer, ArrowUpRight
} from 'lucide-react';

export const AdditionalServicesSection = () => {
  const additionalList = [
    { title: 'Volunteer Management', slug: 'volunteer-management', icon: Shield },
    { title: 'Event Crew & Staffing', slug: 'hiring-solutions', icon: Users },
    { title: 'Ground Operations & Logistics', slug: 'ground-management', icon: Compass },
    { title: 'Registration Desk & Access', slug: 'registration-desk', icon: BadgeCheck },
    { title: 'Brand Promotions & Kiosks', slug: 'brand-promotion', icon: Sparkles },
    { title: 'Event Marketing & PR', slug: 'marketing-and-activations', icon: Megaphone },
    { title: '4K Event Photography', slug: 'photography-and-videography', icon: Camera },
    { title: 'Cinematic Video Aftermovies', slug: 'photography-and-videography', icon: Video },
    { title: 'Aerial Drone Cinematography', slug: 'drone-cinematography', icon: Video },
    { title: 'High-Pitch LED Wall Screens', slug: 'led-wall-and-visuals', icon: Tv },
    { title: 'Stage Setup & Fabrications', slug: 'stage-setup-and-fabrication', icon: Layers },
    { title: 'DMX Concert Beam Lighting', slug: 'concert-lighting', icon: Sun },
    { title: 'Line Array Sound Systems', slug: 'sound-system-and-acoustics', icon: Volume2 },
    { title: 'Celebrity Artist Booking', slug: 'celebrity-and-artist-management', icon: Star },
    { title: 'Bilingual Event Anchors', slug: 'hiring-solutions', icon: Mic },
    { title: 'Tactical Bouncers & Security', slug: 'event-security-and-bouncers', icon: ShieldAlert },
    { title: 'Temporary & Campus Hiring', slug: 'temporary-staffing', icon: UserPlus },
    { title: 'Sponsor Deck Management', slug: 'marketing-and-activations', icon: FileCheck },
    { title: 'Digital Ticket Scanning', slug: 'registration-desk', icon: Ticket },
    { title: '4K Live Event Webcasting', slug: 'esports-events', icon: Radio },
    { title: 'Food Court & Stall Ops', slug: 'ground-management', icon: Utensils },
    { title: 'VIP & Delegate Escorts', slug: 'registration-desk', icon: Award },
    { title: 'Parking & Traffic Flow', slug: 'ground-management', icon: Car },
    { title: 'Green Room Concierge', slug: 'event-operations', icon: Home },
    { title: 'Printing & Lanyard Badges', slug: 'registration-desk', icon: Printer }
  ];

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="End-to-End Capabilities"
          title="Additional Specialized Services"
          subtitle="Modular, standalone or integrated execution capabilities to support every aspect of live events."
        />

        <Grid columns={5} gap="small">
          {additionalList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={`/services/${item.slug}`}
                className="group"
              >
                <PremiumCard
                  accentBorder
                  className=" flex flex-col justify-between h-36 group-hover:border-[var(--accent-primary)] transition-all duration-300 transform group-hover:-translate-y-1"
                  paddingSize="none"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                  </div>

                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase block mt-1">
                      View Specs →
                    </span>
                  </div>
                </PremiumCard>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default AdditionalServicesSection;
