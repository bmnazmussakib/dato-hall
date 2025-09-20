import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div className={`lg:max-w-[1780px] mx-auto px-4  ${className || ''}`}>
      {children}
    </div>
  );
};

export default Container;