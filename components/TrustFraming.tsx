
import React from 'react';

const TrustFraming: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-24 items-start">
          <div className="flex-1">
            <h2 className="text-[3rem] font-bold tracking-tighter leading-none mb-10">Grounded in <br />evidence.</h2>
            <div className="space-y-12">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">Information Parity</h4>
                <p className="text-zinc-500 text-lg">We use the same peer-reviewed protocols used by elite performance coaches, removing the artificial barrier between you and the best methodology.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">Algorithmic Integrity</h4>
                <p className="text-zinc-500 text-lg">Our system is built to minimize bias. We don't have favorite exercises or dietary fads; we have outcomes driven by your unique data.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">Scalable Intelligence</h4>
                <p className="text-zinc-500 text-lg">As research evolves, so does the system. Your program is never the same twice because human knowledge is never static.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-zinc-50 p-16 rounded-[3rem] border border-zinc-100">
             <blockquote className="text-3xl font-normal leading-tight text-zinc-800 tracking-tight">
               "The next phase of human physical development isn't about better discipline; it's about better coordination. We're removing the middleman from the information economy of fitness."
             </blockquote>
             <div className="mt-12 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-zinc-200"></div>
                <div>
                   <p className="font-bold text-base tracking-tight">Dr. Marcus Vance</p>
                   <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Head of Performance Architecture</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFraming;
