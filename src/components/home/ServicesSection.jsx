import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import Badge from '../common/Badge';
import { PrimaryButton } from '../common/Button';
import { servicesData } from '../../data/servicesData';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Users, Shield, Camera, Radio, Music, Award, Zap, Cpu } from 'lucide-react';

export const ServicesSection = () => {
  const featuredServices = servicesData.slice(0, 6);

  const getServiceIcon = (slug) => {
    switch (slug) {
      case 'event-planning': return Layers;
      case 'volunteer-management': return Users;
      case 'photography-and-videography': return Camera;
      case 'led-wall-and-visuals': return Radio;
      case 'sound-system-and-acoustics': return Music;
      case 'celebrity-and-artist-management': return Award;
      case 'wedding-planning': return Zap;
      case 'hiring-solutions': return Cpu;
      default: return Shield;
    }
  };

  return (
    <Section background="secondary" borderTop={true} paddingSize="none" className="pt-8 lg:pt-12 pb-24 lg:pb-32">
      <Container>
        <SectionHeader
          overline="End-To-End Execution"
          title="Our Services"
          subtitle="Complete event solutions under one roof — from conceptual design and stage fabrication to volunteer ground control and staffing."
          className="mb-14 lg:mb-16"
        />

        {/* Responsive Grid with equal card stretch */}
        <Grid columns={3} gap="xl" className="mb-16">
          {featuredServices.map((service) => {
            const IconComponent = getServiceIcon(service.slug);
            return (
              <PremiumCard
                key={service.slug}
                accentBorder
                className="group"
              >
                <div className="flex flex-col flex-1">
                  {/* Top Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-105 group-hover:border-[var(--accent-primary)]/50 transition-all duration-300 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <Badge variant="primary">{service.category}</Badge>
                  </div>

                  {/* Title Container */}
                  <div className="min-h-[3.5rem] flex items-start mb-5">
                    <h3 className="font-heading text-base md:text-lg font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="body-small text-[var(--text-secondary)] leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {service.summary}
                  </p>
                </div>

                {/* CTA Pinned to Bottom */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] pt-5 border-t border-[var(--border-subtle)] group-hover:translate-x-1 transition-transform duration-300 mt-auto"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent-primary)] transition-transform group-hover:translate-x-1" />
                </Link>
              </PremiumCard>
            );
          })}
        </Grid>

        {/* View All Services Action */}
        <div className="text-center mt-12 md:mt-16">
          <PrimaryButton href="/services" size="large" icon={ArrowRight}>
            View All Services
          </PrimaryButton>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
