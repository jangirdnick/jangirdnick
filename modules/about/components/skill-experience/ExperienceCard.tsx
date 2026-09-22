'use client';

import { useState, useSyncExternalStore } from 'react';
import { motion, MotionValue, useSpring, useTransform } from 'motion/react';
import { ExperiencesType } from '../../../../types';
import {
  subscribeMobile,
  getMobileSnapshot,
  getMobileServerSnapshot,
} from '../../../../lib/useIsMobile';

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z" />
    </svg>
  );
}

export default function ExperienceCard({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: ExperiencesType;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const [hovered, setHovered] = useState(false);
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot
  );

  const baseStart = isMobile ? -350 : -970;
  const baseEnd = isMobile ? 120 : 300;
  const perCard = isMobile ? 40 : 100;

  const startY = baseStart + (total - 1 - index) * perCard;
  const endY = baseEnd - (total - 1 - index) * perCard;

  const step = 0.6 / total;
  const startRange = Math.max(0, index * step);
  const endRange = Math.min(1, startRange + 0.1);

  const rawY = useTransform(scrollYProgress, [startRange, endRange], [startY, endY]);
  const y = useSpring(rawY, { damping: 22, stiffness: 85, mass: 0.2 });

  const padded = String(item.id).padStart(2, '0');

  const chamfer = 'polygon(2.5rem 0%, 100% 0%, 100% 100%, 0% 100%, 0% 2.5rem)';

  return (
    // article = self-contained skill card (independent content unit)
    <motion.article
      style={{ y, clipPath: chamfer }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Skill: ${item.title} — ${item.subtitle}`}
      className="relative w-[82vw] sm:w-[48vw] md:w-[40vw] xl:w-[27vw] h-[105vw] md:h-[60vw] lg:h-[52vh] min-h-88 shrink-0 bg-foreground text-white cursor-pointer"
    >
      {/* Orange liquid fill — decorative */}
      <motion.div
        aria-hidden="true"
        initial={{ y: '101%', borderTopLeftRadius: '100%', borderTopRightRadius: '100%' }}
        animate={
          hovered
            ? {
                y: '0%',
                borderTopLeftRadius: ['100%', '40%', '0%'],
                borderTopRightRadius: ['100%', '40%', '0%'],
              }
            : {
                y: '101%',
                borderTopLeftRadius: '100%',
                borderTopRightRadius: '100%',
              }
        }
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-0 w-full h-[140%] bg-orange-700 pointer-events-none"
      />

      {/* Ghost watermark number — decorative */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 right-2 z-1 select-none pointer-events-none"
      >
        <motion.span
          animate={{ x: hovered ? -100 : 0, y: hovered ? -180 : 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="block font-helveticaMediumItalic text-[50vw] sm:text-[12vw] md:text-[20vw] xl:text-[14vw] leading-none text-background/10"
        >
          {padded}
        </motion.span>
      </div>

      {/* Card content */}
      <div className="relative z-10 h-full p-7 md:p-8 flex flex-col justify-between">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: hovered ? 180 : 0, scale: hovered ? 1.2 : 1 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <StarIcon className="fill-orange-600 w-3.5 h-3.5" />
            </motion.div>
            <span className="font-helveticaMediumItalic text-xs uppercase tracking-widest">
              {padded}
            </span>
          </div>

          <motion.span
            animate={{ opacity: hovered ? 1 : 0.35, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-helveticaMediumItalic text-[0.6rem] xl:text-xs uppercase tracking-widest"
          >
            Skill &amp; Exp
          </motion.span>
        </div>

        {/* Middle — decorative line with dot */}
        <div aria-hidden="true" className="flex items-center gap-3">
          <motion.div
            style={{ originX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="h-px flex-1 bg-white/20"
          />
          <motion.div
            animate={{ scale: hovered ? 1.4 : 1 }}
            transition={{ duration: 0.4 }}
            className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0"
          />
        </div>

        {/* Bottom: subtitle + title */}
        <div className="space-y-1.5">
          {/* subtitle — supporting text */}
          <div className="w-3/4 overflow-hidden">
            <motion.p
              className={`relative text-xs xl:text-sm font-helveticaRoman text-white/65 leading-none ${hovered ? 'lg:bottom-0' : 'lg:-bottom-1'} ease-in-out duration-500`}
            >
              {item.subtitle}
            </motion.p>
          </div>

          {/* h3 — skill name (h3 because it's inside a list within a section with its own h2) */}
          <div className="overflow-hidden">
            <motion.h3
              animate={{ y: hovered ? '-6%' : '0%' }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="text-2xl xl:text-[1.65rem] 2xl:text-3xl font-helveticaMediumItalic tracking-[-0.04em] leading-[1.05]"
            >
              {item.title}
            </motion.h3>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
