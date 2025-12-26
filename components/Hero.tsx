
import React from 'react';
import { motion } from 'framer-motion';
import IPhoneMockup from './IPhoneMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[10vw] md:text-[6.5rem] font-bold leading-[0.9] tracking-[-0.04em] mb-12">
              Why pay $200/mo <br />
              <span className="font-serif italic font-normal text-zinc-400">for a coach </span> <br />
              when a system <br />
              does more?
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-12 md:items-end"
          >
            <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-xl">
              StandrdCoaching is a coaching coordinator. It removes the information scarcity that keeps traditional coaching expensive, providing a better system at a fraction of the cost.
            </p>
            <div className="flex gap-4">
              <a href="#waitlist" className="px-10 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200">
                Get Early Access
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 flex justify-center lg:justify-end pr-0 lg:pr-20"
        >
          <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <IPhoneMockup size="large" />
            <div className="absolute -bottom-12 -left-20 z-20 hidden lg:block rotate-[6deg]">
               <IPhoneMockup size="medium" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] -z-10" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}>
      </div>
    </section>
  );
};

export default Hero;
