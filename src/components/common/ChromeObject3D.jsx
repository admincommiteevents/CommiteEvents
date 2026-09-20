import React from 'react';

export const ChromeObject3D = ({
  variant = 'sphere', // 'sphere' | 'ring' | 'cube' | 'torus'
  size = 200,
  className = '',
  glow = true
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Radial Red Glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-[var(--accent-glow)] blur-2xl opacity-60 animate-pulse"
          style={{ transform: 'scale(1.2)' }}
        />
      )}

      {/* Render Chrome Geometry */}
      {variant === 'sphere' && (
        <div
          className="w-full h-full rounded-full transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            background: `
              radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(220, 225, 230, 0.6) 20%, rgba(80, 85, 95, 0.8) 50%, rgba(20, 22, 28, 0.95) 85%, rgba(229, 9, 20, 0.5) 100%)
            `,
            boxShadow: 'inset -10px -10px 25px rgba(0, 0, 0, 0.8), 0 20px 40px rgba(0, 0, 0, 0.4)'
          }}
        />
      )}

      {variant === 'ring' && (
        <div
          className="w-full h-full rounded-full p-6 transition-transform duration-1000 ease-out hover:rotate-45"
          style={{
            background: `
              conic-gradient(from 45deg, #E2E8F0, #94A3B8, #475569, #E50914, #1E293B, #E2E8F0)
            `,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <div className="w-full h-full rounded-full bg-[var(--bg-primary)] shadow-inner" />
        </div>
      )}

      {variant === 'cube' && (
        <div
          className="w-4/5 h-4/5 rounded-2xl transition-all duration-700 ease-out transform rotate-12 hover:rotate-0"
          style={{
            background: 'linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(100,116,139,0.5) 50%, rgba(15,23,42,0.9) 100%)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
          }}
        />
      )}
    </div>
  );
};

export default ChromeObject3D;
