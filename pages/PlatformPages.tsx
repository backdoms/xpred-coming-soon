import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Trophy, Lock, ArrowUpRight, Coins } from 'lucide-react';

const ComingSoonOverlay = () => (
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-20">
    <div className="bg-[#151515] p-8 rounded-2xl border border-white/10 text-center max-w-sm mx-4">
      <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Lock size={24} className="text-brand-gold" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Beta Access Required</h3>
      <p className="text-gray-400 mb-6">This feature is currently available to invited beta testers only. Join the waitlist to get access.</p>
      <button className="bg-brand-gold text-black font-bold py-3 px-6 rounded-full w-full hover:scale-105 transition-transform">
        Join Waitlist
      </button>
    </div>
  </div>
);

export const LiveMarkets: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold font-display text-white mb-2">Live Markets</h1>
          <p className="text-gray-400">Discover trending prediction opportunities.</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white">All</span>
          <span className="px-3 py-1 bg-transparent border border-white/10 rounded-full text-xs font-bold text-gray-400">Crypto</span>
          <span className="px-3 py-1 bg-transparent border border-white/10 rounded-full text-xs font-bold text-gray-400">Tech</span>
          <span className="px-3 py-1 bg-transparent border border-white/10 rounded-full text-xs font-bold text-gray-400">Sports</span>
        </div>
      </div>

      <div className="relative">
        <ComingSoonOverlay />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-30 pointer-events-none">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-xs font-bold text-brand-gold uppercase">Trending</span>
                <span className="text-xs text-gray-500">Ends in 2d</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Bitcoin to hit $100k before December?</h3>
              <div className="h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
                <div className="bg-brand-gold w-3/4 h-full"></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white font-bold">Yes 75%</span>
                <span className="text-gray-500">Vol: $1.2M</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TopUp: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold font-display text-white mb-4">Get XPoints</h1>
        <p className="text-gray-400">Purchase XPoints for social play and receive <strong className="text-brand-gold">FREE XCoins</strong> as a sweepstakes bonus.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <ComingSoonOverlay />
        <div className="grid md:grid-cols-3 gap-6 opacity-30 pointer-events-none">
          {[
            { xp: 10000, xc: 1000, price: 10, popular: false },
            { xp: 55000, xc: 5500, price: 50, popular: true },
            { xp: 120000, xc: 12000, price: 100, popular: false }
          ].map((pkg, i) => (
            <div key={i} className={`bg-[#0A0A0A] border ${pkg.popular ? 'border-brand-gold' : 'border-white/10'} rounded-2xl p-8 relative flex flex-col items-center text-center group hover:bg-white/5 transition-colors`}>
              {pkg.popular && <div className="absolute -top-3 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>}

              <div className="mb-6">
                <span className="text-4xl font-bold text-white block">{pkg.xp.toLocaleString()}</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">XPoints</span>
              </div>

              <div className="w-full bg-brand-gold/10 rounded-xl p-3 mb-6 border border-brand-gold/20">
                <span className="text-xs text-brand-gold font-bold uppercase block mb-1">Free Bonus</span>
                <div className="flex items-center justify-center gap-2">
                  <Coins size={16} className="text-brand-gold" />
                  <span className="text-xl font-bold text-white">+{pkg.xc.toLocaleString()} XC</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
                  {pkg.price === 0 ? 'Free' : `$${pkg.price}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Leaderboard: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-white mb-2">Global Leaderboard</h1>
        <p className="text-gray-400">Top performers this season.</p>
      </div>

      <div className="relative">
        <ComingSoonOverlay />
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden opacity-30 pointer-events-none">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-xs font-bold text-gray-500 uppercase">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Trader</div>
            <div className="col-span-3 text-right">ROI</div>
            <div className="col-span-3 text-right">Profit</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/5">
              <div className="col-span-1 font-bold text-white">#{i}</div>
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                <span className="text-white font-medium">Trader_{9900 + i}</span>
              </div>
              <div className="col-span-3 text-right text-green-400 font-bold">+{300 - i * 20}%</div>
              <div className="col-span-3 text-right text-brand-gold font-bold">{15000 - i * 1000} XC</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};