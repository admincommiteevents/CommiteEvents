import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import Badge from '../common/Badge';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Sparkles } from 'lucide-react';
import { portfolioAssets } from '../../assets/images';

export const PreviousEventsSection = () => {
  const caseStudies = [
    {
      title: 'AKTU State University Cultural Fest 2025',
      category: 'College Fest',
      location: 'Lucknow Main Ground',
      attendees: '15,000+ Students',
      date: 'March 2025',
      description: 'Complete ground operations, star night artist booking, 50+ Parikshit Events volunteers, line array sound, and 100% stampede-proof security control.',
      link: '/events/college-fest',
      image: portfolioAssets.aktu || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'North India Enterprise Tech Summit',
      category: 'Corporate Summit',
      location: 'Indira Gandhi Pratishthan',
      attendees: '800+ C-Suite Executives',
      date: 'November 2025',
      description: 'Multi-track keynote setup, digital QR check-in desks, P2.5 LED background screens, VIP hospitality, and live webcasting.',
      link: '/events/corporate-events',
      image: portfolioAssets.upSummit || 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Estate Wedding & Royal Mandap',
      category: 'Wedding',
      location: 'Gomti Nagar Estate',
      attendees: '1,200 Guests',
      date: 'December 2025',
      description: 'Execution by Wedding & Gifting Agency. Royal mandap floral fabrication, hydraulic couple entry, and 1,200 curated return gift hampers.',
      link: '/events/wedding-events',
      image: portfolioAssets.wedding || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <Section background="primary" borderTop={true} paddingSize="none" className="pt-8 lg:pt-12 pb-24 lg:pb-32">
      <Container>
        <SectionHeader
          overline="Flagship Track Record"
          title="Featured Case Studies"
          subtitle="A glimpse of our successful event execution journey across college fests, corporate summits, and luxury weddings."
        />

        <div className="space-y-8">
          {caseStudies.map((item) => (
            <PremiumCard
              key={item.title}
              accentBorder
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Accent Box with Image */}
                <div className="lg:col-span-4 h-full p-[3px]">
                  <div className="w-full h-full min-h-[15rem] rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex flex-col justify-between p-6 relative overflow-hidden group-hover:border-[var(--accent-primary)] transition-all">
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark Overlay for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

                    {/* Top Badge & Icon */}
                    <div className="relative z-10 flex items-center justify-between mb-4 px-1 pt-1">
                      <Badge variant="ghost" dot={false} className="!bg-black/75 !text-white backdrop-blur-md border border-white/25 px-3 py-1 text-[10px]">
                        {item.category}
                      </Badge>
                      <Sparkles className="w-4 h-4 text-white/80" />
                    </div>

                    {/* Bottom Info over Image */}
                    <div className="relative z-10 px-1 pb-1">
                      <div className="text-[11px] font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-1.5 font-bold">
                        {item.date}
                      </div>
                      <div className="font-heading text-sm sm:text-base font-bold uppercase text-white leading-snug line-clamp-2 drop-shadow-md">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span>{item.location}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span>{item.attendees}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-5">
                    {item.title}
                  </h3>

                  <p className="body-regular text-[var(--text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="pt-5 border-t border-[var(--border-subtle)] mt-auto">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      <span>View Event Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PreviousEventsSection;
