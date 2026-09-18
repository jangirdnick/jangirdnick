'use client';

import { motion } from 'motion/react';
import { useNav } from './nav/NavContext';
import NavDesktop from './nav/NavDesktop';
import Footer from './footer/Footer';

interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  const { isOpen, setIsOpen } = useNav();

  return (
    <div className="relative  min-h-screen w-full overflow-x-clip bg-foreground">
      <motion.div
        className={`relative w-full min-h-screen bg-background shadow-2xl origin-left ${
          isOpen ? 'overflow-hidden' : ''
        }`}
        onClick={() => {
          if (isOpen) setIsOpen(false);
        }}
      >
        <NavDesktop />
        {children}
        <Footer />
      </motion.div>
    </div>
  );
}
