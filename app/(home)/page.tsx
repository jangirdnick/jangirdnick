import AboutSection from '../../modules/home/components/About/AboutSection';
import Footer from '../../modules/home/components/Footer/Footer';
import HomeSection from '../../modules/home/components/HomeSection';
import ProjectsSection from '../../modules/home/components/Projects/ProjectsSection';

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />

      <Footer />
    </>
  );
}
