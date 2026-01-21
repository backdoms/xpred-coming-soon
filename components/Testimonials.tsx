import React from 'react';
import { Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    role: 'Tech Analyst',
    content: "I used to just post my predictions on Twitter for free. On XPred, I built a following of 5k people and monetized my analysis in my first month.",
    avatar: 'https://picsum.photos/100/100?random=10',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah L.',
    role: 'Political Science Student',
    content: "The best part is the reputation system. I proved my political insights were accurate with Xpoints, and now thousands follow my Xcoin positions.",
    avatar: 'https://picsum.photos/100/100?random=11',
    rating: 5
  },
  {
    id: '3',
    name: 'Javier R.',
    role: 'Sports Statistician',
    content: "Finally, a place where sports knowledge pays off. I treat my profile like a business. If you know the stats, you top the leaderboard.",
    avatar: 'https://picsum.photos/100/100?random=12',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#030303]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Hype</span>
          </h2>
          <p className="text-gray-500">Join creators monetizing their influence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#0A0A0A] p-8 rounded-[2rem] border border-white/5 relative group hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <img src={t.avatar} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{t.role}</p>
                  </div>
                </div>
                <div className="text-brand-gold/20">
                  <Quote size={24} fill="currentColor" />
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">"{t.content}"</p>

              <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-wide">
                <CheckCircle size={14} /> Verified Withdrawal
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;