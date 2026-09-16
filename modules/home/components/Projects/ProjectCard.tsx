'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { projectData } from '../../../../data/ProjectData';
import Link from '../../../../components/Link';

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

  return (
    <div ref={cardRef} className="w-full flex flex-col gap-4 lg:gap-6.5">
      {/* Image with parallax + hover overlay */}
      <div className="group w-full h-[110vw] md:h-[60vw] 2xl:h-250 overflow-hidden relative">
        <div className="w-full h-full scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center">
          <motion.img
            src={project.img}
            alt={project.title}
            style={{ y: imageY }}
            className="w-full h-[130%] object-cover relative top-[-15%]"
          />
        </div>

        {/* Hover overlay — index / role / view */}
        <div className="absolute inset-0 bg-foreground/5 lg:bg-foreground/60 flex flex-col justify-between p-2 md:p-4 lg:p-6 opacity-[1] lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
          {/* Top: index */}
          <span className="text-background/60 font-helveticaRoman text-[3vw] md:text-[1.5vw] lg:text-sm tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Bottom: role + view */}
          <div className="flex items-center justify-between">
            <span className="bg-foreground/50 text-background p-2 md:p-3 font-helveticaRoman text-[3vw] md:text-[1.5vw] lg:text-sm uppercase backdrop-blur-xs">
              {project.role}
            </span>

            {project.view ? (
              <Link
                href={project.view}
                target="_blank"
                rel="noreferrer"
                text="View →"
                className="text-background hover:text-background/70 transition-colors text-[3vw] md:text-[1.5vw] lg:text-sm"
              />
            ) : (
              <span className="text-background/30 font-helveticaRoman text-[3vw] md:text-[1.5vw] lg:text-sm italic">
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="space-y-4 md:space-y-2 lg:space-y-3">
        {/* Title row */}
        <div className="w-full flex items-center justify-between max-md:border-b border-gray-300 max-md:pb-1">
          <h2 className="text-[7vw] md:text-[4vw] lg:text-4xl xl:text-5xl tracking-[-0.02em] lg:tracking-[-0.04em]">
            {project.title}
          </h2>
          <span className="text-[3vw] md:text-[1.5vw] lg:text-sm xl:text-base text-foreground/50 font-helveticaRoman tabular-nums">
            {project.year}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-[3.4vw] md:text-[2vw] lg:text-base xl:text-lg font-helveticaMediumItalic text-foreground/70 leading-none">
          {project.subTitle}
        </p>
      </div>
    </div>
  );
}
