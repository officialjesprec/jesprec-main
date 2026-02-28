import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-11" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="h-full aspect-square flex items-center justify-center">
      <img src="logo.png" alt="Jesprec JS Mark" className="h-<1/4> w-<1/4> object-contain" />
    </div>
  </div>
);

export default Logo;