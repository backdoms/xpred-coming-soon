import React from 'react';
import { Sparkles } from 'lucide-react';

const FAB: React.FC = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300 group shadow-white/20">
      <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform text-brand-gold fill-brand-gold" />
      <span className="absolute right-0 top-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
      </span>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/90 text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Get Early Access
      </div>
    </button>
  );
};

export default FAB;