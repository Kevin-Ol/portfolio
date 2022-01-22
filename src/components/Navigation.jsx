function Navigation() {
  return (
    <header className="header">
      <p>Kevin Oliveira</p>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#">Home</a></li>
          <li><a className="main-nav-link" href="#skills">Habilidades</a></li>
          <li><a className="main-nav-link" href="#projects">Projetos</a></li>
          <li><a className="main-nav-link" href="#contact">Contato</a></li>
        </ul>
      </nav>
      <button className="btn-mobile-nav">
        <ion-icon  class="mobile-nav-icon" name="menu-outline"></ion-icon>
        <ion-icon  class="mobile-nav-icon" name="close-outline"></ion-icon>
      </button>
    </header>
  )
}

export default Navigation
