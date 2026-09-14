import ProjectCard from '../../home/components/Projects/ProjectCard';
import { ProjectDataProps } from '../../home/data/ProjectData';
import DesktopCard from './DesktopCard';

export default function ProjectsSection({ projectData }: { projectData: ProjectDataProps[] }) {
  return (
    <section className="max-md:pt-5 max-md:px-4">
      {/* ── Laptop / Desktop View (Interactive Hover Card Animation) ── */}
      <DesktopCard projectData={projectData} />

      <div className="w-full grid gap-8 md:hidden">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* <div className="w-full px-6 py-10 md:hidden space-y-10 tracking-[-0.04em]">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="w-full flex flex-col gap-4 border-b border-foreground/15 pb-8"
          >
            <div className="w-full h-[65vw] relative overflow-hidden rounded-sm">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <h2 className="text-4xl font-helveticaRoman font-thin italic tracking-[-0.04em]">
                {project.title}
              </h2>
              <span className="text-sm font-mono opacity-60">{project.year}</span>
            </div>
            <div className="flex items-center justify-between text-sm opacity-70">
              <p>{project.subTitle}</p>
              <span className="px-2.5 py-0.5 border border-foreground/20 rounded-full text-xs">
                {project.role}
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
