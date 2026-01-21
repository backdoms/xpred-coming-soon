import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useWaitlist } from '../context/WaitlistContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Markets', href: '/markets' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Top Up', href: '/topup' },
  ];



  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-4'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="h-10 w-auto relative transform group-hover:rotate-12 transition-transform duration-500">
            <img
              src="/xpred-logo.png"
              alt="Xpred Logo"
              className="w-full h-full object-contain hidden dark:block drop-shadow-[0_0_8px_rgba(109,74,255,0.3)]"
            />
            <img
              src="/xpred-logo-color.png"
              alt="Xpred Logo"
              className="w-full h-full object-contain block dark:hidden drop-shadow-[0_0_8px_rgba(109,74,255,0.3)]"
            />
          </div>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-2xl p-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.href ? 'text-white bg-white/[0.1]' : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="text-xs font-bold text-brand-gold uppercase tracking-wider animate-pulse">
            Beta Access Opening Soon
          </div>
          <button
            onClick={openWaitlist}
            className="group relative px-6 py-3 bg-white text-black rounded-full font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 overflow-hidden flex items-center gap-2"
          >
            <span className="relative z-10">Join Waitlist</span>
            <Sparkles size={16} className="text-brand-gold relative z-10" fill="currentColor" />
          </button>
        </div>

        {/* Mobile Menu Button - Original (keeps it visible when closed) */}
        {!isMobileMenuOpen && (
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        )}
      </div>

      {/* Mobile Nav Portal */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[200] flex items-center justify-center overflow-y-auto"
            >
              {/* Close Button Inside Portal */}
              <button
                className="absolute top-6 right-6 text-white p-2 z-[201] hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-col items-center gap-6 w-full py-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-2xl font-display font-bold text-gray-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 w-full px-12 mt-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openWaitlist();
                    }}
                    className="w-full py-5 bg-brand-gold text-black rounded-full font-bold text-xl shadow-[0_0_30px_rgba(109,74,255,0.4)]"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};

export default Header;