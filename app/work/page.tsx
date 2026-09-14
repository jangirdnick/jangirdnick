import { Metadata } from 'next';
import WorkSection from '../../modules/Work/WorkSection';
import { projectData } from '../../modules/home/data/ProjectData';
import ProjectsSection from '../../modules/Work/Projects/ProjectsSection';

export const metadata: Metadata = {
  title: 'Nick – DevOps & Cloud Engineer | Web Development',
  description:
    'I am a DevOps & Cloud Engineer with experience in web development. I help businesses grow with custom-tailored websites that match their ambitions.',
};

export default function WorkPage() {
  return (
    <main className="w-full pb-16 md:pb-24">
      <WorkSection projectLength={projectData.length} />
      <ProjectsSection projectData={projectData} />
    </main>
  );
}
