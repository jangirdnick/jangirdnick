import { Metadata } from 'next';
import AboutSection from '../../modules/About/AboutSection';
import AboutInfo from '../../modules/About/AboutInfo';
import SkillExperience from '../../modules/About/Skill & Experience/SkillExperience';
import Certificates from '../../modules/About/Certificates';

export const metadata: Metadata = {
  title: 'Nick – DevOps & Cloud Engineer | Web Development',
  description:
    'I am a DevOps & Cloud Engineer with experience in web development. I help businesses grow with custom-tailored websites that match their ambitions.',
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
