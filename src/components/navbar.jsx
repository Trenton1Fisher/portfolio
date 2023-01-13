import { Link } from 'react-scroll'
import resume from '../assets/pdfdown.pdf'

export default function navbar() {

  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-light fixed-top"   
    >
      <a href="/" className="navbar-brand text-dark ms-2">
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
            <a className="nav-link text-dark" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-dark"
              href={resume}
              download="Trenton-Fisher-Resume.pdf"
              name="Resume"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <Link to="projectComponent" smooth={true} duration={100} offset={-65}>
            <a className="nav-link text-dark" href="#">
              Projects
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contactSec" smooth={true} duration={100} offset={-65}>
            <a className="nav-link text-dark" href="#">
              Contact
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
