'use client';

import ProjectCard from '@/modules/home/components/projects/ProjectCard';
import { ProjectDataProps } from '../../../../data/ProjectData';
import DesktopCard from './DesktopCard';
import { useSyncExternalStore } from 'react';
import {
  subscribeDesktop,
  getDesktopSnapshot,
  getDesktopServerSnapshot,
} from '../../../../lib/useIsMobile';

export default function ProjectsSection({ projectData }: { projectData: ProjectDataProps[] }) {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  );

  return (
    // section = thematic region containing all project listings
    <section aria-label="All projects">
      {isDesktop ? (
        <DesktopCard projectData={projectData} />
      ) : (
        <ol className="w-full grid md:grid-cols-2 gap-8 lg:hidden list-none px-2 pt-4" role="list">
          {projectData.map((project, index) => (
            <li key={project.id}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
