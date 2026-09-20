import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Building2, GraduationCap, HeartHandshake, Trophy, Music, Sparkles, Users, Shield } from 'lucide-react';

export const ServiceCategoriesSection = () => {
  const categories = [
    { title: 'Corporate Events', desc: 'Conferences, summits, product launches, galas, and annual meets.', icon: Building2 },
    { title: 'College Festivals', desc: 'Youth fests, technical fests, hackathons, and star night concerts.', icon: GraduationCap },
    { title: 'Luxury Weddings', desc: 'Destination planning, thematic mandap decor, and return gifts.', icon: HeartHandshake },
    { title: 'Sports & E-Sports', desc: 'Marathons, ground setups, referees, and gaming tournaments.', icon: Trophy },
    { title: 'Entertainment & Concerts', desc: 'Live concerts, comedy tours, stage setups, sound, and LED walls.', icon: Music },
    { title: 'Marketing & Activations', desc: 'Brand promotions, mall sampling, experiential booths, and PR.', icon: Sparkles },
    { title: 'Staffing Solutions', desc: 'Crewlytics temporary staffing, anchors, promoters, and hostesses.', icon: Users },
    { title: 'Volunteer Management', desc: 'Parikshit Events student & professional volunteers for ground control.', icon: Shield }
  ];

  return (
    <Section background="secondary" borderTop={true} paddingSize="none" className="pt-8 lg:pt-12 pb-24 lg:pb-32">
      <Container>
        <SectionHeader
          overline="Specialized Verticals"
          title="Service Categories"
          subtitle="Explore our comprehensive range of event solutions tailored for businesses, universities, brands, and private hosts."
        />

        <Grid columns={4} gap="xl">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <PremiumCard
                key={cat.title}
                accentBorder
                className="group"
              >
                <div className="flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="min-h-[3.5rem] flex items-start mb-5">
                    <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug line-clamp-2">
                      {cat.title}
                    </h3>
                  </div>
                  
                  <p className="body-small text-[var(--text-secondary)] leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-[var(--border-subtle)] mt-auto text-[10px] font-mono text-[var(--accent-primary)] uppercase tracking-widest group-hover:text-[var(--text-primary)] transition-colors">
                  Commite Events Vertical
                </div>
              </PremiumCard>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default ServiceCategoriesSection;
