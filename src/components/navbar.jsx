import { Link } from 'react-scroll'
import resume from '../assets/pdfdown.pdf'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <a href="/" className="navbar-brand ms-2 text-light">
        Trenton Fisher
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href={resume}
              download="Trenton-Fisher-Resume.pdf"
              name="Resume"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="projectComponent"
              smooth={true}
              duration={100}
              offset={-65}
              className="nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contactSec"
              smooth={true}
              duration={100}
              offset={-65}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
