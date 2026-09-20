import React from 'react';

export const SectionHeader = ({
  overline,
  title,
  subtitle,
  lightText = false,
  className = ''
}) => {
  return (
    <div className={`flex flex-col w-full px-4 md:px-6 mb-8 lg:mb-12 text-center items-center justify-center ${className}`}>
      {overline && (
        <span className={`text-overline mb-4 w-fit mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest ${lightText ? 'bg-white/10 border-white/20 text-slate-200' : 'bg-[var(--accent-subtle)] border-[var(--border-accent)] text-[var(--accent-primary)]'}`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse shrink-0 ${lightText ? 'bg-white' : 'bg-[var(--accent-primary)]'}`} />
          {overline}
        </span>
      )}

      {title && (
        <h2 className={`section-heading font-heading font-bold tracking-tight w-full mx-auto text-center ${lightText ? 'text-white' : 'text-[var(--text-primary)]'}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`sub-heading font-normal mt-4 leading-relaxed max-w-3xl mx-auto text-center ${lightText ? 'text-slate-300' : 'text-[var(--text-secondary)]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
