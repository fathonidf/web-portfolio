'use client';

import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import navLinks from '@/data/navigation-links';

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
      {isDesktop ? <NavbarDesktop navLinks={navLinks} /> : <NavbarMobile navLinks={navLinks} />}
    </nav>
  );
};

export default Navbar;
