import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Phone, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const [openFaq, setOpenFaq] = useState(0);

  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceFaqs = [
    {
      q: `What is included in the ${service.title} package?`,
      a: `Our ${service.title} service includes full planning, venue setup, equipment allocation, on-site execution team, and crisis management protocols.`
    },
    {
      q: `How far in advance should we reserve ${service.title}?`,
      a: 'We recommend booking 2 to 4 weeks prior to the event date to lock down technical riders, venue permits, and staffing rosters.'
    },
    {
      q: 'Do you provide on-site technical supervisors?',
      a: 'Yes! Every service includes a dedicated senior execution director and technical staff on-ground throughout the live event.'
    }
  ];

  return (
    <PageContainer
      title={`${service.title} in Lucknow | Commite Events`}
      description={service.summary}
    >
      {/* Service Detail Hero */}
      <section className="relative w-full min-h-[45vh] flex flex-col justify-center grid-background select-none border-b border-[var(--border-subtle)] rounded-[1.25rem] mt-[2px] mx-[3px]" style={{paddingTop:'clamp(3.5rem,6vw,5rem)',paddingBottom:'clamp(3.5rem,6vw,5rem)',marginBottom:'8px'}}>
        <div className="container-custom relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-overline text-xs text-[var(--accent-primary)] block font-mono">
                {service.category} • Lucknow Ops
              </span>

              <h1 className="display-2 font-heading font-bold uppercase text-[var(--text-primary)] leading-tight">
                {service.title}
              </h1>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="medium" icon={ArrowRight}>
                  Request Free Quote
                </Button>
                <a
                  href="tel:+91 92197 51766"
                  className="rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs font-semibold uppercase text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
                  style={{ padding: '12px 20px' }}
                >
                  <Phone className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Call Operations</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
              <ChromeObject3D variant="sphere" size={180} />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Features Grid */}
      <section className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] rounded-[1.25rem] mx-[3px]" style={{paddingTop:'clamp(3.5rem,6vw,5rem)',paddingBottom:'clamp(3.5rem,6vw,5rem)',marginBottom:'8px'}}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Key Deliverables */}
            <Card hoverEffect accentBorder className=" space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
                  Key Specifications & Deliverables
                </h3>
              </div>

              <ul className="space-y-3 pt-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Client Benefits */}
            <Card hoverEffect accentBorder className=" space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)]">
                  Why Work With Us For This Service
                </h3>
              </div>

              <ul className="space-y-3 pt-2">
                {service.benefits.map((ben) => (
                  <li key={ben} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </Card>

          </div>

          {/* Service Specific FAQ */}
          <div className="w-full mx-auto space-y-4 mb-16">
            <h3 className="font-heading text-xl font-bold uppercase text-center text-[var(--text-primary)] mb-6">
              {service.title} FAQs
            </h3>

            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Card
                  key={faq.q}
                  hoverEffect
                  accentBorder={isOpen}
                  className="cursor-pointer "
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div className="relative w-full flex items-center justify-center min-h-[36px] px-8 sm:px-10 text-center">
                    <div className="inline-flex items-center justify-center gap-2 sm:gap-2.5 text-center max-w-[85%] mx-auto">
                      <HelpCircle className={`w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-colors ${isOpen ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`} />
                      <h4 className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)] text-center leading-snug">
                        {faq.q}
                      </h4>
                    </div>
                    <div className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[var(--accent-primary)]' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] text-xs body-regular text-[var(--text-secondary)] text-center animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Related Services */}
          <div>
            <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] mb-6 text-center">
              Explore Related Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Card key={rel.slug} hoverEffect className=" flex flex-col justify-between">
                  <div>
                    <span className="text-overline text-[10px] text-[var(--accent-primary)] block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2">
                      {rel.title}
                    </h4>
                    <p className="body-small text-[var(--text-secondary)] text-xs mb-4">
                      {rel.summary}
                    </p>
                  </div>

                  <Link
                    to={`/services/${rel.slug}`}
                    className="text-xs font-semibold uppercase text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Service Detail Final CTA */}
      <section className="py-16 bg-[#0B0C0E] text-white text-center select-none m-[2px_3px_5px_3px] rounded-[1.25rem]" style={{marginTop:"2px",marginLeft:"3px",marginRight:"3px",marginBottom:"5px",paddingTop:"6rem",paddingBottom:"6rem"}}>
        <div className="container-custom max-w-3xl">
          <h3 className="font-heading text-2xl font-bold uppercase text-white mb-3">
            Ready To Reserve {service.title}?
          </h3>
          <p className="body-regular text-slate-300 mb-8">
            Speak directly with our Lucknow ground operations director for instant custom quotations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="large" icon={ArrowRight}>
              Request Detailed Proposal
            </Button>
            <Button href="https://wa.me/919219751766" variant="secondary">WhatsApp</Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ServiceDetailPage;
