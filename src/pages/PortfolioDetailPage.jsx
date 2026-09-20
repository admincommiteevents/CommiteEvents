import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { getPortfolioBySlug, portfolioProjects } from '../data/portfolioData';
import {
  ArrowLeft, ArrowRight, MapPin, Users, Calendar, Clock, Award,
  CheckCircle2, ShieldCheck, Phone, MessageSquare, Quote
} from 'lucide-react';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const PortfolioDetailPage = () => {
  const { slug } = useParams();
  const project = getPortfolioBySlug(slug);

  // Related projects recommendations (excluding current)
  const relatedProjects = portfolioProjects.filter((p) => p.id !== project.id);

  // Structured Data Schema for Case Study
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: project.title,
    location: {
      '@type': 'Place',
      name: project.location
    },
    organizer: {
      '@type': 'Organization',
      name: 'Commite Events',
      url: 'https://committeevents.com'
    },
    description: project.shortDescription
  };

  return (
    <PageContainer
      title={project.seo?.title || `${project.title} | Case Study`}
      description={project.seo?.description || project.shortDescription}
      keywords={project.seo?.keywords}
      additionalSchemas={[caseStudySchema]}
    >
      {/* 1. Hero */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 grid-background select-none border-b border-[var(--border-subtle)]">
        <div className="container-custom relative z-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping" />
                <span className="text-overline text-xs font-mono text-[var(--accent-primary)]">
                  {project.category} Case Study
                </span>
              </div>

              <h1 className="display-2 font-heading font-bold uppercase text-[var(--text-primary)] leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[var(--accent-primary)]" />{project.location}</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[var(--accent-primary)]" />{project.audience}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[var(--accent-primary)]" />{project.duration}</span>
              </div>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed pt-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="medium" icon={ArrowRight}>
                  Enquire Similar Event
                </Button>
                <Button href="https://wa.me/919219751766" variant="secondary">WhatsApp</Button>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <ChromeObject3D variant="sphere" size={190} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics & Overview */}
      <section className="bg-[var(--bg-secondary)] rounded-[1.25rem] mx-[3px]" style={{paddingTop:"5rem",paddingBottom:"5rem",marginBottom:"8px"}}>
        <div className="container-custom">
          {/* Key Results Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <Card hoverEffect className=" text-center">
              <span className="font-heading text-2xl font-bold text-[var(--accent-primary)] block">
                {project.results.attendees}
              </span>
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Total Audience</span>
            </Card>

            <Card hoverEffect className=" text-center">
              <span className="font-heading text-2xl font-bold text-[var(--accent-primary)] block">
                {project.results.volunteers}
              </span>
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Deployed Force</span>
            </Card>

            <Card hoverEffect className=" text-center">
              <span className="font-heading text-2xl font-bold text-[var(--accent-primary)] block">
                {project.results.bouncers}
              </span>
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Tactical Security</span>
            </Card>

            <Card hoverEffect className=" text-center">
              <span className="font-heading text-2xl font-bold text-[var(--accent-primary)] block">
                {project.results.citiesReached}
              </span>
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Regional Reach</span>
            </Card>

            <Card hoverEffect className=" text-center">
              <span className="font-heading text-2xl font-bold text-[var(--accent-primary)] block">
                {project.results.satisfactionRate}
              </span>
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Client Sign-Off</span>
            </Card>
          </div>

          <SectionHeader
            overline="Project Narrative"
            title="Detailed Execution Breakdown"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-4 body-regular text-[var(--text-secondary)] leading-relaxed">
                <p>{project.longDescription}</p>

                <div className="p-6 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] space-y-2">
                  <h4 className="font-heading text-sm font-bold uppercase text-[var(--accent-primary)] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    The Key Challenge
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">{project.challenge}</p>
                </div>

                <div className="p-6 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] space-y-2">
                  <h4 className="font-heading text-sm font-bold uppercase text-[var(--accent-primary)] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Our Strategic Solution
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card hoverEffect accentBorder className="overflow-hidden  h-96">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Photo Gallery Grid */}
      {project.images && (
        <section className="grid-background rounded-[1.25rem] mx-[3px]" style={{paddingTop:"5rem",paddingBottom:"5rem",marginBottom:"8px"}}>
          <div className="container-custom">
            <SectionHeader
              overline="Visual Record"
              title="Execution Gallery"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((imgUrl, idx) => (
                <Card key={idx} hoverEffect className="overflow-hidden h-64 ">
                  <img
                    src={imgUrl}
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Client Testimonial */}
      {project.testimonial && (
        <section className="bg-[var(--bg-secondary)] rounded-[1.25rem] mx-[3px]" style={{paddingTop:"5rem",paddingBottom:"5rem",marginBottom:"8px"}}>
          <div className="container-custom max-w-4xl mx-auto">
            <Card hoverEffect accentBorder className=" text-center space-y-4">
              <Quote className="w-10 h-10 text-[var(--accent-primary)] mx-auto opacity-50" />
              <p className="font-heading text-lg italic text-[var(--text-primary)] leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)]">
                  {project.testimonial.author}
                </h4>
                <p className="text-xs font-mono text-[var(--accent-primary)]">
                  {project.testimonial.designation}
                </p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* 5. Related Projects */}
      <section className="grid-background rounded-[1.25rem] mx-[3px]" style={{paddingTop:"5rem",paddingBottom:"5rem",marginBottom:"8px"}}>
        <div className="container-custom">
          <SectionHeader
            overline="More Case Studies"
            title="Related Event Portfolio"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedProjects.slice(0, 2).map((rel) => (
              <Card key={rel.slug} hoverEffect className=" flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[var(--accent-primary)] uppercase font-bold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-2">
                    {rel.title}
                  </h4>
                  <p className="body-small text-[var(--text-secondary)] text-xs">
                    {rel.shortDescription}
                  </p>
                </div>

                <Link
                  to={`/portfolio/${rel.slug}`}
                  className="text-xs font-semibold uppercase text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Conversion CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default PortfolioDetailPage;
