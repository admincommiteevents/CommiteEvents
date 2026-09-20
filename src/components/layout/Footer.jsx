import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUp, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { InstagramIcon, LinkedinIcon } from '../common/SocialIcons';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="px-[3px] pt-0 pb-[2px]">
      <footer className="relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-[1.25rem] pb-8 sm:pb-10 overflow-hidden select-none" style={{ paddingTop: '64px' }}>
        {/* Dynamic Background Glows */}
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[var(--accent-glow)] rounded-full blur-[140px] sm:blur-[160px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[var(--accent-glow)] rounded-full blur-[140px] sm:blur-[180px] opacity-30 pointer-events-none" />

        <div className="container-custom relative z-10">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 sm:pb-16">
            
            {/* Brand Info */}
            <div className="sm:col-span-2 lg:col-span-4 space-y-6 sm:space-y-8 pr-0 lg:pr-2">
              <Link to="/" className="inline-block">
                <BrandLogo height={44} />
              </Link>
              <p className="body-small text-[var(--text-secondary)] leading-relaxed max-w-sm text-xs sm:text-sm">
                Commite Events is a premier enterprise event management company based in Lucknow, Uttar Pradesh. We engineer unforgettable experiences for corporate conferences, elite college fests, grand weddings, and high-scale live concerts.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)] transition-colors shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider mb-0.5">Office</span>
                    <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">Gomti Nagar, Lucknow, UP 226010</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)] transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider mb-0.5">Direct Inquiry</span>
                    <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">support@committeevents.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Units */}
            <div className="sm:col-span-2 lg:col-span-4 px-0 lg:px-3">
              <h4 className="font-heading text-sm sm:text-base font-bold uppercase tracking-widest text-[var(--text-primary)] flex items-center gap-2" style={{ marginBottom: '32px' }}>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                Specialized Units
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { name: 'Parikshit Events', desc: 'Operations & Ground Mgmt', path: '/business-units/parikshit-events' },
                  { name: 'Crewlytics', desc: 'Event Staffing & Campus Hiring', path: '/business-units/crewlytics' },
                  { name: 'Wedding & Gifting', desc: 'Luxury Planning & Custom Gifts', path: '/business-units/wedding-and-gifting' }
                ].map((unit, idx) => (
                  <li key={idx}>
                    <Link 
                      to={unit.path} 
                      className="group block px-4 py-3 sm:px-6 sm:py-4 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                      style={{ borderRadius: '8px' }}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-xs sm:text-sm font-bold font-heading uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-wider">
                          {unit.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                      <div className="text-[11px] sm:text-xs text-[var(--text-secondary)] font-mono font-medium">{unit.desc}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Categories */}
            <div className="sm:col-span-1 lg:col-span-2">
              <h4 className="font-heading text-sm sm:text-base font-bold uppercase tracking-widest text-[var(--text-primary)] flex items-center gap-2 whitespace-nowrap" style={{ marginBottom: '32px' }}>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] shrink-0" />
                Event Categories
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  { name: 'Corporate Conferences', path: '/events/corporate-events' },
                  { name: 'College & Youth Fests', path: '/events/college-fest' },
                  { name: 'Live Concerts & Shows', path: '/events/live-shows-and-concerts' },
                  { name: 'Sports & E-Sports Fests', path: '/events/sports-events' },
                  { name: 'Wedding Events', path: '/events/wedding-events' }
                ].map((cat, idx) => (
                  <li key={idx}>
                    <Link to={cat.path} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-medium)] group-hover:bg-[var(--accent-primary)] transition-colors" />
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-2 lg:justify-self-end">
              <h4 className="font-heading text-sm sm:text-base font-bold uppercase tracking-widest text-[var(--text-primary)] flex items-center gap-2 whitespace-nowrap" style={{ marginBottom: '32px' }}>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] shrink-0" />
                Quick Links
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  { name: 'Career & Hiring', path: '/career' },
                  { name: 'Event Gallery', path: '/gallery' },
                  { name: 'FAQ Center', path: '/faq' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--text-primary)] hover:after:w-full after:transition-all after:duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Massive Brand Watermark */}
          <div className="w-full flex justify-center py-4 sm:py-6 overflow-hidden border-t border-[var(--border-subtle)] pointer-events-none">
            <h1 className="text-[13vw] sm:text-[11vw] font-heading font-black uppercase text-[var(--border-subtle)] leading-none tracking-tighter select-none opacity-[0.35] mix-blend-overlay">
              COMMITE
            </h1>
          </div>

          {/* Bottom Rights Bar */}
          <div className="pt-5 sm:pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-[var(--border-subtle)] text-center sm:text-left">
            
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/commiteevents/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/commite-events/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
              © {new Date().getFullYear()} COMMITE EVENTS. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              <Link to="/privacy-policy" className="hover:text-[var(--accent-primary)] transition-colors">Privacy</Link>
              <Link to="/terms-and-conditions" className="hover:text-[var(--accent-primary)] transition-colors">Terms</Link>
              <button onClick={scrollToTop} className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 text-[var(--accent-primary)] hover:text-white bg-[var(--accent-subtle)] hover:bg-[var(--accent-primary)] px-3 py-1.5 rounded-full transition-all cursor-pointer">
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
