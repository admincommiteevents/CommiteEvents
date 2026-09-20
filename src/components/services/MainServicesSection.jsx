import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import Badge from '../common/Badge';
import { SecondaryButton } from '../common/Button';
import { Building2, GraduationCap, Trophy, Cpu, Zap, Mic, Music, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const MainServicesSection = () => {
  const mainServices = [
    {
      slug: 'corporate-events',
      title: 'Corporate Event Management',
      icon: Building2,
      desc: 'C-suite conferences, product launches, annual meets, galas, and seminars executed with corporate discipline.',
      features: ['Annual Meets & Galas', 'Product Launches', 'Award Ceremonies', 'Seminars & Conferences', 'Business Meetings', 'Digital Badging']
    },
    {
      slug: 'college-fest',
      title: 'College Event Management',
      icon: GraduationCap,
      desc: 'Multi-day university fests, star nights, freshers, hackathons, and literary fests with 100% stampede-proof security.',
      features: ['Freshers & Farewell Nights', 'Technical & Literary Fests', 'Hackathons', 'Sports Meets', 'Celebrity Artist Booking', 'Volunteer Ground Control']
    },
    {
      slug: 'sports-events',
      title: 'Sports Event Management',
      icon: Trophy,
      desc: 'Marathons, inter-university leagues, referee coordination, ground infrastructure, and registration desks.',
      features: ['Tournament Planning', 'Ground & Barrier Setup', 'Referee Coordination', 'Scoreboard Systems', 'Medals & Certificates', 'Participant Registration']
    },
    {
      slug: 'esports-events',
      title: 'E-Sports Tournaments',
      icon: Cpu,
      desc: 'High-octane gaming arenas, live Twitch/YouTube streaming, caster commentary, and digital scoreboards.',
      features: ['LAN Gaming Arenas', '4K Live Webcasting', 'Caster & Commentator Booking', 'Real-Time Scoreboards', 'Prize Pool Management', 'Player Check-in Desks']
    },
    {
      slug: 'technical-events',
      title: 'Technical Events & Hackathons',
      icon: Zap,
      desc: '24-hour hackathons, coding contests, innovation expos, workshops, and tech keynotes.',
      features: ['Hackathon Arena Setup', 'Coding Contest Infrastructure', 'Hands-on Workshops', 'Innovation Expos', 'Tech Keynotes', 'Judging Panels']
    },
    {
      slug: 'comedy-shows',
      title: 'Comedy Shows & Artist Tours',
      icon: Mic,
      desc: 'Celebrity stand-up comedy shows, venue ticketing, security bouncers, and acoustic stage setups.',
      features: ['Comedian Artist Booking', 'Digital Ticket Validation', 'Security Bouncer Squads', 'Acoustic Sound Tuning', 'Stage Lighting', 'City PR & Promotion']
    },
    {
      slug: 'live-shows-and-concerts',
      title: 'Live Concerts & Star Nights',
      icon: Music,
      desc: 'Stadium concerts, line-array audio towers, DMX light shows, high-pitch LED screens, and crowd barricading.',
      features: ['Singer & DJ Booking', 'Aluminium Stage Trussing', 'DMX Beam Light Show', 'High-Pitch P2.5 LED Walls', 'JBL Line Array Sound', 'DFMD Entry Gates']
    },
    {
      slug: 'wedding-planning',
      title: 'End-to-End Luxury Wedding Planning',
      icon: HeartHandshake,
      desc: 'Managed by Wedding & Gifting Agency. Destination weddings, royal mandap decor, return gift hampers, and guest logistics.',
      features: ['Venue Curation', 'Thematic Mandap Decor', 'Cinematic Photography', 'Invitation Hampers', 'Guest Hospitality Desks', 'Sangeet Entertainment']
    }
  ];

  return (
    <Section background="primary" borderTop={true} paddingSize="none" className="pt-8 lg:pt-12 pb-24 lg:pb-32">
      <Container>
        <SectionHeader
          overline="Flagship Execution"
          title="Featured Service Verticals"
          subtitle="Discover our primary event management solutions designed for scale, high engagement, and seamless operations."
        />

        <Grid columns={2} gap="xl">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <PremiumCard
                key={service.slug}
                accentBorder
                className="group"
              >
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <Badge variant="ghost" dot={false}>
                      Turnkey Solution
                    </Badge>
                  </div>

                  <div className="min-h-[3.5rem] flex items-start mb-5">
                    <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="body-regular text-[var(--text-secondary)] mb-6 leading-relaxed min-h-[4.5rem]">
                    {service.desc}
                  </p>

                  <div className="space-y-3 mb-6 pt-5 border-t border-[var(--border-subtle)]">
                    <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">
                      Included Operations & Deliverables:
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4 mt-auto">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn Detailed Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <SecondaryButton href="/contact" size="small">
                    Get Quote
                  </SecondaryButton>
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default MainServicesSection;
