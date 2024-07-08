import Link from "next/link";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

interface NavLink {
  display: string;
  href: string;
}

interface NavbarMobileProps {
  navLinks: NavLink[];
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ navLinks }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  };

  return (
    <div className="md:hidden">
      <button onClick={handleDrawerToggle} className="p-2 border shadow-md rounded-lg">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            className="fixed inset-0 z-30" 
            onClick={handleDrawerToggle}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            transition={{ ease: "easeOut", duration: 0.8 }} // Mengatur easing dan durasi animasi
          >
            <motion.div 
              className="fixed top-0 left-0 w-full h-auto bg-white z-40 shadow-lg rounded-lg border" 
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              transition={{ ease: "easeOut", duration: 0.8 }} // Mengatur easing dan durasi animasi
            >
              <ul className="flex flex-col items-start gap-2 text-lg py-5 px-6">
                <LayoutGroup>
                  {navLinks.map((link) => (
                    <div
                      key={link.display}
                      className={`relative list-none w-full ${pathname === link.href ? 'bg-gray-200 rounded-lg' : ''}`}
                      onClick={handleDrawerToggle}
                    >
                      <Link 
                        href={link.href}
                        className="block w-full cursor-pointer font-medium hover:font-bold p-2"
                      >
                        {link.display}
                      </Link>
                    </div>
                  ))}
                </LayoutGroup>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
