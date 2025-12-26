
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="research" className="py-24 md:py-40 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-[3rem] md:text-[5vw] font-bold tracking-tighter leading-none mb-12">
            The Method.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-12">
            <div className="p-1 border-l border-zinc-700 pl-8">
              <h3 className="text-xl font-bold mb-4">Evidence-Based Parity</h3>
              <p className="text-zinc-500 leading-relaxed">
                We believe that elite coaching results come from elite execution of proven science. StandrdCoaching ensures that the best protocols are applied with zero deviation.
              </p>
            </div>
            <div className="p-1 border-l border-zinc-700 pl-8">
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-zinc-500 leading-relaxed">
                Human coaches eventually stop reading the literature. Our system evolves as the consensus in nutrition and training research moves forward. You never fall behind.
              </p>
            </div>
            <div className="p-1 border-l border-zinc-700 pl-8">
              <h3 className="text-xl font-bold mb-4">Information Neutrality</h3>
              <p className="text-zinc-500 leading-relaxed">
                We remove the 'guru' factor. Every adjustment is grounded in your actual data, not a coach's proprietary secrets or outdated personal bias.
              </p>
            </div>
          </div>
          
          <div className="relative p-8 md:p-16 border border-zinc-800 rounded-[2.5rem] md:rounded-[3rem] bg-zinc-900/30 backdrop-blur-sm">
             <div className="text-center">
                <p className="text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8 md:mb-10">Rational Pricing Contrast</p>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                   <div className="w-full flex justify-between items-center py-4 border-b border-zinc-800 gap-4">
                      <span className="text-zinc-400 text-sm md:text-base whitespace-nowrap">Human Coach</span>
                      <span className="font-bold text-zinc-400 font-mono text-sm md:text-base text-right">$200 — $500/mo</span>
                   </div>
                   <div className="w-full flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
                      <span className="text-white text-lg md:text-xl font-bold">StandrdCoaching</span>
                      <span className="font-bold text-white text-lg md:text-xl font-mono text-center sm:text-right">Dramatically Less</span>
                   </div>
                </div>
                <p className="mt-8 md:mt-12 text-zinc-500 text-sm italic">
                  "Efficiency is the ultimate performance hack."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
