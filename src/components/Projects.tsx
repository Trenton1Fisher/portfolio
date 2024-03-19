import { projects } from '../projectData'
import drawbaordImage from '/drawbaordImage.png'
import UkJobbleImage from '/uk-jobble.png'

export default function Projects() {
  return (
    <section className="">
      <h3 className="text-4xl font-bold mb-8">My Projects</h3>
      <div className="flex flex-wrap justify-center">
        {projects.map(project => (
          <div className="p-4 md:w-1/2 lg:w-1/2" key={project.id}>
            <div className="max-w-md relative rainbow-backround group shadow-lg mx-auto">
              <img
                className="w-full object-cover p-2 rounded-xl"
                src={
                  project.id === 1
                    ? UkJobbleImage
                    : project.id === 2
                    ? drawbaordImage
                    : project.id === 3
                    ? UkJobbleImage
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
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >
                    {teck}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
