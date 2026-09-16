import type { Metadata } from 'next';
import './globals.css';
import HomeLayoutClient from './(home)/HomeLayoutClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://nickdev.space'),
  title: {
    default: 'Jangir D Nick | Full-Stack & Cloud Engineer',
    template: '%s | Jangir D Nick',
  },
  description:
    'Full-stack engineer building web products, APIs, and cloud systems with React, Next.js, Node.js, Nest.js, AWS, and Docker — focused on performance, security, and reliable delivery.',
  keywords: [
    'Nick',
    'Nick D Jangir',
    'Jangir D Nick',
    'Full-Stack Engineer',
    'Cloud Engineer',
    'DevOps Engineer',
    'Next.js Developer',
    'React Developer',
    'Node.js',
    'AWS',
    'Docker',
    'CI/CD',
    'Web Development Portfolio',
  ],
  authors: [{ name: 'Jangir D Nick', url: 'https://nickdev.space' }],
  creator: 'Jangir D Nick',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jangir D Nick | Full-Stack & Cloud Engineer',
    description:
      'Web design, development, and cloud engineering for growing businesses — performance, security, and production-ready systems.',
    url: 'https://nickdev.space',
    siteName: 'Jangir D Nick',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Jangir D Nick — Full-Stack & Cloud Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jangir D Nick | Full-Stack & Cloud Engineer',
    description:
      'Web products, cloud systems, and CI/CD — built for performance, security, and stability.',
    creator: '@jangirdnick',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col selection:bg-orange-600 selection:text-white">
        <HomeLayoutClient>{children}</HomeLayoutClient>
      </body>
    </html>
  );
}
