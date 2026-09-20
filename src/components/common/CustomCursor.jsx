import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover-button' | 'hover-card' | 'hover-image'
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect mobile touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hover targets under cursor
      const target = e.target;
      if (!target) return;

      const isButton = target.closest('button, a, input, select, .cursor-expand');
      const isCard = target.closest('.cursor-glow, [class*="Card"]');
      const isImage = target.closest('img, video, .cursor-scale');

      if (isButton) {
        setCursorState('hover-button');
      } else if (isCard) {
        setCursorState('hover-card');
      } else if (isImage) {
        setCursorState('hover-image');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp trailing position for the ring
  useEffect(() => {
    if (isTouch) return;
    let animationFrame;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };

    animationFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, isTouch]);

  if (isTouch) return null;

  // Custom Cursor Visual Mapping
  const ringSize = {
    default: 32,
    'hover-button': 56,
    'hover-card': 64,
    'hover-image': 72
  }[cursorState];

  return (
    <>
      {/* Central Cursor White Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
        }}
      />

      {/* Trailing Soft Ring */}
      <div
        className={`
          fixed top-0 left-0 rounded-full pointer-events-none z-[99998] transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out border
          ${cursorState === 'hover-button' ? 'border-[var(--accent-primary)] bg-[var(--accent-subtle)] scale-110' : ''}
          ${cursorState === 'hover-card' ? 'border-[var(--accent-primary)] shadow-[0_0_24px_rgba(229,9,20,0.5)] bg-transparent' : ''}
          ${cursorState === 'hover-image' ? 'border-white bg-white/10 backdrop-blur-sm' : ''}
          ${cursorState === 'default' ? 'border-white/40 bg-transparent' : ''}
        `}
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`
        }}
      />
    </>
  );
};

export default CustomCursor;
