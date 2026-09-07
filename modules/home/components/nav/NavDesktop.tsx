import Link from "next/link";

export default function NavDesktop() {


  const navLinks: { label: string, href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="absolute inset-x-0 w-full p-8 pr-10 z-9999">
      <nav className="w-full flex items-center justify-between text-white">
        {/* left */}
        <div>
          <div className="bg-[#d0ab7742] border-[0.5px] border-[#d0ab7742] outline-[0.5px] outline-[#9D8765] shadow-inner shadow-[#5b472bc5] px-4 py-0.5 backdrop-blur-xs rounded-full cursor-pointer">
            <h1 className="text-xl font-helveticaMediumItalic pt-1 tracking-[-0.9]">-Nick</h1>
          </div>
        </div>


        {/* right */}
        <div>
          <ul className="flex items-center gap-10">
            {
              navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}
