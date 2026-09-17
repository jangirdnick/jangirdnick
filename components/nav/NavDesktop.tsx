'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/Link';
import { navLinks } from '@/data/NavLinks';

export default function NavDesktop() {
  const pathname = usePathname();
  const isBlackText = pathname?.startsWith('/work') || pathname?.startsWith('/contact');

  return (
    <header
      className={`absolute inset-x-0 w-full p-4 md:p-7.5 px-4 lg:px-12 z-9999 ${isBlackText ? 'text-black' : 'text-white'}`}
    >
      <nav className="w-full flex items-center justify-between">
        {/* left: brand / logo */}
        <div className="flex items-center">
          <div
            className={`relative w-4 h-4 md:w-3 md:h-3 xl:w-4 xl:h-4 rounded-full ${isBlackText ? 'bg-black' : 'bg-white'}`}
          />
          <div>
            {/* p not h1 — the brand name in nav is NOT the page heading */}
            <p className="text-2xl md:text-xl xl:text-3xl font-helveticaMediumItalic pt-0.5 tracking-[-0.9] -ml-0.5">
              -Nick
            </p>
          </div>
        </div>

        {/* right: navigation links */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  text={link.label}
                  href={link.href}
                  className="text-sm xl:text-base! 2xl:text-lg!"
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
