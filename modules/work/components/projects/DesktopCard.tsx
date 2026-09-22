'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useMotionValue, useSpring } from 'motion/react';
import { ProjectDataProps } from '../../../../data/ProjectData';
import { usePageLoader } from '@/components/loader/PageLoader';
import { DesktopCardImageDrum } from './DesktopCardImageDrum';
import { DesktopProjectRow } from './DesktopProjectRow';

const CARD_W = 300;
const CARD_H = 370;

const SPRING_X = { stiffness: 100, damping: 20, mass: 0.8 };
const SPRING_Y = { stiffness: 120, damping: 22, mass: 1 };
const SLOW_SPRING = { stiffness: 50, damping: 16, mass: 1.2 };
const ROTATE_SPRING = { stiffness: 100, damping: 15, mass: 0.5 };

export default function DesktopCard({ projectData }: { projectData: ProjectDataProps[] }) {
  const { isLoaded } = usePageLoader();
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

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
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
    },
    [rawX, rawY, rotateYRaw, rotateXRaw, rotateZRaw]
  );

  const handleRowMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>, idx: number) => {
      setLastIndex(idx);
      setHoveredIndex(idx);

      const rowElement = e.currentTarget;
      const gridOffset = (rowElement.offsetParent as HTMLElement)?.offsetTop ?? 0;
      rowCenterYRef.current =
        gridOffset + rowElement.offsetTop + rowElement.offsetHeight / 2 - CARD_H / 2;
      rawY.set(rowCenterYRef.current);
    },
    [rawY]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    rotateZRaw.set(0);
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [rotateZRaw, rotateXRaw, rotateYRaw]);

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
      <DesktopCardImageDrum
        projectData={projectData}
        activeIndex={activeIndex}
        isVisible={isVisible}
        springX={springX}
        springY={springY}
        rotateY={rotateY}
        rotateX={rotateX}
        rotateZ={rotateZ}
      />

      {/* Project rows — ol = ordered list, each row is an article */}
      <ol className="relative w-full grid divide-y border list-none" role="list">
        {projectData.map((project, idx) => (
          <DesktopProjectRow
            key={project.id}
            project={project}
            idx={idx}
            isLoaded={isLoaded}
            isVisible={isVisible}
            isHovered={hoveredIndex === idx}
            onMouseEnter={handleRowMouseEnter}
          />
        ))}
      </ol>
    </section>
  );
}
