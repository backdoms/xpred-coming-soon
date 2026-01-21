import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-start">
      <div className="relative overflow-hidden h-10 md:h-14">
        <AnimatePresence mode="popLayout">
          <motion.span 
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="block text-3xl md:text-5xl font-bold font-display text-white tabular-nums leading-none tracking-tight"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex items-start gap-4 md:gap-8 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm inline-flex">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl md:text-4xl font-light text-gray-600 -mt-1">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl md:text-4xl font-light text-gray-600 -mt-1">:</span>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <span className="text-2xl md:text-4xl font-light text-gray-600 -mt-1">:</span>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;