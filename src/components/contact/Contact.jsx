import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_rjx68qm","template_pcll0uc",form.current,'dJNbEiKqTnkG_5akW');
  
    e.target.reset()
  };

  return (
    <section id="contact" className='contact'>
      <h5>Say Hi!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ssatwika02@gmail.com</h5>
            <a href="mailto:ssatwika02@gmail.com" target="_blank">E-Mail Me</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 ***** *****</h5>
            <a href="https://api.whatsapp.com/send?phone=+919886274200" target='_blank'>Message Me</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Satwika-Sridhar</h5>
            <a href="https://www.linkedin.com/in/satwika-sridhar-2076001b9/" target='blank'>Connect With Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact