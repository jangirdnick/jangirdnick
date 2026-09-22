'use client';

import { useState, useEffect, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useNav } from '../NavContext';
import { usePageLoader } from '../../loader/PageLoader';

const RightSide = lazy(() => import('./RightSide'));

// Single source of truth for the mobile breakpoint check
const getIsMobile = (): boolean => typeof window !== 'undefined' && window.innerWidth < 768;

export default function MenuNav() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, setIsOpen, toggleMenu } = useNav();
  const { isLoaded, isInitialLoad } = usePageLoader();

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(getIsMobile() || scrollY.get() > 120);
    };

    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    return () => window.removeEventListener('resize', updateVisibility);
  }, [scrollY]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(getIsMobile() || latest > 120);
  });

  return (
    <>
      {/* Sticky Floating Trigger Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={
              isInitialLoad
                ? { y: -50, opacity: 0, scale: 0.9 }
                : { opacity: 0, scale: 0.9, y: -10 }
            }
            animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : { y: -50, opacity: 0, scale: 0.9 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
              delay: !isInitialLoad && getIsMobile() ? 1.2 : 0,
            }}
            className="fixed top-2.5 md:top-6 right-4 md:right-8 z-999999"
          >
            <button
              onClick={toggleMenu}
              className="group flex items-center gap-3 bg-[#1A1813]/90 hover:bg-[#25221B] backdrop-blur-xl border border-white/15 text-white px-3 py-1.5 xl:px-5 xl:py-2.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none max-md:mt-1.5"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
