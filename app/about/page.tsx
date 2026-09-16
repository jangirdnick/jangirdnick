import { Metadata } from 'next';
import AboutSection from '../../modules/About/components/AboutSection';
import AboutInfo from '../../modules/About/components/AboutInfo';
import SkillExperience from '../../modules/About/components/Skill & Experience/SkillExperience';
import Certificates from '../../modules/About/components/Certificates';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Jangir D Nick — DevOps and cloud engineer who designs and builds high-performing websites. Self-taught full-stack path from independent projects to production systems.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Jangir D Nick',
    description:
      'DevOps & cloud engineer building standout, high-performing websites. Self-taught full-stack journey — from independent learning to shipping production work.',
    url: 'https://nickdev.space/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Jangir D Nick',
    description:
      'DevOps & cloud engineer building standout, high-performing websites. Self-taught full-stack journey — from independent learning to shipping production work.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <AboutInfo />
      <SkillExperience />
      <Certificates />
    </>
  );
}
