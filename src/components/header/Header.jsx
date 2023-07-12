import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/satwikapic1.jpg'
import Typewriter from "typewriter-effect"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Satwika Sridhar</h1>
        <div className="type-str">
            <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: ['CSE Student','Data Analyst','Software Developer','Bibliophile','I screamed out loud when this started working','This will not be in the final dw'],
                }}
            />
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="coming soon" />
        </div>

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a>       */}
      </div>
    </header>
  )
}

export default Header