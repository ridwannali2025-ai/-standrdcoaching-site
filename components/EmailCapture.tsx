
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojqqabe';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EmailCapture: React.FC<EmailCaptureProps> = ({ 
  title = "Stop paying for access to information.", 
  subtitle = "The coaching advantage is no longer a scarce resource. Join the transition." 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!EMAIL_REGEX.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div id="waitlist" className="w-full max-w-3xl mx-auto px-6 py-8 md:py-12">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">{title}</h3>
      <p className="text-lg md:text-xl text-zinc-500 mb-10 md:mb-12 text-center max-w-xl mx-auto">{subtitle}</p>
      
      {status !== 'success' ? (
        <form onSubmit={handleSubmit} className="relative flex flex-col sm:block group max-w-2xl mx-auto">
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 md:px-8 py-5 md:py-6 text-lg md:text-xl rounded-2xl md:rounded-full bg-white border border-zinc-200 focus:outline-none focus:border-black transition-all sm:pr-48 shadow-sm"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="mt-3 sm:mt-0 sm:absolute sm:right-3 sm:top-3 sm:bottom-3 px-8 py-4 sm:py-0 bg-black text-white rounded-2xl sm:rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            {status === 'loading' ? 'Submitting...' : 'Join the waitlist'}
          </button>
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-600 text-center">{errorMessage}</p>
          )}
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-[2rem] bg-zinc-950 text-center text-white"
        >
          <p className="text-xl font-bold">Priority access secured.</p>
          <p className="text-zinc-500 text-sm mt-2 font-mono uppercase tracking-widest">Pricing locked for early onboarding.</p>
        </motion.div>
      )}
    </div>
  );
};

export default EmailCapture;
