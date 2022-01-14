import React from 'react'
import Project from './Project'
import { projects } from '../projects'

function ProjectList() {
  return (
    <section id="projects" className="section-projects">
      <h2>Projetos</h2>
      { projects.map((project) => {
        const { title, image, description, web, git } = project;
        return <Project
          title={ title }
          image={ image }
          description={ description }
          web={ web }
          git={ git }
          />
      }) }
    </section>
  )
}

export default ProjectList
