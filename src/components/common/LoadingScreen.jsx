import React, { useState, useEffect, useRef } from 'react';
import BrandLogo from './BrandLogo';

// Module-level singleton guard to prevent double-loading in React StrictMode & re-mounts
let globalHasLoaded = false;

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(() => (globalHasLoaded ? 'hidden' : 'loading')); // 'loading' | 'scaling' | 'fadeOut' | 'hidden'
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (globalHasLoaded) return;

    // Smooth progress counter over ~1.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 8;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === 'loading') {
      globalHasLoaded = true;
      // Sequence: 100% -> Logo scale down -> Fade out -> Hide
      const timer1 = setTimeout(() => setPhase('scaling'), 150);
      const timer2 = setTimeout(() => setPhase('fadeOut'), 450);
      const timer3 = setTimeout(() => {
        setPhase('hidden');
        if (onCompleteRef.current) onCompleteRef.current();
      }, 850);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [progress, phase]);

  if (phase === 'hidden' || globalHasLoaded) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[10000] bg-[#0B0C0E] text-white flex flex-col items-center justify-center
        transition-opacity duration-500 pointer-events-none select-none
        ${phase === 'fadeOut' ? 'opacity-0' : 'opacity-100'}
      `}
    >
      {/* Subtle Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#E50914] opacity-20 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Smooth Scale Transition */}
        <div
          className={`
            transition-transform duration-500 ease-out mb-8
            ${phase === 'scaling' ? 'scale-75 opacity-80' : 'scale-100 opacity-100'}
          `}
        >
          <BrandLogo height={48} />
        </div>

        {/* Thin Loading Bar */}
        <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-4">
          <div
            className="h-full bg-[var(--accent-primary)] transition-all duration-150 ease-out shadow-[0_0_12px_#E50914]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter Percentage */}
        <div className="font-mono text-xs text-slate-400 tracking-widest">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
