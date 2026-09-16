'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

export default function NotFound() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center p-8 md:p-16 bg-foreground text-background overflow-hidden">
      {/* Background Subtle Gradient Glow */}

      {/* Header Badge */}
      <div className=" absolute top-12 md:top-16 z-10">
        <SectionHeading title="404 Error" className="[&_h3]:text-background/60" />
      </div>

      {/* Center 404 Display */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="text-[22vw] md:text-[16vw] leading-none font-helveticaMediumItalic text-background tracking-tight select-none"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-md space-y-3"
        >
          <h2 className="text-2xl md:text-4xl font-helveticaMedium text-background">
            Page Not Found
          </h2>
          <p className="text-sm md:text-base text-background/60 font-helveticaRoman">
            The page you are looking for doesn&apos;t exist or has been moved to another URL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="pt-4"
        >
          <Link href="/">
            <Button
              label="Back to Home"
              className="bg-background! text-foreground! hover:text-white"
            />
          </Link>
        </motion.div>
      </div>

      {/* Footer Info */}
      {/* <div className="relative z-10 flex justify-between items-center text-xs md:text-sm text-background/50 font-helveticaRoman tracking-wider uppercase">
        <p>© {new Date().getFullYear()} Nick</p>
        <p>DevOps & Cloud Engineer</p>
      </div> */}
    </section>
  );
}
