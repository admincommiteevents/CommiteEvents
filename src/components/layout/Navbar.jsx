import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import ThemeToggle from '../common/ThemeToggle';
import Button from '../common/Button';
import { InstagramIcon, LinkedinIcon } from '../common/SocialIcons';

export const Navbar = ({ onHeightChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const headerRef = useRef(null);
  const location = useLocation();

  // Dynamic height listener to update --navbar-height CSS variable
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        if (height > 0) {
          onHeightChange?.(height);
          document.documentElement.style.setProperty('--navbar-height', `${height}px`);
        }
      }
    };

    updateNavbarHeight();

    let resizeObserver = null;
    if (window.ResizeObserver && headerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateNavbarHeight();
      });
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, [onHeightChange]);

  // Scroll detection for shadow & visibility toggle
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 10);
      if (currentScrollPos > 100) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Route change listener: close mobile menu & scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Business Units', path: '/business-units' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`
          fixed top-0 left-0 w-full h-20 z-50 flex items-center transition-all duration-300 select-none navbar-wrapper-padding
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${scrolled 
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm shadow-black/5' 
            : 'bg-[var(--bg-primary)] backdrop-blur-sm border-b border-[var(--border-subtle)]/60'}
        `}
      >
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          
          {/* 1. Left Side: Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center shrink-0 my-auto navbar-logo-space"
          >
            <BrandLogo height={42} />
          </Link>

          {/* 2. Center/Right: Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 my-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative text-[14px] xl:text-[15px] font-medium tracking-normal transition-colors duration-200 shrink-0 whitespace-nowrap py-2.5 px-1
                  ${isActive
                    ? 'text-[var(--accent-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[var(--accent-primary)] rounded-full transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* 3. Far Right: Desktop Controls */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 my-auto navbar-quote-space">
            <ThemeToggle className="hover:scale-105" />
            
            <Button
              href="/get-quote"
              variant="primary"
              size="medium"
              icon={ArrowUpRight}
              className="h-10.5 px-6 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md"
            >
              Get Quote
            </Button>
          </div>

          {/* 4. Mobile Controls */}
          <div className="flex items-center gap-2.5 lg:hidden shrink-0 my-auto navbar-quote-space">
            <ThemeToggle />
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all focus:outline-none cursor-pointer shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* 5. Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100000] flex justify-end select-none">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-full bg-[var(--bg-primary)] border-l border-[var(--border-subtle)] px-5 pb-5 sm:px-6 sm:pb-6 flex flex-col justify-between z-10 animate-drawer-slide overflow-y-auto shadow-2xl">
            
            <div className="space-y-3">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pt-8 pb-4 border-b border-[var(--border-subtle)] shrink-0">
                <div className="flex items-center pl-1">
                  <BrandLogo height={34} />
                </div>
                
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all focus:outline-none cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="py-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      text-sm font-medium py-2 px-3 rounded-xl transition-all flex items-center justify-between
                      ${isActive 
                        ? 'text-[var(--accent-primary)] font-semibold bg-[var(--accent-subtle)] border-l-4 border-[var(--accent-primary)]' 
                        : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)]/50'}
                    `}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Actions & Social Media */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-3 shrink-0 pb-4">
              
              {/* Primary Call To Action */}
              <Link 
                to="/get-quote" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-10 flex items-center justify-center gap-2 bg-[var(--accent-primary)] hover:bg-red-700 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer shrink-0"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Direct Quick Contact Grid */}
              <div className="grid grid-cols-2 gap-2 shrink-0">
                <a
                  href="tel:+919219751766"
                  className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919219751766"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] hover:border-[#25D366] hover:text-[#25D366] transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Social Media & Theme Toggle Combined Row */}
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)]/70 shrink-0">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/commiteevents/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/commite-events/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[var(--text-muted)]">Theme</span>
                  <ThemeToggle />
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
