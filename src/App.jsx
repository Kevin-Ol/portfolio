import React, { useEffect } from 'react'
import './styles/general.css'
import './styles/components.css'
import './styles/queries.css'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import script from './styles/fixSafariAndSmoothScrooling'

function App() {
  useEffect(() => {
    script();
  }, [])

  return (
    <>
      <Navigation />
      <Profile />
      <Skills />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  )
}

export default App
