import React from 'react'
import './certificates.css'
import IMG1 from '../../assets/Analyze Data.jpg'
import IMG2 from '../../assets/Assets Threats.jpg'
import IMG3 from '../../assets/Automate cybersecurity.jpg'
import IMG4 from '../../assets/Connect and Protect.jpg'
import IMG5 from '../../assets/Data Analysis with R Programming.jpg'

import IMG6 from '../../assets/korean.jpg'
import IMG7 from '../../assets/Foundations- Data.jpg'
import IMG8 from '../../assets/Foundations of Cybersecurity.jpg'
import IMG9 from '../../assets/cybersec.jpg'
import IMG10 from '../../assets/Google Data Analytics Capstone.jpg'

import IMG11 from '../../assets/Google Data Analytics.jpg'
import IMG12 from '../../assets/Play it Safe- Manage Security Risks.jpg'
import IMG13 from '../../assets/Prepare Data for Exploration.jpg'
import IMG14 from '../../assets/Process Data from Dirty to Clean.jpg'
import IMG15 from '../../assets/Put it to Work- Prepare for Cybersecurity Jobs.jpg'

import IMG16 from '../../assets/Python Flask.jpg'
import IMG17 from '../../assets/Share Data through the Art of Visualization.jpg'
import IMG18 from '../../assets/Sound the Alarm- Detection and Response.jpg'
import IMG19 from '../../assets/Terraform for Absolute Beginners.jpg'
import IMG20 from '../../assets/Tools of the Trade- SQL and Linux.jpg'

