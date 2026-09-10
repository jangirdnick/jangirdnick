import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { navLinks } from '../../../data/NavLinks';
import NextLink from 'next/link';

import FooterSocial from './FooterSocial';

interface RightSideProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function RightSide({ isOpen, setIsOpen }: RightSideProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed top-0 right-0 h-screen w-full md:w-100 lg:w-110 2xl:w-135 pl-10 lg:pl-20 bg-[#121212] text-white z-99998 shadow-2xl border-l border-white/10 p-10 pt-8 flex flex-col justify-between overflow-hidden"
        >
          {/* Header */}
          {/* <div className="flex justify-end ">
            <button
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-2 text-xl text-background font-thin opacity-70 hover:opacity-100 transition-colors cursor-pointer"
            >
              <Link text="Close" href="" className="text-base! md:text-sm! xl:text-base!" />

              <div className="rotate-45 group-hover:rotate-0 duration-300 ease-in-out">
                <svg
                  className="w-3.5 h-3.5 md:w-3 md:h-3 2xl:w-4 2xl:h-4"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                </svg>
              </div>
            </button>
          </div> */}

          {/* Main Nav Links */}
          <nav className="my-auto py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.li
                    key={link.href}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 35, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 * index,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    <NextLink
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group w-fit flex items-center gap-4 text-6xl 2xl:text-7xl font-poppinsRegular tracking-[-0.04em] transition-colors duration-300 leading-[0.95] ${
                        isActive ? 'text-orange-400' : 'hover:text-orange-400'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="shrink-0"
                        >
                          <svg
                            width={26}
                            height={26}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-orange-400"
                          >
                            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                          </svg>
                        </motion.div>
                      )}
                      <span>{link.label}</span>
                    </NextLink>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Footer / Socials */}
          <FooterSocial />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
