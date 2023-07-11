import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/satwikapic1.jpg'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Satwika Sridhar</h1>
        <h5 className="text-light">Student.</h5>
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