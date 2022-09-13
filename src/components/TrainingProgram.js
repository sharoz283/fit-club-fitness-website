import React from "react";
import {ProgramData} from "../data/ProgramData.js";

export default function TrainingProgram() {
  // console.log('====> ',ProgramData)
  return (
    <div>
      <div className="container">
        <div className="program-container">
          {ProgramData.map((program) => (
            
            <div className="program-details">
              <div className="program-image">
                <img src={program.image} alt="img" />
              </div>
                  <div className="program-title">
                  {program.title}
                  </div>
                  <div className="program-description">
              {program.description}
                  </div>
                  <div className="join-now">
                    Join Now <span>&#10132;</span>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
