import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import NavPrompt from './components/navprompt/NavPrompt'
// import { createContext, useState } from 'react'


const App = () => {
  
  return (
    
      <>
        <Header /> 
        {/* <NavPrompt /> */}
        <Nav />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer /> 
      </>
  )
}

export default App