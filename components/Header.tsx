
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-zinc-100">
      <div className="max-w-[1400px] mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold tracking-tighter flex items-center gap-1">
            <span className="font-serif italic text-2xl">S</span>
            <span className="mt-0.5">tandrdCoaching</span>
          </a>
        </div>
        <div className="flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <a href="#system" className="hover:text-black transition-colors hidden md:block">The System</a>
          <a href="#research" className="hover:text-black transition-colors hidden md:block">Research Parity</a>
          <a href="#waitlist" className="text-black border-b border-black pb-0.5">
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
