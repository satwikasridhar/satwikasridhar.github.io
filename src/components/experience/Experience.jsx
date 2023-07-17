import React from 'react'
import { useState } from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
import { FcCursor } from 'react-icons/fc'
const Experience = () => {
  const [incrementValue, setIncrementValue] = useState(0)
  return (
    <section id="experience" className='experience'>
      <h5>My Tech Stack</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>React.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>Flask</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Programming Languages and DBMS</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>C</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>R</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <BsPatchCheckFill className='experience__icon' />
                <h4>MongoDB</h4>
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