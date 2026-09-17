import type { Metadata } from 'next';
import AboutSection from '@/modules/home/components/about/AboutSection';
import HomeSection from '@/modules/home/components/HomeSection';
import ProjectsSection from '@/modules/home/components/projects/ProjectsSection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Jangir D Nick | Full-Stack & Cloud Engineer',
  description:
    'Full-stack engineer building web products, APIs, and cloud systems with React, Next.js, Node.js, Nest.js, AWS, and Docker — focused on performance, security, and reliable delivery.',
  alternates: {
    canonical: 'https://nickdev.space',
  },
  openGraph: {
    title: 'Jangir D Nick | Full-Stack & Cloud Engineer',
    description:
      'Web design, development, and cloud engineering for growing businesses — performance, security, and production-ready systems.',
    url: 'https://nickdev.space',
    type: 'website',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://nickdev.space/#person',
      name: 'Jangir D Nick',
      alternateName: ['Nick', 'Nandlal Jangid', 'Nick Jangir'],
      url: 'https://nickdev.space',
      image: 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp',
      jobTitle: 'Full-Stack & Cloud Engineer',
      description:
        'Full-stack engineer building web products, APIs, and cloud systems with React, Next.js, Node.js, AWS, and Docker — focused on performance, security, and reliable delivery.',
      knowsAbout: [
        'Frontend Engineering',
        'React',
        'Next.js',
        'TypeScript',
        'Backend Development',
        'Node.js',
        'NestJS',
        'REST APIs',
        'Cloud Engineering',
        'AWS',
        'Docker',
        'Kubernetes',
        'DevOps',
        'CI/CD',
        'GitHub Actions',
        'Terraform',
        'Infrastructure as Code',
        'PostgreSQL',
        'MongoDB',
        'Web Performance Optimization',
      ],
      sameAs: [
        'https://www.linkedin.com/in/jangirdnick',
        'https://github.com/jangirdnick',
        'https://www.instagram.com/jangirdnick',
      ],
      email: 'Hello@nickdev.space',
      nationality: {
        '@type': 'Country',
        name: 'India',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nickdev.space/#website',
      url: 'https://nickdev.space',
      name: 'Jangir D Nick',
      description:
        'Portfolio of Jangir D Nick — Full-Stack & Cloud Engineer building web products, APIs, and cloud systems.',
      author: {
        '@id': 'https://nickdev.space/#person',
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={personSchema} />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
