import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/satwikapic1.jpg'
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Final-Year B.Tech CSE Student</h5>
              <small>Vellore Institute of Technology</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Data Science Enthusiast</h5>
              <small>With Special Interest in Machine Learning</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Student (trying)</small>
            </article>
          </div>
          <p>Hi! 👋</p>
          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About