import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import { Sparkles } from 'lucide-react';

export const CultureGallerySection = () => {
  const cultureHighlights = [
    {
      title: 'Ground Control Briefing',
      category: 'Parikshit Events',
      desc: 'Pre-event security and volunteer deployment meeting in Lucknow.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'C-Suite Tech Summit Setup',
      category: 'Corporate Events',
      desc: 'Testing P2.5 LED background visuals & line array acoustics.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Royal Mandap Floral Design',
      category: 'Wedding Agency',
      desc: 'Crafting bespoke mandap architecture for luxury estate weddings.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Star Night Concert Control',
      category: 'Live Shows',
      desc: 'Real-time DMX light programming and barricade safety monitoring.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <Section background="secondary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Behind The Scenes"
          title="Life At Commite Events"
          subtitle="Explore the energy, collaboration, and relentless dedication of our teams on the ground."
        />

        <Grid columns={4} gap="normal">
          {cultureHighlights.map((item) => (
            <div
              key={item.title}
              className="group relative h-96 rounded-2xl overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all duration-500 flex flex-col justify-between p-6 lg:p-7 shadow-lg"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:from-black/95 transition-colors duration-300" />

              {/* Top Header Badge */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs font-mono font-medium text-white tracking-wider uppercase backdrop-blur-md">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-20 space-y-2 pt-4">
                <h3 className="font-heading text-lg font-bold uppercase !text-white tracking-wide leading-snug group-hover:text-[var(--accent-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default CultureGallerySection;
