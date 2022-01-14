import React from 'react'
import profileImage from '../images/perfil.png'

function Profile() {
  return (
    <section id="#" className="section-profile">
      <img src={profileImage}></img>
      <div>
        <p>
          Olá! Meu nome é Kevin e sou desenvolvedor Full-Stack. Comecei a estudar desenvolvimento web em abril de 2020 utilizando ReactJS para front-end, NodeJS para backend, bancos de dados MySQL e MongoDB. Neste portfolio reuni as tecnologias que tenho estudado e os projetos que tenho feito desde então.
        </p>
      </div>
    </section>
  )
}

export default Profile
