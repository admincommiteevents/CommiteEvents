import React from 'react';

export const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`container-custom relative z-10 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
