import React from 'react'
import './certificates.css'
import IMG1 from '../../assets/cert1.jpg'
import IMG2 from '../../assets/cert2.jpg'
import IMG3 from '../../assets/cert3.jpg'
import IMG4 from '../../assets/korean.jpg'
import IMG5 from '../../assets/cybersec.jpg'

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
var no_of_slides = 3
if (width1 < 1024) {
    no_of_slides = 2
    // space = 80
}
if (width1 < 800) {
    no_of_slides = 1
    // space = 80
}

const data = [
    {
        cover: IMG1,
    },
    {
        cover: IMG2,
    },
    {
        cover: IMG3
    },
    {
        cover: IMG4,
    },
    {
        cover: IMG5,
    },
]
const Certificates = () => {
    return (
        <section id="certificates">
            <h5>See My Qualifications</h5>
            <h2>Certifications</h2>
            <Swiper className="container certificates__container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map(({ cover, name, description, githubLink }, index) => {
                        return (
                            <SwiperSlide key={index} className='certificates__item'>
                                <div className="certificates__item-image">
                                    <img src={cover} alt="project loading..." />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Certificates