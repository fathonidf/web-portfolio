'use client';

import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import logo from '../../../public/favicon.ico';

interface NavLink {
  display: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    display: "Home",
    href: "/"
  },
  {
    display: "Projects",
    href: "/projects"
  },
  {
    display: "Contents",
    href: "/contents"
  },
  {
    display: "About",
    href: "/about"
  }
];

const Navbar: React.FC = () => {

  const router = useRouter()

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <nav className="top-0 flex justify-between lg:justify-center items-center z-20 h-24 px-6 md:px-10">
      <a onClick={() => router.replace("/")}>
        <Image src={logo} alt="Logo" className="h-10 w-10 object-contain" />
      </a>
      {isDesktop ? <NavbarDesktop navLinks={navLinks} /> : <NavbarMobile navLinks={navLinks} />}

      <div className="hidden lg:block">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
