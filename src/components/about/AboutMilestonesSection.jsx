import React, { useState, useEffect, useRef } from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';

export const AboutMilestonesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { value: 500, label: 'Events Managed', suffix: '+' },
    { value: 300, label: 'Professional Volunteers', suffix: '+' },
    { value: 100, label: 'Corporate Clients', suffix: '+' },
    { value: 50000, label: 'Audience Managed', suffix: '+' },
    { value: 10, label: 'Service Categories', suffix: '+' }
  ];

  return (
    <Section background="dark" borderTop={true} borderBottom={true} id="milestones-section">
      <div ref={sectionRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914] opacity-20 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <SectionHeader
          overline="Numerical Credibility"
          title="Our Achievements"
          subtitle="A track record built on execution precision, client trust, and flawless safety protocols."
          lightText={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
          {milestones.map((m, idx) => (
            <div
              key={m.label}
              className={`
                flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10
                backdrop-blur-md transition-all duration-500 hover:border-[#E50914] hover:bg-white/10 transform hover:-translate-y-1
                ${isVisible ? 'animate-fadeIn' : 'opacity-0'}
              `}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                {isVisible ? <CountUp target={m.value} /> : '0'}
                <span className="text-[#E50914]">{m.suffix}</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const steps = 40;
    const increment = Math.ceil(target / steps);
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

export default AboutMilestonesSection;
