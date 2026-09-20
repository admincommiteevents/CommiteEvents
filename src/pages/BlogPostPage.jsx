import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChromeObject3D from '../components/common/ChromeObject3D';
import { getBlogPostBySlug, blogPosts } from '../data/blogsData';
import {
  ArrowLeft, ArrowRight, User, Calendar, Clock, Share2, Check,
  MessageSquare, Send, Heart, BookOpen
} from 'lucide-react';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';

export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const [copied, setCopied] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { author: 'Rahul Gupta', text: 'Extremely thorough guide. The barricade corridor tips for college fests were super helpful!', date: 'July 16, 2026' }
  ]);

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText) return;
    setComments([...comments, { author: 'Guest Reader', text: commentText, date: 'Just now' }]);
    setCommentText('');
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Commite Events',
      logo: {
        '@type': 'ImageObject',
        url: 'https://committeevents.com/assets/logo.png'
      }
    },
    datePublished: post.date,
    image: post.coverImage,
    description: post.summary
  };

  return (
    <PageContainer
      title={`${post.title} | Commite Events Blog`}
      description={post.summary}
      keywords={post.keywords}
      additionalSchemas={[articleSchema]}
    >
      {/* 1. Hero Header */}
      <section className="relative w-full min-h-[45vh] flex flex-col justify-center pt-12 lg:pt-16 pb-12 grid-background select-none border-b border-[var(--border-subtle)]">
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent-primary)] mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="space-y-4 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[var(--accent-primary)] !text-white">
              {post.category}
            </span>

            <h1 className="display-2 font-heading font-bold uppercase text-[var(--text-primary)] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[var(--accent-primary)]" />{post.author} ({post.authorRole})</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[var(--accent-primary)]" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[var(--accent-primary)]" />{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Cover Image & Article Body */}
      <section className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
        <div className="container-custom max-w-4xl mx-auto space-y-8">
          
          <div className="rounded-2xl overflow-hidden h-[400px] border border-[var(--border-medium)] shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social Share Controls */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
            <span className="text-xs font-heading font-semibold uppercase text-[var(--text-primary)]">
              Share Article:
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] text-[11px] font-mono text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Article Text Content */}
          <article className="prose prose-invert max-w-none body-regular text-[var(--text-secondary)] leading-relaxed space-y-6">
            <div className="p-6 rounded-xl bg-[var(--bg-tertiary)] border-l-4 border-[var(--accent-primary)] text-sm italic text-[var(--text-primary)]">
              "{post.summary}"
            </div>

            <div className="whitespace-pre-line text-sm md:text-base space-y-4">
              {post.content}
            </div>
          </article>

          {/* Comments Section */}
          <div className="pt-8 border-t border-[var(--border-subtle)] space-y-6">
            <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Comments ({comments.length})</span>
            </h3>

            <div className="space-y-4">
              {comments.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[var(--text-primary)]">{c.author}</span>
                    <span className="text-[var(--text-muted)] text-[10px]">{c.date}</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{c.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-grow px-4 py-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-xs text-[var(--text-primary)] outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] !text-white text-xs font-heading font-semibold uppercase flex items-center gap-1 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Related Articles */}
      <section className="section-padding grid-background border-b border-[var(--border-subtle)]">
        <div className="container-custom max-w-4xl mx-auto">
          <SectionHeader
            overline="Read Next"
            title="Related Event Articles"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.slice(0, 2).map((rel) => (
              <Card key={rel.slug} hoverEffect className=" space-y-3">
                <span className="text-[9px] font-mono text-[var(--accent-primary)] font-bold uppercase">
                  {rel.category}
                </span>
                <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)]">
                  {rel.title}
                </h4>
                <p className="body-small text-[var(--text-secondary)] text-xs line-clamp-2">
                  {rel.summary}
                </p>
                <Link
                  to={`/blog/${rel.slug}`}
                  className="text-xs font-semibold uppercase text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1 pt-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <GalleryFinalCTASection />
    </PageContainer>
  );
};

export default BlogPostPage;
