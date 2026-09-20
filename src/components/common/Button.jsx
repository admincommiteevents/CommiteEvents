import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon = true, // Universal arrow by default if true
  iconPosition,
  size,
  onClick,
  href,
  to,
  ...props
}) => {
  // Enterprise Universal Button Base
  // Height: 56px, Padding: 18px 32px, Radius: 16px, Font: Space Grotesk 600
  const baseStyles = "group inline-flex items-center justify-center font-heading font-semibold text-base transition-all duration-[180ms] ease-out select-none cursor-pointer focus:outline-none h-[56px] px-[32px] rounded-[10px] whitespace-nowrap shrink-0";

  const variants = {
    primary: "bg-[#111111] text-white shadow-sm hover:bg-[#000000] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-[2px]",
    secondary: "bg-transparent text-[var(--text-primary)] border border-[var(--border-medium)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--text-primary)] hover:-translate-y-[2px]",
    "outline-white": "bg-transparent text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#0b0c0e] hover:border-white hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]"
  };

  const resolvedVariant = variants[variant] ? variant : 'primary';
  const combinedClasses = `${baseStyles} ${variants[resolvedVariant]} ${className}`;

  const IconComponent = icon === true ? ArrowRight : icon;

  const content = (
    <>
      <span className="mx-3 my-[3px] inline-block text-[15px]">{children}</span>
      {IconComponent && (
        <IconComponent className="w-[18px] h-[18px] ml-2 transition-transform duration-[180ms] ease-out group-hover:translate-x-[6px]" />
      )}
    </>
  );

  const destination = to || href;

  if (destination) {
    if (destination.startsWith('#')) {
      return (
        <a 
          href={destination} 
          onClick={(e) => {
            if (onClick) onClick(e);
            const target = document.querySelector(destination);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }} 
          className={combinedClasses} 
          {...props}
        >
          {content}
        </a>
      );
    }

    if (destination.startsWith('/')) {
      return (
        <Link to={destination} onClick={onClick} className={combinedClasses} {...props}>
          {content}
        </Link>
      );
    }
    return (
      <a href={destination} onClick={onClick} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

// Aliases for backward compatibility in routing, though we enforce the unified look.
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;

export default Button;