import { useState } from 'react'
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
        cover: IMG11,
        name: "Google Data Analytics",
        verify_link: "https://coursera.org/share/0e30eec788e78b9ea2a1403bf4e30513",
        desc1: "Dashboards and presentations",
        desc2: "Organizing data, data life cycle",
        desc3: "Analytical skills using Tableau",
        desc4: "R",
    },
    {
        cover: IMG9,
        name: "Google Cybersecurity",
        verify_link: "https://coursera.org/share/b6f9d8fdfc2278f3793e301cc2600564",
        desc1: "Linux & SQL for Cybersecurity",
        desc2: "Python Programming",
        desc3: "SIEM tools",
        desc4: "Intrusion Detection Systems",
    },
    {
        cover: IMG19,
        name: "Terraform for Absolute Beginners",
        verify_link: "https://coursera.org/share/2b666a9f87e6fff2d52149c24fad803e",
        desc1: "DevOps, IaC",
        desc2: "Terraform",
        desc3: "IT Automation",
        desc4: "Infrastructure As Code",
    },
    {
        cover: IMG16,
        name: "Create Your First Web App with Python & Flask",
        verify_link: "https://coursera.org/share/eeafccb395a7cae3f515f97ca2cbba75",
        desc1: "Web Applications with Flask",
        desc2: "Templates in Flask Applications",
        desc3: "SQLAlchemy",
        desc4: "App Development",
    },
    {
        cover: IMG6,
        name: "First Step Korean",
        verify_link: "https://coursera.org/share/f5049ce8a4550ec351c7657edb6eeb80",
        desc1: "Grammar",
        desc2: "Korean Language",
        desc3: "Speech",
        desc4: "Writing",
    },
    {
        cover: IMG1,
        name: "Analyze Data to Answer Questions",
        verify_link: "https://coursera.org/share/22851343a5ae4867d9c4bec47c490abe",
        desc1: "SQL (DML, DDL)",
        desc2: "Spreadsheets - Formulae",
        desc3: "Data Aggregation",
        desc4: "Data Analysis & Calculations",
    },
    
    {
        cover: IMG2,
        name: "Assets, Threats & Vulnerabilities",
        verify_link: "https://coursera.org/share/6005e2fc5454e2ffedd9ad6c9d934ec7",
        desc1: "Threat Analysis",
        desc2: "Asset Classification",
        desc3: "Vulnerability assessment",
        desc4: "Cryptography & Authentication",

    },
    {
        cover: IMG3,
        name: "Automate Cybersecurity Tasks with Python",
        verify_link: "https://coursera.org/share/b22c54a56e0152ff6d1cfeec73c040b5",
        desc1: "Automation - Python",
        desc2: "PEP 8 style guide",
        desc3: "Python Programming",
        desc4: "Computer Programming",
    },
    {
        cover: IMG4,
        name: "Connect & Protect Networks & Network Security ",
        verify_link: "https://coursera.org/share/fccf63b9f77b6ef92ee50303f02658ba",
        desc1: "Cloud Networks and Types",
        desc2: "Security Hardening",
        desc3: "Network Security & Architecture",
        desc4: "TCP/IP",
    },
    {
        cover: IMG5,
        name: "Data Analysis with R Programming",
        verify_link: "https://coursera.org/share/d4011be4e52dc6e8d0d0ce1732479a52",
        desc1: "R Programming",
        desc2: "Data Analysis",
        desc3: "Rstudio, R Markdown",
        desc4: "Data Visualization (DataViz)",
    },
    {
        cover: IMG7,
        name: "Foundations- Data, Data, Everywhere",
        verify_link: "https://coursera.org/share/359da016f99956e770f8a415b90e7968",
        desc1: "Data Analytics Concepts",
        desc2: "Data Visualization Tools",
        desc3: "Analytical Thinking",
        desc4: "Role of a data analyst",
    },
    {
        cover: IMG8,
        name: "Foundations of Cybersecurity",
        verify_link: "https://coursera.org/share/88a5ae9fa5ea8d5d1f32e74c3278a930",
        desc1: "Information Security",
        desc2: "NIST Cybersecurity Framework",
        desc3: "Ethics in Cybersecurity",
        desc4: "Scope",
    },
    {
        cover: IMG10,
        name: "Google Data Analytics Capstone",
        verify_link: "https://coursera.org/share/df81cc06e1b65b7e21c507166aaeef27",
        desc1: "Job Portfolio",
        desc2: "Case Study",
        desc3: "Data Analysis & Data Cleansing",
        desc4: "Data Visualization (DataViz)",
    },
    {
        cover: IMG12,
        name: "Play it Safe- Manage Security Risks",
        verify_link: "https://coursera.org/share/a41b0456b2b30857106dd1407a1ea0c5",
        desc1: "Information Security",
        desc2: "Security Audits, Incident Response Playbooks",
        desc3: "NIST RMF",
        desc4: "NIST CSF",
    },
    // {
    //     cover: IMG13,
    //     name: "Prepare Data for Exploration",
    //     verify_link: "https://coursera.org/share/82ebaf1fad308d7a8fa2ca648eb3fc2b",
    //     desc1: "Spreadsheet",
    //     desc2: "Metadata",
    //     desc3: "Data Collection, Data Ethics",
    //     desc4: "SQL",
    // },
    {
        cover: IMG14,
        name: "Process Data from Dirty to Clean",
        verify_link: "https://coursera.org/share/300a8119a9f692257cac9a692a6d2a30",
        desc1: "Spreadsheet for Imputing Data",
        desc2: "Data Cleansing, Data Integrity",
        desc3: "SQL",
        desc4: "Sample Size Determination",
    },
    {
        cover: IMG15,
        name: "Put it to Work- Prepare for Cybersecurity Jobs",
        verify_link: "https://coursera.org/share/ae8343df4e47785e06982534b54ad40d",
        desc1: "Job preparedness",
        desc2: "Stakeholder Communication",
        desc3: "Integrity and Discretion ",
        desc4: "Resume preparation",
    },
    
    {
        cover: IMG17,
        name: "Share Data through the Art of Visualization",
        verify_link: "https://coursera.org/share/e9fdb3abeedd06b8afda3b4e55519be8",
        desc1: "Data Analysis with R",
        desc2: "Tableau Software Viz.",
        desc3: "Data Visualization (DataViz)",
        desc4: "Effective Presentation",
    },
    {
        cover: IMG18,
        name: "Sound the Alarm- Detection and Response",
        verify_link: "https://coursera.org/share/4464988eccf42ced291347c3db229cba",
        desc1: "Packet Analyzer",
        desc2: "Intrusion Detection Systems",
        desc3: "SIEM tools",
        desc4: "Disaster Recovery and Mitigation",
    },

    {
        cover: IMG20,
        name: "Tools of the Trade- Linux & SQL",
        verify_link: "https://coursera.org/share/091bc5956a1b08c1cfd92783473de416",
        desc1: "Linux commands via the Bash shell",
        desc2: "Use SQL to retrieve data",
        desc3: "Operating Systems and hardware",
        desc4: "CLI",
    },
 
]
const Certificates = () => {
    // const [isShown, setIsShown] = useState(false);
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
                // autoplay={{
                //     "delay": 1000,
                //     "disableOnInteraction": false,
                //   }}
                >
            
                {
                    data.map(({ cover, name, verify_link, desc1, desc2, desc3, desc4 }, index) => {
                        return (
                            <SwiperSlide key={index} className='certificates__item'>
                                <div className="certificates__item-image">
                                    <img src={cover} alt="project loading..."/>
                                </div>
                                <div className='certificates__description'>
                                    {name}  -- <a href={verify_link}>Click Here</a> to verify<br />
                                    <p>
                                    <div className="description__container">
                                        <div className='description__details'>
                                            {desc1}
                                        </div>
                                        <div className='description__details'>
                                            {desc2}
                                        </div>
                                        <div className='description__details'>
                                            {desc3}
                                        </div>
                                        <div className='description__details'>
                                            {desc4}
                                        </div>
                                        {/* <div className='description__details'>
                                            {desc1}
                                            {desc2}
                                            {desc3}
                                            {desc4}
                                        </div>  */}
                                    </div>
                                    
                                    </p>
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