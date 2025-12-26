
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 bg-zinc-50 border-y border-zinc-100 z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32 mb-12 lg:mb-0 z-20">
            <h2 className="text-[3rem] md:text-[4rem] font-bold leading-none tracking-tighter mb-8">
              The coordination <br />
              <span className="text-zinc-400">gap.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-md">
              Most fitness tools are just data graveyards. Most human coaches are limited by their own schedules and subjective intuition. 
              The problem isn't a lack of data—it's the lack of a coordinator.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32 relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-300 mb-6">The Static Failure</h3>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                Traditional coaching relies on static methods. But sleep, stress, and metabolism are volatile. You don't need a weekly check-in; you need a system that adapts by the hour.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-lg"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-300 mb-6">The Knowledge Parity</h3>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                Coaches don't possess secret knowledge. Best practices are public, but applying them precisely across training, nutrition, and recovery is a computation problem, not a conversation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-lg p-8 md:p-10 bg-white border border-zinc-200 rounded-[2rem] shadow-sm"
            >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 rounded-full bg-black"></div>
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">System Status: Synchronizing</span>
               </div>
               <p className="text-base md:text-lg text-zinc-600 italic">
                 "Our coordinator aligns your training intensity with your current metabolic recovery rate, removing the need for human guesswork."
               </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
