import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, MessageCircle, Share2, MoreHorizontal, UserPlus, TrendingUp } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import Countdown from './Countdown';
import { supabase } from '../lib/supabaseClient';

import { useWaitlist } from '../context/WaitlistContext';

const Hero: React.FC = () => {
  const { openWaitlist } = useWaitlist();
  // ... (props/state definition)

  // ... inside Hero
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [queueStats, setQueueStats] = useState<{ rank: number; total: number } | null>(null);
  const [totalWaitlist, setTotalWaitlist] = useState(0);

  const fetchQueueStatus = async (emailToCheck: string) => {
    try {
      const { data, error } = await supabase.rpc('get_waitlist_status', { email_input: emailToCheck });
      if (error) throw error;
      if (data && data.is_waitlisted) {
        setQueueStats({ rank: data.rank, total: data.total });
      }
      if (data && data.total) { // Update total even if not waitlisted (for general count)
        setTotalWaitlist(data.total);
      }
    } catch (err) {
      console.error("Error fetching status:", err);
    }
  };

  useEffect(() => {
    // Fetch total count on mount (passing dummy email to just get totals)
    fetchQueueStatus('dummy_init_fetch');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('waitlist').insert([{ email }]);
      if (insertError) {
        if (insertError.code === '23505') { // Unique violation
          await fetchQueueStatus(email);
          setSubmitted(true);
        } else {
          throw insertError;
        }
      } else {
        await fetchQueueStatus(email);
        setSubmitted(true);
      }
      setEmail('');
    } catch (err: any) {
      console.error('Error adding to waitlist:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center overflow-hidden bg-[#030303]">
      {/* Dynamic Background - Gold & Blue for the two currencies */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-40"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 opacity-30"></div>

      <ParticlesBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
              <ShieldCheck size={14} className="text-green-400" />
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Skill-Based Social Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tighter text-white mb-8">
              The Social Media <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-purple-400 to-brand-blue animate-pulse-glow">for Predictions.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
              Build your reputation. Share your insights. Monetize your skill.
              <br />Join the first platform where <strong className="text-brand-blue">Content</strong> meets <strong className="text-brand-gold">Capital</strong>.
            </p>

            <div className="flex flex-col items-start gap-4 mb-12 max-w-md">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full relative">
                  <div className="relative flex items-center bg-white/[0.05] border border-white/[0.1] rounded-2xl p-2 focus-within:border-brand-gold/50 transition-colors">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent border-none text-white placeholder-gray-500 px-4 py-3 outline-none font-medium w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap"
                    >
                      {loading ? 'Joining...' : <>Secure Spot <ArrowRight size={18} /></>}
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-xs mt-3 pl-2">{error}</p>}
                  <p className="text-gray-500 text-xs mt-4 pl-2">
                    Join {(totalWaitlist + 1000).toLocaleString()} creators on the waitlist.
                  </p>
                </form>
              ) : (
                <div className="w-full bg-brand-gold/10 border border-brand-gold/20 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-brand-gold text-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-brand-gold font-bold text-lg mb-1">Spot Secured!</h3>
                  {queueStats ? (
                    <p className="text-white">You are <span className="font-bold">#{(queueStats.rank + 1000).toLocaleString()}</span> in line.</p>
                  ) : (
                    <p className="text-white">You have been added to the list.</p>
                  )}
                </div>
              )}
            </div>



          </motion.div>

          {/* Social Media Post Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* Card Container */}
            <div className="relative w-full max-w-[420px] mx-auto bg-[#0A0A0A] rounded-[2rem] border border-white/10 p-6 shadow-2xl overflow-hidden group hover:border-brand-gold/20 transition-all duration-500">

              {/* User Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                    <img src="https://picsum.photos/200" alt="User" className="w-full h-full rounded-full border-2 border-[#0A0A0A] object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-sm">Alex Rivera</h4>
                      <ShieldCheck size={14} className="text-brand-gold" fill="currentColor" />
                    </div>
                    <p className="text-xs text-gray-500">@arivera • Top 1% Analyst</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Content Definition */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Supply chain leaks confirm it. <span className="text-brand-blue">#OpenAI</span> is gearing up for a major release. My model predicts GPT-5 drops before Q3. 🚀
                </p>

                {/* Prediction Block */}
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5 hover:border-brand-gold/20 transition-colors group/pred">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Prediction</span>
                    <div className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                      <TrendingUp size={12} /> High Confidence
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4">GPT-5 Release before Q3 2025?</h3>

                  <div className="relative h-10 w-full bg-gray-800 rounded-lg overflow-hidden flex items-center mb-2">
                    <div className="absolute left-4 z-10 text-xs font-bold text-black">YES 72%</div>
                    <div className="h-full bg-brand-gold w-[72%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                    <span>$142,500 Vol</span>
                    <span>Ends in 14d</span>
                  </div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group/like">
                    <Heart size={20} className="group-hover/like:fill-red-500 transition-all" />
                    <span className="text-xs font-bold">4.2k</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <MessageCircle size={20} />
                    <span className="text-xs font-bold">128</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                  <UserPlus size={14} /> Copy Prediction
                </button>
              </div>

            </div>

            {/* Floating Notification */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-[#151515] p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                <img src="https://picsum.photos/201" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-gray-300 leading-tight"><strong>Sarah</strong> copied this prediction.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;