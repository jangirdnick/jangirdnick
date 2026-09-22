'use client';

import CurrentTime from '@/components/CurrentTime';
import Image from 'next/image';
import { motion } from 'motion/react';
import { usePageLoader } from '@/components/loader/PageLoader';

export default function AboutSection() {
  const { isLoaded, isInitialLoad } = usePageLoader();

  return (
    <section className="relative w-full h-screen flex flex-col justify-end text-white overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <motion.div
          initial={isInitialLoad ? { scale: 1.6 } : { scale: 1.1 }}
          animate={isLoaded ? { scale: 1 } : { scale: 1.6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.4, 1] }}
          className="w-full h-full"
        >
          <Image
            src={'https://ik.imagekit.io/ey4pcsgfy/section/nick-about-hero-section.avif'}
            alt="Jangir D Nick — Full-Stack & Cloud Engineer, portrait"
            width={700}
            height={700}
            className="w-full h-full max-md:-ml-20 object-cover pt-10 md:pt-10 scale-[1.5] md:scale-[1.15] lg:scale-[1.5] brightness-[1.1]"
            priority
            unoptimized
          />
        </motion.div>
      </div>

      {/* bottom */}
      <motion.div
        initial={isInitialLoad ? { y: 50, opacity: 0 } : { y: 20, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute bottom-4 md:bottom-0 w-full flex items-end justify-between p-4 md:p-6 font-helveticaMediumItalic tracking-[-0.04em]"
      >
        <div className="pl-2 max-md:pb-5">
          <h1 className="text-[16vw] lg:text-9xl">About</h1>
        </div>

        <div className="flex flex-col items-end bg-foreground text-gray-300 p-2.5 rounded-lg text-xs md:text-base">
          <CurrentTime />
          <p className="uppercase">Best, The india</p>
        </div>
      </motion.div>
    </section>
  );
}
