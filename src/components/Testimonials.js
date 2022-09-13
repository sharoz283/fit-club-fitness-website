import React from "react";
import { TestimonialData } from "../data/TestimonialData";
import leftarrow from '../assets/leftarrow.png'
import rightarrow from '../assets/rightarrow.png'
import { useState } from "react";

export default function Testimonials() {
  const [selected , setSelected]= useState(0)
  const testimonialLength=TestimonialData.length;
  return (
    <div>
      <div className="testimonials" id="testimonials">
        <div className="left-side-testimonials">
          <div className="testimonial-first-heading">
            <h3>Testimonials</h3>
          </div>
          <div className="testimonial-second-heading">
            <h3 className="stroke-text">What they</h3>
          </div>
          <div className="testimonial-third-heading">
            <h3>Say about us</h3>
          </div>
          <div className="testimonials-detail-data">
            <div className="testimonial-review">
            {TestimonialData[selected].review}
            </div>
            <div className="testimonial-name-status">
            <span className="name"> {TestimonialData[selected].name} - </span>
            <span className="status">{TestimonialData[selected].status}</span>
            </div>
          </div>
        </div>
        <div className="right-side-testimonials">
          <img src={TestimonialData[selected].image} alt="" />
          <div className="testimonial-arrows">
            <img onClick={()=>
            {
              selected===0 ? setSelected(testimonialLength - 1) : setSelected((prev)=> prev - 1) 
            }} src={leftarrow} alt="" />
            <img onClick={()=>
            {
             selected===testimonialLength-1 ? setSelected(0) : setSelected((prev)=> prev + 1) 
            }} src={rightarrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
