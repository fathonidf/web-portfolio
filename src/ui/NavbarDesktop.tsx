'use client';

import Link from "next/link";
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, LayoutGroup } from "framer-motion";

interface NavLink {
  display: string;
  href: string;
}

interface NavbarDesktopProps {
  navLinks: NavLink[];
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex justify-center w-full">
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
    </div>
  );
};

export default NavbarDesktop;
