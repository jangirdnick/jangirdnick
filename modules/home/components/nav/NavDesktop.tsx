'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/Link';

export default function NavDesktop() {
  const pathname = usePathname();
  const isBlackText = pathname?.startsWith('/work') || pathname?.startsWith('/contact');

  const navLinks: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`absolute inset-x-0 w-full p-4 md:p-7.5 px-4 lg:px-12 z-9999 ${isBlackText ? 'text-black' : 'text-white'}`}
    >
      <nav className="w-full flex items-center justify-between">
        {/* left */}
        <div className="flex items-center">
          <div
            className={`relative w-4 h-4 md:w-3 md:h-3 xl:w-4 xl:h-4 rounded-full ${isBlackText ? 'bg-black' : 'bg-white'}`}
          />
          <div>
            <h1 className="text-2xl md:text-xl xl:text-3xl font-helveticaMediumItalic pt-0.5 tracking-[-0.9] -ml-0.5">
              -Nick
            </h1>
          </div>
        </div>

        {/* right */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                text={link.label}
                href={link.href}
                className="text-sm xl:text-base! 2xl:text-lg!"
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
