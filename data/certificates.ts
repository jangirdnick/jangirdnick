/**
 * Certificates data — moved from inline array in Certificates.tsx
 * to centralized /data directory per project convention.
 */

export interface CertificateProps {
  img: string;
  alt: string;
  title: string;
}

export const certificates: CertificateProps[] = [
  {
    img: 'https://ik.imagekit.io/ey4pcsgfy/section/nick-certificate1.webp',
    alt: 'Jangir D Nick — Professional Certification 1',
    title: 'Professional Certification 1',
  },
  {
    img: 'https://ik.imagekit.io/ey4pcsgfy/section/nick-certificate-2.webp',
    alt: 'Jangir D Nick — Professional Certification 2',
    title: 'Professional Certification 2',
  },
];
