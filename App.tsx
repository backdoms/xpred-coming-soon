import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { LiveMarkets, TopUp, Leaderboard } from './pages/PlatformPages';
import {
  TermsOfService,
  PrivacyPolicy,
  ResponsibleGaming,
  AMLPolicy,
  WithdrawalPolicy
} from './pages/LegalPages';

import { WaitlistProvider } from './context/WaitlistContext';

const App: React.FC = () => {
  return (
    <WaitlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="markets" element={<LiveMarkets />} />
            <Route path="topup" element={<TopUp />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="responsible-gaming" element={<ResponsibleGaming />} />
            <Route path="aml-policy" element={<AMLPolicy />} />
            <Route path="withdrawal-policy" element={<WithdrawalPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WaitlistProvider>
  );
};

export default App;