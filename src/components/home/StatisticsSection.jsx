import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';

export const StatisticsSection = () => {
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

  const stats = [
    { value: 500, label: 'Successful Events', suffix: '+' },
    { value: 300, label: 'Trained Volunteers', suffix: '+' },
    { value: 100, label: 'Trusted Clients', suffix: '+' },
    { value: 50000, label: 'Audience Reached', suffix: '+' },
    { value: 10, label: 'Service Categories', suffix: '+' },
    { value: 5, label: 'Years of Experience', suffix: '+' }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none opacity-40" />

      <div className="container-custom relative z-10">
        <SectionHeader
          overline="Impact Metrics"
          title="Proven Track Record"
          subtitle="Our operational scale and commitment to excellence across Lucknow and Uttar Pradesh in numbers."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 pt-4">
          {stats.map((st, idx) => (
            <div
              key={st.label}
              className={`
                flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]
                backdrop-blur-md transition-all duration-300 hover:border-[var(--accent-primary)] transform hover:-translate-y-1.5 hover:shadow-xl min-w-0 overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="font-heading text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-[var(--text-primary)] mb-1 font-mono tracking-tight whitespace-nowrap">
                {isVisible ? <CountUp target={st.value} /> : '0'}
                <span className="text-[var(--accent-primary)]">{st.suffix}</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] text-center leading-tight">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Helper Component
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

export default StatisticsSection;
