import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-11" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="h-full aspect-square bg-brand-purple rounded-xl md:rounded-2xl flex items-center justify-center p-0.5 md:p-1 shadow-lg shadow-brand-purple/20">
      <img src="/android-chrome-192x192.png" alt="Jesprec JS Mark" className="h-full w-full object-contain brightness-0 invert" />
    </div>
    <span className="font-[Montserrat] font-[900] text-2xl md:text-3xl tracking-tighter whitespace-nowrap text-foreground uppercase">
      Jesprec <span className="ml-1 text-foreground">Studios</span>
    </span>
  </div>
);

export default Logo;