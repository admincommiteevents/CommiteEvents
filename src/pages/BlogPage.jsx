import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { blogPosts, blogCategories } from '../data/blogsData';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, User, Clock, Mail, CheckCircle2 } from 'lucide-react';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featured = blogPosts.find((p) => p.isFeatured) || blogPosts[0];

  let filtered = blogPosts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCat === 'All' || p.category.toLowerCase() === selectedCat.toLowerCase();

    return matchesSearch && matchesCat;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim())) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
  };

  return (
    <PageContainer
      title="Event Insights & Guides Blog | Commite Events Lucknow"
      description="Read expert articles on college fest planning, corporate summit technology, volunteer management, and luxury wedding trends in Lucknow and North India."
    >
      {/* 1. Hero */}
      <section className="relative w-full min-h-[45vh] flex flex-col justify-center pt-12 lg:pt-16 pb-12 grid-background select-none border-b border-[var(--border-subtle)]">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping" />
                <span className="text-overline text-xs font-mono text-[var(--accent-primary)]">
                  Industry Authority & Guides
                </span>
              </div>

              <h1 className="display-1 font-heading font-bold uppercase tracking-tight text-[var(--text-primary)]">
                Commite Events <span className="text-gradient">Insights</span>
              </h1>

              <p className="body-large text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                Expert tactics, ground safety blueprints, and production guides written by our event directors and operational leads.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <ChromeObject3D variant="sphere" size={170} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Article Banner */}
      {featured && selectedCat === 'All' && !searchTerm && (
        <section className="py-12 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="container-custom">
            <Card hoverEffect accentBorder className=" overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6 h-80 lg:h-full overflow-hidden">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-6 p-8 lg:p-12 space-y-4 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[var(--accent-primary)] !text-white inline-block">
                    Featured Article
                  </span>

                  <h2 className="font-heading text-2xl font-bold uppercase text-[var(--text-primary)] leading-snug">
                    {featured.title}
                  </h2>

                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[var(--accent-primary)]" />{featured.readTime}</span>
                  </div>

                  <p className="body-small text-[var(--text-secondary)] text-sm line-clamp-3 leading-relaxed">
                    {featured.summary}
                  </p>

                  <Link
                    to={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase text-[var(--accent-primary)] hover:underline pt-2"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* 3. Search & Filter Bar */}
      <section className="py-6 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] sticky top-20 z-20 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto py-1 w-full md:w-auto">
              {blogCategories.map((c) => (
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

          </div>
        </div>
      </section>

      {/* 4. Articles Grid */}
      <section className="section-padding grid-background border-b border-[var(--border-subtle)]">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <p className="body-regular text-[var(--text-secondary)]">No articles matched your search query.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCat('All');
                }}
                className="px-4 py-2 rounded-lg bg-[var(--accent-primary)] !text-white text-xs font-heading uppercase"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((post) => (
                <Card
                  key={post.id}
                  hoverEffect
                  accentBorder
                  className="group overflow-hidden flex flex-col justify-between "
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[var(--accent-primary)] !text-white shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-[10px] font-mono text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><User className="w-3 h-3 text-[var(--accent-primary)]" />{post.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[var(--accent-primary)]" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--accent-primary)]" />{post.readTime}</span>
                      </div>

                      <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {post.title}
                      </h3>

                      <p className="body-small text-[var(--text-secondary)] text-xs line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[var(--border-subtle)]">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase text-[var(--accent-primary)] hover:underline group-hover:translate-x-1.5 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Newsletter Card */}
      <section className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeader
            overline="Stay Updated"
            title="Event Guides Newsletter"
            subtitle="Subscribe to receive quarterly insights on college fest management, corporate summit technology, and event safety protocols in Lucknow."
          />
          <Card hoverEffect accentBorder className=" text-center">

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-mono inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs text-[var(--text-primary)] outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--accent-primary)] !text-white text-xs font-heading font-semibold uppercase tracking-wider shrink-0 cursor-pointer shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* 6. Final CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default BlogPage;
