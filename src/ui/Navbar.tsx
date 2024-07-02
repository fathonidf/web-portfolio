import Link from "next/link";

const Navbar = () => {
    const navLinks = [
      {
        display: "Home",
        href: "/"
      },
      {
        display: "Resume",
        href:"/resume"
      }
    ];
  
    return (
      <nav className="sticky top-0 flex justify-center items-center z-20 h-24">
        <ul className="flex items-center gap-6 text-lg py-5 px-6 bg-white/30 backdrop-blur-lg rounded-lg">
          {navLinks.map((link) => (
            <Link key={link.display} className="cursor-pointer font-medium hover:font-bold" href={link.href}>
              {link.display}
            </Link>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;