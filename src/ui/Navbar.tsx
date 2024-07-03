'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, LayoutGroup } from "framer-motion";
import clsx from 'clsx';

const Navbar = () => {
    const navLinks = [
      {
        display: "Home",
        href: "/"
      },
      {
        display: "Resume",
        href:"/resume"
      },
      {
        display: "Projects",
        href: "/projects"
      },
      {
        display: "Contact",
        href:"/contact"
      }
    ];
  
    const pathname = usePathname();

    return (
      <nav className="sticky top-0 flex justify-center items-center z-20 h-24">
        <ul className="flex items-center gap-6 text-lg py-5 px-6 bg-white/30 backdrop-blur-lg rounded-lg">
          <LayoutGroup>
            {navLinks.map((link) => (
              <motion.li
                key={link.display}
                className="relative list-none"
              >
                <Link 
                  href={link.href}
                  className="cursor-pointer font-medium hover:font-bold"
                >
                  {link.display}
                </Link>
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                    layoutId="underline"
                  />
                )}
              </motion.li>
            ))}
          </LayoutGroup>
        </ul>
      </nav>
    );
  };
  
export default Navbar;
