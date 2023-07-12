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
          {/* <div className="about__cards">
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
          </div> */}
          <p>Hi! 👋 I'm Satwika Sridhar. <br/>
           I'm a final year Computer Science Engineering student pursuing my bachelor's degree in Computer Science and Engineering 
           at Vellore Institute of Technology, Chennai. Equipped with experience in software development teams and proficient in programming languages like Python, Java, and C++, I'm prepared to make a meaningful contribution to impactful projects. My expertise extends to data analysis and machine learning, utilizing libraries such as TensorFlow, Scikit-learn, and pandas. Additionally, I possess web development skills encompassing HTML, CSS, JavaScript, React.js, and Django. Collaboration, effective communication, and a continuous thirst for knowledge are integral to my work ethic. Outside of academics, I actively engage in coding competitions and prioritize physical fitness to maintain a healthy work-life balance. Let's connect and collaborate to create innovative solutions that drive positive change!
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About