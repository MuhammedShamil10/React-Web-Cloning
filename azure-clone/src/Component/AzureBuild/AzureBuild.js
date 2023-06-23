import React from "react";
import "./AzureBuild.css";

function AzureBuild({ value }) {
  return (
    <div className="azure-build-container">
      <div className="azure-build-section">
        <section>
          {value.map((item) => (
            <div className="box-column">
              <div className="build-image">
                <img src={item.img} alt="" width='48px' height='48px'/>
              </div>
              <div className="build-content">
                <h2>{item.heading}</h2>
                <div className="content-example">
                    <p>
                        {item.explanation}
                    </p>
                </div>
              </div>
              <div className="space"></div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default AzureBuild;
