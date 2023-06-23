import { useEffect, useState } from "react";
import "./AzureInvent.css";


function AzureInvent({headertop}) {

  return (
    <>
      <main>
        <div className="azureGetStart-container">
          <div className="Azure-getStart">
            <div className="backgroundImg-azureInvent">
              <img className="mb-bgImage" src={headertop.img} alt="" width="100%" />
            </div>
            <div className="Azure-getStart-content">
              <div className="azr-getStart">
                <div className="azr-getStart-box">
                  <h1>{headertop.baseHeading}</h1>
                  <div className="azureExplore">
                    <h1>{headertop.purposeHeading}</h1>
                    <p>{headertop.purposeHeadingText}</p>
                  </div>
                  <div className="azureGetStart-button">
                    <a href="/" className="left-btn">
                      <span>Get started</span>
                    </a>
                    <a href="/" className="right-btn">
                      <span>Try Azute for free</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="cloudSolution-azr">
        <h2>
          On-premises, hybrid, multicloud, or at the edge—create secure,
          future-ready cloud solutions on Azure
        </h2>
      </div>
    </>
  );
}

export default AzureInvent;
