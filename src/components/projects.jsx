import projects from '../data/projects.js'
import ProjectItem from './projectItem'

export default function projectSection() {
  return (
    <div className="container" name="projectComponent">
      <h1 id="proj" className="mb-4">
        Projects
      </h1>
      <div>
        {projects.map(project => (
          <ProjectItem
            key={project.id}
            title={project.title}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  )
}
