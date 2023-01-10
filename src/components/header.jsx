import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

export default function header() {
  return (
    <section id="hero--img">
      <div className="text-center header">
        <h1 className="text-dark d-block">
          <Typewriter words={['Trenton Fisher']} typeSpeed={100} loop={2} />
        </h1>
        <h6 className="text-dark d-block">Front End Web Developer</h6>
        <Link to="projectComponent" smooth={true} duration={100} offset={-65}>
          <button className="projectButton px-2 py-1 my-2 bg-dark text-light shadow-sm">
            See My Work
          </button>
        </Link>
      </div>
    </section>
  )
}
