import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import logoDark from '../../assets/logo.jpeg';
import logoLight from '../../assets/logo1.jpeg';

export const BrandLogo = ({ className = '', height = 44 }) => {
  const { isDark } = useTheme();

  // Dynamic logo image switching for dark & light modes
  const logoSrc = isDark ? logoDark : logoLight;

  return (
    <div className={`inline-flex items-center select-none cursor-pointer group ${className}`}>
      <img
        src={logoSrc}
        alt="Commite Events Official Logo"
        className="object-contain transition-all duration-300 rounded-full filter drop-shadow-sm group-hover:scale-102"
        style={{ height: `${height}px`, width: 'auto' }}
      />
    </div>
  );
};

export default BrandLogo;
