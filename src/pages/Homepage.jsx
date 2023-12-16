import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Meet from '../components/Meet'
import Skills from '../layout/Skills'
import Qualification from '../layout/Qualification'
import Projects from '../layout/Projects'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Meet />
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Projects />
    </div>
  )
}

export default Homepage