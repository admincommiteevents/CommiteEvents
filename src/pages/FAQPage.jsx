import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import { faqsData } from '../data/faqsData';

export const FAQPage = () => {
  return (
    <PageContainer
      title="FAQ Center | Commite Events Lucknow"
      description="Find answers to common questions regarding event booking, volunteer hiring, pricing, and business units."
    >
      <section className="section-padding grid-background">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            overline="Help Center"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking Commite Events, hiring crew through Crewlytics, or ground management through Parikshit Events."
          />

          <div className="space-y-6">
            {faqsData.map((faq, idx) => (
              <Card key={idx} hoverEffect>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] mb-2 uppercase tracking-wider">
                  <span>Category: {faq.category}</span>
                </div>
                <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                <p className="body-small text-[var(--text-secondary)]">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default FAQPage;
