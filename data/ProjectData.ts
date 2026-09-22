export interface ProjectDataProps {
  id: string;
  title: string;
  subTitle: string;
  year: string;
  img: string;
  role: string;
  view: string;
}

export const projectData: ProjectDataProps[] = [
  {
    id: '01',
    title: 'Perpx',
    subTitle: 'AI-powered research and chat platform',
    year: '2026',
    img: 'https://ik.imagekit.io/ey4pcsgfy/section/perpx.avif',
    role: 'Development',
    view: 'https://perpx.nickdev.space',
  },
  {
    id: '02',
    title: 'PixKit',
    subTitle: 'Media management SDK',
    year: '2026',
    img: 'https://ik.imagekit.io/ey4pcsgfy/section/pixkit.avif',
    role: 'Development',
    view: 'https://pixkit.nickdev.space',
  },
  {
    id: '03',
    title: 'Aayeshol',
    subTitle: 'AI-powered social media management platform',
    year: '2026',
    img: 'https://ik.imagekit.io/ey4pcsgfy/section/aayeshol.avif',
    role: 'Development',
    view: 'https://aayeshol.nickdev.space',
  },
  {
    id: '04',
    title: 'Nick D Studio',
    subTitle: 'Branding and web development studio',
    year: '2025',
    img: 'https://ik.imagekit.io/ey4pcsgfy/section/nickdstudio.avif',
    role: 'Development',
    view: 'https://studio.nickdev.space',
  },
];
