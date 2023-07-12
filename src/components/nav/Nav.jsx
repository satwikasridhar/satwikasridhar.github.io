import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCode} from 'react-icons/ai'
import {GoLightBulb} from 'react-icons/go'
import {MdAlternateEmail} from 'react-icons/md'
import {PiCertificate} from 'react-icons/pi'
// import {useState} from 'react'
import { createContext, useState, useEffect } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'
// export const ThemeContext = createContext(null)
const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the duration (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);
  return (
      <div>
        {/* <div className={`navbar-prompt ${isVisible ? 'visible' : ''}`}>
          <p>Please use the navbar --{'>'}</p>
        </div> */}
        <nav>
          <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
          <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GoLightBulb/></a>
          <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineCode/></a>
          <a href="#certificates" onClick={() => setActiveNav('#certificates')} className={activeNav === '#certificates' ? 'active' : ''}><PiCertificate/></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdAlternateEmail/></a>
        </nav>
      </div>
    
  )
}

export default Nav