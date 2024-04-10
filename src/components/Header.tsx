import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.section 
      className="text-center h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-[-250px]">
        <motion.h1 
          className="text-7xl font-bold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Trenton Fisher
        </motion.h1>
        <motion.h2 
          className="text-5xl font-bold  bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent bg-clip-text p-4 mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Software Engineer
        </motion.h2>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={900}
          className="glow-on-hover p-3 font-bold text-lg hover:text-xl"
        >
          View My Work
        </Link>
      </div>
    </motion.section>
  )
}

