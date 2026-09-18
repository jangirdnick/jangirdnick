'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';

/* ═══════════════════════════════════════════════
   PREMIUM MOTION CONFIG (Token-aligned)
═══════════════════════════════════════════════ */
const EASE_SMOOTH_OUT = [0.22, 1, 0.36, 1] as const; // --ease-smooth-out

const DURATION_OPEN = 0.5; // emphasis moment
const DURATION_CLOSE = 0.4; // fast panel close

const HOLD_AT_100 = 200; // ms — let user feel 100%
const SAFETY_MS = 2500; // max time before forced exit

/* ═══════════════════════════════════════════════
   MAIN PAGE LOADER
═══════════════════════════════════════════════ */
export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>('loading');

  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, {
    stiffness: 100, // gentle preset for smoother fill
    damping: 20,
    mass: 1,
    restDelta: 0.001,
  });
  const progressScaleX = useTransform(smoothProgress, [0, 100], [0, 1]);

  /* scroll lock & lenis resize trigger */
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (phase !== 'done') {
      window.scrollTo(0, 0);
    } else {
      window.dispatchEvent(new Event('resize'));
    }
  }, [phase]);

  /* guaranteed exit transition fallback */
  useEffect(() => {
    if (phase === 'exiting') {
      const timer = window.setTimeout(() => setPhase('done'), DURATION_CLOSE * 1000 + 50);
      return () => window.clearTimeout(timer);
    }
  }, [phase]);

  /* progress driver */
  useEffect(() => {
    let target = 15;
    let locked = false;
    progressValue.set(target);

    const bump = (n: number) => {
      target = Math.max(target, n);
      progressValue.set(target);
    };

    const onDom = () => bump(50);
    const onFonts = () => bump(80);
    const onLoad = () => bump(100);

    if (document.readyState === 'interactive' || document.readyState === 'complete') onDom();
    else document.addEventListener('DOMContentLoaded', onDom);

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);

    document.fonts?.ready?.then(onFonts);

    const safety = window.setTimeout(() => bump(100), SAFETY_MS);

    const unsub = smoothProgress.on('change', (v) => {
      if (!locked && v >= 99.5) {
        locked = true;
        progressValue.set(100);
        window.setTimeout(() => setPhase('exiting'), HOLD_AT_100);
      }
    });

    return () => {
      document.removeEventListener('DOMContentLoaded', onDom);
      window.removeEventListener('load', onLoad);
      window.clearTimeout(safety);
      unsub();
    };
  }, [progressValue, smoothProgress]);

  const isExiting = phase === 'exiting' || phase === 'done';

  return (
    <div className="relative min-h-screen w-full  bg-black">
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={
              isExiting
                ? {
                    opacity: 0,
                    filter: 'blur(0.5px)',
                    scale: 1.05,
                    transition: { duration: DURATION_CLOSE, ease: EASE_SMOOTH_OUT },
                  }
                : { opacity: 1, scale: 1 }
            }
            onAnimationComplete={() => {
              if (phase === 'exiting') setPhase('done');
            }}
            className="fixed inset-0 z-9999 overflow-hidden bg-background flex items-center justify-center will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
              animate={
                isExiting
                  ? {
                      opacity: 0,
                      scale: 1.1,
                      filter: 'blur(4px)',
                      transition: { duration: DURATION_CLOSE, ease: EASE_SMOOTH_OUT },
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: DURATION_OPEN, ease: EASE_SMOOTH_OUT },
                    }
              }
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center">
                  <div className="relative w-4 h-4 md:w-3 md:h-3 xl:w-4 xl:h-4 rounded-full bg-black" />
                  <div>
                    <p className="text-2xl md:text-xl xl:text-3xl font-helveticaMediumItalic pt-0.5 tracking-[-0.9]">
                      -Nick
                    </p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-[90%] h-[2px] bg-black/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black origin-left"
                    style={{ scaleX: progressScaleX }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAGE REVEAL — same timeline as loader exit */}
      <motion.div
        initial={{ scale: 0.8, filter: 'blur(1px)', rotate: 1 }}
        animate={
          isExiting
            ? {
                scale: 1,
                filter: 'blur(0px)',
                rotate: 0,
                transition: { duration: DURATION_CLOSE, ease: EASE_SMOOTH_OUT },
              }
            : { scale: 0.8, filter: 'blur(1px)', rotate: 1 }
        }
        style={phase === 'done' ? { transform: 'none', filter: 'none' } : undefined}
        className={`w-full origin-center will-change-transform ${
          phase === 'done' ? '' : 'h-screen overflow-hidden'
        }`}
      >
        {children}
      </motion.div>
    </div>
  );
}
