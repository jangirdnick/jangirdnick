'use client';

import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { FrozenRouter } from './FrozenRouter';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0.96,
          scale: 1.02,
          x: '-0.1%',
          y: '0.75%',
          filter: 'blur(2.4px) contrast(1.1)',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px) contrast(1)',
        }}
        exit={{
          opacity: 0.96,
          scale: 1.02,
          x: '-0.1%',
          y: '0.75%',
          filter: 'blur(2.4px) contrast(1.1)',
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full origin-center"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
