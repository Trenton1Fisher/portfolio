import { Link } from 'react-scroll'

export default function Header() {
  return (
    <section className="text-center h-screen flex flex-col justify-center items-center">
      <div className="mt-[-250px]">
        <h1 className="text-7xl font-bold">Trenton Fisher</h1>
        <h2 className="text-5xl font-bold  bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent bg-clip-text p-4 mb-8">
          Software Engineer
        </h2>
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
    </section>
  )
}
