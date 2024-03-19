import { useEffect, useMemo, useState } from 'react'
import Header from './Header'
import Projects from './Projects'
import About from './About'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { SyncLoader } from 'react-spinners'

export default function LandingPage() {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {},
      fpsLimit: 120,
      particles: {
        color: {
          value: '#ffffff',
        },
        move: {
          enable: true,
          outModes: undefined, // Set outModes to undefined if you don't want to specify any particular behavior
          random: false,
          speed: 0.5,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <>
        <Header />
        <Projects />
        <About />
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </>
    )
  }

  return (
    <>
      <h2 className="font-semibold text-2xl mb-4">
        Loading Assets Please Stand By...
      </h2>
      <SyncLoader color="#FF44EC" speedMultiplier={0.5} />
    </>
  )
}
