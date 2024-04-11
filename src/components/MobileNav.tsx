import { CgClose, CgMenuGridO } from 'react-icons/cg'
import Resume from '/TrentonFisher-Resume.pdf'
import { useState } from 'react'
import { Drawer } from '@mui/material'
import { Link } from 'react-scroll'

export default function MobileNav() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <>
      <div
        className="md:hidden ml-auto cursor-pointer"
        onClick={() => setOpenMobileMenu(prev => !prev)}
      >
        <CgMenuGridO color="white" size={30} />
      </div>
      <Drawer
        anchor="top"
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        className="relative"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={900}
          className=" cursor-pointer mr-6 nav-link px-4 pt-4"
          onClick={() => setOpenMobileMenu(false)}
        >
          <span className="text-lg font-semibold">Projects</span>
        </Link>
        <a
          href={Resume}
          download={'TrentonFisher-Resume'}
          className="cursor-pointer mr-6 nav-link px-4"
        >
          <span className="text-lg font-semibold">Download CV</span>
        </a>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={1200}
          className=" cursor-pointer mr-6 nav-link px-4"
          onClick={() => setOpenMobileMenu(false)}
        >
          <span className="text-lg font-semibold">About</span>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={1200}
          className="cursor-pointer mr-6 nav-link px-4 pb-4"
          onClick={() => setOpenMobileMenu(false)}
        >
          <span className="text-lg font-semibold">Contact</span>
        </Link>
        <CgClose
          color="black"
          size={30}
          className="absolute top-2 right-2"
          onClick={() => setOpenMobileMenu(false)}
        />
      </Drawer>
    </>
  )
}
