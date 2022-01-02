import React from 'react'
import profileImage from '../images/perfil.png'

function Profile() {
  return (
    <section id="#" class="section-profile">
      <img src={profileImage}></img>
      <div>
        <p>Olá! Meu nome é Kevin e sou desenvolvedor Full-Stack. Comecei a estudar desenvolvimento web em abril de 2020 utilizando ReactJS para front-end e NodeJS para backend, e bancos de dados MySQL e MongoDB.
        </p>
      </div>
    </section>
  )
}

export default Profile
