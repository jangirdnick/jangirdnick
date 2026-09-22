'use client';

import { motion } from 'motion/react';
import { memo } from 'react';
import Link from 'next/link';
import { ProjectDataProps } from '../../../../data/ProjectData';

interface DesktopProjectRowProps {
  project: ProjectDataProps;
  idx: number;
  isLoaded: boolean;
  isVisible: boolean;
  isHovered: boolean;
  onMouseEnter: (e: React.MouseEvent<HTMLElement>, idx: number) => void;
}

export const DesktopProjectRow = memo(function DesktopProjectRow({
  project,
  idx,
  isLoaded,
  isVisible,
  isHovered,
  onMouseEnter,
}: DesktopProjectRowProps) {
  return (
    <motion.li
      initial={{ height: '50%', opacity: 0 }}
      animate={{
        height: isLoaded ? '100%' : '50%',
        opacity: isLoaded ? (isVisible && !isHovered ? 0.3 : 1) : 0,
      }}
      transition={{
        height: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: isLoaded ? 0.1 + idx * 0.08 : 0,
        },
        opacity: {
          duration: 0.3,
          ease: 'easeOut',
        },
      }}
      className="group overflow-hidden"
    >
      <Link href={project.view} target="_blank" rel="noopener noreferrer" className="block w-full">
        <article
          className="relative z-1 w-full flex items-end justify-between px-6 lg:px-12 py-10 lg:py-12 text-base xl:text-lg cursor-pointer select-none"
          onMouseEnter={(e) => onMouseEnter(e, idx)}
          aria-label={`${project.title} — ${project.role}, ${project.year}`}
        >
          <p className="text-sm xl:text-base text-foreground/60">{project.role}</p>
          <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-helveticaRoman font-thin italic tracking-[-0.04em]">
            {project.title}
          </h2>
          <time dateTime={project.year} className="text-sm xl:text-base text-foreground/60">
            {project.year}
          </time>

          <div className="absolute bottom-0 inset-x-0 -z-1 w-full h-0 bg-orange-600 group-hover:h-full ease-in-out duration-700" />
        </article>
      </Link>
    </motion.li>
  );
});
