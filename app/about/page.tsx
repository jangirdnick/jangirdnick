import { Metadata } from 'next';
import AboutSection from '../../modules/About/components/AboutSection';
import AboutInfo from '../../modules/About/components/AboutInfo';
import SkillExperience from '../../modules/About/components/Skill & Experience/SkillExperience';
import Certificates from '../../modules/About/components/Certificates';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Jangir D Nick — self-taught full-stack and cloud engineer. From failed YouTuber to DevOps engineer: React, Next.js, Node.js, AWS, Docker, and Kubernetes.',
  alternates: {
    canonical: 'https://nickdev.space/about',
  },
  openGraph: {
    title: 'About | Jangir D Nick',
    description:
      'DevOps & cloud engineer building standout, high-performing websites. Self-taught full-stack journey — from independent learning to shipping production work.',
    url: 'https://nickdev.space/about',
    type: 'profile',
    images: [
      {
        url: 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp',
        width: 1200,
        height: 630,
        alt: 'Jangir D Nick — Full-Stack & Cloud Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Jangir D Nick',
    description:
      'DevOps & cloud engineer building standout, high-performing websites. Self-taught full-stack journey — from independent learning to shipping production work.',
    images: ['https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp'],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://nickdev.space/about#profilepage',
      url: 'https://nickdev.space/about',
      name: 'About Jangir D Nick',
      description:
        'About Jangir D Nick — self-taught full-stack and cloud engineer building high-performing web products.',
      mainEntity: {
        '@id': 'https://nickdev.space/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': 'https://nickdev.space/#person',
      name: 'Jangir D Nick',
      alternateName: ['Nick', 'Nandlal Jangid'],
      url: 'https://nickdev.space',
      image: 'https://ik.imagekit.io/ey4pcsgfy/avatar/jangirdnick.webp',
      jobTitle: 'Full-Stack & Cloud Engineer',
      description:
        "Hi, I'm Nandlal Jangid — also called Nick. As a DevOps & Cloud Engineer, I design and build websites that stand out and perform top. Self-taught from 2019, transitioning from content creation to full-stack and cloud engineering.",
      knowsAbout: [
        'Frontend Engineering',
        'React',
        'Next.js',
        'TypeScript',
        'Backend Development',
        'Node.js',
        'NestJS',
        'Databases & Data Layer',
        'MongoDB',
        'PostgreSQL',
        'Prisma',
        'Cloud & DevOps',
        'AWS',
        'Docker',
        'Kubernetes',
        'CI/CD & Automation',
        'GitHub Actions',
        'Infrastructure as Code',
        'Terraform',
        'Ansible',
        'Performance & Security',
        'Web Vitals',
        'AI-Assisted Development',
        'API Design & Testing',
        'Product Engineering',
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
  ],
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={aboutSchema} />
      <AboutSection />
      <AboutInfo />
      <SkillExperience />
      <Certificates />
    </main>
  );
}
