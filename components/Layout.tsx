import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FAB from './FAB';
import WaitlistModal from './WaitlistModal';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Only add cursor on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);

      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      window.addEventListener('mousemove', moveCursor);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        if (document.body.contains(cursor)) {
          document.body.removeChild(cursor);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white selection:bg-brand-gold selection:text-black">
      <Header />
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
      <WaitlistModal />
      <Footer />
      <FAB />
    </div>
  );
};

export default Layout;