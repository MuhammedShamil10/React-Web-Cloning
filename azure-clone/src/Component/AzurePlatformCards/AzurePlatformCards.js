import React, { useEffect, useState } from "react";
import "./AzurePlatformCards.css";

function AzurePlatformCards() {
  const [data, setData] = useState([]);
  const fetchingData = () => {
    fetch(
      "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.headBoxs);
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  // console.log(data);

  return (
    <div className="azureContentCard-container">
      <div className="azureContentCard">
        <section>
          <div className="firstCard-joinMS">
            <div className="firstCard-row">
              {data.map((card, index) => (
                <div className="cards-column">
                <div className="cards" key={index}>
                  <img src={card.img} />
                  <div className="join-MS">
                    <h1>{card.heading}</h1>
                    <p>{card.headText}</p>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="azr-priceProduct-container">
        <span>
        Explore Azure pricing by product 
        </span>
        <a href="/">
          View pricing
        </a>
      </div>
      <div className="azr-productService">
        <h2>
        Start putting your ideas into action with Azure products and services
        </h2>
      </div>
    </div>
  );
}

export default AzurePlatformCards;
