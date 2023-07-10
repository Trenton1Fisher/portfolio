import { Typewriter } from 'react-simple-typewriter'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleMove = e => {
      const left = document.getElementById('left-side')
      left.style.width = `${(e.clientX / window.innerWidth) * 100}%`
    }

    document.onmousemove = e => handleMove(e)
    document.ontouchmove = e => handleMove(e.touches[0])

    return () => {
      document.onmousemove = null
      document.ontouchmove = null
    }
  }, [])
  return (
    <>
      <section id="left-side" className="side">
        <div className="">
          <h1 className="title">
            <Typewriter words={['Trenton Fisher']} typeSpeed={100} loop={1} />{' '}
            <span className="fancy"> Front End Web Developer</span>
          </h1>
        </div>
      </section>
      <section id="right-side" className="side">
        <div className="">
          <h1 className="title">
            <Typewriter words={['Trenton Fisher']} typeSpeed={100} loop={1} />{' '}
            <span className="fancy"> Front End Web Developer</span>
          </h1>
        </div>
      </section>
    </>
  )
}
