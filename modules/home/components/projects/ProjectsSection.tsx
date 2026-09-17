'use client';

import SectionHeading from '../../../../components/SectionHeading';
import Paragraph from '../../../../components/paragraph/Paragraph';
import Button from '../../../../components/Button';
import Link from 'next/link';
import { projectData } from '../../../../data/ProjectData';
import ProjectCard from './ProjectCard';
import StarSvg from '../../../../components/StarSvg';

export default function ProjectsSection() {
  return (
    // section = thematic grouping of portfolio projects
    <section
      aria-label="Selected projects"
      className="w-full px-4 py-0 pb-20 lg:px-12 xl:py-24 xl:pb-50 space-y-8 lg:space-y-12 relative z-10"
    >
      <header className="border-t border-gray-300 flex flex-col gap-5 md:gap-6 pt-10 tracking-[-0.04em] max-md:px-2">
        <SectionHeading title="Projects" />

        <div className="flex items-end justify-between">
          <Paragraph
            offset={['start 0.9', 'start 0.6']}
            text="Some very glitzy projects"
            className=" leading-[0.9]!"
          />

          <div aria-hidden="true">
            <span className="flex text-3xl md:text-4xl opacity-20 gap-1">
              04
              <StarSvg className="fill-foreground! mt-0.5" />
            </span>
          </div>
        </div>
      </header>

      {/* ol = ordered list of projects (order matters for portfolio ranking) */}
      <ol className="w-full grid gap-8 lg:gap-4 md:grid-cols-2 list-none">
        {projectData.map((project, index) => {
          const isOdd = index % 2 == 0;

          return (
            <li key={project.id} className={`${isOdd ? '' : 'lg:mt-32'}`}>
              <ProjectCard project={project} index={index} />
            </li>
          );
        })}
      </ol>

      <div className="w-full flex items-center justify-center mt-20">
        <Link href={'/work'}>
          <Button label="All projects" />
        </Link>
      </div>
    </section>
  );
}
