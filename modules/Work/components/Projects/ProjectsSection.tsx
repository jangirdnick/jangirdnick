import ProjectCard from '../../../home/components/Projects/ProjectCard';
import { ProjectDataProps } from '../../../../data/ProjectData';
import DesktopCard from './DesktopCard';

export default function ProjectsSection({ projectData }: { projectData: ProjectDataProps[] }) {
  return (
    <section className="max-lg:pt-5 max-lg:px-4">
      <DesktopCard projectData={projectData} />

      <div className="w-full grid md:grid-cols-2 gap-8 lg:hidden">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
