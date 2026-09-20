import React from 'react';

export const Badge = ({
  children,
  className = '',
  dot = true,
  variant = 'primary', // 'primary' | 'ghost' | 'light'
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[var(--bg-tertiary)] border-[var(--border-subtle)] text-[var(--accent-primary)]';
      case 'ghost':
        return 'bg-transparent border-[var(--accent-primary)] text-[var(--accent-primary)]';
      case 'light':
        return 'bg-white/10 border-white/20 text-white';
      default:
        return 'bg-[var(--bg-tertiary)] border-[var(--border-subtle)] text-[var(--accent-primary)]';
    }
  };

  const getDotClasses = () => {
    if (variant === 'light') return 'bg-white';
    return 'bg-[var(--accent-primary)]';
  };

  const baseClasses = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-semibold tracking-wider uppercase';
  
  const combinedClasses = `${baseClasses} ${getVariantClasses()} ${className}`;

  return (
    <span className={combinedClasses} {...props}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${getDotClasses()} shrink-0`}></span>}
      {children}
    </span>
  );
};

export default Badge;
