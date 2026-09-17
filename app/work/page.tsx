import { Metadata } from 'next';
import WorkSection from '../../modules/work/components/WorkSection';
import { projectData } from '../../data/ProjectData';
import ProjectsSection from '@/modules/work/components/projects/ProjectsSection';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Jangir D Nick — full-stack web apps, APIs, and cloud systems built with React, Next.js, Node.js, Nest.js, AWS, and Docker.',
  alternates: {
    canonical: 'https://nickdev.space/work',
  },
  openGraph: {
    title: 'Work | Jangir D Nick',
    description:
      'A selection of web products and engineering work — from frontend and APIs to cloud deployment and CI/CD.',
    url: 'https://nickdev.space/work',
    type: 'website',
    images: [
      {
        url: 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp',
        width: 1200,
        height: 630,
        alt: 'Jangir D Nick — Work & Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Jangir D Nick',
    description:
      'A selection of web products and engineering work — from frontend and APIs to cloud deployment and CI/CD.',
    images: ['https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp'],
  },
};

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://nickdev.space/work#collection',
  url: 'https://nickdev.space/work',
  name: 'Work & Projects — Jangir D Nick',
  description: 'Selected web products, APIs, and cloud engineering projects by Jangir D Nick.',
  author: {
    '@id': 'https://nickdev.space/#person',
  },
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Portfolio Projects',
    numberOfItems: projectData.length,
    itemListElement: projectData.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.subTitle,
        url: project.view || 'https://nickdev.space/work',
        image: project.img,
        dateCreated: project.year,
        creator: {
          '@id': 'https://nickdev.space/#person',
        },
      },
    })),
  },
};

export default function WorkPage() {
  return (
    <main className="w-full pb-16 md:pb-24">
      <JsonLd data={workSchema} />
      <WorkSection projectLength={projectData.length} />
      <ProjectsSection projectData={projectData} />
    </main>
  );
}
