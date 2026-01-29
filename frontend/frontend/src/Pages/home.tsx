import React from 'react'
import Header from '../Components/Navbar/Header'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contacts/Contacts'
import Education from '../Components/Education/Education'
import Projects from '../Components/Projects/Projects'
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/Skills/Skills'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />


    </div>
  )
}
