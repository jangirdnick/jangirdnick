'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { projectData } from '../../data/ProjectData';

interface ProjectCardProps {
  project: (typeof projectData)[number];
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  const isOddCard = index % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`w-full flex flex-col gap-4 lg:gap-6.5 ${isOddCard && 'md:mt-40 lg:mt-55'}`}
    >
      <div className="w-full h-[110vw] md:h-[60vw] 2xl:h-250 overflow-hidden relative">
        <motion.img
          src={project.img}
          alt={project.title}
          style={{ y: imageY }}
          className="w-full h-[130%] object-cover relative top-[-15%]"
        />
      </div>

      <div className="space-y-4 md:space-y-1 lg:space-y-3">
        <div className="w-full flex items-center justify-between max-md:border-b border-gray-300 max-md:pb-1">
          <h1 className="text-[7vw] md:text-[4.7vw] lg:text-5xl tracking-[-0.02em] lg:tracking-[-0.04em]">
            {project.title}
          </h1>

          <span>{project.year}</span>
        </div>

        <div>
          <p className="text-[3.4vw] md:text-[2vw] lg:text-lg font-helveticaMediumItalic text-foreground/70 leading-none">
            {project.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
