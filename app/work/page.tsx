import { Metadata } from 'next';
import WorkSection from '../../modules/Work/components/WorkSection';
import { projectData } from '../../data/ProjectData';
import ProjectsSection from '../../modules/Work/components/Projects/ProjectsSection';
export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Jangir D Nick — full-stack web apps, APIs, and cloud systems built with React, Next.js, Node.js, Nest.js, AWS, and Docker.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Work | Jangir D Nick',
    description:
      'A selection of web products and engineering work — from frontend and APIs to cloud deployment and CI/CD.',
    url: 'https://nickdev.space/work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Jangir D Nick',
    description:
      'A selection of web products and engineering work — from frontend and APIs to cloud deployment and CI/CD.',
  },
};

export default function WorkPage() {
  return (
    <main className="w-full pb-16 md:pb-24">
      <WorkSection projectLength={projectData.length} />
      <ProjectsSection projectData={projectData} />
    </main>
  );
}
