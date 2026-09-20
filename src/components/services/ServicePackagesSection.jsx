import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { PrimaryButton, SecondaryButton } from '../common/Button';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const ServicePackagesSection = () => {
  const packages = [
    {
      name: 'Basic Package',
      tagline: 'Ideal for Single-Day Seminars & Intimate Meetups',
      recommended: false,
      features: [
        'Turnkey Stage & Backdrop Setup',
        'Basic Sound System & Cordless Mics',
        'Registration Desk Setup',
        '5 Uniformed Parikshit Volunteers',
        'Event Photography Coverage',
        'On-Ground Event Coordinator'
      ]
    },
    {
      name: 'Professional Package',
      tagline: 'Ideal for Corporate Summits & College Fests (1,000+ Guests)',
      recommended: true,
      features: [
        'P2.5 LED Wall Display (16x10 ft)',
        'Concert JBL Sound Line Array',
        'DMX Moving Head Beam Lights',
        '15 Uniformed Volunteers + 2 Bouncers',
        'QR Scanner Check-in Desks',
        '4K Aftermovie & Drone Coverage',
        'VIP Escort & Hospitality Desk'
      ]
    },
    {
      name: 'Premium Package',
      tagline: 'Ideal for Star Nights, Concerts & Large Fests (5,000+ Guests)',
      recommended: false,
      features: [
        'Heavy-Duty Aluminium Truss Stage',
        '30x15 ft P2.5 Outdoor LED Wall',
        'Direct Artist Booking & Rider Ops',
        '30 Parikshit Volunteers + 10 Bouncers',
        'DFMD Entry Gate Security',
        '4K Multi-Cam Live Video Feed',
        'Full Catering & Food Court Management'
      ]
    },
    {
      name: 'Enterprise Custom Package',
      tagline: 'Bespoke Solutions for Multi-Day Festivals & Stadium Expos',
      recommended: false,
      features: [
        'Custom 3D Fabricated Stage Sets',
        'Stadium Line Array Sound Engineering',
        '50+ Parikshit Volunteers + 20 Bouncers',
        'Crewlytics Dedicated Hiring Staff',
        'Complete PR & City Campaign',
        'RFID Badge & Access Control System',
        'Dedicated Senior Director & Crisis Team'
      ]
    }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Flexible Execution Tiers"
          title="Packages Overview"
          subtitle="Tailored execution tiers designed to scale seamlessly with your event size, audience count, and technical complexity."
        />

        <Grid columns={4} gap="normal">
          {packages.map((pkg) => (
            <PremiumCard
              key={pkg.name}
              accentBorder={pkg.recommended}
              className={`flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-2 relative ${
                pkg.recommended ? 'border-[var(--accent-primary)] shadow-2xl' : ''
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--accent-primary)] !text-white text-[10px] font-heading font-bold uppercase tracking-widest flex items-center gap-1 shadow-md z-10">
                  <Star className="w-3 h-3 fill-white" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {pkg.name}
                </h3>
                <p className="body-small text-[var(--text-secondary)] text-xs mb-6 min-h-[36px]">
                  {pkg.tagline}
                </p>

                <div className="space-y-3 mb-8 pt-4 border-t border-[var(--border-subtle)]">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] mt-auto">
                {pkg.recommended ? (
                  <PrimaryButton
                    href="/contact"
                    className="w-full justify-center text-xs sm:text-sm h-11 px-3.5 rounded-lg font-semibold"
                    style={{ borderRadius: '8px', paddingLeft: '14px', paddingRight: '14px' }}
                    icon={ArrowRight}
                  >
                    Request Custom Quote
                  </PrimaryButton>
                ) : (
                  <SecondaryButton
                    href="/contact"
                    className="w-full justify-center text-xs sm:text-sm h-11 px-3.5 rounded-lg font-semibold"
                    style={{ borderRadius: '8px', paddingLeft: '14px', paddingRight: '14px' }}
                    icon={ArrowRight}
                  >
                    Request Custom Quote
                  </SecondaryButton>
                )}
              </div>
            </PremiumCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ServicePackagesSection;
