import React from 'react'
import footer1 from '../assets/footer1.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Logo from './Logo'
export default function Footer() {
  return (
    <div>
      <div className="footer-container">
 <img src={footer1} alt="" />
 <img src={instagram} alt="" />
 <img src={linkedin} alt="" />
      </div>
      <div className="footer-logo">
 <Logo/>
      </div>
    </div>
  )
}
