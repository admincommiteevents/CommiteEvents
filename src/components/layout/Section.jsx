import React from 'react';

/* Inject responsive section padding once */
const SECTION_STYLE = `
  .section-responsive {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }
  @media (min-width: 768px) {
    .section-responsive {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }
  }
  @media (min-width: 1024px) {
    .section-responsive {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }
  .section-responsive-dark {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  @media (min-width: 768px) {
    .section-responsive-dark {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
  @media (min-width: 1024px) {
    .section-responsive-dark {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }
`;

let styleInjected = false;
function injectStyle() {
  if (styleInjected || typeof document === 'undefined') return;
  const el = document.createElement('style');
  el.textContent = SECTION_STYLE;
  document.head.appendChild(el);
  styleInjected = true;
}

export const Section = ({
  children,
  className = '',
  background = 'primary',
  padding = true,
  paddingSize,
  borderTop = false,
  borderBottom = false,
  overflowHidden = true,
  selectNone = true,
  id,
  ...props
}) => {
  injectStyle();

  const getBgClass = () => {
    switch (background) {
      case 'secondary': return 'bg-[var(--bg-secondary)]';
      case 'dark': return 'bg-[#0B0C0E] text-white';
      case 'primary': return 'grid-background';
      case 'none': return '';
      default: return 'grid-background';
    }
  };

  const getBorderTopClass = () => {
    if (!borderTop) return '';
    return background === 'dark' ? 'border-t border-white/10' : 'border-t border-[var(--border-subtle)]';
  };

  const getBorderBottomClass = () => {
    if (!borderBottom) return '';
    return background === 'dark' ? 'border-b border-white/10' : 'border-b border-[var(--border-subtle)]';
  };

  const paddingClass = !padding ? '' : (background === 'dark' ? 'section-responsive-dark' : 'section-responsive');

  const combinedClasses = [
    'relative',
    'rounded-[1.25rem]',
    paddingClass,
    getBgClass(),
    getBorderTopClass(),
    getBorderBottomClass(),
    overflowHidden ? 'overflow-hidden' : '',
    selectNone ? 'select-none' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={combinedClasses}
      style={{
        marginTop: '2px',
        marginLeft: '3px',
        marginRight: '3px',
        marginBottom: '5px',
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
