import GitImage from '/gitLogo.png'
import CImage from '/cLogo.png'
import CPPImage from '/cppLogo.png'
import TypescriptLogo from '/typescriptLogo.png'
import NodeLogo from '/nodeLogo.png'
import GoLogo from '/goLogo.png'
import ReactLogo from '/reactLogo.png'
import NextLogo from '/nextLogo.png'
import SolidLogo from '/SolidJS.png'
import SQLLogo from '/sqlLogo.png'
import PostGreLogo from '/postLogo.png'
import PrismaLogo from '/prismaLogo.png'

export default function Technologies() {
  return (
    <section className="max-md:h-screen pt-24 md:pt-32">
      <h3 className="text-4xl block font-bold mb-12">Technologies I've Used</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
        <div className="flex flex-col items-center">
          <img
            src={GitImage}
            height={70}
            width={70}
            alt="Git version control"
          />
          <p>Git</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={CImage}
            height={70}
            width={70}
            alt="C Programming Language"
          />
          <p>C</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={CPPImage}
            height={70}
            width={70}
            alt="C++ Programming Language"
          />
          <p>C++</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={TypescriptLogo} height={70} width={70} alt="Typescript" />
          <p>Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={GoLogo}
            height={70}
            width={70}
            alt="Go Programming Language"
          />
          <p>Go</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={ReactLogo} height={70} width={70} alt="React" />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={NextLogo} height={70} width={70} alt="NextJs" />
          <p>NextJs</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={SolidLogo} height={70} width={70} alt="SolidJs" />
          <p>SolidJs</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={SQLLogo} height={70} width={70} alt="SQL" />
          <p>SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={PostGreLogo} height={70} width={70} alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={PrismaLogo} height={70} width={70} alt="Prisma" />
          <p>Prisma</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={NodeLogo} height={70} width={70} alt="Tailwind" />
          <p>NodeJs</p>
        </div>
      </div>
    </section>
  )
}
