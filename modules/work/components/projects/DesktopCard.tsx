'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ProjectDataProps } from '../../../../data/ProjectData';

const CARD_W = 300;
const CARD_H = 370;

const SPRING_X = { stiffness: 100, damping: 20, mass: 0.8 };
const SPRING_Y = { stiffness: 120, damping: 22, mass: 1 };
const SLOW_SPRING = { stiffness: 50, damping: 16, mass: 1.2 };
const ROTATE_SPRING = { stiffness: 100, damping: 15, mass: 0.5 };

// Spring config for the image drum scroll
const IMAGE_SCROLL_SPRING = { type: 'spring', stiffness: 380, damping: 40, mass: 0.7 } as const;

export default function DesktopCard({ projectData }: { projectData: ProjectDataProps[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // State fallback: last active index so images hold position during fade-out
  const [lastIndex, setLastIndex] = useState(0);
  const divRef = useRef<HTMLElement>(null);
  const rowCenterYRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, SPRING_X);
  const springY = useSpring(rawY, SPRING_Y);

  const rotateYRaw = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const rotateZRaw = useMotionValue(0);
  const rotateY = useSpring(rotateYRaw, SLOW_SPRING);
  const rotateX = useSpring(rotateXRaw, SLOW_SPRING);
  const rotateZ = useSpring(rotateZRaw, ROTATE_SPRING);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = divRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;

    const maxX = Math.max(0, rect.width - CARD_W);
    rawX.set(Math.min(Math.max(x - CARD_W / 2, 0), maxX));
    rawY.set(rowCenterYRef.current);

    rotateYRaw.set((x / rect.width - 0.5) * 14);

    const movementX = e.movementX || 0;
    const speedTilt = Math.min(Math.max(movementX * 1.2, -12), 12);
    const posTilt = (x / rect.width - 0.5) * 16;
    rotateZRaw.set(Math.min(Math.max(speedTilt + posTilt, -20), 20));

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      rotateYRaw.set(0);
      rotateXRaw.set(0);
      rotateZRaw.set(0);
    }, 100);
  };

  const handleRowMouseEnter = (e: React.MouseEvent<HTMLElement>, idx: number) => {
    setLastIndex(idx);
    setHoveredIndex(idx);

    const rowElement = e.currentTarget;
    const gridOffset = (rowElement.offsetParent as HTMLElement)?.offsetTop ?? 0;
    rowCenterYRef.current =
      gridOffset + rowElement.offsetTop + rowElement.offsetHeight / 2 - CARD_H / 2;
    rawY.set(rowCenterYRef.current);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    rotateZRaw.set(0);
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const isVisible = hoveredIndex !== null;
  // Use lastIndex (state) when not hovered so images hold position during fade-out
  const activeIndex = hoveredIndex ?? lastIndex;

  return (
    // section = thematic container for the interactive desktop project list
    <section
      ref={divRef}
      aria-label="Portfolio projects"
      className="w-full py-20 tracking-[-0.04em] relative hidden lg:block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating preview card — aria-hidden as it is purely decorative/interactive */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-50 top-0 left-0"
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
          {/*
           * Scroll drum: all images are always in the DOM (pre-loaded).
           * Each image sits at y = (idx - activeIndex) * CARD_H.
           * When activeIndex changes, all images spring-scroll together —
           * active image lands at y=0, others scroll off above/below.
           * overflow-hidden on parent clips everything outside the card.
           */}
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
                  sizes="300px"
                />
              </motion.div>
            );
          })}

          {/* Glass sheen overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 55%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Project rows — ol = ordered list, each row is an article */}
      <ol className="relative w-full grid divide-y border list-none" role="list">
        {projectData.map((project, idx) => (
          <motion.li
            key={project.id}
            animate={{
              opacity: isVisible && hoveredIndex !== idx ? 0.7 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="group"
          >
            {/* article = self-contained project entry */}
            <article
              className=" relative z-1 w-full flex items-end justify-between px-6 lg:px-12 py-10 lg:py-12 text-base xl:text-lg cursor-pointer select-none"
              onMouseEnter={(e) => handleRowMouseEnter(e, idx)}
              aria-label={`${project.title} — ${project.role}, ${project.year}`}
            >
              <p className="text-sm xl:text-base text-foreground/60">{project.role}</p>
              <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-helveticaRoman font-thin italic tracking-[-0.04em]">
                {project.title}
              </h2>
              <time dateTime={project.year} className="text-sm xl:text-base text-foreground/60">
                {project.year}
              </time>

              <div className="absolute bottom-0 inset-x-0 -z-1 w-full h-0 bg-orange-600 group-hover:h-full ease-in-out duration-500" />
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
