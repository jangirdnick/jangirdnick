interface NavLinksProps {
  id: string;
  label: string;
  href: string;
}

export const navLinks: NavLinksProps[] = [
  { id: '01', label: 'Home', href: '/' },
  { id: '02', label: 'About', href: '/about' },
  { id: '03', label: 'Work', href: '/work' },
  { id: '04', label: 'Contact', href: '/contact' },
];
