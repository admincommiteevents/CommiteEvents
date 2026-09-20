import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { portfolioProjects } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Award, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const CaseStudiesPage = () => {
  return (
    <PageContainer
      title="In-Depth Event Case Studies | Commite Events Lucknow"
      description="Read comprehensive case study breakdowns of college fests, corporate summits, city marathons, and luxury weddings executed by Commite Events."
    >
      {/* 1. Hero */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 grid-background select-none border-b border-[var(--border-subtle)]">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
                <span className="text-overline text-xs font-mono">Proven Methodology</span>
              </div>

              <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)]">
                In-Depth <span className="text-gradient">Case Studies</span>
              </h1>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                Step-by-step documentation of challenges, technical planning, ground risk mitigation, and successful client outcomes.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <ChromeObject3D variant="sphere" size={180} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Aggregate Statistics */}
      <section className="py-12 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card hoverEffect className=" text-center space-y-1">
              <span className="font-heading text-3xl font-bold text-[var(--accent-primary)]">500+</span>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase">Events Managed</p>
            </Card>

            <Card hoverEffect className=" text-center space-y-1">
              <span className="font-heading text-3xl font-bold text-[var(--accent-primary)]">50,000+</span>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase">Max Fest Crowd</p>
            </Card>

            <Card hoverEffect className=" text-center space-y-1">
              <span className="font-heading text-3xl font-bold text-[var(--accent-primary)]">99.9%</span>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase">Safety Track Record</p>
            </Card>

            <Card hoverEffect className=" text-center space-y-1">
              <span className="font-heading text-3xl font-bold text-[var(--accent-primary)]">100%</span>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase">On-Time Execution</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Featured Case Studies Grid */}
      <section className="section-padding grid-background border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          <SectionHeader
            overline="Client Success Stories"
            title="Featured Case Studies"
            subtitle="Click into any study for detailed operational blueprints and metrics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((item) => (
              <Card
                key={item.id}
                hoverEffect
                accentBorder
                className=" flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[var(--accent-primary)] !text-white">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">{item.year}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>

                  <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>

                  <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] space-y-1 text-xs">
                    <div className="font-heading font-bold uppercase text-[var(--accent-primary)]">Core Result:</div>
                    <p className="text-[var(--text-muted)]">{item.results.attendees} audience managed with zero safety incidents.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    to={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase text-[var(--accent-primary)] hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Button href="/contact" variant="secondary" size="small">
                    Enquire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lessons Learned & Execution Principles */}
      <section className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          <SectionHeader
            overline="Methodology Insights"
            title="Lessons Learned & Engineering Standards"
            subtitle="Key principles derived from executing 500+ live events across North India."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverEffect className=" space-y-3">
              <ShieldCheck className="w-8 h-8 text-[var(--accent-primary)]" />
              <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
                Redundant Access Control
              </h4>
              <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
                Always pair digital QR scanners with physical barricade check-points to eliminate stampede bottleneck risks during rush hours.
              </p>
            </Card>

            <Card hoverEffect className=" space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[var(--accent-primary)]" />
              <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
                Dedicated Stage Command
              </h4>
              <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
                Maintain an isolated backstage communications protocol with direct radio links to sound engineers, bouncers, and artist handlers.
              </p>
            </Card>

            <Card hoverEffect className=" space-y-3">
              <TrendingUp className="w-8 h-8 text-[var(--accent-primary)]" />
              <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
                Dynamic Contingency Buffer
              </h4>
              <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
                Reserve 15% volunteer standby forces and auxiliary power generators for unexpected weather or crowd surges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Final Conversion CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default CaseStudiesPage;
