interface ProjectDataProps {
  id: string;
  title: string;
  subTitle: string;
  year: string;
  img: string;
  video?: string;
}

export const projectData: ProjectDataProps[] = [
  {
    id: '01',
    title: 'Perpx',
    subTitle: 'AI-powered research and chat platform',
    year: '2026',
    img: 'https://i.pinimg.com/736x/09/66/56/0966567bd74650ab2ef5bf07a1c500e4.jpg',
    video: '',
  },
  {
    id: '02',
    title: 'PixKit',
    subTitle: 'Media management SDK',
    year: '2026',
    img: 'https://i.pinimg.com/736x/02/97/1b/02971b2262a83c859a8edf10132bcb8c.jpg',
    video: '',
  },
  {
    id: '03',
    title: 'Aayeshol',
    subTitle: 'AI-powered social media management platform',
    year: '2026',
    img: 'https://i.pinimg.com/736x/f8/67/f8/f867f87a305d8b97ff6754cbb85e7622.jpg',
    video: '',
  },
  {
    id: '04',
    title: 'Nick D Studio',
    subTitle: 'Branding and web development studio',
    year: '2025',
    img: 'https://i.pinimg.com/736x/45/2c/fe/452cfe92eccba429deb696a7c68635d0.jpg',
    video: '',
  },
];
