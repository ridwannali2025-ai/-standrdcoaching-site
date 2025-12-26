
import React from 'react';
import { motion } from 'framer-motion';
import IPhoneMockup from './IPhoneMockup';

const FeatureItem: React.FC<{ 
  number: string;
  title: string; 
  desc: string; 
  delay?: number 
}> = ({ number, title, desc, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className="group border-t border-zinc-100 pt-10 pb-16 md:pt-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-24"
  >
    <div className="md:w-32">
      <span className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">{number}</span>
    </div>
    <div className="flex-1 max-w-xl">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6">{title}</h3>
      <p className="text-base md:text-lg text-zinc-500 leading-relaxed">{desc}</p>
    </div>
    <div className="flex-1 flex justify-center md:justify-end items-center">
       <div className="w-full max-w-[160px] md:max-w-[200px] opacity-10 group-hover:opacity-40 transition-opacity duration-700">
         <IPhoneMockup size="small" />
       </div>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="system" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6 md:mb-8">System Architecture</h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
            A unified model for human optimization.
          </p>
        </div>

        <div className="space-y-0">
          <FeatureItem 
            number="01"
            title="Adaptive Load Scaling" 
            desc="The core engine manages your daily volume and intensity. It replaces the 'subjective feeling' check-in with a hard audit of your heart rate variability and performance velocity."
          />
          <FeatureItem 
            number="02"
            title="Nutritional Coordination" 
            desc="Metabolic steering that actually works. We coordinate your intake based on the upcoming week's scheduled stress, adjusting your targets as your biometrics evolve."
            delay={0.1}
          />
          <FeatureItem 
            number="03"
            title="Research Synchronization" 
            desc="The system is constantly informed by emerging sports science. Best practices are integrated into your program as soon as the evidence supports them."
            delay={0.2}
          />
          <FeatureItem 
            number="04"
            title="Feedback Synthesis" 
            desc="A human coach can only listen to so much data. Our coordinator synthesizes every tracked rep, meal, and hour of sleep into a single actionable path forward."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
