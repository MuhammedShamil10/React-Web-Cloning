import React from "react";
import './DiscoverAzure.css'

function DiscoverAzure({ value }) {
  return (
    <div className="discover-azure-container">
      <div className="discover-azure">
        <h2>Discover what’s happening on Azure</h2>
        <div className="discover-cards">
          <div className="card-column">
            <section>
              {value.map((item, index) => (
                <div className="discover-column">
                <div className="discover-card" >
                <img src={item.img} alt="" key={index}/>
                <div className="card-content">
                  <h3>{item.heading}</h3>
                  <div className="content-text">
                    <p>{item.text}</p>
                  </div>
                  <div className="content-link">
                    <a>
                      <span>{item.moreTextLink}</span>
                    </a>
                  </div>
                </div>
                <div className="space"></div>
              </div>
              </div>
              ))}
                  
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverAzure;
