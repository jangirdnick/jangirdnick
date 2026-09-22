'use client';

import Image from 'next/image';
import { motion, MotionValue } from 'motion/react';
import { memo } from 'react';
import { ProjectDataProps } from '../../../../data/ProjectData';

const CARD_W = 300;
const CARD_H = 370;

const IMAGE_SCROLL_SPRING = { type: 'spring', stiffness: 300, damping: 50, mass: 0.8 } as const;

interface DesktopCardImageDrumProps {
  projectData: ProjectDataProps[];
  activeIndex: number;
  isVisible: boolean;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  rotateY: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateZ: MotionValue<number>;
}

export const DesktopCardImageDrum = memo(function DesktopCardImageDrum({
  projectData,
  activeIndex,
  isVisible,
  springX,
  springY,
  rotateY,
  rotateX,
  rotateZ,
}: DesktopCardImageDrumProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-50 top-0 left-0 ${isVisible ? 'block' : 'hidden'}`}
      style={{
        width: CARD_W,
        height: CARD_H,
        x: springX,
        y: springY,
        rotateZ,
      }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.88 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl"
        style={{
          rotateY,
          rotateX,
          perspective: 700,
          transformStyle: 'preserve-3d',
        }}
      >
        {projectData.map((project, idx) => {
          const yPos = (idx - activeIndex) * CARD_H;
          return (
            <motion.div
              key={project.id}
              className="absolute inset-0"
              animate={{ y: yPos }}
              transition={IMAGE_SCROLL_SPRING}
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                sizes={`${CARD_W}px`}
                priority={idx < 3} // Optimize above-the-fold images
                unoptimized
              />
            </motion.div>
          );
        })}

        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </motion.div>
  );
});
