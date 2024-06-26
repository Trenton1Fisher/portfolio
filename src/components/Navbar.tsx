import { Link } from 'react-scroll'
import Resume from '/TrentonFisher-Resume.pdf'
import MobileNav from './MobileNav'

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-[999] max-md:mx-auto foggy-glass-nav p-4 font-semibold flex items-center mt-4 mr-4 text-xl">
      <div className="max-md:hidden">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={900}
          className="relative group cursor-pointer mr-6 nav-link"
        >
          <span className="relative">Projects</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </Link>
        <a
          href={Resume}
          download={'TrentonFisher-Resume'}
          className="relative group cursor-pointer mr-6 nav-link"
        >
          <span className="relative">Download CV</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </a>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={1200}
          className="relative group cursor-pointer mr-6 nav-link"
        >
          <span className="relative">About</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={1200}
          className="relative group cursor-pointer mr-6 nav-link"
        >
          <span className="">Contact</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </Link>
      </div>
      <MobileNav />
    </nav>
  )
}
