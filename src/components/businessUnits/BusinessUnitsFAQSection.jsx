import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const BusinessUnitsFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Parikshit Events?',
      a: 'Parikshit Events is the specialized ground management, volunteer force, and security coordination division of Commite Events, handling registration desks, crowd control, and stage safety.'
    },
    {
      q: 'How can I hire event volunteers for our college fest or summit?',
      a: 'You can request volunteer deployment through our online contact form or hotline. We deploy trained, uniformed teams of 10 to 150+ student and professional volunteers.'
    },
    {
      q: 'How does Crewlytics work for temporary staffing?',
      a: 'Crewlytics matches your event or brand requirements with vetted temporary staff, anchors, brand promoters, and hostesses within 24 hours with full contract payroll.'
    },
    {
      q: 'Can I hire temporary event staff for single-day corporate expos?',
      a: 'Yes! Crewlytics provides flexible staffing for single-day trade expos, product launches, as well as month-long promotional roadshows.'
    },
    {
      q: 'Does the Wedding & Gifting Agency organize destination weddings?',
      a: 'Absoluty. Led by Gracee Bisht, the Wedding & Gifting Agency handles luxury destination weddings across Rajasthan heritage resorts, Goa, Uttarakhand, and UP palaces.'
    }
  ];

  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
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

export default BusinessUnitsFAQSection;
