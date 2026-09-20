import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import { Star } from 'lucide-react';

export const TestimonialsPage = () => {
  return (
    <PageContainer
      title="Client Reviews & Testimonials | Commite Events"
      description="Read client feedback and reviews from corporate leaders, university directors, and wedding hosts."
    >
      <section className="section-padding grid-background">
        <div className="container-custom">
          <SectionHeader
            overline="Client Endorsements"
            title="Testimonials & Reviews"
            subtitle="Read what corporate heads, college committees, and wedding clients say about our ground management."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Commite Events handled our 10,000 attendee college fest with zero glitches. Parikshit Events' volunteer crowd management was outstanding.", author: "Dean of Student Affairs", org: "Top University Lucknow" },
              { text: "Crewlytics provided 50+ trained brand promoters for our product launch in 24 hours. Exceptionally professional.", author: "Regional Marketing Manager", org: "National FMCG Brand" },
              { text: "Our wedding decor and coordination by Gracee Bisht's team exceeded expectations. Royal mandap design!", author: "Wedding Client", org: "Gomti Nagar Lucknow" }
            ].map((t, idx) => (
              <Card key={idx} hoverEffect className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="body-small text-[var(--text-secondary)] italic mb-6">"{t.text}"</p>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <div className="font-heading text-sm font-bold text-[var(--text-primary)]">{t.author}</div>
                  <div className="text-xs text-[var(--accent-primary)]">{t.org}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default TestimonialsPage;
