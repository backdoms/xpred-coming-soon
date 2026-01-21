import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Partners from '../components/Partners';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default Home;