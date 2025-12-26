
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import EmailCapture from './components/EmailCapture';
import TrustFraming from './components/TrustFraming';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <div className="py-24 bg-zinc-50">
          <EmailCapture 
            title="Join the performance waitlist" 
            subtitle="Get early access and a customized baseline program when we launch."
          />
        </div>
        <TrustFraming />
        <div className="py-32 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">Ready for a new standard?</h2>
            <p className="text-xl text-zinc-500 mb-12">Stop tracking. Start being coached.</p>
            <EmailCapture />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
