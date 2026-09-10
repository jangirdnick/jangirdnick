'use client';

import SectionHeading from '../../../../components/SectionHeading';
import Paragraph from '../../../../components/paragraph/Paragraph';
import Button from '../../../../components/Button';
import Link from 'next/link';
import { projectData } from '../../data/ProjectData';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="w-full px-6 py-0 max-md:pb-12 lg:px-12 xl:py-24 pb-50 space-y-12  relative z-10">
      <div className="border-t border-gray-300 flex flex-col gap-5 md:gap-6 pt-10 tracking-[-0.04em]">
        <SectionHeading title="Projects" />

        <div className="flex items-end justify-between">
          <Paragraph
            offset={['start 0.9', 'start 0.6']}
            text="Some very glitzy projects"
            className=" leading-[0.9]!"
          />

          <p className="font-helveticaMediumItalic text-4xl text-foreground/50 tracking-wide mt-6">
            04
          </p>
        </div>
      </div>

      <div className="w-full grid gap-8 lg:gap-4 md:grid-cols-2">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-20">
        <Link href={'/projects'}>
          <Button label="All projects" />
        </Link>
      </div>
    </section>
  );
}
