import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section id="contact" className="section-contact">
      <h2>Contato</h2>
      <div className="contact-box">
        <div className="contact-list">
          <li className="contact-link">
              <ion-icon name="location-outline"></ion-icon>
              <span>Itabaiana, SE</span>
          </li>
          <li className="contact-link">
            <a href="mailto:kevin.zero@hotmail.com">
              <ion-icon name="mail-outline"></ion-icon>
              <span>kevin.zero@hotmail.com</span>
            </a>
          </li>
          <li className="contact-link">
            <a href="https://api.whatsapp.com/send?phone=5579999974974" target="_blank">
              <ion-icon name="logo-whatsapp"></ion-icon>
              <span>+55 (79) 99997-4974</span>
            </a>
          </li>
          <li className="contact-link">
            <a href="https://github.com/kevin-ol" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
              <span>Github</span>
            </a>
          </li>
          <li className="contact-link">
            <a href="https://www.linkedin.com/in/kevinmendoncaoliveira/" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
              <span>LinkedIn</span>
            </a>
          </li>
        </div>
        <ContactForm />
      </div>

    </section>
  )
}

export default Contact
