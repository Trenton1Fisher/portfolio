import { projects } from '../projectData'
import drawbaordImage from '/drawbaordImage.png'
import UkJobbleImage from '/uk-jobble.png'
import ParserImage from '/parser.png'
import LinkImage from '/link.png'
import GithubImage from '/github.png'
import { Element } from 'react-scroll'

export default function Projects() {
  return (
    <section className="">
      <Element name="projects">
        <h3 className="text-4xl font-bold mb-8">My Projects</h3>
      </Element>
      <div className="flex flex-wrap justify-center">
        {projects.map(project => (
          <div className="p-4 md:w-1/2 lg:w-1/2" key={project.id}>
            <div className="max-w-[500px] min-h-[500px] z-[999] relative rainbow-backround group shadow-lg mx-auto">
              <img
                className="object-cover w-full h-78 p-1 rounded-lg"
                src={
                  project.id === 1
                    ? UkJobbleImage
                    : project.id === 2
                    ? drawbaordImage
                    : project.id === 3
                    ? ParserImage
                    : project.id === 4
                    ? UkJobbleImage
                    : ''
                }
                alt="Project"
              />
              <div className="px-6 py-2">
                <div className="font-bold text-xl text-white mb-2">
                  {project.title}
                </div>
                <p className="text-white text-sm">{project.description}</p>
              </div>
              <div className="px-6 pt-2 pb-4">
                {project.stack.map((teck, index) => (
                  <span
                    key={index}
                    className="inline-block border rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >
                    {teck}
                  </span>
                ))}
              </div>
              <div className="flex justify-center pb-2 space-x-4">
                <a
                  className="flex items-center hover:opacity-80"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkImage} height={40} width={40} alt="live link" />
                  <span className="ml-1">Live Link</span>
                </a>
                <a
                  className="flex items-center hover:opacity-80"
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GithubImage}
                    height={40}
                    width={40}
                    alt="Github Repository Link"
                  />
                  <span className="ml-2">Github</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
