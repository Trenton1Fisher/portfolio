import { useState, useEffect } from 'react'
import resume from '../assets/pdfdown.pdf'

export default function navbar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScroll(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light fixed-top ${
        scroll > 0 ? 'bg-light' : ''
      }`}
    >
      <a href="#" className="navbar-brand text-dark ms-2">
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
            <a className="nav-link text-dark" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
