import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pneumonia.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const width1 = window.innerWidth
// var space = 80
var no_of_slides=3
if(width1 < 1024){
  no_of_slides = 2
  // space = 80
}
if(width1 < 800){
  no_of_slides = 1
  // space = 80
}

const data = [
  {
    cover: IMG1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com',
  },
  {
    cover: IMG1,
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com',
  },
  {
    cover: IMG1,
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com',
  },
  {
    cover: IMG1,
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com',
  },
  {
    cover: IMG1,
    name: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com',
  },
  {
    cover: IMG1,
    name: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: 'https://github.com',
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Stuff I've Worked On</h5>
      <h2>Projects</h2>

      <Swiper className="container portfolio__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={80}
      slidesPerView={no_of_slides}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({ cover, name, description, githubLink }, index) => {
            return (
              <SwiperSlide key={index} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={cover} alt="project loading..." />
                </div>
                <h3>{name}</h3>
                <h5>{description}</h5>
                <div className='portfolio__item-cta'>
                  <a href={githubLink} className='btn btn-primary'>Github</a>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Portfolio