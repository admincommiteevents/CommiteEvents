import React, { useState, useEffect } from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import Badge from '../common/Badge';
import Button, { PrimaryButton, SecondaryButton } from '../common/Button';
import Chrome3DCanvas from '../common/Chrome3DCanvas';
import ShowreelModal from '../common/ShowreelModal';
import { heroAssets } from '../../assets/images';
import { ArrowRight, Play, Phone, MessageSquare, ShieldCheck, Users, Calendar, Award } from 'lucide-react';

export const HeroSection = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const rotateWords = [
    'College Events',
    'Corporate Events',
    'Sports Events',
    'Wedding Events',
    'Technical Events',
    'Comedy Shows',
    'Live Concerts',
    'E-Sports Events',
    'Brand Activations'
  ];

  useEffect(() => {
    const targetWord = rotateWords[typingIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetWord.substring(0, currentText.length + 1));
        if (currentText === targetWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(targetWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % rotateWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex]);

  const stats = [
    { value: '500+', label: 'Events Executed', icon: Calendar },
    { value: '300+', label: 'Trained Volunteers', icon: Users },
    { value: '100+', label: 'Corporate Clients', icon: ShieldCheck },
    { value: '50K+', label: 'Attendees Managed', icon: Award }
  ];

  return (
    <>
      <Section paddingSize="none" className="w-full min-h-[calc(100vh-var(--navbar-height,80px))] flex flex-col justify-center pt-2 pb-10 lg:pt-2 lg:pb-12">
        {/* Ambient Hero Glow Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 scale-105"
            style={{ backgroundImage: `url(${heroAssets.main})` }}
          />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[160px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-[var(--bg-primary)]" />
        </div>

        {/* Global 1280px Container Centered Vertically */}
        <Container className="w-full mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols on lg desktop) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge Tagline */}
              <Badge className="mb-6 shadow-sm">
                Enterprise Event Management • Lucknow
              </Badge>

              {/* H1 Main Heading */}
              <h1 className="font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[56px] leading-[1.12] mb-5">
                Turning Ideas Into{' '}
                <span className="text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)] pb-0.5">
                  Unforgettable
                </span>{' '}
                Events
              </h1>

              {/* Subheading typing rotator */}
              <div className="h-8 mb-5 flex items-center text-base sm:text-lg md:text-xl font-heading font-medium text-[var(--text-secondary)]">
                <span>Specializing in&nbsp;</span>
                <span className="text-[var(--accent-primary)] font-semibold border-r-2 border-[var(--accent-primary)] pr-1 animate-pulse">
                  {currentText}
                </span>
              </div>

              {/* Body Text */}
              <p className="body-regular text-[var(--text-secondary)] max-w-2xl mb-8 leading-relaxed text-sm sm:text-base">
                Commite Events is a premier event management company in Lucknow specializing in planning, managing, and executing college events, corporate summits, luxury weddings, technical fests, sports tournaments, comedy shows, concerts, and large-scale experiences.
              </p>

              {/* Action Buttons Trio */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full">
                <PrimaryButton href="/contact" size="medium" icon={ArrowRight}>
                  Book Your Event
                </PrimaryButton>

                <SecondaryButton href="/services" size="medium">
                  Explore Services
                </SecondaryButton>

                <Button onClick={() => setShowreelOpen(true)} variant="ghost" size="medium" icon={Play} iconPosition="left">
                  Testimonials
                </Button>
              </div>

              {/* 4-Col Grid Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[var(--border-subtle)] w-full">
                {stats.map((st) => (
                  <div key={st.label} className="space-y-1">
                    <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                      {st.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3D Chrome Canvas */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center relative min-h-[360px]">
              <Chrome3DCanvas className="w-full h-[360px]" />
              <div className="absolute bottom-0 text-[10px] font-mono text-[var(--text-muted)] tracking-widest uppercase bg-[var(--bg-secondary)]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[var(--border-subtle)] shadow-sm">
                Interactive Chrome Geometry • Commite Events
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Showreel Modal Component */}
      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </>
  );
};

export default HeroSection;
