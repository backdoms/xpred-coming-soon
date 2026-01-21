import React from 'react';
import { Wallet, TrendingUp, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-32 bg-black relative overflow-hidden">
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-black to-black"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-500 text-lg">Simple deposits. Skill-based outcomes. Fast withdrawals.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent border-t border-dashed border-white/10"></div>

                    {[
                        {
                            icon: <Wallet size={28} />,
                            title: "Create Profile",
                            desc: "Join the community. Purchase Xpoints to customize your profile and get free Xcoins to start predicting.",
                            step: "01"
                        },
                        {
                            icon: <TrendingUp size={28} />,
                            title: "Build Reputation",
                            desc: "Share your predictions on the feed. Gain followers, climb the social leaderboard, and prove your expertise.",
                            step: "02"
                        },
                        {
                            icon: <Landmark size={28} />,
                            title: "Monetize Skill",
                            desc: "Turn your accuracy into earnings. Redeem your won Xcoins for real cash prizes directly to your bank account.",
                            step: "03"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative bg-[#0A0A0A] border border-white/5 p-10 rounded-[2rem] hover:border-brand-gold/30 transition-all duration-500 z-10"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-black transition-all duration-500 shadow-lg">
                                    {item.icon}
                                </div>
                                <div className="text-5xl font-display font-bold text-white/5 group-hover:text-brand-gold/10 transition-colors">
                                    {item.step}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-brand-gold text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                        Secure Your Spot
                    </button>
                    <p className="mt-4 text-xs text-gray-600">Be the first to know when we launch.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;