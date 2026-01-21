import React from 'react';
import { Twitter, Linkedin, Facebook, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/[0.08]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div className="max-w-md">
            <div className="w-24 h-8 mb-6 relative">
              <img
                src="/xpred-logo.png"
                alt="Xpred"
                className="w-full h-full object-contain object-left"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The skill-based social prediction market. <br />
              Analyze. Predict. Profit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm">
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link to="/markets" className="hover:text-brand-gold cursor-pointer transition-colors">Live Markets</Link></li>
                <li><Link to="/topup" className="hover:text-brand-gold cursor-pointer transition-colors">Top Up Xcoins</Link></li>
                <li><Link to="/leaderboard" className="hover:text-brand-gold cursor-pointer transition-colors">Leaderboards</Link></li>
                <li><Link to="/withdrawal-policy" className="hover:text-brand-gold cursor-pointer transition-colors">Withdrawal Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link to="/terms" className="hover:text-brand-gold cursor-pointer transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-brand-gold cursor-pointer transition-colors">Privacy Policy</Link></li>
                <li><Link to="/responsible-gaming" className="hover:text-brand-gold cursor-pointer transition-colors">Responsible Gaming</Link></li>
                <li><Link to="/aml-policy" className="hover:text-brand-gold cursor-pointer transition-colors">AML Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs flex items-center gap-2">
            <Shield size={14} />
            <span>18+ | Skill-based trading platform. Not a gambling site.</span>
          </div>
          <div className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Xpred Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;