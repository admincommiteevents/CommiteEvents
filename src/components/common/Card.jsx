import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  accentBorder = false,
  glass = false,
  neo = true,
  ...props
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl card-padding
        transition-all duration-300 ease-out
        ${glass ? 'bg-[var(--bg-glass)] backdrop-blur-md' : neo ? 'neo-card group' : 'bg-[var(--bg-secondary)]'}
        ${!neo ? 'border' : ''} ${accentBorder && !neo ? 'border-[var(--border-accent)]' : !neo ? 'border-[var(--border-subtle)]' : ''}
        ${hoverEffect && !neo ? 'hover:border-[var(--accent-primary)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--accent-subtle)]' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Subtle Accent Glow on Hover */}
      {hoverEffect && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-glow)] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
};

export default Card;
