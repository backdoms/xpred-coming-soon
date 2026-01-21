import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useWaitlist } from '../context/WaitlistContext';

const WaitlistModal: React.FC = () => {
    const { isOpen, closeWaitlist } = useWaitlist();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [queueStats, setQueueStats] = useState<{ rank: number; total: number } | null>(null);

    const fetchQueueStatus = async (emailToCheck: string) => {
        try {
            const { data, error } = await supabase.rpc('get_waitlist_status', { email_input: emailToCheck });
            if (error) throw error;
            if (data && data.is_waitlisted) {
                setQueueStats({ rank: data.rank, total: data.total });
            }
        } catch (err) {
            console.error("Error fetching status:", err);
        }
    };

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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeWaitlist}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0A0A0A] border border-white/10 w-full max-w-lg rounded-3xl p-8 pointer-events-auto relative shadow-2xl shadow-brand-gold/5 overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeWaitlist}
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Background Blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full filter blur-[80px] -z-10 pointer-events-none"></div>

                            {!submitted ? (
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2 font-display">Secure Your Spot</h2>
                                    <p className="text-gray-400 mb-8">Join the exclusive beta for early access to the Social Prediction Economy.</p>

                                    <form onSubmit={handleSubmit} className="relative">
                                        <div className="relative flex items-center bg-white/[0.05] border border-white/[0.1] rounded-2xl p-2 focus-within:border-brand-gold/50 transition-colors">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 bg-transparent border-none text-white placeholder-gray-500 px-4 py-3 outline-none font-medium"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                {loading ? 'Joining...' : <>Join <ArrowRight size={18} /></>}
                                            </button>
                                        </div>
                                        {error && <p className="text-red-400 text-xs mt-3 pl-2">{error}</p>}
                                        <p className="text-gray-500 text-xs mt-4 pl-2 text-center">
                                            Limited spots available. No purchase necessary.
                                        </p>
                                    </form>
                                </div>
                            ) : (
                                <div className="text-center py-4">
                                    <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">You're on the list!</h2>
                                    <p className="text-gray-400 mb-8 max-w-xs mx-auto">We'll notify you as soon as spots open up for your region.</p>

                                    {queueStats && (
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                                            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Current Position</p>
                                            <div className="flex justify-center items-baseline gap-1">
                                                <span className="text-4xl font-bold text-white">#{(queueStats.rank + 1000).toLocaleString()}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">out of {(queueStats.total + 1000).toLocaleString()} creators</p>
                                        </div>
                                    )}

                                    <button
                                        onClick={closeWaitlist}
                                        className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WaitlistModal;
