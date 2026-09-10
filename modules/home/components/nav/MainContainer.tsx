'use client';

import { motion } from 'motion/react';
import { useNav } from './NavContext';
import NavDesktop from '@/modules/home/components/Nav/NavDesktop';

interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  const { isOpen, setIsOpen } = useNav();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-foreground">
      <motion.div
        animate={{
          x: isOpen ? '-420px' : '0px',
          opacity: isOpen ? 0.7 : 1,
          borderRadius: isOpen ? '28px' : '0px',
        }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full min-h-screen bg-background shadow-2xl origin-left overflow-hidden cursor-pointer"
        onClick={() => {
          if (isOpen) setIsOpen(false);
        }}
      >
        <NavDesktop />
        {children}
      </motion.div>
    </div>
  );
}
