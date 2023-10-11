import React from 'react'
import insta from "./insta.png"
import wtsApp from "./wtsApp.png"
import s from "./Footer.module.css"

function Footer() {
  return (
    <div>
      <div className={s.contactUs}>
        <div className={s.contactInfo}>
            <p>Contact</p>
            <p className={s.number}>+49 999 999 99 99</p>
            <div className={s.social_media}>
                <a href='https://instagram.com/bulatovvna?igshid=MzMyNGUyNmU2YQ=='>
                    <img src={insta} alt='instagram'/>
                    <p>instagram</p>
                </a>
                <a href='/'>
                    <img src={wtsApp} alt='whatsApp'/>
                    <p>WhatsApp</p>
                </a>
            </div>
        </div>
        <div className={s.adressInfo}>
            <p>Adress</p>
            <a href='https://www.google.com/search?q=telranDE'>
                Linkstraße 2, 8 OG, 10785,<br/> Berlin, Deutschland
            </a>
            <p className={s.working_hours}>Working Hours: <br/><span>24 hours a day</span> </p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409223185674!2d13.372464411705598!3d52.50793287194147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sfr!4v1696269519905!5m2!1sru!2sfr" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Tel-Ran.de'></iframe>
    </div>
  )
}

export default Footer
