import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const EventsFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What types of events does Commite Events organize in Lucknow?',
      a: 'We specialize in college cultural fests, corporate summits, sports tournaments, e-sports LAN arenas, star night concerts, comedy tours, luxury weddings, and government inaugurations.'
    },
    {
      q: 'Can Commite Events handle both small corporate meets and stadium concerts?',
      a: 'Yes! We manage events ranging from 50-guest C-suite roundtables to 50,000+ attendee stadium concerts with tailored technical riders and volunteer counts.'
    },
    {
      q: 'Do you provide on-ground security bouncers and crowd control?',
      a: 'Yes. Through our specialized division Parikshit Events, we deploy over 300+ trained student and professional volunteers alongside tactical bouncers and DFMD security gates.'
    },
    {
      q: 'How far in advance should we book Commite Events?',
      a: 'For university fests and multi-day summits, we recommend 3 to 6 weeks in advance. For corporate seminars or private functions, 2 weeks lead time is sufficient.'
    },
    {
      q: 'Do you provide itemized transparent quotes?',
      a: 'Absoluty. Every client receives a detailed quotation detailing stage fabrication, sound line arrays, LED screens, volunteer count, and staffing with zero hidden surcharges.'
    }
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          overline="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking events, volunteer management, staffing, and pricing."
        />

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Card
                key={idx}
                hoverEffect
                accentBorder
                className="transition-all duration-300 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="relative w-full flex items-center justify-center min-h-[40px] px-8 sm:px-12 text-center">
                  <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 text-center max-w-[85%] mx-auto">
                    <HelpCircle className={`w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 transition-colors ${isOpen ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`} />
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] text-center leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <div className={`absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[var(--accent-primary)]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] body-small text-[var(--text-secondary)] leading-relaxed text-center text-xs sm:text-sm animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsFAQSection;
