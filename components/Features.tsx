import React from 'react';
import { Coins, Zap, Landmark, ArrowLeftRight, Trophy, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:w-2/3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6"
          >
            The Economy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white font-display mb-6 tracking-tight"
          >
            Two Currencies. <br />
            <span className="text-gray-600">One Professional Platform.</span>
          </motion.h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            We've separated practice from performance. Hone your strategy risk-free, then deploy capital when you're ready to win real value.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(340px,auto)]">

          {/* Feature 1: The Dual System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#0A0A0A] rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 rounded-full filter blur-[80px]"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 h-full items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">The Dual Ecosystem</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                      <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Xpoints (Practice)</h4>
                      <p className="text-gray-500 text-sm">Support creators. Purchase Xpoints to tip analysts, boost your posts, and receive free Xcoins.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                      <Coins size={20} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Xcoins (Real Value)</h4>
                      <p className="text-gray-500 text-sm">Monetize your skill. Receive free Xcoins with purchases. Compete in markets to win real redeemable prizes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Representation */}
              <div className="bg-black/50 rounded-2xl p-6 border border-white/10 flex flex-col justify-center items-center text-center">
                <ArrowLeftRight className="text-gray-600 mb-4" />
                <p className="text-sm text-gray-400">Seamlessly switch between Practice Mode and Pro Mode in one click.</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Withdrawals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-[#151515] to-[#050505] rounded-[2rem] p-10 border border-white/5 relative group"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-gold text-black flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Landmark size={28} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Direct Withdrawals</h3>
            <p className="text-gray-400 mb-8">
              Your winnings are yours. Once your Xcoin balance reaches the minimum threshold ($50 equivalent), request a payout directly to your account.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <ShieldCheck size={14} className="text-green-500" /> Secure Processing
            </div>
          </motion.div>

          {/* Feature 3: Copy Trading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0A0A] rounded-[2rem] p-10 border border-white/5 relative group hover:border-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Follow Top Creators</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Connect with the best analysts. Follow the top 1% on the leaderboard, subscribe to their innovative strategies, and learn from their winning predictions.
            </p>
          </motion.div>

          {/* Feature 4: Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-[#0A0A0A] rounded-[2rem] p-10 border border-white/5 relative group hover:border-white/10 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                  <Trophy size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Monthly Tournaments</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Even if you trade small, you can win big. Highest ROI% traders each month win bonus Xcoin allocations from the platform pool.
                </p>
              </div>

              {/* Rank Visual */}
              <div className="flex-1 w-full">
                <div className="bg-black border border-white/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="font-display font-bold text-2xl text-white italic">#1</div>
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-800 rounded-full w-full">
                      <div className="h-full bg-brand-gold w-[90%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-brand-gold font-bold">+412%</div>
                </div>
                <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex items-center gap-4 mt-2 scale-95 opacity-60">
                  <div className="font-display font-bold text-2xl text-gray-500 italic">#2</div>
                  <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-800 rounded-full w-full">
                      <div className="h-full bg-gray-600 w-[70%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-gray-500 font-bold">+280%</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;