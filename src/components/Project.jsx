import React from 'react'

function Project({ title, image, description, web, git }) {
  return (
    <div class="project-box">
      <img src={ image } alt="Tela inicial do aplicativo"></img>
      <div>
        <h3>{ title }</h3>
        <p>
          { description }
        </p>
        <div class="project-links">
          { web && <a href={ web } target="_blank">Acesse aqui</a> }
          <a href={ git } target="_blank">
            <i class="devicon-github-original"></i>
            <span>Repositório</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
