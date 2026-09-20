import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I book an event with Commite Events?',
      a: 'You can submit an inquiry via our online Get Quote form, call us directly at +91 90000 00000, or chat with our team on WhatsApp. We schedule an initial requirement discussion within 24 hours.'
    },
    {
      q: 'What services do you provide under Commite Events?',
      a: 'We offer complete turnkey event management including strategic planning, stage fabrication, sound & LED setups, ground control, Parikshit Events volunteer management, Crewlytics staffing, drone shoots, and wedding planning.'
    },
    {
      q: 'Do you organize college and university cultural fests?',
      a: 'Yes, Commite Events is a preferred partner for North India universities. We manage celebrity artist bookings, multi-stage sound setups, inter-college competition logistics, and crowd security.'
    },
    {
      q: 'Do you organize corporate conferences and summits?',
      a: 'Absolutely. We manage C-suite keynotes, multi-track summits, digital badge registration check-ins, VIP protocol hospitality, and live webcasting for MNCs and brand sponsors.'
    },
    {
      q: 'Can I hire student and professional volunteers through Parikshit Events?',
      a: 'Yes! Parikshit Events deploys uniformed, trained volunteer crews for registration desks, crowd barricading, VIP escorts, and venue logistics for small to massive events.'
    },
    {
      q: 'Can I hire event anchors, promoters, and hostesses through Crewlytics?',
      a: 'Yes, Crewlytics provides temporary event staffing including bilingual anchors, brand promoters, registration coordinators, and campus ambassadors with 48-hour deployment options.'
    },
    {
      q: 'How much does an event cost and how is billing structured?',
      a: 'Pricing is customized based on venue scale, attendee count, visual fabrications, and staffing requirements. We provide transparent itemized quotes upfront with structured milestone billing.'
    },
    {
      q: 'Do you provide professional event photography and aftermovies?',
      a: 'Yes, we have cinema-grade lensmen and licensed drone pilots delivering same-day photo highlights and 4K color-graded show aftermovies.'
    },
    {
      q: 'Do you provide custom stage decoration and lighting?',
      a: 'Yes, our technical team builds aluminium trussing stages, octanorm exhibition stalls, and DMX-programmed intelligent light shows.'
    },
    {
      q: 'Do you manage complete luxury weddings and return gifting?',
      a: 'Managed by Wedding & Gifting Agency, we handle royal mandap decor, destination logistics, sangeet choreography, photography, and curated gift hampers.'
    },
    {
      q: 'Can brands and sponsors collaborate with Commite Events?',
      a: 'Yes, we connect brands directly with high-footfall university fests, corporate expos, and sports marathons through experiential sampling and booth activations.'
    },
    {
      q: 'How can I apply to become an event volunteer or crew member?',
      a: 'Visit our Career page to register for upcoming college fests and corporate events under Parikshit Events and Crewlytics.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          overline="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking events, volunteer management, staffing, and pricing."
        />

        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Card
                key={idx}
                hoverEffect
                accentBorder
                className="transition-all duration-300  cursor-pointer"
                onClick={() => toggleAccordion(idx)}
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

export default FAQSection;
