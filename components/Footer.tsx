
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-32">
          <div className="max-w-xs">
            <a href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1 mb-8">
              <span className="font-serif italic text-3xl">S</span>
              <span className="mt-1">tandrdCoaching</span>
            </a>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Building the intelligent coordinator for human performance. We represent the inevitable transition from subjective coaching to systematic intelligence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-8">The System</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Adaptive Load</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Nutrition Sync</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Methodology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-8">Intelligence</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Research Parity</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Data Privacy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">White Papers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-8">Follow</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">
          <p>© STANDRDCOACHING PERFORMANCE LABS 2024</p>
          <div className="flex gap-12 mt-4 md:mt-0">
             <a href="#" className="hover:text-black transition-colors">Privacy</a>
             <a href="#" className="hover:text-black transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
