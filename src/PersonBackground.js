import React from "react";
import personBackground from "../src/assets/personBackground.png";
export default function PersonBackground() {
  return (
    <div>
      <div className="person-background">
        <img src={personBackground} alt="" />
      </div>
    </div>
  );
}
