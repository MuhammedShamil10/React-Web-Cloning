import React from "react";
import "./AzureMigration.css";

function AzureMigration({value, textValue}) {
  return (
    <div className="migration-container">
      <div className="migration-section">
        <div className="migration-row">
          <div className="first-column">
            <img src={value.img} alt="" />
          </div>
          <div className="joint-column">
          <div className="second-column">
            <div className="column-content">
                <h2>{textValue.heading}</h2>
            </div>
          </div>
          <div className="explore-button">
            <a>
                <span>
                    Explore help and tools
                </span>
            </a>
          </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default AzureMigration;
