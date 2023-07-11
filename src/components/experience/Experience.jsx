import React from 'react'
import { useState } from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  const [incrementValue, setIncrementValue]=useState(0)
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon'/>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon'/>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon'/>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>  
                <BsPatchCheckFill className='experience__icon'/>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Experience