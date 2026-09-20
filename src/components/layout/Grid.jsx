import React from 'react';

export const Grid = ({
  children,
  className = '',
  columns = 3, // 1 | 2 | 3 | 4
  gap = 'normal', // 'small' | 'normal' | 'large'
  itemsStretch = true,
  ...props
}) => {
  const getColClass = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getGapClass = () => {
    switch (gap) {
      case 'small': return 'gap-4 sm:gap-6';
      case 'normal': return 'gap-6 lg:gap-8';
      case 'large': return 'gap-8 lg:gap-10';
      case 'xl': return 'gap-8 lg:gap-12 xl:gap-16';
      default: return 'gap-6 lg:gap-8';
    }
  };

  const combinedClasses = [
    'grid',
    getColClass(),
    getGapClass(),
    itemsStretch ? 'items-stretch' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export default Grid;
