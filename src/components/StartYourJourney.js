import React from "react";
import { StartJourney } from "../data/StartJourney";
import whitetick from '../assets/whitetick.png'
export default function StartYourJourney() {
  return (
    <div>
      <div className="container">
        <div className="start-your-journey" id="plan">
          <div className="start-your-journey-heading">
            <h3>
              <span className="stroke-text">Ready to Start</span>{" "}
            </h3>
          </div>
          <div className="start-your-journey-heading">
            <h3>
              <span>your journey</span>
            </h3>
          </div>
          <div className="start-your-journey-heading">
            <h3>
              <span>now withus</span>
            </h3>
          </div>
        </div>
        <div className="start-journey-cards">
          {StartJourney.map((plan) => (
            <div className="journey-details">
              <div className="plan-title">{plan.title}</div>
              <div className="plan-price">{plan.price}</div>
              <div className="plan-description">
                <div className="description">
                <img src={whitetick} alt="tick" />
                {plan.descriptionpoint1}
                </div>
                <div className="description">
                <img src={whitetick} alt="tick" />
                {plan.descriptionpoint2}
                </div>
                <div className="description">
                <img src={whitetick} alt="tick" />
                {plan.descriptionpoint3}
                </div>
              </div>
              <div className="see-more-benefits">
                <p>See more benefits &rarr;</p>
              </div>
              <div className="join-now">
                Join Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
