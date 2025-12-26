
import React from 'react';

interface IPhoneMockupProps {
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ size = 'medium', children }) => {
  const sizeClasses = {
    small: 'w-[180px] h-[360px]',
    medium: 'w-[260px] h-[520px]',
    large: 'w-[300px] h-[600px]',
  };

  const scale = size === 'small' ? 0.7 : size === 'medium' ? 1 : 1.1;

  return (
    <div className={`relative ${sizeClasses[size]} group`}>
      {/* Device Frame */}
      <div className="absolute inset-0 bg-zinc-900 rounded-[3rem] border-4 border-zinc-800 shadow-2xl p-1.5 overflow-hidden">
        {/* Inner Border/Bezel */}
        <div className="absolute inset-0 bg-black rounded-[2.8rem] border-[10px] border-zinc-950"></div>
        
        {/* Screen Content - Placeholder Style */}
        <div className="relative w-full h-full bg-zinc-50 rounded-[2.2rem] overflow-hidden">
          {children ? children : (
            <div className="w-full h-full flex flex-col p-6 gap-6">
              {/* Dynamic Island Placeholder */}
              <div className="mx-auto w-24 h-6 bg-black rounded-full mb-4"></div>
              
              {/* Header Placeholder */}
              <div className="w-1/2 h-4 bg-zinc-200 rounded-full"></div>
              
              {/* Main Visual Placeholder */}
              <div className="w-full h-32 bg-zinc-100 rounded-2xl flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full border-2 border-zinc-200"></div>
              </div>
              
              {/* Text Lines */}
              <div className="space-y-3">
                <div className="w-full h-3 bg-zinc-200 rounded-full"></div>
                <div className="w-full h-3 bg-zinc-200 rounded-full"></div>
                <div className="w-2/3 h-3 bg-zinc-200 rounded-full"></div>
              </div>

              {/* Grid Placeholder */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="h-20 bg-zinc-100 rounded-xl"></div>
                <div className="h-20 bg-zinc-100 rounded-xl"></div>
              </div>

              <div className="mt-auto pb-4 flex justify-center">
                 <div className="w-1/3 h-1.5 bg-zinc-300 rounded-full"></div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="absolute top-24 -left-1 w-1 h-8 bg-zinc-800 rounded-r-sm"></div>
        <div className="absolute top-36 -left-1 w-1 h-12 bg-zinc-800 rounded-r-sm"></div>
        <div className="absolute top-52 -left-1 w-1 h-12 bg-zinc-800 rounded-r-sm"></div>
        <div className="absolute top-36 -right-1 w-1 h-16 bg-zinc-800 rounded-l-sm"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
