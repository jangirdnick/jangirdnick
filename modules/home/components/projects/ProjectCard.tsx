'use client';

import { useRef } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { projectData } from '../../../../data/ProjectData';
import { usePageLoader } from '@/components/loader/PageLoader';

interface ProjectCardProps {
  project: (typeof projectData)[number];
  index: number;
  isAnimate?: boolean;
}

export default function ProjectCard({ project, index, isAnimate = true }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const { isLoaded } = usePageLoader();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  const articleContent = (
    <motion.article
      ref={cardRef}
      aria-label={`Project: ${project.title}`}
      initial={isAnimate && { height: '80%', opacity: 0 }}
      animate={{
        height: !isAnimate || isLoaded ? '100%' : '80%',
        opacity: !isAnimate || isLoaded ? 1 : 0,
      }}
      transition={{
        height: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: isAnimate && isLoaded ? 0.1 + index * 0.08 : 0,
        },
        opacity: {
          duration: 0.6,
          ease: 'easeOut',
          delay: isAnimate && isLoaded ? 0.1 + index * 0.08 : 0,
        },
      }}
      className="w-full flex flex-col gap-4 lg:gap-6.5 overflow-hidden group/card cursor-pointer"
    >
      {/* figure wraps the image + overlay as a labelled media unit */}
      <figure className="group w-full h-[110vw] md:h-[60vw] 2xl:h-250 overflow-hidden relative m-0">
        <div className="w-full h-full scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center">
          <motion.div
            style={{ y: imageY }}
            className="w-full h-[130%] relative -top-[12%] will-change-transform"
          >
            <Image
              src={project.img}
              alt={`${project.title} — ${project.subTitle}`}
              width={1000}
              height={1000}
              className=" w-full h-full object-contain scale-x-[1.1] scale-y-[1.29] md:scale-y-[1.4] xl:scale-y-[1.3]"
              unoptimized
            />
          </motion.div>
        </div>

        {/* Hover overlay — index / role / view */}
        <figcaption className="absolute inset-0 bg-foreground/5 lg:bg-foreground/60 flex flex-col justify-between p-2 md:p-4 lg:p-6 opacity-[1] lg:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 ease-out">
          {/* Top: index */}
          <span
            aria-label={`Project number ${index + 1}`}
            className="text-background/60 font-helveticaRoman text-[3vw] md:text-[1.5vw] lg:text-sm tabular-nums"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Bottom: role + view */}
          <div className="flex items-center justify-between">
            <span className="bg-foreground/50 text-background p-2 md:p-3 font-helveticaRoman text-[3vw] md:text-[1.5vw] lg:text-sm uppercase backdrop-blur-xs">
              {project.role}
            </span>

            {project.view ? (
              <span
                aria-label={`View ${project.title} live`}
                className="text-background group-hover/card:text-background/70 transition-colors text-[3vw] md:text-[1.5vw] lg:text-sm relative inline-flex items-center group cursor-pointer"
              >
                <span className="relative inline-block font-thin py-0.5 before:absolute before:bottom-1 before:left-0 before:h-px before:w-full before:bg-background/80 before:content-[''] before:transition-transform before:duration-300 before:ease-out before:origin-right before:scale-x-0 hover/card:before:origin-left hover/card:before:scale-x-100 cursor-pointer">
                  View →
                </span>
              </span>
            ) : (
              <span className="text-background/30 font-helveticaRoman text-[3vw] md:text-[1.5vw] lg:text-sm italic">
                Coming soon
              </span>
            )}
          </div>
        </figcaption>
      </figure>

      {/* Card info — title, year, description */}
      <div className="space-y-4 md:space-y-2 lg:space-y-3">
        {/* Title row */}
        <div className="w-full flex items-center justify-between max-md:border-b border-gray-300 max-md:pb-1">
          <h2 className="text-[7vw] md:text-[4vw] lg:text-4xl xl:text-5xl tracking-[-0.02em] lg:tracking-[-0.04em]">
            {project.title}
          </h2>
          {/* time = machine-readable date for search engines freshness signal */}
          <time
            dateTime={project.year}
            className="text-[3vw] md:text-[1.5vw] lg:text-sm xl:text-base text-foreground/50 font-helveticaRoman tabular-nums"
          >
            {project.year}
          </time>
        </div>

        {/* Subtitle / description */}
        <p className="text-[3.4vw] md:text-[2vw] lg:text-base xl:text-lg font-helveticaMediumItalic text-foreground/70 leading-none">
          {project.subTitle}
        </p>
      </div>
    </motion.article>
  );

  if (project.view) {
    return (
      <NextLink
        href={project.view}
        target="_blank"
        rel="noreferrer noopener"
        className="block w-full"
      >
        {articleContent}
      </NextLink>
    );
  }

  return articleContent;
}
