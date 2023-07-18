import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pneumonia.jpg'
import IMG2 from '../../assets/ids.jpg'
import IMG3 from '../../assets/violence.jpeg'
import IMG4 from '../../assets/payments.jpeg'
import IMG5 from '../../assets/disease-prediction.jpg'
import IMG6 from '../../assets/crypto.jpg'
import IMG7 from '../../assets/demographic.jpeg'
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
    name: "Pneumonia Detection",
    description: "Applies convolutional neural networks to accurately detect pneumonia from x-ray images of the lungs.",
    githubLink: 'https://github.com/satwikasridhar/Pneumonia-Detection',
  },
  {
    cover: IMG2,
    name: "Explainable AI for Intrusion Detection",
    description: "Developing an explainable AI model for intrusion detection to identify potential cyber threats.",
    githubLink: 'https://github.com/satwikasridhar/Intrusion-Detection-Explainable-AI',
  },
  {
    cover: IMG3,
    name: "Violence Detection",
    description: "Identifies exact instances of violence in video footage.",
    githubLink: 'https://github.com/satwikasridhar/Violence-Detection',
  },
  {
    cover: IMG4,
    name: "Paysim Transaction Analysis",
    description: "Performing network analysis on a dataset of online payment transactions.",
    githubLink: 'https://github.com/satwikasridhar/Paysim-Transaction-Analysis',
  },
  {
    cover: IMG5,
    name: "Disease Prediction",
    description: "A prediction model in R to aid diagnosis based on symptoms.",
    githubLink: 'https://github.com/satwikasridhar/Disease-Prediction',
  },
  {
    cover: IMG6,
    name: "Crypto Tracker",
    description: "A dashboard for various cryptocurrencies and their trends in the market.",
    githubLink: 'https://github.com/satwikasridhar/Crypto-Tracker',
  },
  {
    cover: IMG7,
    name: "Demographic Analysis",
    description: "An analysis of the world's population country-wise and it's relation to GDP",
    githubLink: 'https://github.com/satwikasridhar/Demographic-Analysis',
  },
  
]
const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio'>
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
                  <a href={githubLink} target="_blank" className='btn btn-primary'>Github</a>
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