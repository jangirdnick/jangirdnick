'use client';

import { useState, useEffect, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useNav } from '../NavContext';

const RightSide = lazy(() => import('./RightSide'));

export default function MenuNav() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, setIsOpen, toggleMenu } = useNav();

  useEffect(() => {
    const updateVisibility = (y: number) => {
      const isMobile = window.innerWidth < 768;
      if (isMobile || y > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    updateVisibility(scrollY.get());

    const handleResize = () => {
      updateVisibility(scrollY.get());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollY]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile || latest > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <>
      {/* Sticky Floating Trigger Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-3 md:top-6 right-6 md:right-8 z-999999"
          >
            <button
              onClick={toggleMenu}
              className="group flex items-center gap-3 bg-[#1A1813]/90 hover:bg-[#25221B] backdrop-blur-xl border border-white/15 text-white px-3 py-1.5 xl:px-5 xl:py-2.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none max-md:mt-1.5"
              aria-label="Toggle Menu"
            >
              <span className="text-sm lg:text-xs xl:text-base font-helveticaMediumItalic tracking-wider uppercase text-background/90 group-hover:text-white transition-colors">
                {isOpen ? 'Close' : 'Menu'}
              </span>

              {/* Animated Dot / Close Indicator */}
              <div className="relative flex items-center justify-center w-5 h-5">
                <span
                  className={`absolute w-2 h-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-orange-500 scale-125' : 'bg-white group-hover:bg-orange-400 group-hover:scale-125'}`}
                />
                <span
                  className={`absolute w-4 h-4 rounded-full border border-white/40 transition-all duration-300 ${isOpen ? 'scale-110 border-orange-500/60' : 'scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100'}`}
                />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right-Side Off-Canvas Menu Drawer Panel */}
      <RightSide isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
