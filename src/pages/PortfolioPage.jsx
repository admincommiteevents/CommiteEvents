import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { portfolioProjects } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Users, Calendar, Filter } from 'lucide-react';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const PortfolioPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Latest');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Corporate', 'College', 'Wedding', 'Sports'];

  // Filtering
  let filtered = portfolioProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCat === 'All' || p.category.toLowerCase() === selectedCat.toLowerCase();

    return matchesSearch && matchesCat;
  });

  // Sorting
  if (sortOption === 'Oldest') {
    filtered = [...filtered].reverse();
  }

  return (
    <PageContainer
      title="Event Portfolio & Case Studies | Commite Events Lucknow"
      description="Discover our flagship event case studies across college fests, corporate summits, state investor meets, and luxury weddings in Lucknow."
    >
      {/* 1. Hero */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center pt-12 lg:pt-16 pb-16 grid-background select-none border-b border-[var(--border-subtle)]">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
                <span className="text-overline text-xs font-mono">Proven Track Record</span>
              </div>

              <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)]">
                Our Event <span className="text-gradient">Portfolio</span>
              </h1>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                In-depth breakdown of our flagship executions — from 35,000-student university star nights to state VVIP investor summits.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <ChromeObject3D variant="sphere" size={180} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="py-6 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] sticky top-20 z-20 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Live Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search by title, location, client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none transition-colors"
              />
            </div>

            {/* Category Pills & Sorting */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCat(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCat === c
                        ? 'bg-[var(--accent-primary)] !text-white shadow-md'
                        : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs text-[var(--text-primary)] outline-none cursor-pointer"
              >
                <option value="Latest">Sort: Latest</option>
                <option value="Oldest">Sort: Oldest</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Portfolio Grid */}
      <section className="section-padding grid-background">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <p className="body-regular text-[var(--text-secondary)]">No portfolio case studies matched your search query.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCat('All');
                }}
                className="px-4 py-2 rounded-lg bg-[var(--accent-primary)] !text-white text-xs font-heading uppercase"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((item) => (
                <Card
                  key={item.id}
                  hoverEffect
                  accentBorder
                  className="group overflow-hidden flex flex-col justify-between  transition-transform duration-300 hover:-translate-y-2"
                >
                  <div>
                    {/* Cover Header */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/30 to-transparent" />

                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[var(--accent-primary)] !text-white shadow-lg">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{item.location}</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{item.audience}</span>
                      </div>

                      <h3 className="font-heading text-xl font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {item.title}
                      </h3>

                      <p className="body-small text-[var(--text-secondary)] text-xs line-clamp-3 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-6 pb-6 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <Link
                      to={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase text-[var(--accent-primary)] hover:underline group-hover:translate-x-1.5 transition-transform"
                    >
                      <span>View Case Study Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Button href="/contact" variant="secondary" size="small">
                      Enquire
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Final CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default PortfolioPage;
