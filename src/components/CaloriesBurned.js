import React from "react";
import CaloriesChart from "../assets/CaloriesChart.png";
export default function CaloriesBurned() {
  return (
    <div>
      <div className="calories-container">
        <div className="calories-image">
          <img src={CaloriesChart} alt="calories chart" />
        </div>
        <div className="calories-text">
          <h3>Calories </h3>
          <h3>burned</h3>
          <h4 className="number">220</h4>
          <h4 className="weight">kcal</h4>
        </div>
      </div>
    </div>
  );
}
