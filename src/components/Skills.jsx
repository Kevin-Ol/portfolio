import React from 'react'

function Skills() {
  return (
    <section id="skills" className="section-skills">
      <div className="learned">
        <div>
          <h2>Tecnologias aprendidas</h2>
          <p>Ferramentas que venho aprendendo</p>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <i className="devicon-html5-plain"></i>
            <p>HTML 5</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-css3-plain"></i>
            <p>CSS 3</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-javascript-plain"></i>
            <p>Javascript</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-git-plain"></i>
            <p>Git</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-react-original"></i>
            <p>React</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-redux-original"></i>
            <p>Redux</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-jest-plain"></i>
            <p>Jest</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-mysql-plain"></i>
            <p>MySQL</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-mongodb-plain"></i>
            <p>MongoDB</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-nodejs-plain"></i>
            <p>Node</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-express-original"></i>
            <p>Express</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-mocha-plain"></i>
            <p>Mocha</p>
          </div>
        </div>
      </div>
      <div className="potential">
        <div>
          <h2>Tecnologias em potencial</h2>
          <p>Ferramentas que já tive o primeiro contato</p>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <i className="devicon-typescript-plain"></i>
            <p>Typescript</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-bootstrap-plain"></i>
            <p>Bootstrap</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-sass-original"></i>
            <p>SASS</p>
          </div>
          <div className="skill-icon">
            <i className="devicon-firebase-plain"></i>
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
