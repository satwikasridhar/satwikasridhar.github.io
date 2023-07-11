import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Stuff I've Worked On</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="project loading..." />
            </div>
            <h3>Project 1</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="project loading..." />
            </div>
            <h3>Project 1</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="project loading..." />
            </div>
            <h3>Project 1</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="" alt="project loading..." />
            </div>
            <h3>Project 1</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live</a>
            </div>
          </article>
          
          
      </div>
    </section>
  )
}

export default Portfolio