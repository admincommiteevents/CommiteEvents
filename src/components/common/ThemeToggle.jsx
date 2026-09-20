import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center p-2.5 rounded-full
        bg-[var(--bg-tertiary)] border border-[var(--border-medium)]
        text-[var(--text-primary)] hover:border-[var(--accent-primary)]
        hover:text-[var(--accent-primary)] transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]
        aria-label="Toggle Theme Mode"
        ${className}
      `}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 absolute transition-all duration-500 transform ${
            isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100 text-amber-500'
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute transition-all duration-500 transform ${
            isDark ? 'opacity-100 rotate-0 scale-100 text-slate-100' : 'opacity-0 -rotate-90 scale-50'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
