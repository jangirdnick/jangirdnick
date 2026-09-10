// import Link from 'next/link';
import Link from '@/components/Link';

export default function NavDesktop() {
  const navLinks: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="absolute inset-x-0 w-full p-4.5 md:p-7.5 px-6 lg:px-12 z-9999">
      <nav className="w-full flex items-center justify-between text-white">
        {/* left */}
        <div className="flex items-center">
          <div className="w-4 h-4 md:w-3 md:h-3 xl:w-4  xl:h-4 bg-white rounded-full" />
          <div>
            <h1 className=" text-2xl md:text-xl xl:text-3xl font-helveticaMediumItalic pt-0.5 tracking-[-0.9] -ml-0.5">
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
