import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'

function App() {
  return (
    <div className="text-white flex min-h-screen flex-col items-center bg-gradient-to-l from-gray-700 via-gray-900 to-black ">
      <div className="container mx-auto py-5 px-5 overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App