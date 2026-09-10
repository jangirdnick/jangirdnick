'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { NavProvider } from '@/modules/home/components/Nav/NavContext';
import MainContainer from '@/modules/home/components/Nav/MainContainer';
import MenuNav from '@/modules/home/components/Nav/Menu/MenuNav';

interface HomeLayoutClientProps {
  children: React.ReactNode;
}

export default function HomeLayoutClient({ children }: HomeLayoutClientProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Dynamic tab title change on browser tab switch
  useEffect(() => {
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle = document.title;
        document.title = 'Jangir d nick? ☕️';
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
      <MainContainer>{children}</MainContainer>
    </NavProvider>
  );
}
