import projects from '../data/projects.js'
import ProjectItem from './projectItem'
import { useEffect } from 'react'

export default function ProjectSection() {
  return (
    <div className="projectSection">
      <ul id="projects">
        <li className="project" id="project1">
          <div className="project-body">
            <h2>Card1</h2>
          </div>
        </li>
        <li className="project" id="project2">
          <div className="project-body">
            <h2>Card2</h2>
          </div>
        </li>
        <li className="project" id="project3">
          <div className="project-body">
            <h2>Card3</h2>
          </div>
        </li>
      </ul>
    </div>
  )
}
