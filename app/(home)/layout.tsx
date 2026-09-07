"use client";

import { useEffect } from "react";
import Lenis from "lenis";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
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

  return (
    <>
      <main>{children}</main>
    </>
  );
}
