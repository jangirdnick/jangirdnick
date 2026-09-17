'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * FooterAnimated wraps the footer's inner content with scroll-driven
 * parallax transforms. This is the ONLY part of Footer that needs
 * 'use client' — isolating it here keeps the outer <footer> shell
 * as a Server Component.
 */
export default function FooterAnimated({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <motion.div style={{ y, opacity, scale }} className="w-full h-full flex flex-col">
        {children}
      </motion.div>
    </div>
  );
}
