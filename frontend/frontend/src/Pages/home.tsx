import React from 'react';
import Header from '../Components/Navbar/Header';

import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contacts/Contacts';
import Education from '../Components/Education/Education';
import Projects from '../Components/Projects/Projects';
import Hero from '../Components/Hero/Hero';
import Skills from '../Components/Skills/Skills';
import Experience from '../Components/Experience/Experience';

export default function Home() {
  return (
    <div>
      {/* No need for onNavClick here */}
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
