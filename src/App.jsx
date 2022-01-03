import React from 'react'
import './styles/general.css'
import './styles/components.css'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'

function App() {
  return (
    <>
      <Navigation />
      <Profile />
      <Skills />
      <ProjectList />
    </>
  )
}

export default App
