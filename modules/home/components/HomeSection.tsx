'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Button from '../../../components/Button';
import { usePageLoader } from '@/components/loader/PageLoader';
import Link from 'next/link';

// Module-level stable references — never re-created on render
const subscribeWindowWidth = (callback: () => void): (() => void) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};
const getWindowWidthSnapshot = (): number => window.innerWidth;
// Server snapshot: assume desktop width to match the desktop-first image choice
const getWindowWidthServerSnapshot = (): number => 1200;

export default function HomeSection() {
  const { isLoaded, isInitialLoad } = usePageLoader();
  const { scrollY } = useScroll();

  const windowWidth = useSyncExternalStore(
    subscribeWindowWidth,
    getWindowWidthSnapshot,
    getWindowWidthServerSnapshot
  );

  // Responsive breakpoints according to window.innerWidth
  const is2xl = windowWidth >= 1536;
  const isXl = windowWidth >= 1280;
  const isLg = windowWidth >= 1024;
  const isMd = windowWidth >= 768;
  const isSm = windowWidth >= 640;

  const heroImage = isMd
    ? 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp?tr=w-1800,q-95'
    : 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-mobile.avif';

  // Responsive watermark displacement based on screen size
  const maxWatermarkY = is2xl ? -100 : isXl ? -110 : isLg ? -60 : isMd ? -65 : isSm ? -25 : -25;
  const watermarkY = useTransform(scrollY, [0, 800], [0, maxWatermarkY]);

  // Responsive stroke width max (thinner on smaller screens)
  const strokeWidthMax = isXl ? 5 : isLg ? 4.5 : isMd ? 2.5 : isSm ? 2.0 : 1.5;
  const strokeWidthRaw = useTransform(scrollY, [0, 800], [strokeWidthMax, 0]);
  const strokeWidth = useSpring(strokeWidthRaw, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const heroImageY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroImageScale = useTransform(scrollY, [0, 1000], [1.5, 2]);

  const heroTextY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroTextOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section className="relative h-screen w-full flex bg-[#0F0A02] overflow-hidden">
      {/* Hero Image with Parallax & Scale */}
      <motion.div
        style={{ y: heroImageY }}
        className="hero-image-wraper w-full h-full overflow-hidden will-change-transform"
      >
        <motion.div
          style={{ scale: heroImageScale }}
          className="w-full h-full will-change-transform"
        >
          <motion.div
            initial={isInitialLoad ? { scale: 1.5 } : { scale: 1 }}
            animate={isLoaded ? { scale: 1 } : { scale: 1.5 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.4, 1] }}
            className="w-full h-full"
          >
            <Image
              src={heroImage}
              alt="Jangir D Nick — Full-Stack & Cloud Engineer"
              height={1000}
              width={1000}
              className="w-full h-full object-top object-cover md:-ml-3 md:brightness-[0.9] md:contrast-[1.1]"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Copy with Parallax Translate & Fade Out */}
      <motion.div
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        className="absolute top-4/5 md:top-2/5 left-6 sm:left-12 md:left-1/6 -translate-y-4/5 md:-translate-y-2/5 md:-translate-x-1/6  text-white text-3xl md:text-2xl lg:text-xl xl:text-3xl tracking-[-0.04em]! font-helveticaMediumItalic pr-6 md:pr-0 max-md:tracking-[-0.06em]! will-change-transform"
      >
        <h1 className="">Web design &amp; -development</h1>
        <h2 className="">Cloud DevOps engineer</h2>
        {/* <p className="max-md:text-xl">voor growing businesses that production ready</p> */}
        <p className="text-background/60 font-helveticaMedium font-thin! text-shadow-xs text-shadow-black/15 max-md:font-thin max-md:text-xl max-md:scale-[1.15] max-md:pl-6">
          Performance, security &amp; stability
        </p>
        {/* <h1 className="text-background/70 font-HelveticaNeueRoman text-shadow-xs text-shadow-black/30 max-md:font-medium max-md:text-lg">
          Guided by performance, security &amp; stability
        </h1> */}
      </motion.div>

      {/* Resume button */}
      <motion.div
        initial={
          isInitialLoad ? { y: 20, opacity: 0, rotate: -30 } : { y: 15, opacity: 0, rotate: 10 }
        }
        animate={isLoaded ? { y: 0, opacity: 1, rotate: 0 } : { y: 15, opacity: 0, rotate: 10 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className=" absolute top-2/5 md:top-2/6 max-md:left-10 md:right-[10%] xl:right-[16%] -translate-y-2/5 md:-translate-y-2/6 w-28 h-28 md:w-20 md:h-20 xl:w-34 xl:h-34 flex items-center justify-center "
      >
        <Link href={'resume.pdf'} target="_blank" className="w-full h-full">
          <Button className="w-full h-full max-md:bg-foreground/60 max-md:backdrop-blur-xs">
            Resume
          </Button>
        </Link>
        {/* <p className='block text-background/70 text-base font-HelveticaNeueRoman font-thin!'>Resume</p> */}
      </motion.div>

      {/* Responsive Watermark element (Refactored to SVG for GPU performance) */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute -bottom-25 md:-bottom-32 lg:-bottom-43 xl:-bottom-55 2xl:-bottom-70 left-1/2 -translate-x-1/2 pointer-events-none select-none max-md:hidden will-change-transform"
      >
        <div className="relative text-9xl tracking-[-0.95] font-helveticaMediumItalic scale-[1.35] md:scale-[2.35] lg:scale-[3.1] xl:scale-[4.5] 2xl:scale-[5.5] -ml-4 sm:-ml-10 md:-ml-12 lg:-ml-16 xl:-ml-28 whitespace-nowrap">
          {/* Invisible HTML text to define exact width, height, and centering layout */}
          <span className="opacity-0">NICK</span>

          {/* SVG overlay that draws the actual text with a hardware-accelerated stroke */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#ffffff"
              stroke="#ffffff"
              style={{ strokeWidth: strokeWidth, strokeLinejoin: 'round' }}
              className="font-helveticaMediumItalic text-9xl tracking-[-0.95]"
            >
              NICK
            </motion.text>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
