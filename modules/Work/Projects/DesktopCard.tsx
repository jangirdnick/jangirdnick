'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ProjectDataProps } from '../../home/data/ProjectData';

const CARD_W = 300;
const CARD_H = 370;
const INDEX_Y_STEP = 90;

// Spring config — silky smooth
const SPRING_X = { stiffness: 100, damping: 20, mass: 0.8 };
const SPRING_Y = { stiffness: 120, damping: 22, mass: 1 };
const SLOW_SPRING = { stiffness: 50, damping: 16, mass: 1.2 };
const ROTATE_SPRING = { stiffness: 100, damping: 15, mass: 0.5 };

export default function DesktopCard({ projectData }: { projectData: ProjectDataProps[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const rowCenterYRef = useRef<number>(0);

  // Raw mouse/position values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smoothed card position (spring)
  const springX = useSpring(rawX, SPRING_X);
  const springY = useSpring(rawY, SPRING_Y);

  // 3D tilt & Z-Rotation (lerped angle on left/right movement)
  const rotateYRaw = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const rotateZRaw = useMotionValue(0);

  const rotateY = useSpring(rotateYRaw, SLOW_SPRING);
  const rotateX = useSpring(rotateXRaw, SLOW_SPRING);
  const rotateZ = useSpring(rotateZRaw, ROTATE_SPRING);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = divRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;

    // Card follows mouse X only
    rawX.set(x - CARD_W / 2);

    // Keep Y locked to current hovered row center
    if (rowCenterYRef.current !== undefined) {
      rawY.set(rowCenterYRef.current);
    }

    // 3D tilt on Y axis based on mouse X position
    rotateYRaw.set((x / rect.width - 0.5) * 14);

    // Z-Rotation based on movement direction & X position lerp (-20 deg left to +20 deg right)
    const movementX = e.movementX || 0;
    const speedTilt = Math.min(Math.max(movementX * 1.2, -12), 12);
    const posTilt = (x / rect.width - 0.5) * 16;
    rotateZRaw.set(Math.min(Math.max(speedTilt + posTilt, -20), 20));
  };

  const handleRowMouseEnter = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    setHoveredIndex(idx);
    const rowElement = e.currentTarget;
    // Calculate row center Y relative to div
    const rowCenterY = rowElement.offsetTop + rowElement.offsetHeight / 2 - CARD_H / 2;
    rowCenterYRef.current = rowCenterY;
    rawY.set(rowCenterY);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    rotateZRaw.set(0);
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  const isVisible = hoveredIndex !== null;
  return (
    <div
      ref={divRef}
      className="w-full py-20 tracking-[-0.04em] relative hidden md:block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating card */}
      <motion.div
        className="pointer-events-none absolute z-50 top-0 left-0 opacity-0"
        style={{
          width: CARD_W,
          height: CARD_H,
          x: springX,
          y: springY,
          rotateZ: rotateZ,
        }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.85 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {/* 3-D tilt shell */}
        <motion.div
          className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl"
          style={{
            rotateY,
            rotateX,
            perspective: 700,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Wheel: each image slot */}
          {projectData.map((project, idx) => {
            const distance = hoveredIndex !== null ? idx - hoveredIndex : idx;
            const yOffset = distance * INDEX_Y_STEP;
            const isActive = hoveredIndex === idx;
            const slotOpacity = Math.max(0, 1 - Math.abs(distance) * 0.75);

            return (
              <motion.div
                key={project.id}
                className="absolute inset-0"
                animate={{
                  y: yOffset,
                  opacity: isActive ? 1 : slotOpacity,
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{
                  y: { type: 'spring', stiffness: 200, damping: 26, mass: 0.9 },
                  opacity: { duration: 0.35, ease: 'easeOut' },
                  scale: { duration: 0.35, ease: 'easeOut' },
                }}
                style={{ zIndex: isActive ? 10 : 0 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                  priority={idx === 0}
                />
                {/* Glass sheen */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Project rows */}
      <div className="relative w-full grid divide-y border">
        {projectData.map((project, idx) => (
          <motion.div
            key={project.id}
            className="w-full flex items-end justify-between px-6 lg:px-12 py-10 lg:py-12 text-base xl:text-lg cursor-default select-none"
            animate={{
              opacity: isVisible && hoveredIndex !== idx ? 0.3 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onMouseEnter={(e) => handleRowMouseEnter(e, idx)}
          >
            <p>{project.role}</p>
            <p className="text-5xl xl:text-6xl 2xl:text-7xl font-helveticaRoman font-thin italic tracking-[-0.04em]">
              {project.title}
            </p>
            <p>{project.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
