import projects from '../data/projects.js'
import ProjectItem from './projectItem'

export default function projectSection() {
  return (
    <div className="container" name="projectComponent">
      <h1 id="proj">Projects</h1>
      <div className="row">
        {projects.map(project => (
          <ProjectItem
            key={project.id}
            title={project.title}
            img={project.imgUrl}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  )
}
