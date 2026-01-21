import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/white', color: '#635BFF' },
    { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/white', color: '#4285F4' },
    { name: 'Google Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/white', color: '#8E75B2' }, // Fallback logic might be needed if this slug doesn't exist, but usually simpleicons is up to date.
    { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/white', color: '#10A37F' },
    { name: 'MoonPay', logo: 'https://vectorlogoseek.com/wp-content/uploads/2023/07/moonpay-vector-logo-w.png', color: '#7D00FF' }, // Manual URL check or text fallback
    { name: 'Binance', logo: 'https://cdn.simpleicons.org/binance/white', color: '#F0B90B' },
];

const Partners: React.FC = () => {
    // Duplicate array for infinite scroll effect
    const marqueePartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-24 bg-[#030303] overflow-hidden relative border-t border-white/5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase">Powered By Industry Leaders</p>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x">
                <div className="max-w-[100vw] flex overflow-hidden relative fade-mask">
                    <motion.div
                        className="flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-full px-12"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {marqueePartners.map((p, i) => (
                            <div
                                key={`${p.name}-${i}`}
                                className="group flex flex-col items-center justify-center gap-4 min-w-[150px] relative transition-all duration-300"
                            >
                                <div className="h-12 md:h-14 opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform group-hover:scale-110 filter drop-shadow-lg partner-glow">
                                    <img
                                        src={p.logo}
                                        alt={p.name}
                                        className="h-full w-auto object-contain"
                                        onError={(e) => {
                                            // Fallback if image fails
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerText = p.name;
                                            e.currentTarget.parentElement!.style.color = 'white';
                                            e.currentTarget.parentElement!.style.fontWeight = 'bold';
                                            e.currentTarget.parentElement!.style.fontSize = '24px';
                                        }}
                                    />
                                </div>

                                {/* Glow Effect on Hover */}
                                <div
                                    className="absolute inset-0 bg-white/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
                                    style={{ backgroundColor: p.color }}
                                ></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
          .mask-gradient-x {
             mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
             -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          }
       `}</style>
        </section>
    );
};

export default Partners;
