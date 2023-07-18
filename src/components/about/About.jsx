import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/satwikapic4.jpg'
const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Here's a little bit</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <p>Hi! 👋 I'm Satwika Sridhar. <br/>
           {/* I'm a final year Computer Science Engineering student pursuing my bachelor's degree in Computer Science and Engineering 
           at Vellore Institute of Technology, Chennai. Equipped with experience in software development teams and proficient in programming languages like Python, Java, and C++, I'm prepared to make a meaningful contribution to impactful projects. My expertise extends to data analysis and machine learning, utilizing libraries such as TensorFlow, Scikit-learn, and pandas. Additionally, I possess web development skills encompassing HTML, CSS, JavaScript, React.js, and Django. Collaboration, effective communication, and a continuous thirst for knowledge are integral to my work ethic. Outside of academics, I actively engage in coding competitions and prioritize physical fitness to maintain a healthy work-life balance. Let's connect and collaborate to create innovative solutions that drive positive change! */}
           I am a final-year Computer Science Engineering student at Vellore Institute of Technology, where I have nurtured my passion for Data Science and Software Development. With a keen interest in this dynamic field, I have developed a diverse skill set encompassing Data Analysis, Web Development, and Machine Learning techniques.
Throughout my academic journey, I have actively pursued opportunities to enhance my technical knowledge. Engaging in challenging coursework and hands-on projects, I have gained proficiency in Data Manipulation,  Data Cleaning, Visualization, and Hypothesis testing. I have also explored various fields in Machine Learning like Artificial Intelligence, Computer Vision, Natural Language Processing, Deep Learning etc., enabling me to build predictive models and optimize their performance.
I am eagerly seeking an entry-level position in the tech industry. With my strong analytical and programming skills, coupled with a collaborative mindset, I am ready to contribute to innovative solutions that drive meaningful business outcomes.
{/* I am confident that my dedication, technical expertise, and passion for data science position me as a strong candidate for entry-level roles. I am excited about the opportunity to apply my skills and contribute to the success of your organization. */}
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Contact Me!</a> */}
        </div>
      </div>
    </section>
  )
}

export default About