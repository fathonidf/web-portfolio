'use client';

import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import navLinks from '@/data/navigation-links';
import Image from 'next/image';
import logo from '../../../public/favicon.ico';

const Navbar: React.FC = () => {

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <nav className="top-0 flex justify-between items-center z-20 h-24 px-6 md:px-10">
      <a href="/">
        <Image src={logo} alt="Logo" className="h-10 w-10 object-contain" />
      </a>
      {isDesktop ? <NavbarDesktop navLinks={navLinks} /> : <NavbarMobile navLinks={navLinks} />}

      <div className="hidden lg:block">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
