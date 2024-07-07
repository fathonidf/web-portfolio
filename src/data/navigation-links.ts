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

export default navLinks;