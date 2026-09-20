import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import { ShieldCheck, Users, Gift, CheckCircle2 } from 'lucide-react';

export const BusinessUnitsComparisonSection = () => {
  const comparisonData = [
    {
      unit: 'Parikshit Events',
      icon: ShieldCheck,
      specialization: 'Ground Operations & Volunteer Control',
      primaryServices: ['Volunteer Management', 'Crowd Security', 'DFMD Gate Control', 'Backstage Ops'],
      idealClients: ['College Fests', 'State Summits', 'Stadium Concerts', 'Government Rallies'],
      industries: ['Higher Education', 'Government', 'Public Sector', 'Sports Festivals']
    },
    {
      unit: 'Crewlytics',
      icon: Users,
      specialization: 'Temporary Staffing & Talent Acquisition',
      primaryServices: ['Campus Hiring', 'Bilingual Anchors', 'Brand Promoters', 'Host/Hostesses'],
      idealClients: ['Corporate Brands', 'Marketing Agencies', 'Retail Chains', 'Tech Incubators'],
      industries: ['FMCG & Retail', 'Telecom & Tech', 'Corporate Services', 'Higher Education']
    },
    {
      unit: 'Wedding & Gifting Agency',
      icon: Gift,
      specialization: 'Luxury Weddings & Curated Hampers',
      primaryServices: ['Mandap & Decor', 'Couple Entries', 'Artisan Hampers', '4K Cinematography'],
      idealClients: ['HNW Families', 'Destination Resorts', 'NRI Clients', 'Luxury Hosts'],
      industries: ['Hospitality & Resorts', 'Luxury Retail', 'Fine Dining', 'Jewelry']
    }
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Matrix Comparison"
          title="Business Units Side-by-Side"
          subtitle="Compare specialized capabilities to determine which division best fits your upcoming requirement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisonData.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.unit}
                hoverEffect
                accentBorder
                className=" flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-accent)] text-[var(--accent-primary)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
                        {item.unit}
                      </h3>
                      <p className="text-[11px] font-mono text-[var(--accent-primary)]">
                        {item.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider block mb-2 font-bold">
                        Primary Services:
                      </span>
                      <ul className="space-y-1.5">
                        {item.primaryServices.map((serv) => (
                          <li key={serv} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                            <span>{serv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider block mb-2 font-bold">
                        Ideal Clients:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.idealClients.map((client) => (
                          <span key={client} className="px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-subtle)]">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider block mb-2 font-bold">
                        Primary Vertical:
                      </span>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {item.industries.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Button href="/contact" variant="primary" size="small" className="w-full">
                    Enquire for {item.unit}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnitsComparisonSection;
