import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const ServicesFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How much does an event management package cost?',
      a: 'Event costs vary depending on audience scale, venue setup, audio-visual technical riders, artist booking fees, and staffing counts. We provide transparent, itemized proposals after a free discovery call.'
    },
    {
      q: 'How early should I book Commite Events for our function?',
      a: 'For college festivals, star night concerts, and corporate summits, we recommend booking 3 to 6 weeks in advance to lock down artist riders, permits, and venue fabrications.'
    },
    {
      q: 'Can Commite Events organize multi-day college festivals?',
      a: 'Yes. We specialize in end-to-end college fest management, including technical hackathons, cultural star nights, stage setup, volunteer ground control, and celebrity booking.'
    },
    {
      q: 'Do you provide trained event volunteers and ground crew?',
      a: 'Yes! Through our specialized division Parikshit Events, we deploy over 300+ trained student and professional volunteers for crowd control, registration desks, and VIP security escorting.'
    },
    {
      q: 'Do you provide turnkey audio-visual, lighting, and stage setups?',
      a: 'Yes. We own and operate heavy-duty aluminium trussing, JBL concert line array sound towers, P2.5 high-pitch LED screens, and DMX beam lights.'
    },
    {
      q: 'Can you manage celebrity artist bookings and riders?',
      a: 'Absoluty. We have direct contracting ties with Bollywood singers, stand-up comedians, DJs, and keynotes, handling technical and hospitality riders seamlessly.'
    },
    {
      q: 'Do you organize state government and public sector events?',
      a: 'Yes. We have extensive experience executing government summits, state inaugurations, tourism expos, and official cultural programs across Uttar Pradesh.'
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

export default ServicesFAQSection;
