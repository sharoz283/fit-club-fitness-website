import React from 'react'
import image from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import tick from '../assets/tick.png'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
export default function WhyChooseUs() {
  return (
    <div>
        <div className="why-choose-us-container" id="reason">

      <div className="left-side-image">
<div className="first-column">
    <img src={image} alt="" />
</div>
<div className="second-column">
    <img src={image2} alt="" />
    <div className="right-sub-column">
        <img src={image3} alt="" />
        <img src={image4} alt="" />
    </div>
</div>
      </div>
      <div className="right-side-content">
<h3 className='some-reason'>some reason</h3>
<h1 className='why-choose-us'><span className='stroke-text'>why</span> choose us </h1>
<div className='reasons-to-use'>
    <img src={tick} alt="" />
    <h4>Over 140+ Expert Coaches</h4>
</div>
<div className='reasons-to-use'>
    <img src={tick} alt="" />
    <h4>TRAIN SMARTER AND FASTER THAN BEFORE</h4>
</div>
<div className='reasons-to-use'> 
    <img src={tick} alt="" />
    <h4>1 FREE PROGRAM FOR NEW MEMBER</h4>
</div>
<div className='reasons-to-use'>
    <img src={tick} alt="" />
    <h4>RELIABLE PARTNERS</h4>
</div>
<div className="our-partner">
<h3>Our Partner</h3>
<div className="partner-images">
    <img src={partner1} alt="" />
    <img src={partner2} alt="" />
    <img src={partner3} alt="" />
</div>
</div>
      </div>
      </div>

    </div>
  )
}
