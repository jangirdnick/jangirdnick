import ProjectCard from '../../../home/components/Projects/ProjectCard';
import { ProjectDataProps } from '../../../../data/ProjectData';
import DesktopCard from './DesktopCard';

export default function ProjectsSection({ projectData }: { projectData: ProjectDataProps[] }) {
  return (
    // section = thematic region containing all project listings
    <section aria-label="All projects">
      {/* Desktop interactive list */}
      <DesktopCard projectData={projectData} />

      {/* Mobile card grid — ol = ordered list of portfolio items */}
      <ol className="w-full grid md:grid-cols-2 gap-8 lg:hidden list-none" role="list">
        {projectData.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}
