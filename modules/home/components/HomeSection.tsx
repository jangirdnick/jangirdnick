'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Button from '../../../components/Button';

export default function HomeSection() {
  const { scrollY } = useScroll();

  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints according to window.innerWidth
  const is2xl = windowWidth >= 1536;
  const isXl = windowWidth >= 1280;
  const isLg = windowWidth >= 1024;
  const isMd = windowWidth >= 768;
  const isSm = windowWidth >= 640;

  const heroImage = isMd
    ? 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp'
    : 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick-mobile.webp';

  // Responsive watermark displacement based on screen size
  const maxWatermarkY = is2xl ? -100 : isXl ? -110 : isLg ? -60 : isMd ? -65 : isSm ? -25 : -25;
  const watermarkY = useTransform(scrollY, [0, 800], [0, maxWatermarkY]);

  // Responsive stroke width max (thinner on smaller screens)
  const strokeWidthMax = isXl ? 3.5 : isLg ? 3.0 : isMd ? 2.5 : isSm ? 2.0 : 1.5;
  const strokeWidthRaw = useTransform(scrollY, [0, 800], [strokeWidthMax, 0]);
  const strokeWidth = useSpring(strokeWidthRaw, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });
  const textStroke = useTransform(strokeWidth, (w) => `${w}px #ffffff`);

  const heroImageY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroImageScale = useTransform(scrollY, [0, 1000], [1.2, 1.5]);

  const heroTextY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroTextOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section className="relative h-screen w-full flex bg-[#0F0A02] overflow-hidden">
      {/* Hero Image with Parallax & Scale */}
      <motion.div
        style={{ y: heroImageY }}
        className="hero-image-wraper w-full h-full overflow-hidden brightness-[0.9]"
      >
        <motion.div style={{ scale: heroImageScale }} className="w-full h-full">
          <Image
            // src="https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp"
            src={heroImage}
            alt="hero-image"
            height={1800}
            width={1000}
            className="w-full h-full object-top object-cover md:-ml-3"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Hero Copy with Parallax Translate & Fade Out */}
      <motion.div
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        className="absolute top-4/5 md:top-2/5 left-6 sm:left-12 md:left-1/6 -translate-y-4/5 md:-translate-y-2/5 md:-translate-x-1/6  text-white text-3xl md:text-2xl lg:text-xl xl:text-3xl tracking-[-0.04em]! font-helveticaMediumItalic pr-6 md:pr-0 max-md:tracking-[-0.06em]!"
      >
        <h1 className="">Web design & -development </h1>
        <h1 className="">Cloud DevOps engineer</h1>
        {/* <h1 className="max-md:text-xl">voor growing businesses that production ready</h1> */}
        <h1 className="text-background/60 font-helveticaMedium font-thin! text-shadow-xs text-shadow-black/15 max-md:font-thin max-md:text-xl max-md:scale-[1.15] max-md:pl-6">
          Performance, security &amp; stability
        </h1>
        {/* <h1 className="text-background/70 font-HelveticaNeueRoman text-shadow-xs text-shadow-black/30 max-md:font-medium max-md:text-lg">
          Guided by performance, security &amp; stability
        </h1> */}
      </motion.div>

      {/* Resume button */}
      <div className=" absolute top-2/5 md:top-2/6 max-md:left-10 md:right-[10%] xl:right-[16%] -translate-y-2/5 md:-translate-y-2/6 w-28 h-28 md:w-20 md:h-20 xl:w-34 xl:h-34 flex items-center justify-center ">
        <Button className="w-full h-full max-md:bg-foreground/60 max-md:backdrop-blur-xs">
          Resume
        </Button>
        {/* <p className='block text-background/70 text-base font-HelveticaNeueRoman font-thin!'>Resume</p> */}
      </div>

      {/* Responsive Watermark element */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute -bottom-25 md:-bottom-32 lg:-bottom-43 xl:-bottom-55 2xl:-bottom-70 left-1/2 -translate-x-1/2 pointer-events-none select-none max-md:hidden"
      >
        <motion.h1
          style={{ WebkitTextStroke: textStroke }}
          className="text-9xl text-white tracking-[-0.95] font-helveticaMediumItalic scale-[1.35] md:scale-[2.35] lg:scale-[3.1] xl:scale-[4.5] 2xl:scale-[5.5] -ml-4 sm:-ml-10 md:-ml-12 lg:-ml-16 xl:-ml-24 whitespace-nowrap"
        >
          NICK
        </motion.h1>
      </motion.div>
    </section>
  );
}
