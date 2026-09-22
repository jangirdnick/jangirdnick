'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { NavProvider } from '@/components/nav/NavContext';
import MainContainer from '@/components/MainContainer';
import MenuNav from '@/components/nav/Menu/MenuNav';
import PageLoader from '@/components/loader/PageLoader';
import PageTransition from '@/components/transition/PageTransition';

import { setLenisInstance } from '@/components/nav/LenisControl';

interface HomeLayoutClientProps {
  children: React.ReactNode;
}

export default function HomeLayoutClient({ children }: HomeLayoutClientProps) {
  useEffect(() => {
    // autoRaf: true — Lenis manages its own requestAnimationFrame loop internally.
    // Do NOT also call requestAnimationFrame manually — that creates a second loop.
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      autoResize: true,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenisInstance(lenis);

    return () => {
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  // Dynamic tab title change on browser tab switch
  useEffect(() => {
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle = document.title;
        document.title = 'Jangir D Nick? ☕️';
      } else {
        if (originalTitle) {
          document.title = originalTitle;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <NavProvider>
      <MenuNav />
      <PageLoader>
        <MainContainer>
          <PageTransition>{children}</PageTransition>
        </MainContainer>
      </PageLoader>
    </NavProvider>
  );
}
