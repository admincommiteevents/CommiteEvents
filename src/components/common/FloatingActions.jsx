import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowUp, ArrowUpRight } from 'lucide-react';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Actions (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-[9000] flex-col gap-3">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919219751766" 
          target="_blank" 
          rel="noreferrer" 
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeIn"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Direct Call Button */}
        <a 
          href="tel:+919219751766" 
          className="w-13 h-13 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white flex items-center justify-center shadow-xl shadow-[var(--accent-glow)]/40 hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeIn"
          aria-label="Call Operations"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-13 h-13 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeIn"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Mobile & Tablet Floating Actions (Bottom Right Compact Cluster) */}
      <div className="lg:hidden fixed bottom-4 right-3 z-[9000] flex items-center gap-2">
        {/* WhatsApp Floating Circle */}
        <a
          href="https://wa.me/919219751766"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4.5 h-4.5" />
        </a>

        {/* Call Operations Floating Circle */}
        <a
          href="tel:+919219751766"
          className="w-10 h-10 rounded-full bg-[var(--accent-primary)] active:bg-red-700 text-white flex items-center justify-center shadow-lg shadow-[var(--accent-glow)]/40 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Call Operations"
        >
          <Phone className="w-4.5 h-4.5" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] flex items-center justify-center shadow-lg active:scale-95 transition-all duration-200"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingActions;
