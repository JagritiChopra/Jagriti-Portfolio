import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import Home from "./Pages/home";
import Hero from "./Components/Hero/Hero";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contacts/Contacts";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;