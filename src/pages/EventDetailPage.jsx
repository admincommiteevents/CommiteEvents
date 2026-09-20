import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { eventsData } from '../data/eventsData';
import {
  CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Phone,
  MessageSquare, HelpCircle, ChevronDown, Users, ShieldAlert, Cpu, Maximize2, X
} from 'lucide-react';

export const EventDetailPage = () => {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  // Match event by slug or fallback to corporate-events
  const event = eventsData.find((e) => e.slug === slug) || eventsData[0];

  // Recommendations: 3 to 6 related events
  const relatedEvents = eventsData
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  // Schema data
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.shortDescription,
    image: event.heroImage,
    organizer: {
      '@type': 'Organization',
      name: 'Commite Events',
      url: 'https://committeevents.com'
    },
    location: {
      '@type': 'Place',
      name: 'Lucknow & North India',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <PageContainer
      title={event.seoTitle || `${event.title} in Lucknow | Commite Events`}
      description={event.seoDescription || event.shortDescription}
      additionalSchemas={[eventSchema]}
    >
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[45vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 grid-background select-none border-b border-[var(--border-subtle)]">
        <div className="container-custom relative z-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Events</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping" />
                <span className="text-overline text-xs text-[var(--accent-primary)] font-mono">
                  {event.category} Vertical • Lucknow
                </span>
              </div>

              <h1 className="display-2 font-heading font-bold uppercase text-[var(--text-primary)] leading-tight">
                {event.title}
              </h1>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                {event.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="medium" icon={ArrowRight}>
                  Book This Event
                </Button>
                <a
                  href="tel:+91 92197 51766"
                  className="px-5 py-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs font-semibold uppercase text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Call Operations</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
              <ChromeObject3D variant="sphere" size={190} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Event Section */}
      <section className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] rounded-[1.25rem] mx-[3px]" style={{paddingTop:'5rem',paddingBottom:'5rem',marginBottom:'8px'}}>
        <div className="container-custom">
          <SectionHeader
            overline="Overview & Scope"
            title={`About ${event.title}`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
                {event.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                  <div className="font-heading text-lg font-bold text-[var(--text-primary)]">100% Guaranteed</div>
                  <div className="text-xs text-[var(--text-muted)]">On-Time Ground Setup</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                  <div className="font-heading text-lg font-bold text-[var(--text-primary)]">Parikshit Events</div>
                  <div className="text-xs text-[var(--text-muted)]">Volunteer Crowd Security</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card hoverEffect accentBorder className="overflow-hidden  h-80">
                <img
                  src={event.heroImage}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Included & Benefits Grid */}
      <section className="section-padding grid-background border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          <SectionHeader
            overline="Turnkey Deliverables"
            title="Services & Features Included"
            subtitle={`Everything we handle for your ${event.title.toLowerCase()} from start to finish.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Services Included */}
            <Card hoverEffect accentBorder className=" space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
                  Included Operations & Infrastructure
                </h3>
              </div>
              <ul className="space-y-3 pt-2">
                {event.servicesIncluded.map((serv) => (
                  <li key={serv} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{serv}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Client Benefits */}
            <Card hoverEffect accentBorder className=" space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
                  Key Operational Advantages
                </h3>
              </div>
              <ul className="space-y-3 pt-2">
                {event.benefits.map((ben) => (
                  <li key={ben} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Ideal For Target Audience */}
          <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-accent)] text-center">
            <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-4">
              Ideal For Target Organizations & Hosts
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {event.idealFor.map((aud) => (
                <span
                  key={aud}
                  className="px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-xs font-heading font-semibold uppercase text-[var(--text-secondary)]"
                >
                  {aud}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Required Resources, Equipment & Staffing */}
      {event.requiredResources && (
        <section className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] rounded-[1.25rem] mx-[3px]" style={{paddingTop:'5rem',paddingBottom:'5rem',marginBottom:'8px'}}>
          <div className="container-custom">
            <SectionHeader
              overline="Resource Deployment"
              title="Required Staffing & Production Hardware"
              subtitle="Standard operational resources allocated for this event category."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hoverEffect accentBorder className=" text-center">
                <Users className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-3" />
                <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-1">
                  Parikshit Volunteers
                </h4>
                <p className="font-mono text-sm text-[var(--accent-primary)] font-bold mb-2">
                  {event.requiredResources.volunteers}
                </p>
                <p className="body-small text-[var(--text-secondary)] text-xs">
                  Disciplined student crew for registration, entry corridors, and crowd guidance.
                </p>
              </Card>

              <Card hoverEffect accentBorder className=" text-center">
                <ShieldAlert className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-3" />
                <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-1">
                  Security Bouncers
                </h4>
                <p className="font-mono text-sm text-[var(--accent-primary)] font-bold mb-2">
                  {event.requiredResources.bouncers}
                </p>
                <p className="body-small text-[var(--text-secondary)] text-xs">
                  Tactical uniformed bouncers for VIP escorting and stage barricades.
                </p>
              </Card>

              <Card hoverEffect accentBorder className=" text-center">
                <Cpu className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-3" />
                <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-1">
                  Audio-Visual & Hardware
                </h4>
                <p className="font-mono text-sm text-[var(--accent-primary)] font-bold mb-2">
                  {event.requiredResources.equipment}
                </p>
                <p className="body-small text-[var(--text-secondary)] text-xs">
                  Heavy-duty aluminium trussing, line array sound, and high-pitch LED screens.
                </p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* 5. Event Gallery Preview & Lightbox */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="section-padding grid-background border-b border-[var(--border-subtle)]">
          <div className="container-custom">
            <SectionHeader
              overline="Visual Proof"
              title={`${event.title} Gallery`}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {event.gallery.map((url, idx) => (
                <Card
                  key={idx}
                  hoverEffect
                  className="group overflow-hidden relative cursor-pointer h-64 "
                  onClick={() => setSelectedImg(url)}
                >
                  <img
                    src={url}
                    alt={`${event.title} preview ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-6 h-6" />
                    </div>
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
                    alt={event.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Event Specific FAQs */}
      {event.faq && event.faq.length > 0 && (
        <section className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] rounded-[1.25rem] mx-[3px]" style={{paddingTop:'5rem',paddingBottom:'5rem',marginBottom:'8px'}}>
          <div className="container-custom">
            <SectionHeader
              overline="Queries & Answers"
              title={`${event.title} FAQs`}
            />
            <div className="w-full mx-auto space-y-4">
              {event.faq.map((faq, idx) => {
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
        </section>
      )}

      {/* 7. Related Event Recommendations */}
      <section className="section-padding grid-background border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          <SectionHeader
            overline="Explore More"
            title="Related Event Categories"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedEvents.map((rel) => (
              <Card key={rel.slug} hoverEffect className=" flex flex-col justify-between">
                <div>
                  <span className="text-overline text-[10px] text-[var(--accent-primary)] block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2">
                    {rel.title}
                  </h4>
                  <p className="body-small text-[var(--text-secondary)] text-xs mb-4">
                    {rel.shortDescription}
                  </p>
                </div>

                <Link
                  to={`/events/${rel.slug}`}
                  className="text-xs font-semibold uppercase text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Event Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final Conversion CTA */}
      <section className="py-16 bg-[#0B0C0E] text-white text-center select-none m-[2px_3px] rounded-[1.25rem]" style={{marginTop:"2px",marginLeft:"3px",marginRight:"3px",marginBottom:"48px",paddingTop:"6rem",paddingBottom:"6rem"}}>
        <div className="container-custom max-w-3xl">
          <h3 className="font-heading text-2xl font-bold uppercase text-white mb-3">
            Ready To Organize Your {event.title}?
          </h3>
          <p className="body-regular text-slate-300 mb-8">
            Speak directly with our Lucknow execution director for custom proposals and site inspection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="large" icon={ArrowRight}>
              Book Your Event
            </Button>
            <Button href="https://wa.me/919219751766" variant="secondary">WhatsApp</Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default EventDetailPage;
