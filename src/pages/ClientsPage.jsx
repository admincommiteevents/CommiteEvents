import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';

export const ClientsPage = () => {
  return (
    <PageContainer
      title="Trusted Clients & Partners | Commite Events"
      description="Universities, corporate brands, government agencies, and NGOs that trust Commite Events for operational excellence."
    >
      <section className="section-padding grid-background">
        <div className="container-custom">
          <SectionHeader
            overline="Institutional Trust"
            title="Clients & Partners"
            subtitle="We have partnered with leading universities, corporates, and brand sponsors across North India."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Universities', 'Corporate MNCs', 'Government Depts', 'Sponsor Brands', 'NGO Partners', 'Luxury Venues', 'Media Partners', 'Tech Hubs'].map((client, idx) => (
              <Card key={idx} hoverEffect className="text-center  flex items-center justify-center">
                <span className="font-heading text-sm font-semibold uppercase text-[var(--text-primary)]">{client}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ClientsPage;
