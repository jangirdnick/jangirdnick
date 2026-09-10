import type { Metadata } from 'next';
import './globals.css';
import HomeLayoutClient from './(home)/HomeLayoutClient';

export const metadata: Metadata = {
  title: {
    default: 'DevOps & Cloud Engineer | Nick',
    template: '%s | Nick',
  },
  description:
    'Portfolio of Jangir D Nick - Web Design, Development, Cloud & DevOps Engineer specializing in performance, security & stability.',
  keywords: [
    'DevOps Engineer',
    'Cloud Engineer',
    'Web Designer',
    'Fullstack Developer',
    'Nick Jangir',
    'Jangir d nick',
    'Performance & Security',
  ],
  authors: [{ name: 'Jangir D Nick' }],
  creator: 'Jangir D Nick',
  openGraph: {
    title: 'Jangir D Nick | DevOps & Cloud Engineer',
    description:
      'Web design, development, performance, security & stability for growing businesses.',
    siteName: 'Jangir D Nick',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps & Cloud Engineer | Jangir D Nick',
    description:
      'Web design, development, performance, security & stability for growing businesses.',
    creator: '@jangirdnick',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <HomeLayoutClient>{children}</HomeLayoutClient>
      </body>
    </html>
  );
}
