import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { LinkedinIcon } from '../components/common/SocialIcons';
import { getBusinessUnitBySlug, businessUnits } from '../data/businessUnitsData';
import {
  CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Phone,
  MessageSquare, HelpCircle, ChevronDown, Users, User, Maximize2, X, Award, Compass
} from 'lucide-react';
import Section from '../components/layout/Section';

export const BusinessUnitDetailPage = () => {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const unit = getBusinessUnitBySlug(slug);

  // Recommendations: Other 2 business units
  const relatedUnits = businessUnits.filter((u) => u.id !== unit.id);

  // Workflow timeline steps for PROMPT 7
  const workflowSteps = [
    { step: '01', title: 'Requirement Assessment', desc: 'In-depth consultation to map headcount, venue logistics, role requirements, and technical riders.' },
    { step: '02', title: 'Strategy & Resource Planning', desc: 'Developing custom operational plans, volunteer allocations, security corridors, or hamper designs.' },
    { step: '03', title: 'Team & Hardware Allocation', desc: 'Screening, training, and deploying vetted crew, anchors, DFMD gates, or luxury decor materials.' },
    { step: '04', title: 'On-Ground Execution', desc: 'Deploying team managers, registration desks, backstage coordinators, and security bouncers.' },
    { step: '05', title: 'Real-Time Operations Management', desc: 'Supervising stage cues, crowd flow, VIP escorts, or wedding host concierges with zero delay.' },
    { step: '06', title: 'Successful Wrap & Handover', desc: 'Post-event debriefing, attendee analytics report handover, and 100% client sign-off.' }
  ];

  // Schema data for SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: unit.name,
    provider: {
      '@type': 'Organization',
      name: 'Commite Events',
      url: 'https://committeevents.com'
    },
    serviceType: unit.tagline,
    description: unit.description,
    areaServed: 'Lucknow & North India'
  };

  const faqSchema = unit.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: unit.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  } : null;

  const additionalSchemas = [serviceSchema];
  if (faqSchema) additionalSchemas.push(faqSchema);

  return (
    <PageContainer
      title={unit.seo?.metaTitle || `${unit.name} | Commite Events Division`}
      description={unit.seo?.metaDescription || unit.description}
      keywords={unit.seo?.keywords}
      additionalSchemas={additionalSchemas}
    >
      {/* 1. Hero Section */}
      <Section background="primary" borderBottom={true} paddingSize="none" className="min-h-[45vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16">
        <div className="container-custom relative z-10">
          <Link to="/business-units" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Business Units</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping" />
                <span className="text-overline text-xs text-[var(--accent-primary)] font-mono">
                  Specialized Division • Commite Events
                </span>
              </div>

              <h1 className="display-2 font-heading font-bold uppercase text-[var(--text-primary)] leading-tight">
                {unit.name}
              </h1>

              <p className="font-mono text-sm text-[var(--accent-primary)] font-semibold uppercase tracking-wider">
                {unit.tagline}
              </p>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                {unit.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="medium" icon={ArrowRight}>
                  Book Consultation
                </Button>

                <a
                  href="tel:+91 92197 51766"
                  className="rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs font-semibold uppercase text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
                  style={{ padding: '12px 20px' }}
                >
                  <Phone className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Call Operations</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
              <ChromeObject3D variant="sphere" size={190} />
            </div>
          </div>
        </div>
      </Section>

      {/* 2. About Unit Section */}
      <Section background="secondary" borderBottom={true}>
        <div className="container-custom">
          <SectionHeader
            overline="Identity & Purpose"
            title={`About ${unit.name}`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
                {unit.aboutText}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-2">
                <Card hoverEffect className=" space-y-3">
                  <div className="font-heading text-sm font-bold uppercase text-[var(--accent-primary)] border-b border-[var(--border-subtle)] pb-2 inline-block w-full">History & Milestones</div>
                  <p className="body-regular text-[var(--text-secondary)] leading-relaxed">{unit.history}</p>
                </Card>
                <Card hoverEffect className=" space-y-3">
                  <div className="font-heading text-sm font-bold uppercase text-[var(--accent-primary)] border-b border-[var(--border-subtle)] pb-2 inline-block w-full">Strategic Vision</div>
                  <p className="body-regular text-[var(--text-secondary)] leading-relaxed">{unit.vision}</p>
                </Card>
              </div>

              {/* Core Expertise Tags */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider font-bold block mb-3">
                  Specialized Domain Expertise:
                </span>
                <div className="flex flex-wrap gap-3">
                  {unit.expertise?.map((exp) => (
                    <div key={exp} className="inline-block rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] overflow-hidden">
                      <div className="m-[1px] px-4 py-2 rounded-full">
                        <span className="text-xs font-heading font-semibold uppercase text-[var(--text-primary)]">
                          {exp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card hoverEffect accentBorder className="overflow-hidden  h-80">
                <img
                  src={unit.heroImage}
                  alt={unit.name}
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Detailed Services Cards Grid */}
      <Section background="primary" borderBottom={true}>
        <div className="container-custom">
          <SectionHeader
            overline="Core Deliverables"
            title={`${unit.name} Specialized Services`}
            subtitle="Explore our comprehensive list of operational capabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {unit.detailedServices?.map((serv, idx) => (
              <Card key={idx} hoverEffect accentBorder className=" flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-6 h-6 text-[var(--accent-primary)] shrink-0" />
                    <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
                      {serv.title}
                    </h3>
                  </div>

                  <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed mb-4">
                    {serv.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--accent-primary)] font-bold block mb-1">
                      Key Client Benefits:
                    </span>
                    {serv.benefits.map((ben) => (
                      <div key={ben} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Button href="/contact" variant="secondary" size="small" className="w-full">
                    Enquire for {serv.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Industries Served */}
      <Section background="secondary" borderBottom={true}>
        <div className="container-custom">
          <SectionHeader
            overline="Target Sectors"
            title="Industries Served"
            subtitle="Delivering specialized services across diverse sectors."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {unit.industries?.map((ind) => (
              <Card key={ind} hoverEffect className=" text-center">
                <Compass className="w-6 h-6 text-[var(--accent-primary)] mx-auto mb-2" />
                <h4 className="font-heading text-xs font-bold uppercase text-[var(--text-primary)]">
                  {ind}
                </h4>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Working Process Workflow Timeline */}
      <Section background="primary" borderBottom={true}>
        <div className="container-custom">
          <SectionHeader
            overline="Operational Workflow"
            title="Our Execution Timeline"
            subtitle="Our 6-step blueprint ensuring flawless precision and zero delay."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((s) => (
              <Card key={s.step} hoverEffect accentBorder className=" flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-[var(--accent-primary)] block mb-2">
                    {s.step}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2">
                    {s.title}
                  </h3>
                  <p className="body-small text-[var(--text-secondary)] text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Team Section */}
      {unit.team && (
        <Section background="secondary" borderBottom={true}>
          <div className="container-custom">
            <SectionHeader
              overline="Leadership & Crew"
              title={`${unit.name} Team`}
              subtitle="Meet the experienced directors and coordinators leading this division."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {unit.team.map((m) => (
                <Card key={m.name} hoverEffect accentBorder className=" text-center space-y-3 transition-transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent-primary)] mx-auto font-bold font-heading text-xl">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
                      {m.name}
                    </h4>
                    <p className="font-mono text-xs text-[var(--accent-primary)] font-semibold">
                      {m.role}
                    </p>
                  </div>
                  <p className="body-small text-[var(--text-secondary)] text-xs">
                    {m.bio}
                  </p>
                  <div className="flex justify-center gap-3 pt-2 text-[var(--text-muted)]">
                    <a href={m.linkedin || '#'} className="hover:text-[var(--accent-primary)] transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* 7. Gallery Section */}
      {unit.gallery && (
        <Section background="primary" borderBottom={true}>
          <div className="container-custom">
            <SectionHeader
              overline="Visual Portfolio"
              title={`${unit.name} Gallery`}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {unit.gallery.map((g, idx) => (
                <Card
                  key={idx}
                  hoverEffect
                  className="group overflow-hidden relative cursor-pointer h-64 !"
                  onClick={() => setSelectedImg(g.url)}
                >
                  <img
                    src={g.url}
                    alt={g.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Always-on gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[9px] font-mono uppercase bg-[var(--accent-primary)] px-2 py-0.5 rounded !text-white block w-max mb-1.5 shadow-sm">
                      {g.category}
                    </span>
                    <h4 className="font-heading text-sm font-bold uppercase truncate !text-white drop-shadow-md">{g.title}</h4>
                  </div>
                </Card>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
              <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <img
                    src={selectedImg}
                    alt={unit.name}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* 8. FAQs */}
      {unit.faq && (
        <Section background="secondary" borderBottom={true}>
          <div className="container-custom">
            <SectionHeader
              overline="Division Queries"
              title={`${unit.name} FAQs`}
            />
            <div className="w-full mx-auto space-y-4">

            {unit.faq.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Card
                  key={faq.q}
                  hoverEffect
                  accentBorder={isOpen}
                  className="cursor-pointer "
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                      <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)]">
                        {faq.q}
                      </h4>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] transition-transform ${isOpen ? 'rotate-180 text-[var(--accent-primary)]' : ''}`} />
                  </div>

                  {isOpen && (
                    <div className="pt-3 mt-3 border-t border-[var(--border-subtle)] text-xs body-regular text-[var(--text-secondary)]">
                      {faq.a}
                    </div>
                  )}
                </Card>
              );
            })}
            </div>
          </div>
        </Section>
      )}

      {/* 9. Related Units Recommendations */}
      <Section background="primary" borderBottom={true}>
        <div className="container-custom">
          <SectionHeader
            overline="Explore More Divisions"
            title="Other Business Units"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedUnits.map((rel) => (
              <Card key={rel.slug} hoverEffect className=" flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[var(--accent-primary)] uppercase font-bold block mb-1">
                    Division
                  </span>
                  <h4 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-2">
                    {rel.name}
                  </h4>
                  <p className="body-small text-[var(--text-secondary)] text-xs">
                    {rel.description}
                  </p>
                </div>

                <Link
                  to={`/business-units/${rel.slug}`}
                  className="text-xs font-semibold uppercase text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Explore {rel.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. Final Conversion CTA */}
      <Section background="dark" paddingSize="none" className="py-16 text-center">
        <div className="container-custom max-w-3xl">
          <h3 className="font-heading text-2xl font-bold uppercase text-white mb-3">
            Let's Build Your Next Successful Event Together
          </h3>
          <p className="body-regular text-slate-300 mb-8">
            Connect directly with {unit.name} leadership for custom staffing, ground operations, or wedding proposals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91 92197 51766"
              className="rounded-[var(--radius-md)] bg-[#E50914] text-white text-sm font-semibold uppercase hover:bg-red-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              style={{ padding: '16px 32px' }}
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Talk To Expert</span>
            </a>

            <Button href="/contact" variant="primary" size="large" icon={ArrowRight}>
              Book Consultation
            </Button>

            <Button href="https://wa.me/919219751766" variant="secondary">WhatsApp</Button>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
};

export default BusinessUnitDetailPage;
